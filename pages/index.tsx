import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

//Import Layout header and footer 
import Layout from '../components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
       <h1>hello world</h1>
     </Layout>
  )
}
