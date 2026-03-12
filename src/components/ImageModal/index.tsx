'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string
  onClose: () => void
}

export default function ImageModal({ isOpen, imageUrl, onClose }: ImageModalProps) {
  // Закрытие модалки по клавише Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 select-none"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full mx-4 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике на контент
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <Image
          priority
          src={imageUrl}
          alt="Modal content"
          className="w-full h-auto object-contain max-h-[80vh]"
        />
      </div>
    </div>
  )
}
