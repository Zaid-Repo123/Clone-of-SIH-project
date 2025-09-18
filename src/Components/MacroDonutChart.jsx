import React from 'react';

const MacroDonutChart = ({ data, theme }) => {
    const size = 120;
    const strokeWidth = 15;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    return (
        <div className="relative w-32 h-32">
            <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
                <circle cx={size/2} cy={size/2} r={radius} fill="transparent" stroke="#F3E9DD" strokeWidth={strokeWidth} />
                {Object.entries(data).map(([key, value]) => {
                    const dasharray = `${(value / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -offset;
                    offset += (value / 100) * circumference;
                    const colors = { protein: '#8D6E63', carbs: '#D4A57F', fat: '#BDBDBD' };
                    return <circle key={key} cx={size/2} cy={size/2} r={radius} fill="transparent" stroke={colors[key]} strokeWidth={strokeWidth} strokeDasharray={dasharray} strokeDashoffset={strokeDashoffset} />;
                })}
            </svg>
            <div className={`absolute inset-0 flex flex-col items-center justify-center ${theme.primary} font-bold`}>
                <span className="text-2xl">2100</span>
                <span className="text-xs">kcal</span>
            </div>
        </div>
    );
};

export default MacroDonutChart;
