import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CurrentRouteLogger = () => {
    const location = useLocation();
    useEffect(() => {
        console.log(`Current URL Path: ${location.pathname}`);
    }, [location]);
    return null;
};

export default CurrentRouteLogger;
