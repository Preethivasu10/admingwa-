import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Patientsprofile.css'; // Import the CSS file

const PatientRow = () => {
    const [patients, setPatients] = useState([
        { name: 'Hirushit', email: 'hirushit@gmail.com' },
        { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
        { name: 'Bob Williams', email: 'bob.williams@example.com' },
        { name: 'Carol Martinez', email: 'carol.martinez@example.com' },
        { name: 'David Wilson', email: 'david.wilson@example.com' },
    ]);

    const navigate = useNavigate();

    const handleEdit = (name) => {
        navigate(`/edit-patient`);
    };

    const handleDelete = (name) => {
        const updatedPatients = patients.filter(patient => patient.name !== name);
        setPatients(updatedPatients);
    };

    return (
        <div className="patient-list-card">
            <h2 className="patient-list-title"><b>Patients</b></h2>
            {patients.map((patient, index) => (
                <div key={index} className="patient-card">
                    <div className="patient-info">
                        <strong>{patient.name}</strong>
                        <p>{patient.email}</p>
                    </div>
                    <div className="patient-actions">
                        <button className="action-button" onClick={() => handleEdit(patient.name)}>Edit</button>
                        <button className="action-button" onClick={() => handleDelete(patient.name)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PatientRow  ;
