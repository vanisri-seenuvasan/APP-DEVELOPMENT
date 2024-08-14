import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import OwnerLogin from './OwnerLogin';
import TenantLogin from './TenantLogin';
// Import other components as needed

function OTlogin() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/owner-login" element={<OwnerLogin />} />
      <Route path="/tenant-login" element={<TenantLogin />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default OTlogin;
