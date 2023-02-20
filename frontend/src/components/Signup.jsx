import React, { useRef } from 'react'

const Signup = () => {
const nameRef = useRef(null)
const genRef = useRef(null)
const emailRef = useRef(null)
const passRef = useRef(null)

const AddUser = () => {
    const user = {
        name : nameRef.current.value,
        gender : genRef.current.value,
        email : emailRef.current.value,
        pass : passRef.current.value
    }
   
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/register`,{
        method:"POST",
        body: JSON.stringify(user),
        headers : {
            "Content-type" : "application/json"
        }
    }).then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        nameRef.current.value = null;
        genRef.current.value = null;
        emailRef.current.value = null;
       passRef.current.value = null;
       alert("User Registred successfull")
    })
    .catch((err)=>console.log(err))
}

  return (
    <div>
        <input ref={nameRef} type={"text"} placeholder="name" />
        <select ref={genRef}>
         <option value="male">Male</option>    
         <option value="female">Female</option>    
        </select> 
        <input ref={emailRef} type={"email"} placeholder="email" />
        <input ref={passRef} type={"password"} placeholder="password" />
        <button onClick={AddUser}>Register</button>
    </div>
  )
}


export default Signup;