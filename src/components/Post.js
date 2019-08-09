import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { post, header, thumbnail, description, link } from  '../styles/post.module.css';

function Post({ title, date, author, path, body, fluid }) {
  return (
    <article className={post}>
      <h2 className={header}>{title}</h2>
      <div className={thumbnail}>
        <Img fluid={fluid} />
      </div>
      <small>{date} by {author}</small>
      <div className={description}>{body}</div>
      <Link className={link} to={path}>Read more</Link>
    </article>
  );
}
export default Post;