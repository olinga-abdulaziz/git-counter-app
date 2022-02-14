import React from 'react';
import './css/navbar.css'
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import kklogo from '../images/kklogo.png'


function navbar() {
    return ( 
    <div className='navBar'>
        <div className='barDiv'>
            <font>
            <Link   to='/' style={{color:'#fff',textDecoration:'none',fontSize:'14px'}}>KKPHOTOGRAPHY-KE</Link>
            </font>
        </div>
        
        <div className='linkDiv'>
            <ul>
                <li><Link   to='/' style={{color:'#fff',textDecoration:'none',fontSize:'14px'}}><small>HOME</small></Link></li>
                <li><Link   to='/about'  style={{color:'#fff',textDecoration:'none',fontSize:'14px'}}><small>ABOUT</small></Link></li>
                <li><Link   to='/contact'  style={{color:'#fff',textDecoration:'none',fontSize:'14px'}}><small>CONTACT</small></Link></li>
                <li><Link   to='/signin'  style={{color:'#fff',textDecoration:'none',fontSize:'14px'}}><small>LOGIN</small></Link></li>
            </ul>
            {/* <div className='btnDiv'>
                <button className='btn btn-success' style={{backgroundColor: 'rgb(18, 37, 23)'}}>ADMIN</button>
            </div> */}
        </div>
    </div> );
}

export default navbar;