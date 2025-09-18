import React from 'react';

const Header = ({ title, theme, UserProfile, Search }) => {
    return (
        <header className="flex items-center justify-between p-6 bg-transparent">
            <h1 className={`text-4xl font-bold ${theme.primary} font-serif`}>{title}</h1>
            <div className="flex items-center gap-6">
                <div className="relative">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.secondary}`} />
                    <input type="text" placeholder="Search clients, plans..." className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-full w-64 h-11 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#D4A57F] transition-all" />
                </div>
                <UserProfile theme={theme} />
            </div>
        </header>
    );
};

export default Header;
