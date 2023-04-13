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
        <h1>About Jeremy</h1>
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
        <h2 >How I built this website</h2>
        <p>This website is made with <a href="https://nextjs.org/" target="_blank">Next.js</a> and styled with <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. Articles are written in MDX (a combination of Markdown and JSX), and then everything is published on GitHub (<a href="https://github.com/jeremyrieunier/jeremyrieunier.com" target="_blank">here's the repo</a>) and deployed on <a href="https://vercel.com/" target="_blank">Vercel</a>.</p>
        <p>Overkill? Maybe. But I had a lot of fun building it.</p>
        <p>The design is inspired by the <a href="https://github.com/kirso/logseq-panic-theme" >Panic theme for Logseq</a>, created by <a href="https://www.kirillso.com/">Kirill So</a>.</p>
      </section>
    </Layout>
  )
}