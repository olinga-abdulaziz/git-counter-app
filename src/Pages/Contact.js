import React from 'react';
import { BrowserRouter as Router , Link , Route ,Routes,Outlet} from 'react-router-dom';
import './css/contact.css'
import Aos from 'aos'
import "aos/dist/aos.css";

function Contact() {
    return(
        <div className='container'>
            <div className='content' data-aos="fade-up">
                <div className='div1'>
                    <center><h1>Contact us</h1></center>
                    <center>
                        <p>Katenya collins is the author and founder of
                     Kkphotography-ke. While he spent the majority of 
                     his adult life pursuing technology, he discovered photography
                      as his true passion after the birth of his first child. Not happy
                       with pictures from a point and shoot camera, Nasim decided to purchase</p>
                    </center>
                    <div style={{width:'70%',margin:'auto'}}>
                     <center><i class="fab fa-facebook-square" style={{marginLeft:'0px'}}></i>
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-youtube-square"></i>
                    <i class="fab fa-pinterest-square"></i></center>
                    </div>
                </div>
                <div className='div2'>
                <form className='form'>
                        <h4>Leave a message</h4>
                        <label>Message</label>
                        <br />
                        <textarea style={{width:'100%'}} className='form-control'>

                        </textarea>
                        <br />
                        <input type='text' className='form-control' placeholder='Name' />
                        <br />
                        <input type='text' className='form-control' placeholder='Email' />
                        <br />
                       <div style={{paddingLeft:'30px',display:'flex'}}>
                       <input type='checkbox' className='form-check-input'/> <small>Subscribe to our newslater</small>
                       </div>
                       <br />
                       <button className='btn btn-info' style={{width:'100%',backgroundColor:'rgb(18, 37, 23)'}} >Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact