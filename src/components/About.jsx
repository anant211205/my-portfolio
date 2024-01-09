import "../styles/about.css";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Card from "./Card";

const About = () => {
  const data = [
    {
      id: 0,
      description:
        "Passionate tech enthusiast with a knack for innovation and problem-solving. Eager to connect with like-minded professionals and explore opportunities to contribute to the dynamic tech landscape. Experienced in developing React projects, showcasing expertise in frontend technologies. Thrives on tackling challenges and continually evolving in the ever-changing world of technology. Excited about future collaborations and impactful contributions.",
    },
    {
      id: 0,
      description:
        "Embracing the challenge of solving complex computational problems through systematic understanding of data structures. Committed to achieving expertise in DSA for creating optimized, scalable, and innovative software solutions. Excited about the continuous learning journey and its transformative impact on coding proficiency. ",
    },
  ];


  return (
    <>
      <div id="about">
        <section className="about-top" key={data.id}>
          <span className="heading-about">About Me</span>
          {data.map((index) => {
            return <p className="desc">{index.description}</p>;
          })}
        </section>
        {/* <section className="about-bottom"> */}
           
        {/* </section> */}
      </div>
    </>
  );
};

export default About;
