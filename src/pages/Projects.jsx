import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="Developed a fully functional watch e-commerce website using the MERN stack, showcasing proficiency in full-stack web development and project execution. Implemented features including real-time inventory updates, detailed product pages, and order tracking, demonstrating expertise in front-end and back-end development."
              ghLink="https://github.com/dhanasekar1418/WatchDeploy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="To Cook"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts with suggestions for new users to follow. Users can only view posts from their followed users and can only engage . The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/dhanasekar1418/to-cook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Expense Tracker"
              description="Created a comprehensive client data and expense management system for businesses, allowing users to seamlessly manage account details with functionalities for addition, modification, and deletion. Leveraged JavaFX for the frontend, JDBC for connectivity, and MySQL for the database, ensuring robust functionality and data integrity."
              ghLink="https://github.com/dhanasekar1418/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="IPL Clone Website"
              description="Developed a fully functional clone of the Indian Premier League (IPL) website using the MERN stack, showcasing proficiency in full-stack web development and project execution. Implemented features including live match updates, player profiles, and team statistics, demonstrating expertise in front-end and back-end development."
              ghLink="https://github.com/dhanasekar1418/IPL"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects