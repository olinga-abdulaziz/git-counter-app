import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import './css/admin.css'
import axios from 'axios';


function Admin() {
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')

  

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:8000/post',{
            category:category,
            image:image,
            description:description,
            price:price
        }).then((res)=>{
            console.log(res);
        })
    }
    
    return(
       <div className='Adcontainer'>
           <div className='adminBox'>
                <div className='ad1'>
                    <div style={{padding:'20px'}}><h4>Admin zone</h4></div>
                    <hr />
                    <div>
                        <strong className='badge' style={{color:'#fff'}}>Upload image</strong>
                        <form style={{marginTop:'20px'}} class="formPost" id="formPost" onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input type='file' value={image}  name='image' id='image' onChange={(e)=>setImage(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <label>Description</label>
                                <input onChange={(e)=>setDescription(e.target.value)} value={description} type='text'  name='description' id='description' placeholder='Description' className='form-control'/>
                            </div>
                            <div className='form-group'>
                                <label>Category</label>
                                <select className='form-control' value={category} name="category" id="category" onChange={(e)=>setCategory(e.target.value)}>
                                    <option value="">wedding</option>
                                    <option value="">potrait</option>
                                    <option value="">events</option>
                                    <option value="">comercia</option>
                                    <option value="">corporate</option>
                                    <option value="">fasion</option>
                                </select>
                            </div>
                            <div className='form-group'>
                            <label>Price $</label>
                                <input type='text' value={price}  name='price' id='price' value='0.5' className='form-control' onChange={(e)=>setPrice(e.target.value)}/>
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='btn btn-success form-control' >Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
           </div>
       </div>
    )
}


export default Admin