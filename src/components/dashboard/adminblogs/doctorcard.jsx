import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const data = [
    { id: 1, name: 'Kousik A', email: 'kousik0840@gmail.com', status: 'Verified' },
    { id: 2, name: 'John Doe', email: 'john.doe@example.com', status: 'Unverified' },
    { id: 3, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Verified' },
    { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com', status: 'Unverified' },
];

const Card = () => {
    const navigate = useNavigate();

    const handleButtonClick = (doctorId) => {
        navigate(`/profile/${doctorId}`);
    };

    return (
        <div className="cardsWrapper">
            <h2 style={{ color: "#272848" }}>Doctor Profile Verification Requests</h2>
            {data.map((item) => (
                <div key={item.id} className="cardContainer">
                    <div className="cardContent">
                        <div className='adminprofile-left'>
                        <h2 className="cardContentHeading">{item.name}</h2>
                        <p className="cardContentText">Email: {item.email}</p>
                        </div>
                        <div className='adminprofile-right'>
                        <p className="cardContentText">Status: <span className={item.status === "Verified" ? "statusVerified" : "statusUnverified"}>{item.status}</span></p>
                        <button className="cardButton" onClick={() => handleButtonClick(item.id)}>verify here</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
