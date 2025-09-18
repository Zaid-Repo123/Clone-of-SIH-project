import React from 'react';

const NutrientBar = ({ name, value, target, theme }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <span className={`text-sm font-semibold ${theme.accent}`}>{name}</span>
            <span className={`text-xs ${theme.secondary}`}>{value} / {target} mg</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
            <div style={{ width: `${(value/target)*100}%`, backgroundColor: theme.highlightStrong }} className="h-2 rounded-full"></div>
        </div>
    </div>
);

export default NutrientBar;
