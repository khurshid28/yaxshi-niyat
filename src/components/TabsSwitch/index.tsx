'use client'
import style from './style.module.scss'

type Props = {
  tabs: { name: string; key: string }[]
  onChange: (tab: string) => void
  activeTab: string
}

export const TabsSwitch = ({ tabs, onChange, activeTab }: Props) => {
  return (
    <div className={`overflow-x-scroll  ${style.tab_switch_block}`}>
      <div className="flex md:justify-center md:mx-auto justify-start  ml-[16px]">
        <div className="p-[4px] bg-[#617A8B0F] rounded-[100px] inline-flex">
          {tabs.map((item) => {
            return (
              <div
                className={`py-[8px] px-[20px] rounded-[100px] cursor-pointer ${activeTab === item.key ? 'bg-[#fff]' : ''}`}
                key={item.key}
                onClick={() => onChange(item.key)}
              >
                <p
                  className={`${activeTab === item.key ? 'text-[#1C4058]' : 'text-[#617A8B]'} text-[20px] font-medium`}
                >
                  {item.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
