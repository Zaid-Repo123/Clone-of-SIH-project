import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      {/* Custom CSS Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }
        #chart-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-line 2s ease-out forwards;
        }

        .card-interactive:hover {
          box-shadow: 0 0 50px -12px rgba(163, 185, 139, 0.25);
          border-color: rgba(163, 185, 139, 0.3);
        }
      `}</style>

      <div className="bg-[#f9f8f4] text-[#4a403a] antialiased min-h-screen font-sans">
        <Navbar />
        
        {/* Main Content Area */}
        <div className="flex-1 md:pl-72">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;