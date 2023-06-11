import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import AddCase from '../pages/AddCase';
import FollowedUp from '../pages/FollowedUp';
import IncidentTypes from '../pages/IncidentTypes';
import Administrators from '../pages/Administrators';
import Settings from '../pages/Settings';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-case" element={<AddCase />} />
        <Route path="/followed-up" element={<FollowedUp />} />
        <Route path="/incident-types" element={<IncidentTypes />} />
        <Route path="/administrators" element={<Administrators />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
