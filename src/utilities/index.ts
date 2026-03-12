export function formatNumberWithSpaces(num: number) {
  return new Intl.NumberFormat('ru-RU').format(num)
}

export function generateAverages(min: number, max: number) {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i)
}
