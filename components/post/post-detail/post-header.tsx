import Image from "next/image";
import classes from "./post-header.module.css";

interface IPostHeaderProps {
  title: string;
  image: string;
}

const PostHeader: React.FunctionComponent<IPostHeaderProps> = (props) => {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
