import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className='m-8 flex items-center justify-center gap-5 text-2xl'>
            <a href='https://www.linkedin.com/in/artur9/' target='_blank'>
                <FaLinkedin className='cursor-pointer' />
            </a>
            <a href="https://github.com/ArturHellpine" target='_blank'>
                <FaGithub className='cursor-pointer' />
            </a>
            <a href="https://www.instagram.com/artur.bachynskiy/" target='_blank'>
                <FaInstagram className='cursor-pointer' />
            </a>
            <a href="https://t.me/artur_bachynskiy" target='_blank'>
                <FaTelegram className='cursor-pointer' />
            </a>
        </div>
    );
};

export default SocialLinks;
