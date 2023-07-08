import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart,faShare } from '@fortawesome/free-solid-svg-icons'
import React,{Fragment,useState,useEffect} from 'react'
import PortfolioDetail from '../Detail/PortfolioDetail'
const Portfolio=()=>{
  const [letterClass,setLetterClass]= useState('text-animate')
  useEffect(()=>{
      setTimeout(() => {
           setLetterClass('text-animate-hover')
         }, 2000)
   },[])
   
   const[detail]=useState(PortfolioDetail)
    return(
      <Fragment>
        <div className='portflio-page'>
        <div className='text-zone'>
         
        <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P','r','o','j','e','c','t','s']}
                    idx={15}></AnimatedLetters> </h1>  
      
        <div className='row'>
          {
            detail.map((detail)=>{
              return(
                <div className='column'>
                <div className='single-property'>
                  <div className='card'>
    
                    <div className='property-thumb'>
                      <div className='property-tag'><button><i ><FontAwesomeIcon icon={faHeart} /></i></button> </div>
                      <img src={detail.Image}alt="pal" />
                    </div>
    
                    <div className='property-content'>
                      <h3>{detail.heading}</h3>
                      <div className='mark'>
                        <span>{detail.span}</span>
                      </div>
                      </div>
                      <span className='property-footer'></span>
                    <div className='property-footer'>
                      <ul>
                        <li>
                        <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                          <a target="_blank" rel="noreferrer" href={detail.link}>
                           Source code</a>
                        </li>
                      </ul>
                    </div>
                    
                  </div> 
                </div>
              </div>
              )
            })
          }
         </div>
         
        </div>
      </div>
       
<Loader type="pacman"/>
</Fragment>   
    )
}

export default Portfolio