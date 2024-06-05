import React from 'react';
import projImg1 from "../assets/logos/UFO-hunter-title.png";
import projImg2 from "../assets/logos/Groupie-Tracker-title.png";
import projImg3 from "../assets/logos/Forum-title.png";
import projImg4 from "../assets/logos/HTMLCSS-title.png"
import { Col, Container, Row, Tab, Modal } from "react-bootstrap";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/logos/color-sharp2.png'

export const Projects = () => {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = (imgUrl) => {
        setSelectedImage(imgUrl);
        setShow(true)
    }


    const projects = [
        {
            title: "UFO Hunter",
            description: "Game Design & JavaScript Basics",
            imgUrl: projImg1,
        },
        {
            title: "Groupie Tracker",
            description: "Web Design & Golang Basics",
            imgUrl: projImg2,
        },
        {
            title: "Forum",
            description: "Full Stack Development",
            imgUrl: projImg3,
        },
        {
            title: "CSS/HTML Course Final Project",
            description: "Web Design & HTML/CSS",
            imgUrl: projImg4,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Projects made from kood/Johvi school & Meta Front-end Developer course</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Tab.Content>
                                <Tab.Pane eventKey={'first'}>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    title={project.title}
                                                    description={project.description}
                                                    imgUrl={project.imgUrl}
                                                    onClick={() => handleShow(project.imgUrl)}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='Background Image'/>
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Body>
                    <img src={selectedImage} alt="Project" style={{width: '100%'}} />
                </Modal.Body>
            </Modal>
        </section>
    )
};