import React from 'react';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import './css/signin.css'

function register() {
    return(
        <div className='container'>
            <div className='content1'>
                <form className='form'>
                        <h4>Register</h4>
                        <p>provide your details and credention to register on this platform</p>
                        <input type='text' className='form-control' placeholder='Full names' />
                        <br />
                        <input type='text' className='form-control' placeholder='Phone number' />
                        <br />
                        <input type='email' className='form-control' placeholder='Email' />
                        <br />
                        <input type='password' className='form-control' placeholder='Password' />
                        <br />
                        <input type='password' className='form-control' placeholder='Confirm password' />
                        <br />
                       <div style={{paddingLeft:'30px',display:'flex'}}>
                       <input type='checkbox' className='form-check-input'/> <small>Accept our <Link to=''>privacy</Link> ,<Link to=''>terms & condition</Link>  </small>
                       </div>
                       <br />
                       <button className='btn btn-info' style={{width:'100%',backgroundColor:'rgb(18, 37, 23)'}}>Register</button>
                       <div style={{marginTop:'10px'}}>
                           <p>You  have an account <Link to='/signin'>Login</Link> </p>
                       </div>
                    </form>
            </div>
        </div>
    )
}

export default register