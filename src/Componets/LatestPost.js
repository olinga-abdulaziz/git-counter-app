import React from 'react';
import latestpost from './css/latespost.module.css'
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import Aos from 'aos'
import { useState,useEffect } from 'react'
import "aos/dist/aos.css";

function LatestPost() {

    useEffect ( ()=>{
        Aos.init({duration:2000})
    },[])


    return(
        <div>
            <div className={latestpost.titleDiv} data-aos="fade-up">
                <center><h1 className={latestpost.title}>MY LATEST WORKS</h1></center>
            </div>
            <div className={latestpost.latLinkDiv} data-aos="fade-up" data-aos-delay='100'>
                    <ul className={latestpost.titleUl}>
                        <p>These are our latest post simple description we are describing</p>
                    </ul>
                </div>

            <div className={latestpost.content}>
                 <ul>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?mountain' alt='' onContextMenu="return false"/>
                            <div className='dod'>
                                <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?house' alt='' />
                            <div className='dod'>
                                <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?trees' alt='' />
                            <div className='dod'>
                                <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?person' alt='' />
                            <div className='dod'>
                                <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?car' alt='' />
                            <div className='dod'>
                                <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?beach' alt='' />
                            <div className='dod'>
                                <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?bag' alt='' />
                            <div className='dod'>
                                <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?river' alt='' />
                            <div className='dod'>
                                <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                            </div>
                        </li>
                    </ul>
         </div>   
        </div>
    )
}

export default LatestPost