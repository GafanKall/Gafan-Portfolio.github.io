import React, { useEffect, useRef } from 'react';
import '../styles/cursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const dotCount = 20;
    const sineDots = Math.floor(dotCount * 0.3);
    const width = 20;
    const dotsRef = useRef([]);
    const mousePosRef = useRef({ x: 0, y: 0 });
    const idleRef = useRef(false);
    const lastFrameRef = useRef(0);
    const idleTimerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const dots = [];

        class Dot {
            constructor(i) {
                this.index = i;
                this.angleSpeed = 0.05;
                this.x = 0;
                this.y = 0;
                this.scale = 1 - 0.05 * i;
                this.range = width / 2 - width / 2 * this.scale + 2;
                this.element = document.createElement("span");
                this.element.style.transform = `scale(${this.scale})`;
                cursor.appendChild(this.element);
            }

            lock() {
                this.lockX = this.x;
                this.lockY = this.y;
                this.angleX = Math.PI * 2 * Math.random();
                this.angleY = Math.PI * 2 * Math.random();
            }

            draw() {
                if (!idleRef.current || this.index <= sineDots) {
                    this.element.style.left = `${this.x}px`;
                    this.element.style.top = `${this.y}px`;
                } else {
                    this.angleX += this.angleSpeed;
                    this.angleY += this.angleSpeed;
                    this.y = this.lockY + Math.sin(this.angleY) * this.range;
                    this.x = this.lockX + Math.sin(this.angleX) * this.range;
                    this.element.style.left = `${this.x}px`;
                    this.element.style.top = `${this.y}px`;
                }
            }
        }

        for (let i = 0; i < dotCount; i++) {
            dots.push(new Dot(i));
        }
        dotsRef.current = dots;

        const onMouseMove = (e) => {
            mousePosRef.current.x = e.clientX - width / 2;
            mousePosRef.current.y = e.clientY - width / 2;
            resetIdleTimer();
        };

        const resetIdleTimer = () => {
            clearTimeout(idleTimerRef.current);
            idleRef.current = false;
            idleTimerRef.current = setTimeout(() => {
                idleRef.current = true;
                dots.forEach(dot => dot.lock());
            }, 150);
        };

        window.addEventListener("mousemove", onMouseMove);

        const updateDots = (delta) => {
            let x = mousePosRef.current.x;
            let y = mousePosRef.current.y;

            dots.forEach((dot, index, array) => {
                const next = array[index + 1] || array[0];
                dot.x = x;
                dot.y = y;
                dot.draw();
                if (!idleRef.current || index <= sineDots) {
                    let dx = (next.x - dot.x) * 0.35;
                    let dy = (next.y - dot.y) * 0.35;
                    x += dx;
                    y += dy;
                }
            });
        };

        const render = (ts) => {
            let delta = ts - lastFrameRef.current;
            lastFrameRef.current = ts;
            updateDots(delta);
            requestAnimationFrame(render);
        };

        const animId = requestAnimationFrame(render);

        // Add hover effect listeners
        const hoverElements = document.querySelectorAll("a, button, input, select, textarea, h1, h2, h3, h4, h5, h6, p, small, .skill__card, .hamburger");
        const addHover = () => document.body.classList.add("hovering");
        const removeHover = () => document.body.classList.remove("hovering");

        hoverElements.forEach(el => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animId);
            clearTimeout(idleTimerRef.current);
            dots.forEach(dot => {
                if (cursor && cursor.contains(dot.element)) {
                    cursor.removeChild(dot.element);
                }
            });
            hoverElements.forEach(el => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
                        0 1 0 0 0  
                        0 0 1 0 0  
                        0 0 0 35 -15" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <div id="cursor" className="Cursor" ref={cursorRef}></div>
        </>
    );
};

export default CustomCursor;
