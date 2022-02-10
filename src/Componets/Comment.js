import * as React from 'react'
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import comment from './css/comment.module.css'
function Comment() {
    return(
        <div className={comment.content}>
                
                <div className={comment.b2}>
                    <form className={comment.form}>
                        <h4>Leave a comment</h4>
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
                       <button className='btn btn-info' style={{width:'100%'}}>Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default Comment
