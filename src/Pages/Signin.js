import React from 'react';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import './css/signin.css'

function Signin() {
    return(
        <div className='container'>
            <div className='content1'>
                <form className='form'>
                        <h4>Login</h4>
                        <p>provide your credentials to login</p>
                        <input type='email' className='form-control' placeholder='Email' />
                        <br />
                        <input type='password' className='form-control' placeholder='Password' />
                        <br />
                       <div style={{paddingLeft:'30px',display:'flex'}}>
                       <input type='checkbox' className='form-check-input'/> <small>Remember password</small>
                       </div>
                       <br />
                       <button className='btn btn-info' style={{width:'100%'}}>Login</button>
                       <div style={{marginTop:'10px'}}>
                           <p>you dont have an account <Link to='/register'>Register</Link> </p>
                       </div>
                    </form>
            </div>
        </div>
    )
}

export default Signin