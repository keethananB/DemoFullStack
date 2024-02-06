import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';



export default function Homes() {
    const[staffs,setstaffs]=useState([])

    const {id}=useParams()

useEffect(()=>{
    console.log("code with Keerthanan")
    loadStaffs();

},[]);

const loadStaffs=async()=>{
    const result=await axios.get("http://localhost:9091/staff/GetAll")
  setstaffs(result.data);
};

const deletestaff=async(id)=>{
  await axios.delete(`http://localhost:9091/staff/staff/${id}`)
  loadStaffs()
}

  return (
    <div className='container'>
        <div className='py-3'>
        <table className="table boarder shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Position</th>
    </tr>
  </thead>
  <tbody>
    {
         staffs.map((staffs,index)=>(
            <tr>
      <th scope="row" key={index} >{index+1}</th>
      <td>{staffs.name}</td>
      <td>{staffs.username}</td>
      <td>{staffs.email}</td>

      <td>
      <Link
      className='btn btn-primary mx-2'
      to={`/viewstaff/${staffs.id}`}                  
      >View
      </Link>


        <Link 
        className='btn btn-outline-primary mx-2'
        
        to={`/Editstaff/${staffs.id}`}
        
        >Edit</Link>

        <button className='btn btn-danger mx-2'
        
        onClick={()=>deletestaff(staffs.id)}
        
        
        >Delete</button>
      
         
      
      </td>
    </tr>
         ))}
 
</tbody>
</table>   
        </div>
        </div>
  );
}
