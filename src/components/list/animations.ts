import { Variants } from 'framer-motion'

export const list: Variants = {
  hidden: {
    visibility: 'hidden',
  },
  visible: {
    visibility: 'visible',
    transition: {
      delay: 0.2,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

export const item:Variants = {
  hidden: {
    x: '-100vw',
    visibility: 'hidden',
  },
  visible: {
    x: 0,
    visibility: "visible",
    transition: {
      type: 'spring',
      duration: 0.7,
    },
  }
} 