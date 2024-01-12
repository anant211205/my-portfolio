import React from 'react'
import { Carousel } from 'react-responsive-carousel';
// import project1 from "../assets/project1.png"; 
// import project2 from "../assets/project2.png"; 
import "../styles/project.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/project.json";


const Projects = () => {
  return (
    <>
        <div id="projects">
            <h2 className='heading'>MY PROJECTS</h2>
            <section>
                    <Carousel
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    interval={1500}
                    infiniteLoop={true}
                    autoPlay={true}
                    stopOnHover={true}
                    >
                        {
                            data.projects.map(i => (
                                <div key={i.title} className='workitem'>
                                    <img className='project-img' src={i.imgSrc} alt={i.title} />
                                    
                                        <h3 className='project-title'>{i.title}</h3>
                                        {/* <p className='desc'>{i.description}</p>
                                        <p className='desc'>{i.techStack}</p> */}
                                </div>
                            ))
                        }
                    </Carousel>
            </section>
        </div>
    </>
  )
}

export default Projects
