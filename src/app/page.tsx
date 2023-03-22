import Papa from 'papaparse';

import {List} from '@/components';


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
      <List items={data} />
    </main>
  )
}
