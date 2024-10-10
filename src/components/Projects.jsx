import React, { useState } from 'react';
import { PROJECTS } from "../constants/index.js";
import { FaGithub, FaExternalLinkAlt  } from 'react-icons/fa'

const Projects = () => {
    const [imageHover, setImageHover] = useState(false)

    const handleMouse = (project) => {
        project.isImageHover = true
        setImageHover(true)
    }

    const onLeave = (project) => {
        project.isImageHover = false
        setImageHover(false)
    }

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl font-medium tracking-normal'>Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <img
                                key={index}
                                onMouseEnter={() => handleMouse(project)}
                                onMouseLeave={() => onLeave(project)}
                                className='hover:scale-125 transition duration-500 mb-4 rounded-xl lg:w-[220px] lg:h-[120px] w-[220px] h-[100px]'
                                src={project.isImageHover ? project.image[1] : project.image[0]}
                                alt="image"
                            />
                            <div className='flex flex-row items-center w-max pl-[3px]'>
                                <a
                                    className='mb-4 mr-[57px] text-center justify-center flex text-[11px] flex-row w-max items-center border border-neutral-800 px-3 py-2 rounded-md'
                                    href={project.githubLink}
                                    target='_blank'
                                >
                                    View the code
                                    <FaGithub className='ml-1.5' />
                                </a>
                                <a
                                    className={`mb-4 text-center justify-center flex text-[11px] flex-row w-max items-center border border-neutral-800 px-3 py-2.5 rounded-md ${!project.deployLink && 'text-neutral-800'}`}
                                    href={project?.deployLink}
                                    target='_blank'
                                >
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>

                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
