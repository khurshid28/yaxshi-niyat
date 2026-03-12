'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Input } from '../Input'
import { Button } from '../Button'
import { useLocale, useTranslations } from 'next-intl'
import { withMask } from 'use-mask-input'
import { getUTMFromLocalStorage } from '@/utilities/saveUTMToLocalStorage'
import { Select } from '../Select'
import Portal from '../Poeral'

interface ModalFormProps {
  isOpen: boolean
  onClose: () => void
  additionalData?: any
}

const regions = {
  uz: {
    tashkent: 'Toshkent shahri',
    andijan: 'Andijon viloyati',
    bukhara: 'Buxoro viloyati',
    jizzakh: 'Jizzax viloyati',
    qashqadarya: 'Qashqadaryo viloyati',
    navoiy: 'Navoiy viloyati',
    namangan: 'Namangan viloyati',
    samarkand: 'Samarqand viloyati',
    surxondaryo: 'Surxondaryo viloyati',
    sirdaryo: 'Sirdaryo viloyati',
    tashkentRegion: 'Toshkent viloyati',
    fergana: 'Farg‘ona viloyati',
    khorezm: 'Xorazm viloyati',
    karakalpakstan: 'Qoraqalpog‘iston Respublikasi',
  },
  ru: {
    tashkent: 'Ташкент',
    andijan: 'Андижанская область',
    bukhara: 'Бухарская область',
    jizzakh: 'Джизакская область',
    qashqadarya: 'Кашкадарьинская область',
    navoiy: 'Навоийская область',
    namangan: 'Наманганская область',
    samarkand: 'Самаркандская область',
    surxondaryo: 'Сурхандарьинская область',
    sirdaryo: 'Сырдарьинская область',
    tashkentRegion: 'Ташкентская область',
    fergana: 'Ферганская область',
    khorezm: 'Хорезмская область',
    karakalpakstan: 'Республика Каракалпакстан',
  },
}

export function ModalForm({ isOpen, onClose, additionalData = {} }: ModalFormProps) {
  const t = useTranslations('modalForm')
  const locale = useLocale()
  const [form, setForm] = useState({ name: '', phone: '', region: 'tashkent' })
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!(form.name && form.phone)) return
    fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form,
        ...additionalData,
        region: regions[locale][form.region],
        ...getUTMFromLocalStorage(),
      }),
    })
    setSuccess(true)
  }

  useEffect(() => {
    if (!isOpen) {
      setForm({ name: '', phone: '', region: 'tashkent' })
      setSuccess(false)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <motion.div
            className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-[500]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl max-h-screen overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {!success ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-center w-full">{t('title')}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-black text-xl">
                      &times;
                    </button>
                  </div>
                  <p className="mb-4 text-gray-600 text-sm text-center">{t('description')}</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder={t('name')}
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      ref={withMask('(99) 999-99-99')}
                      value={form.phone}
                      onChange={handleChange}
                      name="phone"
                      type="tel"
                      placeholder={t('phone')}
                      required
                    />
                    <Select
                      variant="secondary"
                      value={form.region}
                      options={Object.keys(regions[locale]).map((key) => ({
                        value: key,
                        label: regions[locale][key],
                      }))}
                      onChange={(value) => setForm({ ...form, region: value as string })}
                    />
                    <Button
                      variant="primary"
                      className="max-w-[234px] mx-auto"
                      onClick={(e) => handleSubmit(e)}
                    >
                      {t('submit')}
                    </Button>
                  </form>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-center w-full">{t('success')}</h2>
                  <p className="mb-4 text-gray-600 text-sm text-center">
                    {t('successDescription')}
                  </p>
                  <Button variant="primary" className="max-w-[234px] mx-auto" onClick={onClose}>
                    {t('close')}
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  )
}
