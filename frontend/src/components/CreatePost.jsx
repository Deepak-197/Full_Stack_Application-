import React,{useRef} from 'react'

const CreatePost = () => {
    const titleRef = useRef(null)
    const devRef = useRef(null)
    const bodyRef = useRef(null)

    const AddPost = () => {
        const user = {
            title : titleRef.current.value,
            device : devRef.current.value,
            body : bodyRef.current.value,
        }
       
        fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/create`,{
            method:"POST",
            body: JSON.stringify(user),
            headers : {
                "Content-type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            titleRef.current.value = null;
            devRef.current.value = null;
            bodyRef.current.value = null;
           alert("Post Registred successfull")
        })
        .catch((err)=>console.log(err))
    }

    
  return (
    <div>
         <input ref={titleRef} type={"text"} placeholder="title" />
        <input ref={bodyRef} type={"text"} placeholder="body" />
        <select ref={devRef}>
         <option value="pc">PC</option>    
         <option value="mobile">MOBILE</option>    
         <option value="tab">TAB</option>    
        </select> 
        <button onClick={AddPost}>Add Post</button>
    </div>
  )
}

export default CreatePost;