import React, { useEffect, useState, useRef } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [state, setState] = useState(false);
    const [formup, setFormup] = useState(-1);
    const titleRef = useRef(null)
    const devRef = useRef(null)
    const bodyRef = useRef(null)
    const [len, setLen] = useState(0);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res);
                setPosts(res)
                setLen(res.length);
            }).catch((err) => console.log(err))
    }, [state])

    const DeletePost = (postId) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/delete/${postId}`, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res);
                setState(!state);
            }).catch((err) => console.log(err))
    }

    const UpdatePost = (postId) => {
        const uppost = {};
        if (titleRef.current.value) {
            uppost.title = titleRef.current.value
        }
        if (devRef.current.value) {
            uppost.device = devRef.current.value
        }
        if (bodyRef.current.value) {
            uppost.body = bodyRef.current.value
        }

        fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/update/${postId}`, {
            method: "PATCH",
            body: JSON.stringify(uppost),
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                titleRef.current.value = null;
                devRef.current.value = null;
                bodyRef.current.value = null;
                alert("Post updated successfull")
                setFormup(-1)
                setState(!state)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div>
              <h2>{len}</h2>
            </div>
            {posts.length > 0 ?
            <div>

                {posts.map((el, i) => {
                    return (
                        <div key={el._id}>
                            <h2>Title : {el.title}</h2>
                            <h3>Body : {el.body}</h3>
                            <h3>Device : {el.device}</h3>
                            <button onClick={() => DeletePost(el._id)}>Delete</button>
                            <button onClick={() => setFormup(i)}>Update</button>
                            {formup === i ?
                                <div>
                                    <input ref={titleRef} type={"text"} placeholder="title" />
                                    <input ref={bodyRef} type={"text"} placeholder="body" />
                                    <select ref={devRef}>
                                        <option value="pc">PC</option>
                                        <option value="mobile">MOBILE</option>
                                        <option value="tab">TAB</option>
                                    </select>
                                    <button onClick={() => UpdatePost(el._id)}>Save</button>
                                </div> : null
                            }
                            <hr />
                        </div>
                    )
                })}
            </div> : <h1>No Posts</h1> }
        </div>
    )
}

export default Posts;



// https://strong-snickerdoodle-7f7136.netlify.app/posts
// https://strong-snickerdoodle-7f7136.netlify.app/posts