import React from 'react'
import { TypographyH1, TypographyH2, TypographyP } from '../ui/typography'
import { MapPin } from 'lucide-react'
import NavbarLinks from '../navbar/Navbar'
import Socials from '../socials/socials'
import { Label } from '../ui/label'
import { motion } from 'framer-motion'
import { fadeIn } from '../animations/fadeIn'


export default function HeroDescription() {
  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className='flex flex-col gap-3 z-20'>
        <Socials/>
        <div className='flex flex-col gap-2 mobile:items-center'>
            <TypographyH1>Eduardo Bautista</TypographyH1>
            <TypographyH2>Fullstack Developer</TypographyH2>
            <div className='flex items-center gap-1'>
                <MapPin/>
                <Label>Tagum City, Philippines</Label>
            </div>
            
        </div>
        <div className='flex flex-col gap-3 mobile:items-center'>
            <TypographyP>Develop a working website.</TypographyP>
            {/* <Button>Learn more</Button> */}
        </div>
        
        <NavbarLinks/>
    </motion.div>
  )
}
