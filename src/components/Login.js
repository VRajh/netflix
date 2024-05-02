import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isLoggedIn,setisLoggedIn] = useState(false)

  return (
    <div>
      <Header/>
      <div className=''>
        <img className='brightness-50 absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg" alt="" />
      </div>
      <form className='bg-black bg-opacity-65 p-12  absolute w-3/12 m-auto left-0 right-0 my-36'>
        <h1 className='font-bold text-white text-2xl p-2'>{isLoggedIn ? "Sign Up" : "Sign In"}</h1>

        {isLoggedIn && <input type="text" name="" id="" placeholder='User Name' className='p-2 m-2 my-4 w-full rounded-md'/>}
        <input type="text" name="" id="" placeholder='Email address' className='p-2 m-2 my-4 w-full rounded-md'/>
        <input type="password" placeholder='Password' className='p-2 m-2 my-4 w-full rounded-md'/>
        <button className='bg-red-600 p-2 m-2 my-4 w-full font-bold text-white rounded-md'>{isLoggedIn ? "Sign Up" : "Sign In"}</button>

        {
          isLoggedIn ?
          <h1 className='text-gray-400 m-2 '>Already a user? <span className='cursor-pointer text-white' onClick={()=>{
            setisLoggedIn(false)
          }}>Sign in now</span></h1>
          :
          <h1 className='text-gray-400 m-2 '>New to Netflix? <span className='cursor-pointer text-white'  onClick={()=>{
            setisLoggedIn(true)
          }}>Sign up now</span></h1>
        }

        

      </form>
    </div>
  )
}

export default Login