import { Calc } from '@/payload-types'

export function calculateNoCollateralLoan(
  loanAmount: number,
  termMonths: number,
  annualInterestRate: number = 80,
) {
  const monthlyRate = annualInterestRate / 100 / 12

  // Расчет коэффициента аннуитета
  const annuityCoefficient =
    (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1)

  const monthlyPayment = Math.round(loanAmount * annuityCoefficient)
  const totalPayment = monthlyPayment * termMonths
  const overpayment = totalPayment - loanAmount

  return {
    monthlyPayment,
    totalPayment,
    overpayment,
  }
}

export function calculateCollateralLoan(
  loanAmount: number,
  termMonths: number,
  isCollateralGold: boolean = false,
  config: Calc['pod_zalog'],
) {
  // Определяем базовую процентную ставку
  let annualRate = config!.annualInterestRate!
  if (isCollateralGold) annualRate = config!.annualInterestRateGold!

  // Расчет маржинальной ставки (процент для клиента)
  let displayAnnualRate = 32 // по умолчанию
  if (termMonths > 18) displayAnnualRate = 29
  const displayMonthlyRate = displayAnnualRate / 100 / 12

  // Фактическая процентная ставка для расчетов
  const monthlyRate = annualRate / 100 / 12

  // Тип погашения
  const isDifferential = termMonths > 30

  // Аннуитетный расчет
  function calculateAnnuity() {
    const coefficient =
      (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
      (Math.pow(1 + monthlyRate, termMonths) - 1)
    const monthlyPayment = Math.round(loanAmount * coefficient)
    const totalPayment = monthlyPayment * termMonths
    return {
      type: 'annuity',
      monthlyPayment,
      totalPayment,
      overpayment: totalPayment - loanAmount,
    }
  }

  // Дифференциальный расчет
  function calculateDifferential() {
    const principalPart = loanAmount / termMonths
    let totalPayment = 0
    let firstMonthPayment = 0

    for (let i = 0; i < termMonths; i++) {
      const remaining = loanAmount - principalPart * i
      const interest = remaining * monthlyRate
      const monthlyPayment = Math.round(principalPart + interest)
      totalPayment += monthlyPayment
      if (i === 0) firstMonthPayment = monthlyPayment
    }

    return {
      type: 'differential',
      monthlyPayment: Math.round(firstMonthPayment),
      totalPayment: Math.round(totalPayment),
      overpayment: Math.round(totalPayment - loanAmount),
    }
  }

  const result = isDifferential ? calculateDifferential() : calculateAnnuity()

  return {
    loanAmount,
    termMonths,
    method: result.type,
    annualRate,
    displayAnnualRate,
    displayMonthlyRate: (displayMonthlyRate * 100).toFixed(2) + '%',
    ...result,
  }
}

export function calculateAutoLoan(
  carPrice: number,
  termMonths: number,
  config: Calc['avtokredit'],
) {
  // Предоплата и сумма кредита
  const downPayment = (carPrice * config!.downPaymentPercent!) / 100
  const loanAmount = carPrice - downPayment

  // Реальная процентная ставка для расчета платежей
  const monthlyRate = config!.annualInterestRate! / 100 / 12

  // Маржинальная ставка (для отображения клиенту)
  const clientAnnualRate = 33
  const clientMonthlyRate = clientAnnualRate / 100 / 12

  // Коэффициент аннуитета
  const coefficient =
    (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1)

  const monthlyPayment = Math.round(loanAmount * coefficient)
  const totalPayment = monthlyPayment * termMonths
  const overpayment = totalPayment - loanAmount

  return {
    carPrice,
    downPayment,
    loanAmount,
    termMonths,
    bankAnnualRate: `${config!.annualInterestRate!}%`,
    clientAnnualRate: `${clientAnnualRate}%`,
    clientMonthlyRate: `${(clientMonthlyRate * 100).toFixed(2)}%`,
    monthlyPayment,
    totalPayment,
    overpayment,
  }
}
