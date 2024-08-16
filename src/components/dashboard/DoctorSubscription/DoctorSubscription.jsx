import React, { useState } from 'react';
import './DoctorSubscription.css'; 
import { RiArrowDownSLine } from "react-icons/ri";

const DoctorSubscription = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, doctorName: 'Dr. Pardhu', subscriptionType: 'Free', status: 'Verified'  },
    { id: 2, doctorName: 'Dr. Hari', subscriptionType: 'Premium', status: 'Pending'  },
    { id: 3, doctorName: 'Dr. Shiva', subscriptionType: 'Free', status: 'Verified'  },
    { id: 4, doctorName: 'Dr. Kishore', subscriptionType: 'Premium', status: 'Pending'  },
    { id: 5, doctorName: 'Dr. Radha', subscriptionType: 'Free', status: 'Rejected' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleStatusChange = (id, newStatus) => {
    setSubscriptions(subscriptions.map(sub => sub.id === id ? { ...sub, status: newStatus } : sub));
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  const filteredSubscriptions = activeTab === 'All' ? subscriptions : subscriptions.filter(sub => sub.status === activeTab);

  return (
    <div className="Admin-subscription">
      <h2>Doctor Subscriptions</h2>
      <div className='Admin-subscription-table-container'>
        <table className="Admin-subscription-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Subscription Type</th>
              <th>Status</th>
              <th>Documents</th>
              <th>Change Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubscriptions.map(({ id, doctorName, subscriptionType, status, proofDocument }) => (
              <tr key={id}>
                <td>{doctorName}</td>
                <td>{subscriptionType}</td>
                <td><span className={`status-dot ${status.toLowerCase()}`}></span> {status}</td>
                <td>
                  <button className='subcription-View' onClick={() => openModal(proofDocument)}>
                    View
                  </button>
                </td>
                <td>
                  <div className="admin-select-container">
                    <select
                      className={`admin-status-select ${status.toLowerCase()}`}
                      value={status}
                      onChange={(e) => handleStatusChange(id, e.target.value)}
                    >
                      <option value="Verified">Verified</option>
                      <option value="Pending">Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                    <RiArrowDownSLine className="arrow-icon" />
                  </div>
                </td>
                <td>
                  <button onClick={() => console.log(`Action for ${doctorName}`)} className='subcription-submit'>
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="adminsubscription-modal-overlay" onClick={closeModal}>
          <div className="adminsubscription-modal-content" onClick={(e) => e.stopPropagation()}>
                     <h2>Document Details</h2>
                     <p><strong>Business Proof:</strong><button className='subcription-modal-View'> view </button></p>
                     <p><strong>Certification Proof:</strong><button className='subcription-modal-View'> view </button></p>
                     <p><strong>License Proof:</strong><button className='subcription-modal-View'> view </button></p>
                     <button onClick={closeModal} className="adminsubscription-modal-close">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSubscription;
