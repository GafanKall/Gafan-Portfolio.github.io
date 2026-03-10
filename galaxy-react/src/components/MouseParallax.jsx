import React, { useEffect, useState } from "react";

const MouseParallax = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;
            setPosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty("--mouse-x", `${position.x}px`);
        document.documentElement.style.setProperty("--mouse-y", `${position.y}px`);
    }, [position]);

    return null;
};

export default MouseParallax;
