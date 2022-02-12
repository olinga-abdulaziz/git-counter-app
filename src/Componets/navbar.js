import React from 'react';
import './css/navbar.css'
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import kklogo from '../images/kklogo.png'


function navbar() {


    return ( 
    <body className='navBody'>
    <nav className='navBar'>
        <div className='barDiv'>
            <font style={{color:'#fff',fontSize:'30px',fontWeight:'10'}}>KKPHOTOGRAPHY-KE</font>
        </div>
        
        <div className='linkDiv'>
            <ul>
                <li><Link   to='/' style={{color:'#fff',textDecoration:'none'}}>HOME</Link></li>
                <li><Link   to='/about'  style={{color:'#fff',textDecoration:'none'}}>ABOUT</Link></li>
                <li><Link   to='/contact'  style={{color:'#fff',textDecoration:'none'}}>CONTACT</Link></li>
                <li><Link   to='/signin'  style={{color:'#fff',textDecoration:'none'}}>LOGIN</Link></li>
            </ul>
            <div className='btnDiv'>
                <button className='btn btn-success' style={{backgroundColor: 'rgb(18, 37, 23)'}}>ADMIN</button>
            </div>
        </div>
    </nav> </body> );
}

export default navbar;