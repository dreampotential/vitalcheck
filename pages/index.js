import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import favicon from '../Images/covid/favicon/apple-touch-icon.png'
import Introduce from '../components/Introduce'
import Latest from '../components/Latest'
import Benefit from '../components/Benefits'
import Services from '../components/Services'
import Employ from '../components/Employ'
import Doctors from '../components/Doctors'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vital Check</title>
      </Head>
      <Introduce />
      <Latest />
      <Benefit />
      <Services />
      <Employ />
      <Doctors />
      <Testimonial />
    </div>
  )
}
