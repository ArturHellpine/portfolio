import React from 'react';
import SocialLinks from "./SocialLinks.jsx";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a
                    href='https://drive.google.com/file/d/1p0Q5eLhArShrxIFCP4h7OW7BnIRvbocR/view?usp=drive_link'
                    target='_blank'
                    className='text-2xl font-thin tracking-tight'
                >
                    Download CV
                </a>
            </div>
            <SocialLinks />
        </nav>
    );
};

export default Navbar;
