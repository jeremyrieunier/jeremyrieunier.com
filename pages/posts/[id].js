import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostsIds, getPostsData } from '../../lib/posts';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export async function getStaticProps({ params }) {
  const postsData = await getPostsData(params.id);
  return {
    props: {
      ...postsData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({code, frontmatter}) {
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