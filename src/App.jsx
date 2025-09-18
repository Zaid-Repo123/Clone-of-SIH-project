// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import HomePage from './Components/HomePage.jsx';
import Calendar from './Components/Calender.jsx';
import Dashboard from './Components/Dashboard.jsx';
import ClientInfo from './Components/ClientInfo.jsx';
import ClientProfileView from './Components/ClientProfileView.jsx';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/calendar" element={<Calendar />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Clients Section with nested routes */}
      <Route path="/clients" element={<ClientInfo />} />
      <Route path="/clients/:id" element={<ClientProfileView />} />
    </Routes>
  );
}

export default App;
