import React from "react";
import './skills.css';
import Assembly from '../../assets/Assembly.png';
import C from '../../assets/C.png';
import Cplus from '../../assets/C++.png';
import Compression from '../../assets/Compression.png';
import Cryptography from '../../assets/Cryptography.png';
import Firewall from '../../assets/Firewall.png';
import Forensics from '../../assets/Forensics.png';
import FrontEnd from '../../assets/Front-End.png';
import IP from '../../assets/IP.png';
import Java from '../../assets/Java.png';
import ML from '../../assets/ML.png';
import PenTest from '../../assets/PenTest.png';
import Python from '../../assets/Python.png';
import RiskPerformance from "../../assets/RiskPerformance.png"
import SQL from '../../assets/SQL.png';
import UI from '../../assets/UI.png';

const Skills = () => {
    return(
        <section id='skills'>
            <span className="skillTitle">My Technical Skills</span><br/>
            <span className="skillDesc">Throughout my Education I have accumulated numerous technical skills that are very beneficial to the workforce and I denote the most prevelent of them in the list below.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Assembly} alt="Assembly" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Assembly Programming</h2>
                        <p>I learned to utilize MIPS-32 Assembly in my Computer Architecture coursework.
                            This has been perpetuated by my employment as a TA for this course in which students learned to utilize cross-assemblers with run the ARM THUMB Instruction Set.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={C} alt="C" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>C Programming</h2>
                        <p>C was the first language I learned. Developing a proficiency in this language was immensely beneficial to my understanding of coding.
                            As memory allocation and deallocation is an important aspect for software development, this language was the best to learn first.
                            I learned do use OS operations in C such as multithreading, scheduling and System commands to replicate default command line processes.
                            A noteable project includes replicating the pipe command.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Cplus} alt="Cplus" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>C++ Programming</h2>
                        <p>C++ was the language which I used most in the last year of my Computer Science degree.
                            As an object oriented program with static variables it was a very efficient language to utilize for computationally intensive projects.
                            I completed Data Compression algorithms.
                        </p>
                    </div>
                </div>
                <a href="https://github.com/plmurdoch/DataCompression">
                    <div className="skillBar">
                        <img src={Compression} alt="Compression" className="skillBarImg"></img>
                        <div className="skillBarText">
                            <h2>Data Compression</h2>
                            <p>In C++, I learned to create data compression algorithms such as a custom version of the DEFLATE algorithm and I then learned to create an Image compression algorithm which utilizes Discrete Cosine transform. 
                                I further developed a video compression algorithm which combines DCT and various compression methods in order to achieve a certain compression ratio.</p>
                        </div>
                    </div>
                </a>
                <div className="skillBar">
                    <img src={Cryptography} alt="Cryptography" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Cryptography</h2>
                        <p>In a course ECE 506: Applied Cryptography, I learned of symmetrical and asymmetrical cryptographic processes and completed a final project pertaining to a differential cryptanalysis attack on an 8 bit toy cipher.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Firewall} alt="Firewall" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Firewalls and IPS</h2>
                        <p>As I am pursuing a Masters in Information Security, I have developed crucial understanding of Privacy and Information Security. In addition to completed coursework on security policies within this field, I have utilized GNS 3 software to simulate Cisco firewall/routers such as their ASA. This allowed me to employ higher security on the trusted networks to defend against attackers</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Forensics} alt="Cryptography" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Digital Forensics</h2>
                        <p>In ECE 570: Digital Forensics, we employed digital forensics methods to examine forensic media of different types. 
                            This includes memory dump files where we examined running processes and registry hives at the time of exploitation.
                            We also investigated a system and its corresponding disk image to conduct file carving and reveal information about a suspected attacker.
                            Furthermore, we conducted network forensics analysis using Wireshark to create an attack scenario for the exploitation of a host.</p>
                    </div>
                </div>
                <a href="https://github.com/plmurdoch/WebGraphics">
                    <div className="skillBar">
                        <img src={FrontEnd} alt="FrontEnd" className="skillBarImg"></img>
                        <div className="skillBarText">
                            <h2>Front-End Development</h2>
                            <p>Throughout my education I have worked with HTML, CSS and Javascript. I have completed projects pertaining to WebGL graphics development and Website design allowing me to further my skills in Front-End development.
                                As an example, I have designed this website by scratch in React and I will keep adding elements to it as I further develop my professional skills.</p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/plmurdoch/IPCommunication">
                    <div className="skillBar">
                        <img src={IP} alt="IP" className="skillBarImg"></img>
                        <div className="skillBarText">
                            <h2>Internet Protocol Communication</h2>
                            <p>For IP communications I learned throughout my education how to use TCP and UDP communications in order to create a Simple Web Server.
                                I also created something denoted as a Reliable Datagram Protocol by utilizing sessionless UDP and creating logging systems in order to make sure that data is passed reliably.
                            </p>
                        </div>
                    </div>
                </a>
                <div className="skillBar">
                    <img src={Java} alt="Java" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Java Programming</h2>
                        <p>My Data Structures and Algorithms course were taught utilizing Java programming to help students understand the concepts further.
                            Projects include creating Breadth-First and Depth-First searches to solve maze test cases efficiently.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ML} alt="ML" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Machine Learning</h2>
                        <p>We have completed various projects on Machine Learning throughout my Masters degree. 
                            In ECE 567: Advanced Network Security we completed a project on utilizing Machine Learning for Denial of Service attacks.
                            The final Capstone project for my degree utilizes Machine Learning for Phishing Email detection.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={PenTest} alt="PenTest" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Penetration Testing and Network Security</h2>
                        <p>In ECE 567: Advanced Network security, we utilized the tools embedded within the Kali Linux environment to conduct Penetration Testing through the employment of network scanners, vulnerability scanners, metasploit exploit framework and more to ethically exploit testing environments.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Python} alt="Python" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>Python Programming</h2>
                        <p>The most diverse coding language I learned. It's dynamic variables allowed for you to create code for anything.
                            I utilized this language to develop simulations in my Queueing Analysis and Networking Analysis courses to collect data.
                            Furthermore, I have used Python for IP Communications and Machine Learning projects.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={RiskPerformance} alt="RiskPerformance" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>KPI & KRI Metric Analysis</h2>
                        <p>Through my employment as a Cybersecurity Project Coordinator at the First West Credit Union, I have been tasked with analyzing Key Cybersecurity Performance and Risk Indicators in a business through the analysis of raw data.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={SQL} alt="SQL" className="skillBarImg"></img>
                    <div className="skillBarText">
                        <h2>SQL Database Queries and Construction</h2>
                        <p>In my Database Systems course I learned to utilize MySQL. I learned how to effectively utilize queries in order to get Data. 
                            Additionally, I have learned how to create a SQL table on Azure Cloud servers in order to replicate IoT device connectivity.
                            Furthermore, I have been employed as a TA in a Database Systems course where I advised students on queries and constructing database tables in PostgresSQL.</p>
                    </div>
                </div>
                <a href="https://onlineacademiccommunity.uvic.ca/wildlifesighting/">
                    <div className="skillBar">
                        <img src={UI} alt="UI" className="skillBarImg"></img>
                        <div className="skillBarText">
                            <h2>Human Computer Interaction</h2>
                            <p>Experience with Human Computer Interaction utilizing Figma to create up to medium fidelity prototypes.
                                Click on this section to go to my group project site for my HCI course. If you are unable to access the site please let me know.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Skills;