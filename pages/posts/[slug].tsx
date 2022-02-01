import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import PostContent from '../../components/post/post-detail/post-content';
import { IPostItem } from '../../components/post/post-item';
import { getPostData, getPostFiles } from '../../lib/posts-utils';

interface IPostDetailProps {
}

const PostDetail: NextPage<IPostDetailProps & InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
      <PostContent post={props.post} />
  )
};

export const getStaticProps: GetStaticProps<{post: IPostItem}> = async (context) => {
  const param = context.params
  if (!param) return {notFound:true}

  const slug = param.slug
  if (!slug) return {notFound:true}

  const post = getPostData(slug as string)

  return {
    props: {
      post: post
    },
    revalidate: 600
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const postFiles = getPostFiles()
  const slugs = postFiles.map( filename => filename.replace(/\.md$/,""))

  return {
    paths: slugs.map(slug => ({params: {slug: slug}})),
    fallback: false
  }
}

export default PostDetail;
