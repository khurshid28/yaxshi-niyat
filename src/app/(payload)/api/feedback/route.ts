import { formatApplicationToTelegramMessage, sendToTelegram } from '@/utilities/sendToTelegram'
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const uploadsDir = path.join(process.cwd())

export const POST = async (req: NextRequest) => {
  const data = await req.json()

  const responses = await Promise.all([
    fetch('https://leadscc.uz/flaskapp/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }),
    sendToTelegram(formatApplicationToTelegramMessage(data)),
  ])
  if (!responses.every((r) => r.ok)) {
    return NextResponse.json({ error: 'Ошибка при отправке заявки' }, { status: 401 })
  }
  return NextResponse.json(null)
}

export const GET = async (req: NextRequest) => {
  try {
    const files = await fs.readdir(uploadsDir)
    return new Response(JSON.stringify({ files }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
