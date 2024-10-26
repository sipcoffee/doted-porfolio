import React from 'react'
import ProfileImage from "../../assets/profile.jpg"
import { motion } from 'framer-motion'
import { fadeIn } from '../animations/fadeIn'


export default function HeroImage() {
  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className='size-[300px] z-20 mobile:size-[200px]'>
      <img 
        src={ProfileImage} 
        alt="profile" 
        loading='lazy' 
        className='w-full h-full rounded-full object-cover'
        />
    </motion.div>
  )
}
