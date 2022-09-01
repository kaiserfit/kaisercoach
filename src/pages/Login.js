import React, { useState, useEffect } from 'react';
import logo from '../images/logo.webp';
import {MdOutlineMailOutline} from "react-icons/md"
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [pwVisible, setPwVisible] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
      if (pwVisible){
        document.getElementById('pw').type = 'text'
      } else {
        document.getElementById('pw').type = 'password'
      }
    }, [pwVisible])
  
    
    const pwToggle = () => {
      setPwVisible(pwVisible=>!pwVisible)
    }
    const loginSubmit = (e) => {
      e.preventDefault();
      navigate("/home", { push: true });
    }   


    return (
        <div className='container-fluid p-0 text-center'>

      
        <div className="row w-100 min-vh-100">
          <div className="d-none d-sm-block col-12 col-sm-6 col-md-8 border-end border-light pt-5">
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
                <span className="input-group-text fs-3" id="basic-addon2" onClick={pwToggle}>{(pwVisible) ? <AiFillEyeInvisible />   : <AiFillEye /> }</span>
              </div>
            
                <div className="clearfix mb-3 w-100"> 
                <div className="form-check form-check-inline float-start">
                    <input className="form-check-input" type="checkbox" id="rmb" value="option1" />
                    <label className="form-check-label" htmlFor="rmb">Remember Me</label>
                  </div>
                  <div className='float-end'>
                    <a href="#0">Forgot Password</a>
                  </div>
                </div>
                
                
              <div className="d-grid gap-2">
                <button type="submit" name="" id="" className="btn btn-info btn-lg">Login</button>
              </div>
  
             
            </form>
          </div>
          <div className="col-12 col-sm-6 col-md-4 bg-primary py-5 bg-login">
            <img src={logo} alt="kaiserfit logo" height={60} width={60}></img>           
          </div>
          
        </div>
  
    
      </div>
    )
}