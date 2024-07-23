import React, {useEffect, useRef, useState} from 'react';
import style from './cursor.module.css';

const Cursor = () => {
    const circleRef = useRef<HTMLDivElement>(null);
    const [cursorSize, setCursorSize] = useState(20);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1220);
    const positionRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
        };

        const handleMouseEnter = (event: MouseEvent) => {
            if ((event.target as Element).matches('button, a, .clickable, .button')) {
                setCursorSize(100);
            }
        };

        const handleMouseLeave = (event: MouseEvent) => {
            if ((event.target as Element).matches('button, a, .clickable, .button')) {
                setCursorSize(20);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mouseover', handleMouseEnter);
        window.addEventListener('mouseout', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mouseover', handleMouseEnter);
            window.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            positionRef.current = {
                x: event.clientX - cursorSize / 2,
                y: event.clientY - cursorSize / 2,
            };
        };

        const updatePosition = () => {
            if (circleRef.current) {
                circleRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
            }
            requestRef.current = requestAnimationFrame(updatePosition);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestRef.current = requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [cursorSize]);

    if (!isDesktop) {
        return null;
    }

    return (
        <div ref={circleRef} className={style.inversionCircle} style={{width: cursorSize + 'px', height: cursorSize + 'px'}}/>
    );
};

export default Cursor;
