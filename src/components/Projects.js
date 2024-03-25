import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Modern UI/UX Website",
      imgUrl: projImg1,
    },
    {
      title: "Nike E-Commerce Website",
      imgUrl: projImg2,
    },
    {
      title: "Restraunt Menu",
      imgUrl: projImg3,
    },
    {
      title: "YouTube Clone",
      imgUrl: projImg4,
    },
    {
      title: "News Homepage",
      imgUrl: projImg5,
    },
    {
      title: "Pizza Ordering app",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>With a passion for crafting exceptional user experiences, I've honed my skills as a front-end developer through a variety of projects, showcasing my versatility and creativity. These projects demonstrate my proficiency in modern UI/UX design, API integration, database management, and more. Each project represents a unique opportunity to leverage front-end and back-end skills to deliver polished and immersive digital experiences. I'm excited about the opportunity to bring my skills and creativity to your team, helping to turn your vision into reality and create unforgettable digital experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}