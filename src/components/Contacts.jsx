import React from 'react';
import { CONTACT } from "../constants/index.js";
import { FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import SocialLinks from "./SocialLinks.jsx";

const Contacts = () => {
    return (
        <div className='border-b border-neutral-900'>
            <h2 className='my-10 text-center text-4xl font-medium tracking-normal'>
                Get in Touch
            </h2>
            <div className='tracking-tighter text-neutral-400'>
                <p className='my-2 flex items-center justify-center'>
                    <FaPhone className='mr-2' />
                    {CONTACT.phoneNo}
                </p>
                <p className='flex items-center justify-center'>
                    <CgMail className='mr-2' />
                    {CONTACT.email}
                </p>
            </div>
            <SocialLinks />
        </div>
    );
};

export default Contacts;
