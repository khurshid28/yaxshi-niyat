import type { GlobalConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidate: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating calc`)

    revalidateTag('global_calc_ru')
    revalidateTag('global_calc_uz')
  }

  return doc
}

export const Calc: GlobalConfig = {
  slug: 'calc',
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'annualInterestRate',
              type: 'number',
              label: 'Годовая процентная ставка',
              defaultValue: 80,
              required: true,
            },
            {
              name: 'minTermMonths',
              type: 'number',
              label: 'Минимальный срок в месяцах',
              defaultValue: 6,
              required: true,
            },
            {
              name: 'maxTermMonths',
              type: 'number',
              label: 'Максимальный срок в месяцах',
              defaultValue: 60,
              required: true,
            },
            {
              name: 'minLoanAmount',
              type: 'number',
              label: 'Минимальная сумма кредита',
              defaultValue: 1000000,
              required: true,
            },
            {
              name: 'maxLoanAmount',
              type: 'number',
              label: 'Максимальная сумма кредита',
              defaultValue: 100000000,
              required: true,
            },
            {
              name: 'termMonths',
              type: 'number',
              label: 'Срок в месяцах',
              defaultValue: 6,
              required: true,
            },
            {
              name: 'loanAmount',
              type: 'number',
              label: 'Сумма кредита',
              defaultValue: 10000000,
              required: true,
            },
          ],
          name: 'bez_zaloga',
          label: 'Без залога',
        },
        {
          fields: [
            {
              name: 'annualInterestRate',
              type: 'number',
              label: 'Годовая процентная ставка (не золото)',
              defaultValue: 55,
              required: true,
            },
            {
              name: 'annualInterestRateGold',
              type: 'number',
              label: 'Годовая процентная ставка (золото)',
              defaultValue: 80,
              required: true,
            },
            {
              name: 'minTermMonths',
              type: 'number',
              label: 'Минимальный срок в месяцах',
              defaultValue: 6,
              required: true,
            },
            {
              name: 'maxTermMonths',
              type: 'number',
              label: 'Максимальный срок в месяцах',
              defaultValue: 60,
              required: true,
            },
            {
              name: 'maxTermMonthsGold',
              type: 'number',
              label: 'Максимальный срок в месяцах (золото)',
              defaultValue: 12,
              required: true,
            },
            {
              name: 'minLoanAmount',
              type: 'number',
              label: 'Минимальная сумма кредита',
              defaultValue: 1000000,
              required: true,
            },
            {
              name: 'maxLoanAmount',
              type: 'number',
              label: 'Максимальная сумма кредита',
              defaultValue: 100000000,
              required: true,
            },
            {
              name: 'termMonths',
              type: 'number',
              label: 'Срок в месяцах',
              defaultValue: 6,
              required: true,
            },
            {
              name: 'loanAmount',
              type: 'number',
              label: 'Сумма кредита',
              defaultValue: 10000000,
              required: true,
            },
          ],
          name: 'pod_zalog',
          label: 'Под залог',
        },
        {
          fields: [
            {
              name: 'annualInterestRate',
              type: 'number',
              label: 'Годовая процентная ставка',
              defaultValue: 54,
              required: true,
            },
            {
              name: 'minTermMonths',
              type: 'number',
              label: 'Минимальный срок в месяцах',
              defaultValue: 6,
              required: true,
            },
            {
              name: 'maxTermMonths',
              type: 'number',
              label: 'Максимальный срок в месяцах',
              defaultValue: 35,
              required: true,
            },
            {
              name: 'minLoanAmount',
              type: 'number',
              label: 'Минимальная сумма кредита',
              defaultValue: 1000000,
              required: true,
            },
            {
              name: 'maxLoanAmount',
              type: 'number',
              label: 'Максимальная сумма кредита',
              defaultValue: 100000000,
              required: true,
            },
            {
              name: 'downPaymentPercent',
              type: 'number',
              label: 'Процент первоначального взноса %',
              defaultValue: 20,
              required: true,
            },
            {
              name: 'termMonths',
              type: 'number',
              label: 'Срок в месяцах',
              defaultValue: 6,
              required: true,
            },
            {
              name: 'loanAmount',
              type: 'number',
              label: 'Сумма кредита',
              defaultValue: 10000000,
              required: true,
            },
          ],
          name: 'avtokredit',
          label: 'Автокредит',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidate],
  },
}
