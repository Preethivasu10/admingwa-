import React from 'react';
import { useParams } from 'react-router-dom';
import './DoctorProfile.css';

const data = [
    {
        id: 1,
        name: 'Kousik A',
        email: 'kousik0840@gmail.com',
        status: 'Verified',
        title: 'Doctor',
        speciality: 'Neurology',
        location: 'Coimbatore, Tamil Nadu',
        gender: 'Male',
        website: 'https://www.google.com/',
        socialMediaHandles: '@kousikdoctor',
        subscriptionType: 'Premium',
        subscriptionVerification: 'Verified',
        languages: ['Tamil', 'English'],
        conditions: ['Full Body Checkup'],
        hospitals: [
            { name: 'PSG Hospital', location: 'Avinashi Street, Coimbatore, Tamil Nadu, India, 641039' }
        ],
        awards: 'Best Neurologist of the Year',
        faqs: 'None'
    }
];

const DoctorProfile = () => {
    const { doctorId } = useParams();
    const doctor = data.find(doc => doc.id === parseInt(doctorId));

    if (!doctor) return <p>Doctor not found</p>;

    return (
        <div className="doctor-profile">
            <h2>Doctor Profile</h2>

            <div className="section">
                <label className="doctor-label">Name:</label>
                <input type="text" className="doctor-input" value={doctor.name} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Email:</label>
                <input type="email" className="doctor-input" value={doctor.email} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Current Verification Status:</label>
                <input type="text" className="doctor-input" value={doctor.status} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Update Verification Status:</label>
                <select className="doctor-input">
                    <option>Select</option>
                    <option>Verified</option>
                    <option>Unverified</option>
                </select>
            </div>

            <div className="section">
                <label className="doctor-label">Title:</label>
                <input type="text" className="doctor-input" value={doctor.title || ''} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Speciality:</label>
                <input type="text" className="doctor-input" value={doctor.speciality || ''} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Location:</label>
                <input type="text" className="doctor-input" value={doctor.location || ''} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Gender:</label>
                <input type="text" className="doctor-input" value={doctor.gender || ''} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Website:</label>
                <input type="url" className="doctor-input" value={doctor.website || ''} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Social Media Handles:</label>
                <input type="text" className="doctor-input" value={doctor.socialMediaHandles || ''} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Subscription Type:</label>
                <input type="text" className="doctor-input" value={doctor.subscriptionType || ''} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Subscription Verification:</label>
                <input type="text" className="doctor-input" value={doctor.subscriptionVerification || ''} readOnly />
            </div>

            <div className="section">
                <label className="doctor-label">Languages Spoken:</label>
                {doctor.languages && doctor.languages.map((lang, index) => (
                    <input key={index} type="text" className="doctor-input" value={lang} readOnly />
                ))}
            </div>

            <div className="section">
                <label className="doctor-label">Conditions Managed:</label>
                {doctor.conditions && doctor.conditions.map((condition, index) => (
                    <input key={index} type="text" className="doctor-input" value={condition} readOnly />
                ))}
            </div>

            <div className="section">
                <label className="doctor-label">Hospitals detailes</label>

                {doctor.hospitals && doctor.hospitals.map((hospital, index) => (
                    <div key={index}>
                        <label className="doctor-label">Hospital Name:</label>
                        <input type="text" className="doctor-input" value={hospital.name} readOnly />
                        <label className="doctor-label">Location:</label>
                        <input type="text" className="doctor-input" value={hospital.location} readOnly />
                    </div>
                ))}
            </div>

            <div className="section">
                <label className="doctor-label">Insurances Accepted:</label>
                <ul>
                    {doctor.insurances && doctor.insurances.map((insurance, index) => <li key={index}>{insurance}</li>)}
                </ul>
            </div>

            <div className="section">
                <label className="doctor-label">Awards:</label>
                <input type="text" className="doctor-input" value={doctor.awards}readOnly />

                
            </div>

            <div className="section">
                <label className="doctor-label">FAQs:</label>
                <input type="text" className="doctor-input" value= {doctor.faqs}readOnly />
            </div>

            <button>Back</button>
        </div>
    );
};

export default DoctorProfile;
