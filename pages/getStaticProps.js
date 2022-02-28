import { getAllFilesFrontMatter } from '/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  yaen

  return { props: { posts } }
}
