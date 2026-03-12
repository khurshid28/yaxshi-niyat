import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Делаем тестовый запрос
    const result = await prisma.$queryRaw`SELECT NOW() as now`;
    
    res.status(200).json({
      success: true,
      result, // Здесь будет массив с датой
    });
  } catch (error) {
    console.error('Ошибка подключения к PostgreSQL:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
