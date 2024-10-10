import React from 'react';
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandTypescript } from 'react-icons/tb'
import { SiMongodb, SiRedux } from 'react-icons/si'
import { FaNode, FaDocker } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Technologies = () => {
    return (
        <div>
            <motion.div
                animate={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 0.5, delay: 0.1}}
                className='flex flex-wrap items-center justify-center gap-4'
            >
                <div className='w-[25%] hover:scale-105 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-800 p-4 mb-4'>
                    <RiReactjsLine className='text-4xl text-cyan-400' />
                </div>
                <div className='w-[25%] hover:scale-105 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-800 p-4 mb-4'>
                    <SiRedux className='text-4xl text-purple-500' />
                </div>
                <div className='w-[25%] hover:scale-105 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-800 p-4 mb-4'>
                    <TbBrandTypescript className='text-4xl text-sky-600' />
                </div>
                <div className='w-[25%] hover:scale-105 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-800 p-4'>
                    <FaNode className='text-4xl text-green-500' />
                </div>
                <div className='w-[25%] hover:scale-105 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-800 p-4'>
                    <SiMongodb className='text-4xl text-green-500' />
                </div>
                <div className='w-[25%] hover:scale-105 transition duration-300 text-center justify-center flex rounded-2xl border-2 border-neutral-800 p-4'>
                    <FaDocker className='text-4xl text-blue-700' />
                </div>
            </motion.div>
        </div>
    );
};

export default Technologies;
