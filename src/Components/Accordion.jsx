import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ icon: Icon, title, children, defaultOpen = true, theme }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200/80 rounded-xl transition-all duration-300 bg-white/50">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${theme.accent}`} />
                    <h3 className={`font-semibold ${theme.primary}`}>{title}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''} ${theme.secondary}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="p-4 pt-0 text-sm text-gray-600">{children}</div>
            </div>
        </div>
    );
};

export default Accordion;
