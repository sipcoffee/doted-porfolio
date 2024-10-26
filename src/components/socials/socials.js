import { Github, Linkedin, MailIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

const iconAnimation = {
  initial: { rotate: 0 },
  hover: { 
    rotate: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
      repeat: 0
    }
  }
}

const textAnimation = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  }
}

const MotionButton = motion(Button)

export default function Socials() {
  return (
    <div className='flex gap-2 z-30 mobile:justify-center mobile:gap-3'>
        <MotionButton
          variant="outline"
          initial="initial"
          whileHover="hover"
        >
            <motion.div variants={iconAnimation}>
              <Github className='h-4 w-4'/>
            </motion.div>
            <motion.span 
              className='mobile:hidden'
              variants={textAnimation}
            >
              Github
            </motion.span>
        </MotionButton>

        <MotionButton 
          variant="outline"
          initial="initial"
          whileHover="hover"
        >
          <motion.div variants={iconAnimation}>
            <Linkedin className='h-4 w-4'/>
          </motion.div>
          <motion.span 
            className='mobile:hidden'
            variants={textAnimation}
          >
            LinkedIn
          </motion.span>
        </MotionButton>

        <MotionButton 
          variant="outline"
          initial="initial"
          whileHover="hover"
        >
          <motion.div variants={iconAnimation}>
            <MailIcon className='h-4 w-4'/>
          </motion.div>
          <motion.span 
            className='mobile:hidden'
            variants={textAnimation}
          >
            Email
          </motion.span>
        </MotionButton>
    </div>
  )
}
