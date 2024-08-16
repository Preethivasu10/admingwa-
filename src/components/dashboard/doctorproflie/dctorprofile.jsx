import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './doctorprofile.css'; // Import the CSS file

const DoctorRow = () => {
    const [doctors, setDoctors] = useState([
        { name: 'Kousik A', email: 'kousik0840@gmail.com' },
        { name: 'Dr. John Doe', email: 'john.doe@example.com' },
        { name: 'Dr. Jane Smith', email: 'jane.smith@example.com' },
        { name: 'Dr. Emily Johnson', email: 'emily.johnson@example.com' },
        { name: 'Dr. Michael Brown', email: 'michael.brown@example.com' },
    ]);

    const navigate = useNavigate();

    const handleEdit = (name) => {
        navigate(`/edit-doctor`);
    };

    const handleDelete = (name) => {
        const updatedDoctors = doctors.filter(doctor => doctor.name !== name);
        setDoctors(updatedDoctors);
    };

    return (
        <div className="doctor-list-card">
            <h2 className="doctor-list-title"><b>Doctors</b></h2>
            {doctors.map((doctor, index) => (
                <div key={index} className="doctor-card">
                    <div className="doctor-info">
                        <strong>{doctor.name}</strong>
                        <p>{doctor.email}</p>
                    </div>
                    <div className="doctor-actions">
                        <button className="action-button" onClick={() => handleEdit(doctor.name)}>Edit</button>
                        <button className="action-button" onClick={() => handleDelete(doctor.name)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DoctorRow;
