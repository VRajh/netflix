import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router';
import { netflix_logo } from '../utils/const';
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removerUser } from '../utils/userSlice'



const Header = () => {
  const userDetails = useSelector((store)=>store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("header useEffect")
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            //const uid = user.uid;
            // console.log(JSON.stringify(user, null, 2));
            const { email, uid, displayName, photoURL } = user
            console.log("onAuthStateChanged : signed in successfully")
            dispatch(addUser({ email: email, uid: uid, displayName: displayName, photoURL: photoURL }))
            navigate("/browse")
            // ...
        } else {
            // User is signed out
            // ...
            console.log("onAuthStateChanged : user is signed out")
            dispatch(removerUser())
            navigate("/")
        }
    });

    return ()=>{
      unsubscribe()
    }

}, [])

  //signout
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.")
      navigate("/")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <div className='flex justify-between w-full absolute bg-gradient-to-b from-black z-10'>
        <img className='w-44 cursor-pointer ' src={netflix_logo} alt="logo" />
        {userDetails && <div className='flex p-2'>
          <h1 className='p-2 font-bold text-white text-xl'>Welcome, {userDetails.displayName}</h1>
          <img className='h-12 w-12' src={userDetails?.photoURL} alt="" />
          <button className='h-12 w-12 mx-1 border border-black bg-red-600 text-black font-bold' onClick={handleSignOut}>sign out</button>
        </div>}
    </div>
  )
}

export default Header