import React, { useState } from 'react';
import './AdminBlogUploadForm.css';

const AdminBlogUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    summary: '',
    image: null,
    categories: '',
    hashtags: '',
    priority: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add the logic to upload the blog here
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2 className="admin-form-heading">Admin Blog Upload Form</h2>
      
      <label className="admin-form-label" htmlFor="title">Title:</label>
      <input className="admin-form-input" type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
      
      <label className="admin-form-label" htmlFor="author">Author Name:</label>
      <input className="admin-form-input" type="text" id="author" name="author" value={formData.author} onChange={handleChange} required />
      
      <label className="admin-form-label" htmlFor="description">Description:</label>
      <textarea className="admin-form-textarea" id="description" name="description" rows="4" value={formData.description} onChange={handleChange} required></textarea>
      
      <label className="admin-form-label" htmlFor="summary">Summary:</label>
      <textarea className="admin-form-textarea" id="summary" name="summary" rows="2" value={formData.summary} onChange={handleChange} required></textarea>
      
      <label className="admin-form-label" htmlFor="image">Upload Image:</label>
      <input className="admin-form-file" type="file" id="image" name="image" onChange={handleChange} accept="image/*" />
      
      <label className="admin-form-label" htmlFor="categories">Categories:</label>
      <select className="admin-form-select" id="categories" name="categories" value={formData.categories} onChange={handleChange} required>
        <option value="">Select a Category</option>
        <option value="general-surgery">General Surgery</option>
        <option value="oriental-medicine">Oriental Medicine</option>
        <option value="latest-medical-research">Latest Medical Research</option>
        <option value="common-medical-condition">Common Medical Condition</option>
        <option value="mental-health">Mental Health</option>
        <option value="conventional-medicine">Conventional Medicine</option>
        <option value="medical-education">Medical Education</option>
        <option value="psychology">Psychology</option>
      </select>
      
      <label className="admin-form-label" htmlFor="hashtags">Hashtags:</label>
      <select className="admin-form-select" id="hashtags" name="hashtags" value={formData.hashtags} onChange={handleChange} required>
        <option value="">Select Hashtags</option>
        <option value="blogger">#blogger</option>
        <option value="medfluencer">#medfluencer</option>
        <option value="wms">#wms</option>
        <option value="medical">#medical</option>
        <option value="health">#health</option>
        <option value="wellness">#wellness</option>
      </select>
      
      <label className="admin-form-label" htmlFor="priority">Priority:</label>
      <input className="admin-form-number" type="number" id="priority" name="priority" value={formData.priority} onChange={handleChange} min="1" max="10" required />
      <br/>
      <button className="admin-form-button" type="submit">Upload Blog</button>
    </form>
  );
};

export default AdminBlogUploadForm;
