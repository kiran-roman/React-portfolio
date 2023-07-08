import { TileLayer,Marker,Popup } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect,useState,useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


const Contact =()=>{
    const [letterClass,setLetterClass]= useState('text-animate')
    const refForm=useRef()
    useEffect(()=>{
        setTimeout(() => {
             setLetterClass('text-animate-hover')
           }, 2000)
     },[])
     const sendEmail=(e)=>{
        e.preventDefault()
        if (isLoggedIn){
        emailjs.sendForm('service_tsxgrv9','template_pu2lfr3',refForm.current,'uqP9veCRSn_H1TXWg')
        .then(
            ()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('Failed to send the message')
            }
        )}
        else{
            window.location.replace('/Login')
         
          }
    }
    return(
        <>
        <div className='contact-page'>
          <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','M','e']}/>
            </h1>
            <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type="text" name="name" placeholder='Name' required/>
                    </li>
                    <li className='half'>
                        <input type="email" name="email" placeholder='E-mail' required/>
                    </li>
                    <li>
                        <input placeholder='Subject' type="text" name='subject' required/>
                    </li>
                    <li>
                        <textarea placeholder='Message' name="message" required></textarea>
                    </li>
                    <li>
                        <input type="submit" className='flat-button' value="SEND"/>
                        
                    </li>
                </ul>
          </form>
          </div>
          </div>
        
          <div className='info-map'>
            Kiran E,
            <br/>
            2nd cross street ,EB Nagar<br/>
            Arni,Thiruvanamalai<br/>
            Tamil Nadu ,INDIA<br/>
            <span>kiran232377@gmail.com</span>
          </div>
          <div className='map-wrap'>
            <MapContainer center={[12.6871547,79.27917337]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[12.6871547,79.27917337]}>
              <Popup>Kiran lives here, come over for a cup of coffee :)</Popup>
            </Marker>
            </MapContainer>
          </div>
        </div>
        <div className='contact-list'>
          <ul>
        <li>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/kiran-e-1b788221b/'>
                <FontAwesomeIcon icon={faLinkedin} color='#00007B'/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href='https://github.com/kiran-roman'>
                <FontAwesomeIcon icon={faGithub} color='#000000'/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/_kiran_roman_/'>
                <FontAwesomeIcon icon={faInstagram} color='#E1306C'/>
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href='https://twitter.com/_Kiran_Roman_/'>
                <FontAwesomeIcon icon={faTwitter} color='#0096FF'/>
            </a>
        </li>
        </ul>
        <div className='copy'>&copy;kiranroman 
        <br/></div>
          </div>
        <Loader type='pacman'></Loader>
        </>
    )
}

export default Contact