import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineBook, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdPerson, MdSubscriptions, MdPeople, MdPeopleAlt } from 'react-icons/md';
import { IoShield } from 'react-icons/io5'; // Updated import
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <div className="sidebar open"> {/* Remove the dynamic class */}
      <div className="logo-container">
        <img src="./brand-logo-2.png" alt="Logo" className="logo" /> {/* Static image */}
      </div>
      <ul className="sidebar-menu">
        <li
          className={`menu-item ${
            activeItem === '/doctorprofile/dashboardpage/start-dashboard' ? 'active' : ''
          }`}
          onMouseEnter={() => setActiveItem('/doctorprofile/dashboardpage/start-dashboard')}
          onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/Viewadminblog" className="menu-link">
            <div className="sidebar-icon">
              <AiOutlineBook size='1.1rem' />
            </div>
            <span>View Admin Blogs</span>
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeItem === '/doctorprofile/dashboardpage/manage' ? 'active' : ''
          }`}
          onMouseEnter={() => setActiveItem('/doctorprofile/dashboardpage/manage')}
          onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/doctorblog" className="menu-link">
            <div className="sidebar-icon">
              <AiOutlineCloudUpload size='1.1rem' />
            </div>
            <span>Upload Admin Blog</span>
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeItem === '/doctorprofile/dashboardpage/schedule' ? 'active' : ''
          }`}
          onMouseEnter={() => setActiveItem('/doctorprofile/dashboardpage/schedule')}
          onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/doctorprofile" className="menu-link">
            <div className="sidebar-icon">
              <MdPerson size='1.1rem' />
            </div>
            <span>Doctor Profile</span>
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeItem === '/doctorprofile/dashboardpage/patient' ? 'active' : ''
          }`}
          onMouseEnter={() => setActiveItem('/doctorprofile/dashboardpage/patient')}
          onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/DoctorSubscription" className="menu-link">
            <div className="sidebar-icon">
              <MdSubscriptions size='1.1rem' />
            </div>
            <span>Doctor Subscription</span>
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeItem === '/doctorprofile/dashboardpage/inbox' ? 'active' : ''
          }`}
          onMouseEnter={() => setActiveItem('/doctorprofile/dashboardpage/inbox')}
          onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="InsuranceManagement" className="menu-link">
            <div className="sidebar-icon">
              <IoShield size='1.1rem' />
            </div>
            <span>Manage Insurance</span>
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeItem === '/doctorprofile/dashboardpage/reviews' ? 'active' : ''
          }`}
          onMouseEnter={() => setActiveItem('/doctorprofile/dashboardpage/reviews')}
          onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/ViewDoctors" className="menu-link">
            <div className="sidebar-icon">
              <MdPeople size='1.1rem' />
            </div>
            <span>View Doctors</span>
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeItem === '/doctorprofile/dashboardpage/blog' ? 'active' : ''
          }`}
          onMouseEnter={() => setActiveItem('/doctorprofile/dashboardpage/blog')}
          onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/Patientprofile" className="menu-link">
            <div className="sidebar-icon">
              <MdPeopleAlt size='1.1rem' />
            </div>
            <span>View Patients</span>
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeItem === '/doctorprofile/dashboardpage/Logout' ? 'active' : ''
          }`}
          onMouseEnter={() => setActiveItem('/doctorprofile/dashboardpage/Logout')}
          onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/doctorprofile/dashboardpage/Logout" className="menu-link">
            <div className="sidebar-icon">
              <FiLogOut size='1.1rem' />
            </div>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
