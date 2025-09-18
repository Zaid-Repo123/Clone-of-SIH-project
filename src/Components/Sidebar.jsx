import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Menu, ChevronLeft } from 'lucide-react';
import NavItem from './NavItem';

const Sidebar = ({ isCollapsed, setIsCollapsed, theme }) => {
    const navItems = [
        { icon: theme.icons.LayoutDashboard, text: "Dashboard", path: "/" },
        { icon: theme.icons.Users, text: "Clients", path: "/clients" },
        { icon: theme.icons.Calendar, text: "Calendar", path: "/calendar" },
        { icon: theme.icons.MessageSquare, text: "Messages", path: "/messages" },
        { icon: theme.icons.ClipboardList, text: "Meal Plans", path: "/meal-plans" },
        { icon: theme.icons.BarChart3, text: "Analytics", path: "/analytics" },
        { icon: theme.icons.BrainCircuit, text: "AI Tools", path: "/ai-tools" },
    ];
    return (
        <aside className={`fixed top-0 left-0 h-full ${theme.sidebar} border-r border-white/20 flex flex-col transition-all duration-300 ease-in-out ${isCollapsed ? 'w-24' : 'w-64'} shadow-2xl`}>
             <div className="flex items-center justify-between p-4 h-20">
                {!isCollapsed && <h1 className={`text-2xl font-bold ${theme.highlight} tracking-wider font-serif`}>Ayu-Aahar</h1>}
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
                    {isCollapsed ? <Menu className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
                </button>
            </div>
            <nav className="flex-1 px-4 space-y-3 mt-6">
                {navItems.map(item => <NavItem key={item.path} {...item} isCollapsed={isCollapsed} theme={theme} />)}
            </nav>
            <div className="p-4 border-t border-gray-200/50">
                <Link to="/logout" title="Logout" className={`w-full flex items-center h-12 px-4 rounded-lg transition-all duration-300 ${theme.secondary} hover:bg-gray-100`}>
                     <LogOut className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'mx-auto' : 'mr-4'}`} />
                    {!isCollapsed && <span className="font-semibold">Logout</span>}
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
