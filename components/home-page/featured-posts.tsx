import PostGrid from '../post/post-grid';
import { IPostItem } from '../post/post-item';
import classes from './featured-posts.module.css'

interface IFeaturedPostsProps {
  posts: IPostItem[]
}

const FeaturedPosts: React.FunctionComponent<IFeaturedPostsProps> = (props) => {
  return (
      <section className={classes.latest}>
        <h2>Featured posts</h2>
        <PostGrid posts={props.posts}/>
      </section>
  )
};

export default FeaturedPosts;
