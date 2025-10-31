import React, { useState, useEffect } from 'react';
import { PORTFOLIO_PROJECTS } from '../constants.tsx';
import { Project } from '../types.ts';
import Modal from './Modal.tsx';
import { EyeIcon } from '../constants.tsx';

const ProjectDetails: React.FC<{ project: Project }> = ({ project }) => (
    <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-textPrimary">{project.title}</h3>
            <p className="text-textSecondary mt-4">{project.description}</p>
            <ul className="mt-6 space-y-3 border-t border-b border-borderColor py-4">
                {project.details.client && <li className="flex items-center text-sm"><strong className="w-20 font-medium text-textSecondary">Client:</strong> <span className="text-textPrimary">{project.details.client}</span></li>}
                {project.details.date && <li className="flex items-center text-sm"><strong className="w-20 font-medium text-textSecondary">Date:</strong> <span className="text-textPrimary">{project.details.date}</span></li>}
                {project.details.url && <li className="flex items-center text-sm"><strong className="w-20 font-medium text-textSecondary">Website:</strong> <a href={project.details.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{project.details.url}</a></li>}
            </ul>
        </div>
        <div className="lg:w-2/3">
            {project.category === 'Photography' && project.gallery && project.gallery.length > 0 ? (
                <>
                    <h4 className="text-xl font-semibold text-textPrimary mb-4">Gallery</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {project.gallery.map((image, index) => (
                            <img key={index} src={image} alt={`${project.title} gallery ${index + 1}`} className="rounded-lg w-full h-auto object-cover" />
                        ))}
                    </div>
                </>
            ) : (
                <img src={project.imageUrl} alt={project.title} className="rounded-lg w-full" />
            )}
        </div>
    </div>
);

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
    const isPhotography = project.category === 'Photography' && project.gallery && project.gallery.length > 0;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isPhotography) {
            const timer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % project.gallery!.length);
            }, 3000); // Change image every 3 seconds
            return () => clearTimeout(timer);
        }
    }, [currentIndex, isPhotography, project.gallery]);

    const images = isPhotography ? project.gallery! : [project.imageUrl];

    return (
        <div
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-sidebarBg aspect-square"
            onClick={onClick}
        >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${project.title} slide ${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ${isPhotography ? 'transition-opacity' : ''} ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <span className="text-accent flex justify-center"><EyeIcon /></span>
                    <h3 className="text-xl font-semibold text-white mt-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.category}</p>
                </div>
            </div>
        </div>
    );
};

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories = ['All', ...new Set(PORTFOLIO_PROJECTS.map(p => p.category))];
    const filteredProjects = filter === 'All' ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    return (
        <section>
            <h2 className="text-3xl font-bold text-textPrimary relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-accent after:left-0 after:bottom-[-10px] rounded-sm">Portfolio</h2>

            <div className="flex items-center justify-start sm:justify-center md:justify-start gap-2 mt-8 flex-wrap">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`text-sm px-3 py-1 rounded-md transition-colors ${
                            filter === category ? 'text-accent' : 'text-textSecondary hover:text-textPrimary'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title="Project Details">
                {selectedProject && <ProjectDetails project={selectedProject} />}
            </Modal>
        </section>
    );
};

export default Portfolio;