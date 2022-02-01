import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import AllPost from '../../components/post/all-posts';
import { IPostItem } from '../../components/post/post-item';
import { getAllPosts } from '../../lib/posts-utils';

interface IAllPostPageProps {
}

const DUMMY_POST: IPostItem[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Sed eos ipsum dolores gubergren accusam sit amet consetetur dolor.",
    date: "2022-10-22",
    isFeature: true
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Sed eos ipsum dolores gubergren accusam sit amet consetetur dolor.",
    date: "2022-10-22",
    isFeature: true
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Sed eos ipsum dolores gubergren accusam sit amet consetetur dolor.",
    date: "2022-10-22",
    isFeature: true
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Sed eos ipsum dolores gubergren accusam sit amet consetetur dolor.",
    date: "2022-10-22",
    isFeature: true
  },
];


const AllPostPage: NextPage<IAllPostPageProps & InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
      <AllPost posts={props.posts}/>
  )
};

export const getStaticProps: GetStaticProps<{posts: IPostItem[]}> = async (context) => {
  const featuredPosts = getAllPosts()
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}

export default AllPostPage;
