import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import Date from '../components/date';
import { getSortedPortfolioData } from '../lib/portfolio';

export async function getStaticProps() {
  const allPortfolioData = getSortedPortfolioData();
  return {
    props: {
      allPortfolioData
    }
  };
}

export default function Portfolio({ allPortfolioData }) {
  return (
    <Layout portfolio>
      <Head>
        <title>Data Analyst portfolio of {siteTitle}</title>
      </Head>
      <section>
        <h1>Data Analyst Portfolio</h1>
        <ul>
          {allPortfolioData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/portfolio/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}