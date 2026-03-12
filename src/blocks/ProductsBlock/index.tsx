'use client'

import { useTranslations } from 'next-intl'
import { ProductCard } from './ProductCard'

export const ProductsBlock = ({ locale, exclude }: any) => {
  const t = useTranslations()
  const dataProducts = [
    {
      title: t('pod_zalog_2'),
      description: t('blocks.products.descriptions.pod_zalog'),
      path: 'pod-zalog',
      img: '/assets/products/2.jpg',
      name: 'pod-zalog',
    },
    {
      title: t('bez_zaloga_2'),
      description: t('blocks.products.descriptions.bez_zaloga'),
      path: 'bez-zaloga',
      img: '/assets/products/1.jpg',
      name: 'bez-zaloga',
    },
    {
      title: t('avtokredit_2'),
      description: t('blocks.products.descriptions.avtokredit'),
      path: 'avtokredit',
      img: '/assets/products/3.jpg',
      name: 'avtokredit',
    },
  ]

  return (
    <div className="bg-[#f7f7f7]" id={'products'}>
      <div className="flex  flex-col justify-center  items-center self-stretch overflow-hidden md:py-[90px] py-[32px] md:gap-12 gap-[18px]">
        <div className="flex flex-col gap-[15px] container">
          <div className="flex flex-col relative gap-1">
            <p className="self-stretch md:text-[40px] text-[36px] font-sofiaSans font-bold text-[#1c4058]">
              {t('blocks.products.title')}
            </p>
            <p className="self-stretch md:text-2xl text-[18px] text-[#617a8b]">
              {t('blocks.products.description')}
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-3 items-stretch gap-4 justify-center container">
          {dataProducts
            .filter((p) => !exclude || p.name !== exclude)
            .map((p) => (
              <ProductCard
                title={p.title}
                path={`/${locale}/products/${p.name}`}
                description={p.description}
                image={p.img}
                key={p.name}
                locale={locale}
                name={p.name}
                className="mb-[16px]"
              />
            ))}
        </div>
      </div>
    </div>
  )
}
