import * as React from 'react'
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import comment from './css/comment.module.css'
function Comment() {
    return(
        <div className={comment.content}>
                
                <div className={comment.b2}>
                    <center>
                        <h1 style={{fontWeight:'10'}}>Our Staff</h1>
                        <small>The following are our staff member and those who work with us</small>
                    </center>
                    <div className={comment.patbox}>
                        <div>
                            <img src='https://source.unsplash.com/400x400?potrait' alt='' />
                            <div>
                                <center>
                                <strong>Katenya collins</strong>
                                <p><small>The CEO,management director, film producer</small></p>
                                </center>
                            </div>
                        </div>

                        <div>
                            <img src='https://source.unsplash.com/400x400?selfie' alt='' />
                            <div>
                                <center>
                                <strong>Katenya collins</strong>
                                <p><small>The CEO,management director, film producer</small></p>
                                </center>
                            </div>
                        </div>

                        <div>
                            <img src='https://source.unsplash.com/400x400?face' alt='' />
                            <div>
                                <center>
                                <strong>Katenya collins</strong>
                                <p><small>The CEO,management director, film producer</small></p>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Comment
