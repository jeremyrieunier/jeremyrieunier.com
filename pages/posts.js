import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
        allPostsData
    }
  };
}

export default function Posts({ allPostsData }) {
  return (
    <Layout posts>
      <Head>
        <title>Posts written by {siteTitle}</title>
      </Head>
      <section>
        <h1>Posts</h1>
        <ul className="list-none px-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="px-0" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
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