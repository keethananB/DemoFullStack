import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewstaff() { 
    const [staff, setstaff] = useState({
        name: "",
        username: "",
        email: "",
      });
    
      const { id } = useParams();
      console.log(id)
    
      useEffect(() => {
        loadUser ();
      }, []);
    
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:9091/staff/staff/${id}`);
        console.log(result)
        setstaff(result.data);
      };
    return (
        <div className='container'>
        <div className='row'>
           <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
         <h2 className='text-center m-4'>Staff Details</h2>   
         
         <div className='card'>
         <div className='card-header'>
         Details of staff id:{staff.id}
         <ul className='list-group list-group-flush'>


         <li className='list-group-item'>
         <b>Name:</b>
         {staff.name}
         </li>
         
         <li className='list-group-item'>
         <b>UserName:</b>
         {staff.username}
         </li>

         <li className='list-group-item'>
         <b>Email:</b>
         {staff.email}
         </li>

         </ul> 
         
         
         </div>
         
         <Link className='btn btn-primary my-2'to={'/'}>Back to Home
         </Link>
         
          </div>

         </div>
         </div>
         </div>
    )
  }

