import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import 'dayjs/locale/uz'
import 'dayjs/locale/uz-latn'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)

export const formatDate = (date: Date | string, locale: any = 'ru'): string => {
  try {
    // Нормализуем локаль
    let targetLocale = 'ru'
    
    if (typeof locale === 'string') {
      targetLocale = locale === 'uz' ? 'uz-latn' : locale
    }
    
    // Проверяем, доступна ли локаль
    const availableLocales = ['ru', 'uz-latn', 'uz'] // добавьте другие при необходимости
    if (!availableLocales.includes(targetLocale)) {
      targetLocale = 'ru' // fallback на русский
    }
    
    // Форматируем дату
    return dayjs(date)
      .locale(targetLocale)
      .format('D MMMM YYYY')
      
  } catch (error) {
    console.error('formatDate error:', error)
    return dayjs(date).format('DD.MM.YYYY') // fallback формат
  }
}