import React from "react";
import './education.css';

const School = () => {
    return(
        <section id='school'>
            <span className="schoolTitle">My Education</span><br/>
            <div className="schoolBars">
                <div className="schoolBar">
                    <div className="schoolBarText">
                        <h2>Bachelors Degree</h2>
                        <p>I completed my B.Sc in Computer Science at the University of Victoria. I completed this degree in August 2023. From this program I gained a fundamental understanding of Front-End and Back-End Programming, Data Structures and Algorithms, Operating Systems, Database Systems, Internet Protocol Communications and Analysis, information Security and more.
                        </p>
                    </div>
                </div>
                <div className="schoolBar">
                    <div className="schoolBarText">
                        <h2>Masters Degree</h2>
                        <p>I am currently completing my M. Eng in Telecommunications and Information Security at the Univeristy of Victoria as well. I am on track to finish by August 2024. With the specialization in Information Security I have learned about Firewall construction and maintenance, IoT systems, and more. With this I hope to pursue a career at the intersection of cybersecurity and software development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default School;