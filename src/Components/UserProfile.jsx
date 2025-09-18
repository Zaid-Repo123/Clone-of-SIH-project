import React from 'react';

const UserProfile = ({ theme }) => (
    <div className="flex items-center gap-3 cursor-pointer group">
        <img src="https://i.imgur.com/5A10t19.png" alt="Dr. Adam Vasylenko" className="w-11 h-11 rounded-full border-2 border-[#D4A57F] group-hover:scale-105 transition-transform" />
        <div>
            <p className={`font-bold ${theme.primary} transition-colors group-hover:${theme.highlight}`}>Dr. Adam Vasylenko</p>
            <p className={`text-sm ${theme.secondary}`}>Dietician</p>
        </div>
    </div>
);

export default UserProfile;
