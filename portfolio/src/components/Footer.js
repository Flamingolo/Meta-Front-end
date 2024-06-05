import React from 'react';
import { Container, Row, Col } from "react-bootstrap" 
import logo from '../assets/logos/Flamingo.png'
import githubLogo from '../assets/logos/github-logo.png'
import linkedInLogo from '../assets/logos/linkedin-logo.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        <img src={logo} alt="Logo" id="brandLogo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://github.com/Flamingolo" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt='Link to my GitHub profile'/></a>
                            <a href="https://www.linkedin.com/in/ingo-hark/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedInLogo} alt='Link to my LinkedIn profile'/></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}