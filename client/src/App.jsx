// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import ImageUpload from './components/ImageUpload';
import AdminDashboard from './pages/AdminDashboard';
import ChatRoom from './components/ChatRoom';
import PaymentForm from './components/PaymentForm';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <PaymentForm />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/chatRoom" element={<ChatRoom />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
