import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Mobile sidebar toggle functions
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuButton = document.getElementById('menuButton');

    function openSidebar() {
      if (sidebar && overlay) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('opacity-0', 'invisible');
        overlay.classList.add('opacity-100', 'visible');
      }
    }
    
    function closeSidebar() {
      if (sidebar && overlay) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.remove('opacity-100', 'visible');
        overlay.classList.add('opacity-0', 'invisible');
      }
    }

    // Event listeners
    if (menuButton) {
      menuButton.addEventListener('click', openSidebar);
    }
    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    // Cleanup function
    return () => {
      if (menuButton) {
        menuButton.removeEventListener('click', openSidebar);
      }
      if (overlay) {
        overlay.removeEventListener('click', closeSidebar);
      }
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  // Helper function to check if a route is active
  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  // Navigation items
  const navigationItems = [
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#4a403a]">
          <rect width="7" height="9" x="3" y="3" rx="1"></rect>
          <rect width="7" height="5" x="14" y="3" rx="1"></rect>
          <rect width="7" height="9" x="14" y="12" rx="1"></rect>
          <rect width="7" height="5" x="3" y="16" rx="1"></rect>
        </svg>
      )
    },
    {
      path: '/calendar',
      label: 'Calendar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#4a403a]">
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
      )
    },
    {
      path: '/messages',
      label: 'Messages',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#4a403a]">
          <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
        </svg>
      )
    },
    {
      path: '/clients',
      label: 'Clients',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#4a403a]">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      path: '/meal-plans',
      label: 'Meal Plans',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#4a403a]">
          <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
          <path d="M6 17h12"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-40 border-b bg-[#f9f8f4]/80 backdrop-blur-sm border-[#e6d3b3]/60">
        <div className="px-4 h-14 flex items-center justify-between">
          <button 
            id="menuButton" 
            className="inline-flex items-center justify-center rounded-md border px-2.5 py-2 hover:bg-white/80 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] bg-[#f0f2e9] border-[#e6d3b3]/60 transition-all duration-200 hover:scale-105" 
            aria-label="Open sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg tracking-tight font-bold">AyuAahar</span>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-black/10">
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=128&h=128&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      <div id="overlay" className="fixed inset-0 z-30 bg-black/30 opacity-0 invisible md:hidden transition-opacity duration-300"></div>

      {/* Sidebar */}
      <aside id="sidebar" className="fixed inset-y-0 left-0 z-40 w-72 border-r shadow-sm transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-out bg-[#f0f2e9]/90 backdrop-blur-sm border-[#e6d3b3]/60">
        <div className="h-full flex flex-col">
          {/* Logo Section */}
          <div className="h-16 px-5 flex items-center border-b border-[#e6d3b3]/60">
            <Link to="/" className="flex items-baseline gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium tracking-tight border-[#e6d3b3]/60 bg-[#f9f8f4]">
                AA
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl font-bold tracking-tight">AyuAahar</span>
                <span className="text-xs text-gray-500">Dietician Panel</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto pt-4 pr-3 pb-4 pl-3">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a3b98b] ${
                      isActiveRoute(item.path)
                        ? 'ring-1 ring-[#a3b98b]/50 hover:ring-[#a3b98b]/70 bg-[#a3b98b]/20 text-[#4a403a]'
                        : 'text-gray-700 hover:bg-[#4a403a]/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section - User Profile */}
          <div className="border-t pt-3 pb-3 border-[#e6d3b3]/60">
            <div className="px-3">
              <div className="flex items-center gap-3 p-3 rounded-md hover:bg-[#4a403a]/5 transition-colors">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-black/10">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&h=128&fit=crop" alt="Dr. Adam Vasylenko" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 leading-tight">
                  <div className="text-sm font-medium text-[#4a403a]">Dr. Adam Vasylenko</div>
                  <div className="text-xs text-gray-500">Dietician</div>
                </div>
              </div>
              <a href="#" className="mt-2 group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16,17 21,12 16,7"></polyline>
                  <line x1="21" x2="9" y1="12" y2="12"></line>
                </svg>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;