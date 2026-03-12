'use client'
import { ConfigProvider, Slider } from 'antd'
import type { SliderSingleProps } from 'antd'
import EditIcon from '@/components/Icons/EditIcon'
import './Slider.scss'
import {useState} from "react";

type Props = {
  label: string
  marks: SliderSingleProps['marks']
  value: any
  onChange: (val: any) => void
  max: number
  min: number
  step: number
  defaultValue: number
}

export const SliderCustom = ({
  label,
  marks,
  value,
  max,
  min,
  step,
  onChange,
  defaultValue,
}: Props) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <p className="font-sofiaSans italic font-normal text-secondary-200 mb-[4px]">{label}</p>
      <div className="flex gap-[12px] italic items-center mb-[16px]">
        {isEdit?
          <input type="number"
                 value={value.replace(/\D/g, '')}
                 onChange={(e) => {
                   if(Number(e.target.value)<=max) {
                     onChange(e.target.value)
                   }

                 }} />:
          <p className="text-[#1C4058] font-sofiaSans font-semibold text-[24px]">{value}</p>}
        <button onClick={()=>{

          if(isEdit && Number(value.replace(/\D/g, ''))<min){
            onChange(min)
          }
          setIsEdit(!isEdit)
        }}><EditIcon /></button>
      </div>
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              handleSize: 16,
              handleActiveColor: '#FB8500',
              handleActiveOutlineColor: 'transparent',
              handleColor: '#FB8500',
              trackBg: '#FB8500',
              trackHoverBg: '#FB8500',
              dotActiveBorderColor: '#FB8500',
              railSize: 3,
            },
          },
        }}
      >
        <Slider
          tooltip={{ open: false }}
          marks={marks}
          value={value.replace(/\D/g, '')}
          step={step}
          defaultValue={defaultValue}
          onChange={onChange}
          max={max}
          min={min}
        />
      </ConfigProvider>
    </div>
  )
}
