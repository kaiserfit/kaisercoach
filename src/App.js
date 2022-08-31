import React, { useState } from 'react';
import logo from './images/logo.webp';
import {MdOutlineMailOutline, MdPassword} from "react-icons/md"
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
function App() {
  const [email] = useState("")
  const loginSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div className='container-fluid p-0 text-center'>

      
      <div className="row g-2 min-vh-100">
        <div className="d-none d-sm-block col-12 col-sm-6 col-md-8 border-end border-primary py-5">
          <h1 className='fw-bolder text-black'>Login To Your Account</h1>

          <form className='w-75 my-3 mx-auto text-start' onSubmit={loginSubmit}>
            <label htmlFor='email' className='fs-4'>Email Address</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control form-control-lg" name="email" id="email" placeholder="person@example.com" aria-label="Username" aria-describedby="basic-addon1" />
              <span className="input-group-text fs-3" id="basic-addon1"><MdOutlineMailOutline /></span>
            </div>

            <label htmlFor='pw' className='fs-4' >Password</label>
            <div className="input-group mb-3 ">
              <input type="text" className="form-control form-control-lg" name="pw" id="pw" placeholder="Your Password here" aria-label="Password" aria-describedby="basic-addon2" />
              <span className="input-group-text fs-3" id="basic-addon2"><AiFillEye /></span>
            </div>
 
            <div className="d-grid gap-2">
              <button type="submit" name="" id="" className="btn btn-primary btn-lg">Login</button>
            </div>

           
          </form>
        </div>
        <div className="col-12 col-sm-6 col-md-4 bg-primary py-5">
          <img src={logo} alt="kaiserfit logo" height={60} width={60}></img>           
        </div>
        
      </div>

  
    </div>
  );
}

export default App;
