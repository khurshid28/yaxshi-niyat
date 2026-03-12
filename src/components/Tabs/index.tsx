import { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
  tabs: {
    id: number
    title: string
    content: React.ReactNode
  }[]
}

export const Tabs: FC<IProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]!.id)
  const handleTabClick = (id: number) => {
    setActiveTab(id)
  }
  return (
    <div className="flex flex-col justify-start items-center self-stretch gap-6">
      <div className="flex justify-start items-center p-1 rounded-[10000px] bg-[#617a8b]/[0.06]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={twMerge(
              'flex justify-center items-center relative gap-2.5 px-5 py-2 rounded-[100px]',
              activeTab === tab.id && 'text-xl font-medium text-[#1c4058]',
            )}
          >
            <p className="text-xl font-medium text-[#617a8b]">{tab.title}</p>
          </div>
        ))}
      </div>
      {tabs.find((tab) => tab.id === activeTab)?.content}
    </div>
  )
}
