import React from 'react';
import { Wind, Flame, Droplets } from 'lucide-react';

const DoshaRadarChart = ({ data, theme }) => {
    const size = 120;
    const center = size / 2;
    const points = Object.values(data).map((value, i, arr) => {
      const angle = (i / arr.length) * 2 * Math.PI - Math.PI / 2;
      const x = center + (value / 100) * center * Math.cos(angle);
      const y = center + (value / 100) * center * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  
    return (
        <div className="flex flex-col items-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {[0.25, 0.5, 0.75, 1].map(scale => (
                    <polygon key={scale} points={Array.from({length: 3}).map((_, i) => `${center + center * scale * Math.cos(i*2*Math.PI/3 - Math.PI/2)},${center + center * scale * Math.sin(i*2*Math.PI/3- Math.PI/2)}`).join(' ')} fill="none" stroke="#E0E0E0" strokeWidth="1"/>
                ))}
                <polygon points={points} fill="rgba(197, 165, 130, 0.4)" stroke="#C5A582" strokeWidth="2" />
            </svg>
            <div className="flex justify-around w-full mt-2 text-xs font-semibold">
                <span className="text-blue-500 flex items-center gap-1"><Wind size={14}/>Vata</span>
                <span className="text-red-500 flex items-center gap-1"><Flame size={14}/>Pitta</span>
                <span className="text-green-500 flex items-center gap-1"><Droplets size={14}/>Kapha</span>
            </div>
        </div>
    );
};

export default DoshaRadarChart;
