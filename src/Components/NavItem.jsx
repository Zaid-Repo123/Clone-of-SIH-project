import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ icon: Icon, text, path, isCollapsed, theme }) => {
    const location = useLocation();
    const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
    return (
        <Link to={path} title={text} className={`w-full flex items-center h-12 px-4 rounded-lg transition-all duration-300 ease-in-out group ${isActive ? `bg-gradient-to-r from-[#F9F3EE] to-white/50 ${theme.highlight} shadow-inner font-bold` : `${theme.secondary} hover:bg-gray-100 hover:text-[#B8860B]`}`}>
            <Icon className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'mx-auto' : 'mr-4'} group-hover:scale-110`} />
            <span className={`font-semibold transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>{text}</span>
        </Link>
    );
};

export default NavItem;
