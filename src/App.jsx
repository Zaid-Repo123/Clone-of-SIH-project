// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LandingPage from './components/LandingPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import Calendar from './components/Calender.jsx';
import ClientPage from './components/ClientPage.jsx';
import ClientProfilePage from './components/ClientProfilePage.jsx';
import Messages from './components/Messages.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Landing/Home Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Calendar */}
        <Route path="/calendar" element={<Calendar />} />

        {/* Clients Section */}
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/clients/:id" element={<ClientProfilePage />} />

        {/* Messages */}
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Layout>
  );
}

export default App;
