import React from 'react';
import { BLOG_POSTS } from '../constants/data';

const Blog = () => {
  return (
    <section id="blog" className="blog sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Blog</span>
          <span className="heading-sec__sub">
            Insights and experiences from my journey as a software developer
          </span>
        </h2>
        <div className="blog__content">
          {BLOG_POSTS.map((post, index) => (
            <article key={index} className="blog__post">
              <div className="blog__post-img-cont">
                <img src={post.image} alt={post.title} className="blog__post-img" />
              </div>
              <div className="blog__post-content">
                <h3 className="blog__post-title">{post.title}</h3>
                <p className="blog__post-date">{post.date}</p>
                <p className="blog__post-excerpt">{post.excerpt}</p>
                <div className="blog__post-tags">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="blog__post-tag">{tag}</span>
                  ))}
                </div>
                <a href={`#blog-${post.id}`} className="btn btn--med btn--theme blog__post-link">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;