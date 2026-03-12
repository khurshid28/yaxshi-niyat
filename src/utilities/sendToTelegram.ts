/**
 * Преобразует JSON-заявку в форматированное Telegram-сообщение
 * @param data - JSON-объект с данными заявки
 * @returns Форматированная строка для Telegram в формате Markdown
 */
export function formatApplicationToTelegramMessage(data: any): string {
  const { name, phone, product, amount, region } = data

  // Форматирование суммы с разделителями тысяч
  const formattedAmount = amount
    ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    : undefined

  // Формирование сообщения
  const messageLines = ['*Заявка с сайта*', '', `*Имя:* ${name}`, `*Телефон:* ${phone}`]

  // Добавление необязательных полей, если они есть
  if (product) {
    messageLines.push(`*Продукт:* ${product}`)
  }
  if (formattedAmount) {
    messageLines.push(`*Сумма:* ${formattedAmount} UZS`)
  }
  if (region) {
    messageLines.push(`*Регион:* ${region}`)
  }
  // if (utm) {
  //   messageLines.push(`*UTM:* ${Object.entries(utm)
  //     .map(([key, value]) => `${key}=${value}`)
  //     .join(' ')}`)
  // }

  // Объединение строк с переносами
  return messageLines.join('\n')
}

export async function sendToTelegram(message: string) {
  const chatId = '-1002659100595'
  const token = '7313011932:AAGb9xCH2-nIn7E1NYCbSgLj2pPBqoY2TMk'

  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  })

  return res
}
