import React, { useRef, useState } from 'react'
import Header from './Header'
import { loginValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { user_avatar } from '../utils/const';

const Login = () => {


  const dispatch = useDispatch()

  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [errorMessage, seterrorMessage] = useState("")
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null)

  const handleClick = () => {
    //validation
    const message = loginValidation(email.current.value, password.current.value)
    seterrorMessage(message)
    //if error message is present, return
    if (message) return


    if (!isLoggedIn) {
      console.log(isLoggedIn)
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log("updateProfile")
          updateProfile(user, {
            displayName: user.displayName, photoURL: user_avatar
          }).then(() => {
            // Profile updated!
            const { email, uid, displayName, photoURL } = user
            console.log("onAuthStateChanged : signed in successfully")
            dispatch(addUser({ email: email, uid: uid, displayName: displayName, photoURL: photoURL }))
          }).catch((error) => {
            // An error occurred
            // ...
          });

          console.log("signInWithEmailAndPassword : signed in successfully")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ":" + errorMessage)
          seterrorMessage(errorCode + ":" + errorMessage)
        });
    }
    else //register new user
    {
      console.log(isLoggedIn)
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ..
          //update display name & photo url
          // console.log(auth)
          console.log("updateProfile")
          updateProfile(user, {
            displayName: displayName.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIBwucyvB6CPBI2FUhgUTrYqMm0VjBxKs3cX4NYu-je7hdt_oeu1Q=s360-c-no"
          }).then(() => {
            // Profile updated!
            const { email, uid, displayName, photoURL } = user
            console.log("onAuthStateChanged : signed in successfully")
            dispatch(addUser({ email: email, uid: uid, displayName: displayName, photoURL: photoURL }))
          }).catch((error) => {
            // An error occurred
            // ...
          });

          console.log("account registered successfully")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode + ":" + errorMessage)
          seterrorMessage(errorCode + ":" + errorMessage)
        });
    }

  }


  return (
    <div>
      <Header />
      <div className=''>
        <img className='brightness-50 absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg" alt="" />
      </div>
      <form className='bg-black bg-opacity-65 p-12  absolute w-3/12 m-auto left-0 right-0 my-36' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-white text-2xl p-2'>{isLoggedIn ? "Sign Up" : "Sign In"}</h1>

        {isLoggedIn && <input ref={displayName} type="text" name="" id="" placeholder='User Name' className='p-2 m-2 my-4 w-full rounded-md' />}
        <input ref={email} type="text" name="" id="" placeholder='Email address' className='p-2 m-2 my-4 w-full rounded-md' />
        <input ref={password} type="password" placeholder='Password' className='p-2 m-2 my-4 w-full rounded-md' />
        <h1 className='text-red-600 p-2 mx-2 my-4'>{errorMessage}</h1>
        <button className='bg-red-600 p-2 m-2 my-4 w-full font-bold text-white rounded-md' onClick={handleClick}>{isLoggedIn ? "Sign Up" : "Sign In"}</button>

        {
          isLoggedIn ?
            <h1 className='text-gray-400 m-2 '>Already a user? <span className='cursor-pointer text-white' onClick={() => {
              setisLoggedIn(false)
            }}>Sign in now</span></h1>
            :
            <h1 className='text-gray-400 m-2 '>New to Netflix? <span className='cursor-pointer text-white' onClick={() => {
              setisLoggedIn(true)
            }}>Sign up now</span></h1>
        }



      </form>
    </div>
  )
}

export default Login