import React from "react";
import { BLOG_DATA } from "../components/data";

export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">LATEST POSTS</h2>
          <p className="blog-subtitle">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>
        </div>
        <div className="blog-grid">
          {BLOG_DATA.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-img-wrapper">
                <img src={post.image} alt={post.title} className="blog-img" />
                <div className="blog-meta-badge">
                  <span className="meta-item"><i className="fa-regular fa-clock"></i> {post.date}</span>
                  <span className="meta-item"><i className="fa-solid fa-comment"></i> {post.comments}</span>
                </div>
              </div>
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <div className="title-underline"></div>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
