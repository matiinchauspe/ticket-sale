'use client'

import { motion } from 'framer-motion'
// local imports
import { ListItem } from './item'
import { list } from './animations'

type ListProps = {
  items: any;
}

const List = ({ items }: ListProps) => (
  <motion.ul
    variants={list}
    initial='hidden'
    animate='visible'
    className='flex flex-1 justify-center gap-4 flex-wrap h-[calc(100vh-190px)] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary scrollbar-corner-transparent'
  >
    {items.map((item: any, index: number) => (
      <ListItem key={index.toString()} item={item} />
    ))}
  </motion.ul>
)

export default List