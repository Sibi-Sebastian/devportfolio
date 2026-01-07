import React from 'react';
import { BLOG_POSTS } from '../constants/data';

const BlogPost = ({ postId }) => {
  const post = BLOG_POSTS.find(p => p.id === parseInt(postId));
  
  if (!post) return null;

  return (
    <section className="blog-post sec-pad">
      <div className="main-container">
        <div className="blog-post__content">
          <h1 className="heading-primary blog-post__title">{post.title}</h1>
          <p className="blog-post__meta">
            <span className="blog-post__date">{post.date}</span>
            <span className="blog-post__author">By {post.author}</span>
          </p>
          <div className="blog-post__img-cont">
            <img src={post.image} alt={post.title} className="blog-post__img" />
          </div>
          <div className="blog-post__body">
            {post.content.map((paragraph, index) => (
              <p key={index} className="blog-post__paragraph">{paragraph}</p>
            ))}
          </div>
          <div className="blog-post__tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-post__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;