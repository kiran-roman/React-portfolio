import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {faCss3,faGitAlt,faHtml5,faJava,faPython,faReact,  } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About=()=>{
    const [letterClass,setLetterClass]= useState('text-animate')
    useEffect(()=>{
        setTimeout(() => {
             setLetterClass('text-animate-hover')
           }, 2000)
     },[])
    return(
        <>
        <div className='about-page'>
        
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx={15}></AnimatedLetters> </h1>  
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a sports fanatic, photography enthusiast, and tech-obsessed!!!
          </p>
            </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
          <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#e60b30" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faPython} color="#0853bd" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D18" />
            </div>
            </div>
          </div>
<Loader type="pacman"/>
        </> 
    )
}

export default About