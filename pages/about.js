import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';


export default function AboutPage() {
  return(
    <Layout>
      <Head>
        <title>About {siteTitle}</title>
      </Head>
      <section>
        <h1>About Jeremy Rieunier</h1>
        <Image
              priority
              src="/img/jeremyrieunier.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt="Jeremy Rieunier"
        />
        <p>Hey, I'm Jeremy, a data analyst based in sunny Valencia, Spain.</p>
        <p>Previously, I ran my own business for 7 years: <a href="https://dealwithgrowth.com/" target="_blank">Dealwithgrowth</a>, a boutique email automation & analytics consultancy that helped direct-to-consumer (DTC) brands delight customers.</p>
        <p>Prior to starting Dealwithgrowth, I led customer acquisition, analytics, and email marketing at <a href="https://spoke-london.com/" target="_blank">SPOKE</a>, a DTC menswear brand based in rainy London.</p>
        <p>I'm also a lifelong st-st-stutterer with le best frrrench 🇫🇷 accent ever.</p>
        <p>You can contact me by email at my first name [dot] my last name [at] gmail [dot] com. My first name is Jeremy and my last name is Rieunier—don't try to pronounce it.</p>
      </section>
    </Layout>
  )
}