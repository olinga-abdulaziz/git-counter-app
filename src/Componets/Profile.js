import React from 'react';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import profile from './css/profile.module.css'
import body2 from '../images/body2.jpg'
function Profile() {
    return(
        <div className={profile.container} style={{backgroundColor:'rgb(18, 37, 23)'}}>
            <div className={profile.bodyBox}>
                <center>
                <div className={profile.imgBox}>
                    <img src='https://source.unsplash.com/400x400?potrait' alt='' />
                </div>
                <br />
                <div className={profile.talkDiv}>
                    <h2><strong>Let's talk.</strong></h2>
                    <p>
                        Get intouch with us let us connect we are here for you. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                    <button className='btn btn-success' style={{alignItems:'center',width:'150px'}}> <div style={{alignItems:'center'}}>Get Intouch <i className='fa fa-arrow-right' style={{fontSize:'20px'}}/></div> </button>
                </div>
                </center>
            </div>

        </div>
    )
}

export default Profile