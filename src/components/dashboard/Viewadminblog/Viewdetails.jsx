import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './viewdetails.css'
const Viewdetails = ({ blog, onCancel }) => {
    const navigate = useNavigate();
    const [editBlog, setEditBlog] = useState({ ...blog });
    const [showViewDetails, setShowViewDetails] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        setEditBlog({ ...blog });
    }, [blog]);

    useEffect(() => {
        if (blog) {
            setSelectedBlog(blog);
            setShowViewDetails(true); // Show the details when blog is available
        }
    }, [blog]);

    const handleSaveChanges = () => {
        // Debugging log to check the updated state
        console.log("Saving changes:", editBlog);

        // Navigate to the Viewadminblog route and pass the updated blog state
        navigate('/viewadminblog', { state: { updatedBlog: editBlog } });
    };

 

    return (
        <div className="blog-details-container">
            <h2>Blog Details</h2>
            {showViewDetails && selectedBlog && (
                <div className="view-details-modal">
                    <p><strong>Title:</strong> {selectedBlog.Title}</p>
                    <p><strong>Author:</strong> {selectedBlog.Author}</p>
                    <p><strong>Email:</strong> {selectedBlog.AuthorEmail}</p>
                    <p><strong>Description:</strong> {selectedBlog.Description}</p>
                    <p><strong>Summary:</strong> {selectedBlog.Summary}</p>
                </div>
            )}
            <div className='edit-view-blog-container-flex'>
                <div className='edit-view-blog-container'>
                    <label><strong>Title:</strong></label>
                    <input
                        type="text"
                        className='edit-view-blog-input'
                        value={editBlog.Title || ''}
                        onChange={(e) => setEditBlog({ ...editBlog, Title: e.target.value })}
                    />
                </div>
                <div className='edit-view-blog-container'>
                    <label><strong>Email:</strong></label>
                    <input
                    className='edit-view-blog-input'
                        type="email"
                        value={editBlog.AuthorEmail || ''}
                        onChange={(e) => setEditBlog({ ...editBlog, AuthorEmail: e.target.value })}
                    />
                </div>
            </div>
            <div className='edit-view-blog-container'>
                <label><strong>Description:</strong></label>
                <textarea
                   className='edit-view-blog-input'
                    value={editBlog.Description || ''}
                    onChange={(e) => setEditBlog({ ...editBlog, Description: e.target.value })}
                />
            </div>
            <div className='edit-view-blog-container'>
                <label><strong>Summary:</strong></label>
                <input
                   className='edit-view-blog-input'
                    type="text"
                    value={editBlog.Summary || ''}
                    onChange={(e) => setEditBlog({ ...editBlog, Summary: e.target.value })}
                />
            </div>
            
            <button onClick={handleSaveChanges} className='save-button'>Save Changes</button>
            <button onClick={onCancel} className='cancel-button'>Cancel</button>
        </div>
    );
};

export default Viewdetails;
