import React, { useEffect } from 'react';

const PlaceholderView = ({ title, theme }) => {
    useEffect(() => {
        console.log(`Rendering PlaceholderView for title: ${title}`);
    }, [title]);

    return(
    <>
        <div className="p-8 h-[calc(100vh-104px)] flex items-center justify-center">
            <div className="text-center">
                <h1 className={`text-5xl font-bold ${theme.primary} font-serif`}>{title}</h1>
                <p className={`mt-4 text-xl ${theme.secondary}`}>This page is under construction.</p>
                <p className={`${theme.accent} mt-2`}>More amazing features coming soon!</p>
            </div>
        </div>
    </>
    );
};

export default PlaceholderView;
