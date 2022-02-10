import * as React from 'react'
import bodyimg from '../images/bodyimg.jpg'
import LatestPost from '../Componets/LatestPost'
import LatestNews from '../Componets/LatestNews'
import Profile from '../Componets/Profile'
import Comment from '../Componets/Comment'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import './css/home.css'

function Home() {
    
    return(
       <main className='shaMAin'>
           <header className='topmain' data-aos="fade-up" style={{backgroundImage:`url(https://the.ismaili/sites/default/files/photography.jpg)`}}>
            <article className='headerContent'>
                <h1 className='kk'  data-aos="fade-up">kkphotography ke</h1>
                <h1 className='wecare'  data-aos="fade-up" data-aos-delay='300'>We capture memories forever</h1>
                <p  data-aos="fade-up" data-aos-delay='400'>Kkphotography short descriptin come here. tell your audience what your bussiness is all about with lessthan 100 words</p>
                
                <div className='btnbtnDv'>
                <div className='btnGroup' data-aos="zoom-out">
                    <a href='#latestpost'><button className='btn btn-success btnHome'>GET STARTED</button></a>  <br /><br />
                    <Link to='/contact' className='btn btn-primary btnHome' >GET INTOUCH</Link> 
                </div>
                </div>
            </article>
          </header>
            <main className='main'>
              <LatestPost id='latestpost'/>
              <LatestNews />
              <Profile />
              <Comment />
            </main>
       </main>
    )
}


export default Home