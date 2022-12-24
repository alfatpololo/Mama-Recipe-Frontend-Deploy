import React, {useState, useEffect} from 'react'
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [username, setUserName] = useState ();
  const [isActive, setisActive] = useState (
    false
  );
const navigate = useNavigate();

  useEffect (() => {
    const getUsername = localStorage.getItem("username");
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setisActive (true)
      setUserName (getUsername)
    } else {
      alert("Silahkan Login Terlebih Dahulu")
     return navigate("/login")
    }
  })

  const logout = (e) => {
    localStorage.clear();
    return navigate('/');
  }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-none">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="custom-nav nav-link" to="/landing">Home</Link>
        <Link className="custom-nav nav-link" to="/add">Add Recipe</Link>
        <Link className="custom-nav nav-link" to="/profile">Profile</Link>
        {isActive? <p className="nav-link login-button">{username.replace(/"/g,'')}</p>:<Link className="nav-link login-button" to="/">Login</Link> } 
        {isActive? <button onClick={(e) => logout(e)}>Logout</button>:""}      
      </div>
    </div>
  </div>
</nav>

 </>
    )
}

export default Navbar;