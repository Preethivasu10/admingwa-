import React, { useState, useEffect } from 'react';
import './viewadminblog.css';
import { RiArrowDownSLine } from "react-icons/ri";

const Viewadminblog = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [statuses, setStatuses] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState({});

    useEffect(() => {
        const fetchData = () => {
            const data = [
                { id: 1, Title: 'Olympics', Author: 'Kousik', Description: 'Silver medal', Summary: 'Neeraj Chopra', AuthorEmail: 'kousik0840@gmail.com', status: 'verified' },
                { id: 2, Title: 'Blog Post 2', Author: 'Author 2', Description: 'Description 2', Summary: 'Summary 2', AuthorEmail: 'author2@example.com', status: 'verified' },
                { id: 3, Title: 'Blog Post 3', Author: 'Author 3', Description: 'Description 3', Summary: 'Summary 3', AuthorEmail: 'author3@example.com', status: 'not verified' },
                { id: 4, Title: 'Blog Post 4', Author: 'Author 4', Description: 'Description 4', Summary: 'Summary 4', AuthorEmail: 'author4@example.com', status: 'verified' },
                { id: 5, Title: 'Blog Post 5', Author: 'Author 5', Description: 'Description 5', Summary: 'Summary 5', AuthorEmail: 'author5@example.com', status: 'pending' },
            ];
            setStatuses(data);
        };

        fetchData();
    }, []);

    const handleStatusChange = (id, newStatus) => {
        setSelectedStatus(prevStatus => ({
            ...prevStatus,
            [id]: newStatus
        }));
    };

    const confirmAndUpdateStatus = (id) => {
        const newStatus = selectedStatus[id] || statuses.find(status => status.id === id).status;
        setStatuses(prevStatuses =>
            prevStatuses.map(status =>
                status.id === id ? { ...status, status: newStatus } : status
            )
        );
        setSelectedStatus(prevStatus => ({
            ...prevStatus,
            [id]: newStatus
        }));
    };

    const handleViewDetails = (id) => {
        alert(`Viewing details for blog ID: ${id}`);
    };

    const filteredStatuses = activeTab === 'All' ? statuses : statuses.filter(status => status.status === activeTab);

    return (
        <div className="view-adminblog-container">
            <h2>Admin Blogs Dashboard</h2>
            <div className="view-adminblog-card-header">
                {filteredStatuses.map(({ id, Title, Author, Description, Summary, AuthorEmail, status }) => (
                    <div key={id} className="view-adminblog">
                        <div className="view-adminblog-head">
                            <h3>{Title}</h3>
                            <span className={`statusadminblog-dot ${selectedStatus[id] || status.replace(" ", "-").toLowerCase()}`}></span>
                        </div>
                        <div className="view-adminblog-body">
                            <p><strong>Author:</strong> {Author}</p>
                            <p><strong>Email:</strong> {AuthorEmail}</p>
                            <p><strong>Description:</strong> {Description}</p>
                            <p><strong>Summary:</strong> {Summary}</p>  
                        </div>
                        <div className="view-adminblog-card-actions">
                            <div className="view-adminblog-select-container">
                                <select
                                    className={`view-adminblog-status-select ${selectedStatus[id] || status.replace(" ", "-").toLowerCase()}`}
                                    value={selectedStatus[id] || status.replace(" ", "-").toLowerCase()}
                                    onChange={(e) => handleStatusChange(id, e.target.value)}
                                >
                                    <option value="verified">Verified</option>
                                    <option value="pending">Pending</option>
                                    <option value="not-verified">Not Verified</option>
                                </select>
                                <RiArrowDownSLine className="arrow-icon" />
                            </div>
                            <div className='view-adminblog-button'>
                                <button onClick={() => confirmAndUpdateStatus(id)} className='Update-button-dashmanage'>Update</button>
                                <button onClick={() => handleViewDetails(id)} className='Details-button-dashmanage'>View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Viewadminblog;
