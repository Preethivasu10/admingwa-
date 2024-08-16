import React from 'react';
import './blog.css';
import { FaTag } from 'react-icons/fa';
import { FaLongArrowAltRight } from "react-icons/fa";


const BlogPage = () => {
  const featuredPost = {
    imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    title: "10 Drugs Commonly Prescribed for High Blood Pressure",
    description: "Learn about the classes of blood pressure medications, how blood pressure medications work, and the top blood pressure medications...",
  };

  const featuredSidePosts = [
    { title: "Everything to Know About Essential", date: "January 15, 2023", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" },
    { title: "High Blood Pressure: Symptoms, Causes", date: "January 15, 2023", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" },
    { title: "Blood Pressure Readings", date: "January 15, 2023", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" },
    { title: "When to See a Doctor for High Pressure", date: "January 15, 2023", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" },
  ];

  const causesAndRisksPosts = [
    { title: "Does stress cause high blood pressure?", description: "Consuming nicotine can have short- and long-term effects on your blood pressure and cardiovascular health...", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg", author: "John Doe", time: "5 min read" },
    { title: "Does salt increase blood pressure?", description: "Facts to consider onsuming nicotine can have short- and long-term effects on your blood pressure", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg", author: "Jane Smith", time: "3 min read" },
    { title: "Smoking and high blood pressure", description: "What to know onsuming nicotine can have short- and long-term effects on your blood", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg", author: "Michael Brown", time: "4 min read" },
  ];

  const testingAndDiagnosisPosts = [
    { title: "Blood Pressure Readings: What They Mean", description: "Understanding the numbers", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg", author: "Emily White", time: "6 min read" },
    { title: "How to Monitor Blood Pressure at Home", description: "Steps and tips", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg", author: "David Black", time: "7 min read" },
  ];

  const treatmentPosts = [
    { title: "Medication for High Blood Pressure", description: "Various medications can help manage high blood pressure...", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg", author: "Sarah Green", time: "4 min read" },
    { title: "Lifestyle Changes to Reduce Blood Pressure", description: "Learn how small changes can have a big impact...", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg", author: "Paul Brown", time: "5 min read" },
    { title: "Alternative Therapies for Hypertension", description: "Explore non-pharmaceutical options...", imageUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg", author: "Lisa Blue", time: "6 min read" },
  ];

  const categories = [
    { title: "Hydration or Moisturization (10)", icon: FaTag },
    { title: "Cardiology (50)", icon: FaTag },
    { title: "Nutrition (40)", icon: FaTag },
    { title: "Exercise (50)", icon: FaTag },
  ];

  return (
    <div className="blog-page">
      <div className="main-content">
        {/* Featured Section */}
        <h1>Featured</h1>
        <div className="featured-section">
          <div className="featured-post">
            <img src={featuredPost.imageUrl} alt="Featured Post" className="featured-img" />
            <div className="featured-details">
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.description}</p>
            </div>
          </div>

          {/* Featured Side Posts */}
          <div className="featured-side-posts">
            {featuredSidePosts.map((post, index) => (
              <div key={index} className="side-post-card">
                <img src={post.imageUrl} alt={post.title} className="side-post-img" />
                <div className="side-post-details">
                  <h5>{post.title}</h5>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Content Sections */}
        <BlogPostList title="Causes & Risks" posts={causesAndRisksPosts} />
        <BlogPostList title="Testing & Diagnosis" posts={testingAndDiagnosisPosts} />
        
      </div>

      {/* Sidebar */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: '10px',
            width: '350px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginTop: "30px"
          }}
        />
        <div className="card">
          <SidebarSection title="Categories" items={categories} />
        </div>
      </div>
    </div>
  );
};

const BlogPostList = ({ title, posts }) => {
  return (
    <div className="blog-section">
      <h3>{title}</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <div className="post-meta">
              <img src={post.imageUrl} alt={post.title} />
              <span className="post-author"><b>{post.author}</b></span>
              <span className="post-time">{post.time}</span>
            </div>
            <div className="post-content">
              <h4>{post.title}</h4>
              <p>{post.description}</p>
              <a href="#" className="read-more">Read more in {post.time} <FaLongArrowAltRight />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SidebarSection = ({ title, items }) => {
  return (
    <div className="sidebar-section">
      <div className="sidebar-header">
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item.icon && <item.icon className="sidebar-item-icon" />}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
