import { IPostItem } from "../post-item";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'



interface IPostContentProps {
  post: IPostItem;
}

const PostContent: React.FunctionComponent<IPostContentProps> = (props) => {
  const { title, image, slug, content } = props.post;
  const imagePath = `/image/posts/${slug}/${image}`;

  const customRerender: object = {
    // img(image: { src: string; alt: string; node: any }) {
    //   console.log(image);
    //   return <Image src={image.src} alt={image.alt} width={600} height={300} />;
    // },

    /* 
    * image tag ก็เป็น paragraph ตัวหนึ่ง เราก็เลยใช้งานแบบนี้ได้ 
    */
    p(paragraph: { children: any; node: any }) {
      if (paragraph.children[0].type === "img") {
        const image = paragraph.children[0].props as HTMLImageElement
        return <div className={classes.image}>
          <Image src={image.src} alt={image.alt} width={600} height={300} />
        </div>
      }

      return <p>{paragraph.children}</p>;
    },
    code(code: {
      className: string;
      node: Node;
      children: string[];
  }) {
      console.log('code', code)
      const language = code.className.split('-')[1];
      return <SyntaxHighlighter style={atomDark} language={language} >{code.children}</SyntaxHighlighter>
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRerender}>{content!}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
