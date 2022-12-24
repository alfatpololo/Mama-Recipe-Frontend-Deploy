import React, {useState} from 'react'
import "./style.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { userLogin } from '../../Redux/action/user';

const Login = () => {
  const navigate = useNavigate();

    const [form, setform] = useState({
        email: '',
        password: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form)

        userLogin(form)
        .then((response) => {
            console.log(response.data)
            if (response.data.status !== "success") {
              alert(response.data.message)
            } else {
              localStorage.setItem("token", response.data.token.token);
              localStorage.setItem("data", JSON.stringify(response.data.token.data));
              localStorage.setItem("username", JSON.stringify(response.data.token.data.username));
              alert("Berhasil masuk")
              return navigate ("/landing")
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
<div className="container-fluid">
  <div className="row">
    <div className=" col-sm-6 col-md-6  align-item-center login-container">
      <div className="d-flex flex-column logo">
        <div><img src={require("../../Assets/Images/barbecue 1.png")} alt /></div>
        <div><p>Mama Recipe.</p></div>
      </div>
    </div>
    <div className="input-container ms-auto col-lg-6 col-md-6">
      <div className="col-md-9 col-sm-12 form-box">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="heading mb-3">Welcome</div>
        <div className="heading-2 mb-4">Log in into your existing account</div>
          <div className=" row gap-2">
            <div>
              <label htmlFor="email">E-mail</label>
            </div>
            <div className="form-input input-form">
              <input type="email" onChange={(e) => setform({...form, email: e.target.value})} placeholder="email@email.com" required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-input input-form">
              <input type="password" onChange={(e) => setform({...form, password: e.target.value})} placeholder="Password" required />
            </div>
          </div>
          <div className="mb-2">
            <div className="d-flex">
              <div className="d-flex custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="cb1" />
                <label className="custom-control-label" htmlFor="cb1">I agree to terms &amp; conditions</label>
              </div>
            </div>
            <div>
              <button className="btn btn-primary" type="submit">Log In</button>
            </div>
          </div>
        <div className="text-right mb-2">
          <a href="forgot.html" className="forgotpw">Forgot Password ?</a>
        </div>
        <div className="text-center signup-label">
          Don't have an account? 
          <Link to="/register" className="register">Sign Up</Link>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Login;