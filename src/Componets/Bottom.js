import React from 'react';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import bottom from './css/bottom.module.css'
function Bottom() {
    return(
      <div className={bottom.bottomDiv}>
          <div className={bottom.b1}>
              <h6>GET OUR NEWSLETTER</h6>
              <p><small>Subscribe to our newsletter and stay updated on the latest developments and special offers!</small></p>
              <form className={bottom.form}>
                <input type='text' className='form-control' placeholder='your email address' />
                <button type='submit' className='btn btn-danger'>Subscribe</button>
              </form>
          </div>

          <div className={bottom.b2}>
              <h6>CONNECT WITH US</h6>
              <div className={bottom.div}>
              <i class="fab fa-facebook-square" style={{marginLeft:'0px'}}></i>
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-youtube-square"></i>
              <i class="fab fa-pinterest-square"></i>
              </div>
              <br />
              <h6>CONTACT INFO</h6>
              <div>
              <i className='fas fa-phone' /> <small>+254785489504</small>
              </div>
              <div>
              <i class="fas fa-envelope"></i> <small>kkphotography@yahoo.com</small>
              </div>
              
              <div>
              <i class="fas fa-map-marker-alt"></i> <small>Mamangina street | opposite serena hotel Eldoret town</small>
              </div>
          </div>

          <div className={bottom.b3}>
          <h6>CATCH UP WITH</h6>
          <ul>
            <li><a href=''>privacy</a></li>
            <li><a href=''>policy</a></li>
            <li><a href=''>terms & condition</a></li>
            <li>DEVELOPED BY ABDULAZIZI OLINGA SAID</li>
          </ul>
          <br />
          </div>
      </div>
    )
}

export default Bottom