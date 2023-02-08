import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Home/logo'

const Home = () => {
    const [letterClass,setLetterClass]= useState('text-animate')
    const nameArray=['i','r','a','n']
    const jobArray=['w','e','b',' ','d','e','v','o','l','o','p','e','r','.']
    useEffect(()=>{
       setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
    },[])
  return (
    <>
      <div className="home-page">
        <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img 
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"/>
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22}/>
          </h1>
          <h2>Front End Developer / Python Expert / Mobile App Developer </h2>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
          <a  className="flat-dbutton" href='https://drive.google.com/file/d/1-wP9pprAm-XXIxaNVPE-nzLE2ehq0mDF/view?usp=drivesdk' download="'https://drive.google.com/file/d/1-wP9pprAm-XXIxaNVPE-nzLE2ehq0mDF/view?usp=drivesdk'"> DOWNLOAD CV</a>
        </div>
        <Logo></Logo>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Home
