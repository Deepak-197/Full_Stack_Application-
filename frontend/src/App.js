import './App.css';
import {Route,Routes,Link,useNavigate} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

function App() {
const navigate = useNavigate();


  const LogoutApp = () =>{
    alert("User Logout");
    navigate("/posts");
    // window.location.reload();
    localStorage.removeItem("token");
  }

  return (
    <div className="App"> 

      <div style={{width:"70%",margin:"12px auto",display:"flex",justifyContent:"space-between"}}>
        <Link to={"/"} >Home</Link>
        <Link to={"/posts"} >Posts</Link>
        <Link to={"/createpost"} >Create Posts</Link>
        <Link to={"/login"} >Login</Link>
        <Link to={"/signup"} >Signup</Link>
        <button onClick={LogoutApp}>Logout</button>
      </div>


      <h1>Social Media App</h1>
       <Routes>
        <Route path='/' element={<h1>This is Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/createpost" element={<CreatePost />} />
       </Routes>
    </div>
  );
}

export default App;
