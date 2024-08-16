import React, { useState } from 'react';
import './Patientsprofileedit.css'; // Use a separate CSS file for patient styles
import { FaPlusCircle } from 'react-icons/fa'; // Import the icon from react-icons


const EditPatient = () => {
    const [emergencyContacts, setEmergencyContacts] = useState([]);

    const handleAddContact = () => {
        setEmergencyContacts([...emergencyContacts, '']);
    };

    const handleRemoveContact = (index) => {
        const newContacts = [...emergencyContacts];
        newContacts.splice(index, 1);
        setEmergencyContacts(newContacts);
    };

    return (
        <div className="edit-patient-container">
            <h2>Edit Patient</h2>
            <form>
                <div className="input-group">
                    <label>Name</label>
                    <input type="text" defaultValue="Hirushit" />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" defaultValue="hirushit@gmail.com" />
                </div>
                <div className="input-group">
                    <label>Phone Number</label>
                    <input type="tel" defaultValue="8015732045" />
                </div>
                <div className="input-group">
                    <label>Date of Birth</label>
                    <input type="date" defaultValue="2003-08-05" />
                </div>
                <div className="input-group">
                    <label>Address</label>
                    <input type="text" defaultValue="Chennai" />
                </div>
                <div className="input-group">
                    <label>Insurance Provider</label>
                    <input type="text" defaultValue="XYZ Insurance" />
                </div>
                <div className="input-group">
                    <label>Policy Number</label>
                    <input type="text" defaultValue="798645" />
                </div>
                <div className="input-group">
                    <label>
                        Emergency Contacts
                        <FaPlusCircle className="add-icon" onClick={handleAddContact} />
                    </label>
                    {emergencyContacts.map((contact, index) => (
                        <div key={index} className="input-group">
                            <input type="text" placeholder={`Contact ${index + 1}`} value={contact} />
                            <button type="button" className="remove-button" onClick={() => handleRemoveContact(index)}>Remove</button>
                        </div>
                    ))}
                </div>
                <div className="input-group">
                    <label>Profile Picture</label>
                    <input type="file" />
                </div>
                <button type="submit">Update Patient</button>
            </form>
        </div>
    );
};

export default EditPatient;
