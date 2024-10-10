import React from 'react';
import { HERO_CONTENT } from "../constants/index.js";
import { motion } from 'framer-motion'
import Technologies from "./Technologies.jsx";

export const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full'>
                    <div className='flex flex-col items-center justify-center lg:justify-between lg:flex-row'>
                        <motion.div
                            className=''
                            variants={container(0.1)}
                            initial='hidden'
                            animate='visible'
                        >
                            <h1 className='pb-6 mt-2 text-7xl font-thin tracking-tight lg:mt-6 lg:text-16xl'>
                                Artur Bachynskyi
                            </h1>
                            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                                Frontend Developer
                            </span>
                            <p className='my-2 max-w-xl py-6 font-light tracking-tight'>
                                {HERO_CONTENT}
                            </p>
                        </motion.div>
                        <div>
                            <Technologies />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
