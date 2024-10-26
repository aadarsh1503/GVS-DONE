import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AsideBar from '../AsideBar/AsideBar';
import ContactAdmin from '../ContactAdminpage/ContactAdmin';
import Home2 from '../Home2/Home2';
import AdminSettings from '../SettingAdmin/SettingAdmin';
import ProfileSection from '../Profiles/Profiles';
import AdminTestimonials from '../AdminTestimonials/AdminTestimonials';
import ParentComponent from '../CreateBlog/ButtonSection';


const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AsideBar />
      
      {/* Main content (right side of the AsideBar) */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/* Routes for content */}
        <Routes>
        <Route path="/homeAdmin" element={<Home2 />} />
          <Route path="/contactAdmin" element={<ContactAdmin />} />
          <Route path="/adminSettings" element={<AdminSettings />} />
          <Route path="/profileAdmin" element={<ProfileSection />} />
          <Route path="/AdminTestimonials" element={<AdminTestimonials />} />
          <Route path="/blogEdit" element={<ParentComponent />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
