import React from "react";
import './experience.css';

const Work = () => {
    return(
        <section id='work'>
            <span className="workTitle">My Experience</span><br/>
            <div className="workBars">
                <div className="workBar">
                    <div className="workBarText">
                        <h2>Cybersecurity Project Coordinator, First West Credit Union</h2>
                        <p>Currently working Part-time with the First West Credit Union as a Cybersecurity Project Coordinator to evaluate data and present metrics evaluating performance and risk for cybersecurity of the business.
                        </p>
                    </div>
                </div>
                <div className="workBar">
                    <div className="workBarText">
                        <h2>Teaching Assistant, University of Victoria</h2>
                        <p>For CSC 360: Database systems, I worked closely with the professor to advise, mark and evaluate assignments and informal presentations and invigilate exams for a database systems course which taught students how to utilize PostgresSQL
                        </p>
                    </div>
                </div>
                <div className="workBar">
                    <div className="workBarText">
                        <h2>Laboratory Instructor, University of Victoria</h2>
                        <p>Experience working in a post-secondary school environment. Assisted in teaching a Computer Architecture Lab. In this lab, students are learning to develop Assembly programs on ARM Cross-Assemblers. My day to day tasks include, assisting students when bugs are encountered in order to allow them to problem solve and run their code. Educate students on Assembly programming. Mark In-Lab participation and Lab Reports.
                        </p>
                    </div>
                </div>
                <div className="workBar">
                    <div className="workBarText">
                        <h2>CO-OP Curriculum Development, Oak and Orca Education Association</h2>
                        <p>Experience working in a school environment which has both in-person and online learning environments. Curriculum Development takes priority in which I construct entire courses, assignments, educational documents and exams enforcing critical thinking. Experience utilizing NUMBAS exam building software coding with javascript and JME scripts to construct Math assessments, graphs and marking algorithms. Responsible for marking assignments and exams of students in computer science and math courses in which I give critical feedback to further development and understanding. Given opportunities to interact with the students through tutoring and workshops developing adaptive teaching styles and communication. Maintaining the confidentiality of student grades and personal information throughout my time there.
                        </p>
                    </div>
                </div>
                <div className="workBar">
                    <div className="workBarText">
                        <h2>Sales Associate, Shaw Communications</h2>
                        <p>Working in the telecommunications industry allowed me to gain a fundamental understanding of how telecom services are distributed throughout Canada. Maintaining the confidentiality of the customers and abiding by security policies enforced to protect the customer's information. Provided service to a large variety of customers prioritizing their needs for essential services such as internet and phone service while optimizing their experience. Continuously working throughout the COVID-19 pandemic and following proper sanitation protocols to ensure customer safety.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;