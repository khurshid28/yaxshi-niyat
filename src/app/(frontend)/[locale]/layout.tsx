import { cn } from '@/utilities/ui'
import React from 'react'
import { AdminBar } from '@/components/AdminBar'
import { Canonical } from "@/components/Canonical"
import { Nunito_Sans } from 'next/font/google'
import 'tw-elements-react/dist/css/tw-elements-react.min.css'
import '../globals.scss'
import { Header } from '@/globals/Header/Component'
import { Footer } from '@/globals/Footer/Component'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { TypedLocale } from 'payload'

const nunitoSans = Nunito_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html className={cn(nunitoSans.variable)} lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
})(window,document,'https://cdn-ru.bitrix24.kz/b34814560/crm/site_button/loader_2_zc93gh.js');
            
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '689332814082298');
fbq('track', 'PageView');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5HRDXHS');
          `,
          }}
        />

        {/* {[
          ''
        ]?.map((alt, index) => (
          <link key={index} rel="alternate" href={alt.url} hrefLang={alt.lang} />
        ))} */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />

        <Canonical />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img
                height="1"
                width="1"
                style="display:none"
                src="https://www.facebook.com/tr?id=689332814082298&ev=PageView&noscript=1"
                alt=""
              />
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5HRDXHS"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          }}
        />

        <AdminBar />

        <NextIntlClientProvider>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>

        <div id="portal-root"></div>
      </body>
    </html>
  )
}

type Props = {
  params: Promise<{ locale: TypedLocale }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { locale } = await params

  const data: any = {
    ru: 'Yaxshi Niyat',
    uz: 'Yaxshi Niyat',
  }

  return {
    title: data[locale],
    icons: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
    ],
    // viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
  }
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'uz' }]
}
