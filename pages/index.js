import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import Date from '../components/date';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='prose'>
        <h1>Hi 👋 I'm Jeremy</h1>
        <p>This is my personal website where I share my thoughts as a data analyst and document my learning journey.</p>
        <h2>Elsewhere</h2>
        <ul>
          <li>
            <a href='https://dealwithgrowth.com/shopify-cart-abandonment-email' target='_blank'>How to Recover 15% of Your Lost Shopify Sales with Cart Abandonment Emails - Dealwithgrowth</a>
            <br />
            <small>
              <Date dateString="2019-05-22" />
            </small>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://medium.com/tech-london/how-i-hack-the-job-research-ecc87f8b9127" target="_blank">How to hack the job hunt - Medium</a>
            <br />
            <small>
              <Date dateString="2015-02-15" />
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
