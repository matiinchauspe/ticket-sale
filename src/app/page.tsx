import Papa from 'papaparse';
import Link from 'next/link'
import Image from 'next/image'
import { IconTicket } from '@tabler/icons-react'

type Data = {
  name: string;
  image: string;
  link: string;
};

async function getData() {
  const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTeXRe0zBXGfYPsCHMm17-z6xIpMaPZj9wacKJHkR6FE261f0XAusqesKAY35PtHr_o5bl2lKV-Io5V/pub?gid=0&single=true&output=csv')
  const data = await response.text()
  const parsed = await new Promise<Data[]>((resolve, reject) => {
    Papa.parse<Data>(data, { header: true, complete: (res) => resolve(res.data), error: reject })
  });

  return parsed;
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h2 className='text-xl mb-2 py-2 text-tertiary font-light drop-shadow-md shadow-white border-b-2 border-secondary'>Eventos</h2>
      {/* Listado */}
      <ul className='flex flex-1 justify-center gap-4 flex-wrap h-[calc(100vh-190px)] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary scrollbar-corner-transparent'>
        {data.map((item) => (
          <li key={item.name} className='bg-gray-700 flex flex-col gap-2 rounded-lg p-4 w-[40%] shadow-md shadow-secondary'>
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
          </li>
        ))}
      </ul>
    </main>
  )
}
