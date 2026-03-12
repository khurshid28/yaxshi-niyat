import { FC } from 'react'
import { ResponsiveImage } from '../../components/Image'
import { useTranslations } from 'next-intl'

export const EmployeesBlock = () => {
  const t = useTranslations('blocks.employees')
  return (
    <div className="flex flex-col justify-center items-center self-stretch overflow-hidden gap-12 p-12 bg-[#f7f7f7]">
      <div className="flex flex-col justify-start items-center self-stretch gap-[15px] lg:container lg:px-12">
        <div className="flex flex-col justify-start items-center self-stretch relative gap-1">
          <p className="self-stretch md:text-[40px] text-[36px] font-bold text-center text-[#1c4058]">
            {t('title')}
          </p>
          <p className="self-stretch md:text-2xl text-[18px] text-center text-[#617a8b]">
            {t('description')}
          </p>
        </div>
      </div>
      <div className="flex-grow grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-12 md:gap-y-10 gap-y-[24px]">
        <EmployeeItem
          image={'/assets/employee/1.jpg'}
          name={t('name_1')}
          position={t('position_1')}
        />
        <EmployeeItem
          image={'/assets/employee/2.jpg'}
          name={t('name_2')}
          position={t('position_2')}
        />
        <EmployeeItem
          image={'/assets/employee/3.jpg'}
          name={t('name_3')}
          position={t('position_3')}
        />
        <EmployeeItem
          image={'/assets/employee/4.jpg'}
          name={t('name_4')}
          position={t('position_4')}
        />
        <EmployeeItem
          image={'/assets/employee/5.jpg'}
          name={t('name_5')}
          position={t('position_5')}
        />
        <EmployeeItem
          image={'/assets/employee/6.jpg'}
          name={t('name_6')}
          position={t('position_6')}
        />
      </div>
    </div>
  )
}

const EmployeeItem: FC<{ image: string; name: string; position: string }> = ({
  image,
  name,
  position,
}) => {
  return (
    <div className="flex flex-col justify-start items-center sm:w-[324px] relative overflow-hidden gap-6 rounded-[40px] text-center">
      <div className="relative overflow-hidden bg-orange/20 rounded-full w-[200px] h-[200px]">
        <ResponsiveImage width={200} height={200} src={image} className="rounded-full" />
      </div>
      <div className="flex flex-col justify-start items-start self-stretch gap-1 px-6">
        <div className="flex flex-col justify-start items-center self-stretch relative gap-1">
          <p className="text-[26px] font-bold text-center text-[#1c4058]">{name}</p>
          <p className="self-stretch md:w-[276px] md:text-xl text-[18px] text-center text-[#617a8b]">
            <span className="self-stretch md:w-[276px] md:text-xl text-[18px] text-center text-[#617a8b]">
              {position}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
