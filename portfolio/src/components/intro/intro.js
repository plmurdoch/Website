import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import btnImg from '../../assets/employ.png'
const intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className="introName">Payton Murdoch</span><br/>
                <span className="introText">B.Sc Computer Science</span> <br/>
                <span className="introText">M.Eng Telecommunication</span> <br/>
                <span className="introText">and Information Security</span> <br/>
                </span>
                <p className='introPara'>I am a Masters student at UVic looking to develop my professional portfolio.<br/> I hope to pursue a career in Software Development and Cyber-Security.</p>
                <Link><button className="btn"onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:"smooth"});
                }}><img src={btnImg} alt='btnImg' className='btnImg'/>Employ Me</button></Link>
            </div>
        </section>
    )
}

export default intro