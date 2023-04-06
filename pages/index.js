import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import { getSortedPortfolioData } from '../lib/portfolio';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allPortfolioData = getSortedPortfolioData();
  return {
    props: {
      allPostsData,
      allPortfolioData
    }
  };
}


export default function Home({ allPostsData, allPortfolioData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Hi 👋 I'm Jeremy</h1>
        <p>This is my personal website where I share my thoughts as a data analyst and document my learning journey.</p>
        <h2>Posts</h2>
        <ul className="list-none px-0">
          {allPostsData.map(({ id, date, title}) => (
            <li className="px-0" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <h2>Portfolio</h2>
        <ul className="list-none px-0">
          {allPortfolioData.map(({ id, date, title}) => (
            <li className="px-0" key={id}>
              <Link href={`/portfolio/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <h2>Elsewhere</h2>
        <ul className="list-none px-0">
          <li className="px-0">
            <a href='https://dealwithgrowth.com/shopify-cart-abandonment-email' target='_blank'>How to Recover 15% of Your Lost Shopify Sales with Cart Abandonment Emails - Dealwithgrowth</a>
            <br />
            <small>
              <Date dateString="2019-05-22" />
            </small>
          </li>
          <li className="px-0">
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
