import React, { useState } from 'react';
import './editdoctor.css';
import { FaPlus } from 'react-icons/fa'; // Importing the Plus icon

const EditDoctor = () => {
    const [doctorData, setDoctorData] = useState({
        name: 'Kousik A',
        about: '',
        email: 'kousik0840@gmail.com',
        title: 'hello',
        country: 'India',
        state: 'Tamil Nadu',
        city: 'Coimbatore',
        availability: 'Available',
        gender: 'Male',
        dob: '2002-10-16',
        bloodGroup: 'B+',
        website: 'https://www.google.com/',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: '',
        consultation: 'Both',
        specialties: ['Nervous'],
        conditions: ['Full Body'],
        languages: ['Tamil', 'English'],
        hospitals: ['psg hospital'],
        insurances: ['ADNC Insurance', 'aetna Insurance', 'Daman Insurance', 'AXA GIG Gulf Insurance'],
        awards: [],
        faqs: [],
    });

    const handleInputChange = (field, value) => {
        setDoctorData({
            ...doctorData,
            [field]: value,
        });
    };

    const handleAddItem = (field, item) => {
        setDoctorData({
            ...doctorData,
            [field]: [...doctorData[field], item],
        });
    };

    const handleRemoveItem = (field, index) => {
        const updatedArray = doctorData[field].filter((_, i) => i !== index);
        setDoctorData({
            ...doctorData,
            [field]: updatedArray,
        });
    };

    return (
        <div className="edit-doctor-container">
            <h2>Edit Doctor Profile</h2>
            <form>
                <div className="input-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={doctorData.name} 
                        onChange={(e) => handleInputChange('name', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={doctorData.email} 
                        onChange={(e) => handleInputChange('email', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>About Me:</label>
                    <textarea 
                        value={doctorData.about} 
                        onChange={(e) => handleInputChange('about', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Title:</label>
                    <input 
                        type="text" 
                        value={doctorData.title} 
                        onChange={(e) => handleInputChange('title', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Country:</label>
                    <input 
                        type="text" 
                        value={doctorData.country} 
                        onChange={(e) => handleInputChange('country', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>State:</label>
                    <input 
                        type="text" 
                        value={doctorData.state} 
                        onChange={(e) => handleInputChange('state', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>City:</label>
                    <input 
                        type="text" 
                        value={doctorData.city} 
                        onChange={(e) => handleInputChange('city', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Availability:</label>
                    <input 
                        type="text" 
                        value={doctorData.availability} 
                        onChange={(e) => handleInputChange('availability', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Gender:</label>
                    <select 
                        value={doctorData.gender} 
                        onChange={(e) => handleInputChange('gender', e.target.value)} 
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>Date of Birth:</label>
                    <input 
                        type="date" 
                        value={doctorData.dob} 
                        onChange={(e) => handleInputChange('dob', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Blood Group:</label>
                    <input 
                        type="text" 
                        value={doctorData.bloodGroup} 
                        onChange={(e) => handleInputChange('bloodGroup', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Website:</label>
                    <input 
                        type="url" 
                        value={doctorData.website} 
                        onChange={(e) => handleInputChange('website', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Twitter:</label>
                    <input 
                        type="text" 
                        value={doctorData.twitter} 
                        onChange={(e) => handleInputChange('twitter', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Facebook:</label>
                    <input 
                        type="text" 
                        value={doctorData.facebook} 
                        onChange={(e) => handleInputChange('facebook', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>LinkedIn:</label>
                    <input 
                        type="text" 
                        value={doctorData.linkedin} 
                        onChange={(e) => handleInputChange('linkedin', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Instagram:</label>
                    <input 
                        type="text" 
                        value={doctorData.instagram} 
                        onChange={(e) => handleInputChange('instagram', e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Consultation:</label>
                    <select 
                        value={doctorData.consultation} 
                        onChange={(e) => handleInputChange('consultation', e.target.value)} 
                    >
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Both">Both</option>
                        <option value="None">None</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Specialties:
                        <FaPlus 
                            className="add-icon" 
                            onClick={() => handleAddItem('specialties', '')} 
                        />
                    </label>
                    {doctorData.specialties.map((specialty, index) => (
                        <div key={index} className="input-group">
                            <input 
                                type="text" 
                                value={specialty} 
                                onChange={(e) => {
                                    const updatedSpecialties = [...doctorData.specialties];
                                    updatedSpecialties[index] = e.target.value;
                                    handleInputChange('specialties', updatedSpecialties);
                                }} 
                            />
                            <button 
                                type="button" 
                                className="remove-button" 
                                onClick={() => handleRemoveItem('specialties', index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="input-group">
                    <label>Conditions:
                        <FaPlus 
                            className="add-icon" 
                            onClick={() => handleAddItem('conditions', '')} 
                        />
                    </label>
                    {doctorData.conditions.map((condition, index) => (
                        <div key={index} className="input-group">
                            <input 
                                type="text" 
                                value={condition} 
                                onChange={(e) => {
                                    const updatedConditions = [...doctorData.conditions];
                                    updatedConditions[index] = e.target.value;
                                    handleInputChange('conditions', updatedConditions);
                                }} 
                            />
                            <button 
                                type="button" 
                                className="remove-button" 
                                onClick={() => handleRemoveItem('conditions', index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="input-group">
                    <label>Languages:
                        <FaPlus 
                            className="add-icon" 
                            onClick={() => handleAddItem('languages', '')} 
                        />
                    </label>
                    {doctorData.languages.map((language, index) => (
                        <div key={index} className="input-group">
                            <input 
                                type="text" 
                                value={language} 
                                onChange={(e) => {
                                    const updatedLanguages = [...doctorData.languages];
                                    updatedLanguages[index] = e.target.value;
                                    handleInputChange('languages', updatedLanguages);
                                }} 
                            />
                            <button 
                                type="button" 
                                className="remove-button" 
                                onClick={() => handleRemoveItem('languages', index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="input-group">
                    <label>Hospitals:
                        <FaPlus 
                            className="add-icon" 
                            onClick={() => handleAddItem('hospitals', '')} 
                        />
                    </label>
                    {doctorData.hospitals.map((hospital, index) => (
                        <div key={index} className="input-group">
                            <input 
                                type="text" 
                                value={hospital} 
                                onChange={(e) => {
                                    const updatedHospitals = [...doctorData.hospitals];
                                    updatedHospitals[index] = e.target.value;
                                    handleInputChange('hospitals', updatedHospitals);
                                }} 
                            />
                            <button 
                                type="button" 
                                className="remove-button" 
                                onClick={() => handleRemoveItem('hospitals', index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="input-group">
                    <label>Insurances:
                        <FaPlus 
                            className="add-icon" 
                            onClick={() => handleAddItem('insurances', '')} 
                        />
                    </label>
                    {doctorData.insurances.map((insurance, index) => (
                        <div key={index} className="input-group">
                            <input 
                                type="text" 
                                value={insurance} 
                                onChange={(e) => {
                                    const updatedInsurances = [...doctorData.insurances];
                                    updatedInsurances[index] = e.target.value;
                                    handleInputChange('insurances', updatedInsurances);
                                }} 
                            />
                            <button 
                                type="button" 
                                className="remove-button" 
                                onClick={() => handleRemoveItem('insurances', index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="input-group">
                    <label>Awards:
                        <FaPlus 
                            className="add-icon" 
                            onClick={() => handleAddItem('awards', '')} 
                        />
                    </label>
                    {doctorData.awards.map((award, index) => (
                        <div key={index} className="input-group">
                            <input 
                                type="text" 
                                value={award} 
                                onChange={(e) => {
                                    const updatedAwards = [...doctorData.awards];
                                    updatedAwards[index] = e.target.value;
                                    handleInputChange('awards', updatedAwards);
                                }} 
                            />
                            <button 
                                type="button" 
                                className="remove-button" 
                                onClick={() => handleRemoveItem('awards', index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="input-group">
                    <label>FAQs:
                        <FaPlus 
                            className="add-icon" 
                            onClick={() => handleAddItem('faqs', '')} 
                        />
                    </label>
                    {doctorData.faqs.map((faq, index) => (
                        <div key={index} className="input-group">
                            <input 
                                type="text" 
                                value={faq} 
                                onChange={(e) => {
                                    const updatedFaqs = [...doctorData.faqs];
                                    updatedFaqs[index] = e.target.value;
                                    handleInputChange('faqs', updatedFaqs);
                                }} 
                            />
                            <button 
                                type="button" 
                                className="remove-button" 
                                onClick={() => handleRemoveItem('faqs', index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditDoctor;
