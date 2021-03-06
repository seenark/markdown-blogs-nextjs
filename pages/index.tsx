import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { IPostItem } from "../components/post/post-item";
import { getFeaturedPosts } from "../lib/posts-utils";
import styles from "../styles/Home.module.css";

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

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <>
    <Head>
      <title>HadesGod blogs</title>
    </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<{posts: IPostItem[]}> = async (context) => {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}

export default Home;
