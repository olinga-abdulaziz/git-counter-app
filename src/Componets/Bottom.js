import React from 'react';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import bottom from './css/bottom.module.css'
function Bottom() {
    return(
      <div className={bottom.bottomDiv}>
          <div className={bottom.b1}>
              <strong>GET OUR NEWSLETTER</strong>
              <p>Subscribe to our newsletter and stay updated on the latest developments and special offers!</p>
              <form className={bottom.form}>
                <input type='text' className='form-control' placeholder='your email address' />
                <button type='submit' className='btn btn-danger'>Subscribe</button>
              </form>
          </div>

          <div className={bottom.b2}>
              <strong>CONNECT WITH US</strong>
              <div className={bottom.div}>
              <i class="fab fa-facebook-square" style={{marginLeft:'0px'}}></i>
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-youtube-square"></i>
              <i class="fab fa-pinterest-square"></i>
              </div>
              <br />
              <strong>CONTACT INFO</strong>
              <div>
              <i className='fas fa-phone' /> +254785489504
              </div>
              <div>
              <i class="fas fa-envelope"></i> kkphotography@yahoo.com
              </div>
              
              <div>
              <i class="fas fa-map-marker-alt"></i> Mamangina street | opposite serena hotel Eldoret town
              </div>
          </div>

          <div className={bottom.b3}>
          <strong>CATCH UP WITH</strong>
          <ul>
            <li><a href=''>privacy</a></li>
            <li><a href=''>policy</a></li>
            <li><a href=''>terms & condition</a></li>
          </ul>
          <br />
          </div>
      </div>
    )
}

export default Bottom