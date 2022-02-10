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
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?house' alt='' />
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?trees' alt='' />
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?person' alt='' />
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?car' alt='' />
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?beach' alt='' />
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?bag' alt='' />
                        </li>
                        <li data-aos="fade-up" data-aos-delay='100'>
                            <img src='https://source.unsplash.com/400x400?river' alt='' />
                        </li>
                    </ul>
        </div>   
            </div>
    )
}

export default LatestPost