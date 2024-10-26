import HeroDescription from '@/components/hero/HeroDescription'
import HeroImage from '@/components/hero/HeroImage'
import React from 'react'

export default function Hero() {
  return (
    <div className="z-30 flex gap-16 items-center justify-center h-full 
        mobile:flex-col mobile:gap-5 laptop:flex-row"> 
        <HeroImage/>
        <HeroDescription/>
    </div>
  )
}
