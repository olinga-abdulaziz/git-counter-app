import React from 'react';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import './css/about.css'
import Aos from 'aos'
import "aos/dist/aos.css";

function About() {
    return(
        <div className='container'>
            <header>
                <center><h1 className='aboutTXT' data-aos="fade-up">About Us</h1></center>
                <hr />

                <center>
                    <p data-aos="fade-up">
                    Katenya collins is the author and founder of
                     Kkphotography-ke. While he spent the majority of 
                     his adult life pursuing technology, he discovered photography
                      as his true passion after the birth of his first child. Not happy
                       with pictures from a point and shoot camera, Nasim decided to purchase 
                       a Nikon DSLR to preserve memories of his family and that’s what started
                        his journey into the world of digital photography. Today, Nasim is 
                        recognized as one of the leading educators in photography, conducting 
                        workshops, producing educational videos and frequently
                         writing content for Photography Life. Nasim is married 
                         to Lola, his partner in life and the photography world.
                      When not doing photography, he enjoys spending time with
                    his family, traveling, reading books and kicking
                     paddles (being a black belt in Taekwondo). Katenya is on
                    <a href=''> Instagram</a>, 500px and <a href=''>Facebook</a>.
                    </p>
                </center>
            </header>
            
        </div>
    )
}

export default About