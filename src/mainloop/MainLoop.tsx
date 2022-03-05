import React, { useState, useEffect } from 'react';


export function MainLoop() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setTime((time) => (time +1)), (1000/30));
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>{time}</div>
    )
}

