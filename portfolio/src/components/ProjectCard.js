import React from 'react';
import { Col  } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, onClick}) => {
    return (
        <Col sm={6} md={4} onClick={onClick}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt='Title Card for Project'/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
};