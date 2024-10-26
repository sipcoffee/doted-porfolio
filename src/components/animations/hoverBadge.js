import { motion } from 'framer-motion'
import React from 'react'

const badgeAnimation = {
    initial: { 
      scale: 1
    },
    hover: { 
      scale: 1.08,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
}

export default function HoverBadge({children}) {
  return (
    <motion.div
        initial="initial"
        whileHover="hover"
        variants={badgeAnimation}
        style={{ display: 'inline-block' }}
      >
        {children}
      </motion.div>
  )
}
