import React, { useRef, useState, memo, useEffect } from 'react';
import projectData from './projects.json';
import './ProjectComponent.css';

const ProjectComponent = ({ projectName }) => {
    const containerRef = useRef(null);
    const [slide, setSlide] = useState(true);
    const project = projectData[projectName];
    
    const onWheel = (e) => {
        const { deltaY } = e;
        const el = containerRef.current;
        if (!el) return; // typescript 일때 이거 아니면 에러;;;

        if (slide) {
            console.log('Handling slide');
            setSlide(false);
            el.scrollTo({
                left: el.scrollLeft + deltaY * 5, // Adjust the multiplier to control the scroll speed
                behavior: 'smooth',
            });
        }
    };
    // image 컴포넌트 (containerRef) => preventDefault 활성
    // onWheel
    // 이 useEffect가 없을시 이미지컴포넌트 위에 커서가 위치할때 수직스크롤 동시 적용
    useEffect(() => {
        // 이벤트리스너

        const handleWheel = (e) => {
            const el = containerRef.current;
            if (el && el.contains(e.target)) {
                // 수평 스크롤이 필요한 경우에만 preventDefault 적용
                // scrollwidth => 내부 요소 너비
                // clientwidth => 해당 컨테이너 너비
                console.log('el.scrollWidth',el.scrollWidth)
                console.log('el.clientWidth', el.clientWidth)
                e.preventDefault();
                onWheel(e);
                //엇.. 왜 안먹지
                // 나중에 다시 시도 <= 
                //if (el.scrollWidth > el.clientWidth) {
                //    e.preventDefault();
                //    onWheel(e);
                //}
            }
        };
        // 윈도우 적용 <= passive false
        // preventDefault 활성하려면 필요 
        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);


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
