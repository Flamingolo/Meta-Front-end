import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/logos/meter1.svg'
import meter2 from '../assets/logos/meter2.svg'
import meter3 from '../assets/logos/meter3.svg'
import colorSharp from '../assets/logos/color-sharp.png';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Web Development Skill" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Algorithms Skill" />
                                    <h5>Algorithms</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Front End Development Skill" />
                                    <h5>Front End Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Back End Developer Skill" />
                                    <h5>Back End Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Golang Skill" />
                                    <h5>Golang</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="JavaScript Skill" />
                                    <h5>JavaScript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="styling" />
        </section>
      )
}