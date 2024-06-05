import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'
import logo from '../assets/logos/Flamingo.png'
import githubLogo from '../assets/logos/github-logo.png'
import linkedInLogo from '../assets/logos/linkedin-logo.png'
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
       const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true)
            } else (
                setScrolled(false)
            )
       } 

       window.addEventListener('scroll', onScroll)

       return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <Navbar className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <div className='logoPic'>
            <img src={logo} alt='A personal logo made by Ingo Hark' id='brandLogo'/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}>
                Home
            </Nav.Link>
            <Nav.Link href="#skills"
            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('skills')}>
                Skills
            </Nav.Link>
            <Nav.Link href='#projects'
            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('projects')}>
                Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://github.com/Flamingolo' target='_blank' rel="noopener noreferrer">
                  <img src={githubLogo} alt='Link to my Github account'/></a>
                <a href='https://www.linkedin.com/in/ingo-hark/' target='_blank' rel='"noopener noreferrer"'>
                  <img src={linkedInLogo} alt='Link to my LinkedIn account'/></a>
            </div>
            <HashLink to="#connect">
            <button className='vvd'><span>Contact Me</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

