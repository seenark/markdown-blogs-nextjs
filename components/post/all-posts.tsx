import PostGrid from './post-grid';
import { IPostItem } from './post-item';
import classes from './all-posts.module.css'

interface IAllPostProps {
    posts: IPostItem[]
}

const AllPost: React.FunctionComponent<IAllPostProps> = (props) => {
  return (
      <section className={classes.posts}>
          <h1>All Posts </h1>
          <PostGrid posts={props.posts}/>
      </section>
  )
};

export default AllPost;
