import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Hi 👋 I'm Jeremy</h1>
        <p>This is my personal website where I share my thoughts as a data analyst and document my learning journey.</p>
      </section>
    </Layout>
  );
}
