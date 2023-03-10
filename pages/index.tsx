import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

//Atom imports
import BrandsAndStylesAtom from '../components/BrandsAndStylesAtom'
import ArrowAtom from '../components/ArrowAtom'
import LikesAtom from '../components/LikesAtom'
import NextButtonsAtom from '../components/NextButtonsAtom'
import SearchAtom from '../components/SearchAtom'

//Import Layout header and footer 
import Layout from '../components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
       <h1>hello world</h1>
       <BrandsAndStylesAtom/>
       <ArrowAtom/>
       <LikesAtom/>
       <NextButtonsAtom/>
       <SearchAtom/>
     </Layout>
  )
}
