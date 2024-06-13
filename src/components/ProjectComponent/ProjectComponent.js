import React, { useRef, useState, memo } from 'react';
import projectData from './projects.json';
import './ProjectComponent.css';

const ProjectComponent = ({ projectName }) => {
    const containerRef = useRef(null);
    const [slide, setSlide] = useState(true);
    const project = projectData[projectName];

    if (!project) {
        return (
            <div>
                Project not found!!! projectName prop: {projectName}
            </div>
        );
    }

    const getImagePath = (imagePath) => {
        try {
            return require(`${imagePath}`);
        } catch (err) {
            console.error(`Image not found: ${imagePath}`, err);
            return null;
        }
    };

    const onWheel = (e) => {
        const { deltaY } = e;
        const el = containerRef.current;
        if (!el) return; // typescript 일때 이거 아니면 에러;;;

        if (slide) {
            setSlide(false);
            el.scrollTo({
                left: el.scrollLeft + deltaY * 3, // Adjust the multiplier to control the scroll speed
                behavior: 'smooth',
            });
            setTimeout(() => setSlide(true), 10); 
        }
    };

    return (
        <div className='ProjectComponent'>
            <div className='short-description'>
                - {project.short_description}
            </div>
            <div className='period'>
                - {project.period}
            </div>
            <div className='callout'>
                {project.callout}
            </div>
            <div
                className='project-images'
                onWheel={onWheel}
                ref={containerRef}
                style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
            >
                {project.images.map((image, imgIndex) => {
                    const imgSrc = getImagePath(image);
                    return imgSrc ? <img key={imgIndex} src={imgSrc} alt={`${projectName} Overview`} style={{ display: 'inline-block' }} /> : null;
                })}
            </div>
            <div className='description'>
                <div className='section-title'>Description</div>
                <div>
                    {project.description.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                            {line}<br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className='role'>
                <div className='section-title'>Role</div>
                <div>
                    {project.role.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                            {line}<br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className='tools'>
                <div className='section-title'>Tools</div>
                <ul>
                    {project.tools.map((tool, toolIndex) => (
                        <li key={toolIndex}>
                            <img src={tool.tool_image} alt={tool.tool_name} width="30" height="30" />
                            <span>{tool.tool_name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='takeaways'>
                <div className='section-title'>Takeaways</div>
                <div>
                    {project.takeaways.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                            {line}<br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(ProjectComponent);
