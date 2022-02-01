import Image from 'next/image';
import Link from 'next/link';
import classes from './post-item.module.css'

export interface IPostItem {
  id?:string
  title:string
  image:string
  excerpt:string
  date: string
  slug:string
  isFeature: boolean
  content?: string
}

interface IPostItemProps {
  post: IPostItem
}

const PostItem: React.FunctionComponent<IPostItemProps> = (props) => {
  const {title, image, excerpt, date, slug } = props.post
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/image/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return <li className={classes.post}>
    <Link href={linkPath}>
      <a >
        <div className={classes.image}>
          <Image src={imagePath} width={300} height={200} alt={title} layout="responsive"/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </a>
    </Link>
  </li>
};

export default PostItem;
