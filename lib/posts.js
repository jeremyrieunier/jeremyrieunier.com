import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {

    const id = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    };
  });
  return allPostsData.sort((a, b) =>{
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

 export async function getPostsData(id) {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const mdxSource = fs.readFileSync(fullPath, 'utf8');

    const {code, frontmatter} = await bundleMDX({
      source: mdxSource,
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism];

        return options;
      }
    });

    return{
      id,
      frontmatter,
      code,
    };
  }