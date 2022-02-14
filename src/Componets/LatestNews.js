import * as React from 'react'
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import latestnews from './css/latestnews.module.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useState,useEffect } from 'react'

function LatestNews() {

    useEffect ( ()=>{
        Aos.init({duration:2000})
    },[])

    return(
        <div className={latestnews.content}>
                 <div className={latestnews.top} data-aos="fade-up">
                    <center>
                        <h1 data-aos="fade-up">Our latest news</h1>
                        <p data-aos="fade-up" data-aos-delay='300'>
                        Lorem Ipsum is simply dummy text of the printing and
                         typesetting industry. Lorem Ipsum has been the industry's 
                         standard dummy text ever since the 1500s, when an unknown
                         printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </center>
                 </div>
                 <div className={latestnews.bottom}>
                    <ul>
                        <li data-aos="fade-top">
                            <div  className={latestnews.bar}></div>
                            <p>
                              Art is the only way to run away without leaving home.
                            </p>
                            <p style={{color:'gray'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
                            </p>
                        </li>
                        <li data-aos="fade-top">
                            <div  className={latestnews.bar}></div>
                            <p>
                              Art is the only way to run away without leaving home.
                            </p>
                            <p style={{color:'gray'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
                            </p>
                        </li>
                        <li data-aos="fade-top">
                            <div  className={latestnews.bar}></div>
                            <p>
                              Art is the only way to run away without leaving home.
                            </p>
                            <p style={{color:'gray'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
                            </p>
                        </li>
                        
                        
                    </ul>

                    <center>
                        <button className='btn btn-success' style={{backgroundColor:'rgb(18, 37, 23)'}}>Read more ...</button>
                    </center>
                    <br />
                 </div>

        </div>
    )
}

export default LatestNews
