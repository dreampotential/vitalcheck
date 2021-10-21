import Head from 'next/head'
import Image from 'next/image'
import Partners from '../components/Partners'
import styles from '../styles/Home.module.css'
import favicon from '../Images/covid/favicon/apple-touch-icon.png'

export default function Home() {
  return (
    <div>
      <head>
        <title>Vital Check</title>
      </head>
      <Partners />
    </div>
  )
}
