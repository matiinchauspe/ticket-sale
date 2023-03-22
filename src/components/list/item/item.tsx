import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IconTicket } from '@tabler/icons-react'

import { item as itemVariants } from '../animations'

type ListItemProps = {
  item: any;
}

const ListItem = ({ item }: ListItemProps) => (
  <motion.li
    variants={itemVariants}
    className='bg-gray-700 flex flex-col gap-2 rounded-lg p-4 w-[40%] shadow-md shadow-secondary'
  >
    <span className='text-center font-light uppercase'>
      {item.name}
    </span>
    <Image src={item.image} height='0' width='300' style={{ aspectRatio: '16/9', objectFit: 'cover' }} alt={item.name} className='rounded-md shadow-sm' />
    <div className='flex justify-end'>
      <Link
        href={item.link}
        target='_blank' 
        className='flex items-center justify-end text-sm font-bold tracking-[2px] gap-1 p-3 bg-secondary text-tertiary rounded-md hover:scale-110 transition-all duration-300 ease-in-out'
      >
          <IconTicket size={20} className='text-tertiary' />
          <span>Comprar</span>
      </Link>
    </div>
  </motion.li>
)

export default ListItem