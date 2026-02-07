import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* Add footer content if any was in the original, otherwise just a placeholder or simple copyright */}
            <div className="footer-content" style={{ textAlign: 'center', padding: '20px', color: '#fff' }}>
                <p>&copy; {new Date().getFullYear()} Kemal Gafan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
