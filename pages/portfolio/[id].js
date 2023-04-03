import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPortfolioIds, getPortfolioData } from '../../lib/portfolio.js';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export async function getStaticProps({ params }) {
  const portfolioData = await getPortfolioData(params.id);
  return {
    props: {
      ...portfolioData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllPortfolioIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Portfolio({code, frontmatter}) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta
          name="description"
          content={frontmatter.description}
        />
      </Head>
      <article itemScope itemType="http://schema.org/Article">
        <h1>{frontmatter.title}</h1>
        <div>
          <Date dateString={frontmatter.date} />
        </div>
        <div>
          <Component />
        </div>
      </article>
    </Layout>
  );
}