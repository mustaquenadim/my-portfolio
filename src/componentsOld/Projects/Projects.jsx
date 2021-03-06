import React, { useEffect, useState } from 'react';
import projects from '../../Data/Projects.json';

const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        setProject(projects);
        console.log(projects[0].technology);
    }, []);
    return (
        <div>
            <div
                style={{ height: '50vh' }}
                className='banner d-flex justify-content-center align-items-center'
            >
                <div>
                    <h1 className='text-white text-center'>Projects</h1>
                </div>
            </div>
            <div className='container py-5'>
                {project.map((card) => (
                    <div className='card mb-3'>
                        <div className='row g-0'>
                            <div className='col-md-4 scroll'>
                                <img
                                    className='w-100 ss'
                                    src={card.image}
                                    alt='...'
                                />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h4 className='card-title'>
                                        {card.projectName}
                                    </h4>
                                    <h6>Description</h6>
                                    <p className='card-text'>
                                        {card.description}
                                    </p>
                                    {card.technology.map((tech) => (
                                        <button className='btn btn-primary m-1'>
                                            {tech}
                                        </button>
                                    ))}
                                    <br />
                                    <a
                                        href={card.liveSite}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <button className='btn btn-success m-1'>
                                            Live Site
                                        </button>
                                    </a>
                                    <a
                                        href={card.code}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <button className='btn btn-success m-1'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
