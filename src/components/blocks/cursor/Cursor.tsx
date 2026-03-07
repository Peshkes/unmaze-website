import React, { useEffect, useRef, useState, useCallback } from 'react';
import style from './cursor.module.css';

const Cursor = () => {
    const circleRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState({
        cursorSize: 20,
        isDesktop: window.innerWidth > 1220,
        circlePosition: { x: 0, y: 0 },
        mousePosition: { x: 0, y: 0 }
    });

    const handleResize = useCallback(() => {
        const isDesktop = window.innerWidth > 1024;
        if (isDesktop !== state.isDesktop) {
            setState((prevState) => ({ ...prevState, isDesktop }));
        }
    }, [state.isDesktop]);

    const handleMouseEnterLeave = useCallback((event: MouseEvent) => {
        if ((event.target as Element).matches('button, a, .clickable, .button, .arrow')) {
            const cursorSize = event.type === 'mouseover' ? 100 : 20;
            if (cursorSize !== state.cursorSize) {
                setState((prevState) => ({ ...prevState, cursorSize }));
            }
        }
    }, [state.cursorSize]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('mouseover', handleMouseEnterLeave);
        window.addEventListener('mouseout', handleMouseEnterLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mouseover', handleMouseEnterLeave);
            window.removeEventListener('mouseout', handleMouseEnterLeave);
        };
    }, [handleResize, handleMouseEnterLeave]);

    useEffect(() => {
        let circleX = state.circlePosition.x;
        let circleY = state.circlePosition.y;

        const handleMouseMove = (event: MouseEvent) => {
            setState((prevState) => ({
                ...prevState,
                mousePosition: { x: event.clientX, y: event.clientY }
            }));
        };

        const animate = () => {
            if (circleRef.current) {
                circleX += ((state.mousePosition.x - state.cursorSize / 2) - circleX) * 0.07;
                circleY += ((state.mousePosition.y - state.cursorSize / 2) - circleY) * 0.07;
                circleRef.current.style.transform = `translate(${circleX}px, ${circleY}px)`;
                setState((prevState) => ({
                    ...prevState,
                    circlePosition: { x: circleX, y: circleY }
                }));

                requestAnimationFrame(animate);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [state.cursorSize, state.mousePosition]);

    if (!state.isDesktop) {
        return null;
    }

    return (
        <div
            ref={circleRef}
            className={style.inversionCircle}
            style={{ width: state.cursorSize + 'px', height: state.cursorSize + 'px' }}
        />
    );
};

export default Cursor;
