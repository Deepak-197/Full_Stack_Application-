import React,{useRef} from 'react'

const Login = () => {
    const emailRef = useRef(null)
    const passRef = useRef(null)

    const LoginUser = () => {
        const user = {
            email : emailRef.current.value,
            pass : passRef.current.value
        }
        
       
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`,{
            method:"POST",
            body: JSON.stringify(user),
            headers : {
                "Content-type" : "application/json"
            }
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            localStorage.setItem("token",res.token)
        }).then(()=>{
            emailRef.current.value = null
            passRef.current.value = null
            alert("Login successfull")
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div> 
        <input ref={emailRef} type={"email"} placeholder="email" />
        <input ref={passRef} type={"password"} placeholder="password" />
        <button onClick={LoginUser}>Login</button>
    </div>
  )
}

export default Login;