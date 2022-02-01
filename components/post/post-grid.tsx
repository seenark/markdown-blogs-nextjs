import classes from './post-grid.module.css'
import PostItem, { IPostItem } from './post-item';

interface IPostGridProps {
  posts: IPostItem[]
}

const PostGrid: React.FunctionComponent<IPostGridProps> = (props) => {
  const {posts} = props
  return <ul className={classes.grid}>
  {
    posts.map( post => (
      <PostItem key={post.slug} post={post} />
    ))
  }
</ul>
};

export default PostGrid;
