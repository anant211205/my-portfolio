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
            <h2>MY PROJECTS</h2>
            <section>
                <article>
                    <Carousel>
                        {
                            data.projects.map(i => (
                                <div key={i.title} className='workitem'>
                                    <img src={i.imgSrc} alt={i.title} />
                                    <aside>
                                        <h3>{i.title}</h3>
                                        <p>{i.description}</p>
                                        <p>{i.techStack}</p>
                                    </aside>
                                </div>
                            ))
                        }
                    </Carousel>
                </article>
            </section>
        </div>
    </>
  )
}

export default Projects
