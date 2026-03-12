import React from 'react'
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>
          К сожалению, страницы не существует
        </h2>
        <p className={styles.text}>
          Возможно, она была удалена или вы перешли по неверной ссылке.
          Попробуйте один из разделов ниже:
        </p>

        <div className={styles.links}>
          <Link href={`/`} className={styles.link}>Главная</Link>
          <Link href={`/ru/about`} className={styles.link}>О нас</Link>
          <Link href={`/ru/#products`} className={styles.link}>Микрозаймы</Link>
          <Link href={`/ru/blog`} className={styles.link}>Блог</Link>
          <Link href={`/ru/contacts`} className={styles.link}>Контакты</Link>
          <Link href={`/ru/faq`} className={styles.link}>Вопросы и ответы</Link>
        </div>
      </div>
    </div>
  )
}
