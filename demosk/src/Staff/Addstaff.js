import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Addstaff() {

    let navigate=useNavigate()

    const[staff,setstaff]=useState({
        name:'',
        username:'',
        email:''

    })

    const{name,username,email}=staff
const oniInputchange=(e)=>{

    setstaff({...staff,[e.target.name]:e.target.value});
};

const onSubmit=async(e)=>{
    console.log(e)
    e.preventDefault();
    await axios.post ("http://localhost:9091/staff/creteStaff",staff)
    navigate("/")

};


  return(
 <div className='container'>
 <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
  <h2 className='text-center m-4'>Register Staff</h2>   
  
  <form onSubmit={(e)=>onSubmit(e)}>
  
  <div className='mb-3'>
  <label htmlFor='Name' className='form-label'>
    Name
    </label>
    <input
    type={'text'}
    className='form-control'
    placeholder='Enter your name'
    name="name"
    value={name}
    onChange={(e)=>oniInputchange(e)}
    
    />
        
   
    </div>   

    <div className='mb-3'>
  <label htmlFor='Username' className='form-label'>
   UserName
    </label>
    <input
    type={'text'}
    className='form-control'
    placeholder='Enter your Username'
    name="username"
    value={username}
    onChange={(e)=>oniInputchange(e)}
    />
        
   
    </div>   

    <div className='mb-3'>
  <label htmlFor='Email' className='form-label'>
    Email
    </label>
    <input
    type={'text'}
    className='form-control'
    placeholder='Enter your email'
    name="email"
    value={email}
    onChange={(e)=>oniInputchange(e)}
    />
        
   
    </div>   
    <button type='submit ' className='btn btn-outline-primary '>
        submit
        </button>
     <Link type='Cancle' className='btn btn-outline-danger mx-2'to>  
        Cancle

    
    </Link>
    </form>
    </div>
    </div>
    </div>
  );
}
