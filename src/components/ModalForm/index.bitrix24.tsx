'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import Portal from '../Poeral'

interface ModalFormProps {
  isOpen: boolean
  onClose: () => void
  additionalData?: any
}

export function ModalForm({ isOpen, onClose }: ModalFormProps) {
  const t = useTranslations('modalForm')
  const locale = useLocale()

  // Загрузка Bitrix24 формы при открытии модалки
  useEffect(() => {
    if (!isOpen) return

    const container = document.getElementById('b24-form-container')
    if (!container) return

    container.innerHTML = ''

    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-skip-moving', 'true')

    if (locale === 'ru') {
      script.setAttribute('data-b24-form', 'inline/78/777l7q')
      script.src =
        'https://cdn-ru.bitrix24.kz/b34814560/crm/form/loader_78.js?' +
        (Date.now() / 180000 | 0)
    } else {
      script.setAttribute('data-b24-form', 'inline/14/7uys6q')
      script.src =
        'https://cdn-ru.bitrix24.kz/b34814560/crm/form/loader_14.js?' +
        (Date.now() / 180000 | 0)
    }

    container.appendChild(script)
  }, [isOpen, locale])

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
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-center w-full">
                  {t('title')}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-black text-xl"
                >
                  &times;
                </button>
              </div>

              <p className="mb-4 text-gray-600 text-sm text-center">
                {t('description')}
              </p>

              {/* Контейнер для Bitrix24 */}
              <div id="b24-form-container"></div>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  )
}
