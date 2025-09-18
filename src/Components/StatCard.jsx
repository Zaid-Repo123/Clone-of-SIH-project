import React from 'react';

const StatCard = ({ label, value, icon: Icon, theme }) => (
    <div className="flex-1 p-4 bg-gray-50/50 rounded-lg flex items-center gap-4">
        <div className={`p-2 rounded-full ${theme.highlightBg}`}><Icon className={`w-5 h-5 ${theme.highlight}`} /></div>
        <div>
            <p className={`text-sm ${theme.secondary}`}>{label}</p>
            <p className={`font-bold ${theme.primary}`}>{value}</p>
        </div>
    </div>
);

export default StatCard;
