import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsActive(!isActive);
    const closeMenu = () => setIsActive(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skill', href: '#skill' },
        { name: 'Experience', href: '#experience' },
        { name: 'Project', href: '#project' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`navbar ${scrolled ? 'scrolled glass' : ''}`}
        >
            <div className="nav-content container">
                <motion.h1
                    whileHover={{ scale: 1.05 }}
                    className="brand"
                >
                    Kemal <span>Gafan</span>
                </motion.h1>

                <div className="nav-links-desktop">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{ y: -2 }}
                            className="nav-item"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    {isActive ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="nav-links-mobile glass"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="nav-item-mobile"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
