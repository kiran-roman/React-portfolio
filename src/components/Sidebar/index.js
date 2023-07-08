import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHome,faEnvelope,faUser,faBars,faClose,faStore} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

const handleSubmit = (event) => {
    event.preventDefault();
  if (isLoggedIn){
    localStorage.removeItem('isLoggedIn');
    window.location.replace('/')
  }
  else{
    window.location.replace('/Login')
  }
  }
const Sidebar = () =>{
    const [showNav,setShowNav]=useState(false);
return(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="logosub"/>
        </Link>
        <nav  className={showNav ?'mobile-show':''}>
            <NavLink 
            onClick={()=>setShowNav(false)}
            exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
            onClick={()=>setShowNav(false)}
            exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
            onClick={()=>setShowNav(false)}
            exact="true" activeclassname="active" className='portfolio-link' to="/portfolio">
                <FontAwesomeIcon icon={faStore} color="#4d4d4e"/>
            </NavLink>
            <NavLink
            onClick={()=>setShowNav(false)}
            exact="true" activeclassname="active" className='contact-link'to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
           
            <form onSubmit={handleSubmit}>
        <button  type="submit" className="flat-button">{isLoggedIn ? "Logout" :  " -Login- " }</button></form>
            
            <FontAwesomeIcon 
            onClick={()=>setShowNav(false)}
            icon={faClose} color="#ffd700" size='3x' className='close-icon'/>
        </nav>
        <ul>
        <li>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/kiran-e-1b788221b/'>
                <FontAwesomeIcon icon={faLinkedin} color='4d4d4e'/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href='https://github.com/kiran-roman'>
                <FontAwesomeIcon icon={faGithub} color='4d4d4e'/>
            </a>
        </li>
        <li>
            <a target="_blank"rel="noreferrer" href='https://www.instagram.com/_kiran_roman_/'>
                <FontAwesomeIcon icon={faInstagram} color='4d4d4e'/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href='https://twitter.com/_Kiran_Roman_/'>
                <FontAwesomeIcon icon={faTwitter} color='4d4d4e'/>
            </a>
        </li>
        <li>
        <form onSubmit={handleSubmit}>
        <button  type="submit" className="flat-button">{isLoggedIn ? "Logout" :  " -Login- " }</button></form>
        </li>
        </ul>
        <FontAwesomeIcon 
        onClick={()=>setShowNav(true)}
        icon={faBars} color="#ffd700" size='3x' className='hamburger-icon'
       />
    </div>
   
)
}
export default Sidebar