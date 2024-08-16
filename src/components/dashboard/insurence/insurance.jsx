import React, { useState } from 'react';
import './insurance.css';

const InsuranceManagement = () => {
    const [insurances, setInsurances] = useState([
        { id: 1, name: 'ADNC Insurance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqQsq5o7lCoH6bk7sFxLCOXdpxSGzBT3yhg&s' },
        { id: 2, name: 'Aetna Insurance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqQsq5o7lCoH6bk7sFxLCOXdpxSGzBT3yhg&s' },
        { id: 3, name: 'Allianz Insurance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqQsq5o7lCoH6bk7sFxLCOXdpxSGzBT3yhg&s' },
        { id: 4, name: 'Cigna Insurance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqQsq5o7lCoH6bk7sFxLCOXdpxSGzBT3yhg&s' },
        { id: 5, name: 'UnitedHealthcare', logo: 'uhc-logo.png' },
        { id: 6, name: 'Blue Cross Blue', logo: 'bcbs-logo.png' },
        { id: 7, name: 'Humana', logo: 'humana-logo.png' },
        { id: 8, name: 'Kaiser Permanente', logo: 'kaiser-logo.png' },
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [newInsurance, setNewInsurance] = useState({ name: '', logo: '' });

    const handleDelete = (id) => {
        setInsurances(insurances.filter(insurance => insurance.id !== id));
    };

    const handleAddInsurance = () => {
        // Assuming logo upload and processing logic is added here
        const newInsuranceWithLogo = {
            ...newInsurance,
            id: insurances.length + 1,
            logo: URL.createObjectURL(newInsurance.logo) // Convert the file to a local URL for preview purposes
        };
        setInsurances([...insurances, newInsuranceWithLogo]);
        setShowPopup(false);
        setNewInsurance({ name: '', logo: '' });
    };

    const handleLogoChange = (e) => {
        setNewInsurance({ ...newInsurance, logo: e.target.files[0] });
    };

    return (
        <div className="insurance-management">
            <div className="title-container">
                <h2 className="insurance-title">All Insurances</h2>
                {showPopup && <h3 className="popup-title">Add New Insurance Provider</h3>}
            </div>
            <button className="add-insurance-button" onClick={() => setShowPopup(true)}>Add New Insurance Provider</button>
            
            <div className="insurance-list">
                {insurances.map(insurance => (
                    <div key={insurance.id} className="insurance-item">
                        <img src={insurance.logo} alt={`${insurance.name} logo`} className="insurance-logo" />
                        <h3>{insurance.name}</h3>
                        <button className="delete-button" onClick={() => handleDelete(insurance.id)}>Delete</button>
                    </div>
                ))}
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3 className="popup-title">Add New Insurance Provider</h3>
                        <label className="popup-label">
                            Insurance Name:
                            <input className="popup-input" type="text" value={newInsurance.name} onChange={(e) => setNewInsurance({ ...newInsurance, name: e.target.value })} />
                        </label>
                        <label className="popup-label">
                            Upload Logo:
                            <input className="popup-input" type="file" accept="image/*" onChange={handleLogoChange} />
                        </label>
                        <button className="popup-button" onClick={handleAddInsurance}>Add Insurance</button>
                        <button className="popup-button cancel" onClick={() => setShowPopup(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InsuranceManagement;
