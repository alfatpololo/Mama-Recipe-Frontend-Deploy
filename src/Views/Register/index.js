import React, {useState} from 'react'
import "./style.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { userRegister } from '../../Redux/action/user';

const Register = () => {
  const navigate = useNavigate();
    const [form, setForm] = useState({
         username:'',
         password:'',
         password2:'',
         email:'',
         phone:'',
    })
    
    const onSubmit =  (e) => {
        e.preventDefault();
        // console.log(form)
        if(form.username == "" || form.phone == "" || form.password == ""){
            alert('Semua input wajib diisi')
        }else {
            if (form.password !== form.password2) {
              alert("Password harus sama");
              return navigate ("/register")
            }
            const body = {
                username: form.username,
                password: form.password,
                email: form.email,
                phone: form.phone,
            }
           userRegister(form)
            .then((response) => {
                if(response.data.code !== 200){
                    alert('error:' + response.data.message)
                }
                else{
                    alert("Berhasil Register")
                    return navigate('/')
                }
            }).catch((err) => {
                console.error(err)
            })
        }
    }
    
    return (
        <>
        <div className="container-fluid">
  <div className="row">
    <div className=" col-sm-6 col-md-6 align-item-center login-container">
      <div className="d-flex flex-column logo">
        <div><img src={require("../../Assets/Images/barbecue 1.png")} alt /></div>
        <div><p>Mama Recipe.</p></div>
      </div>
    </div>
    <div className="input-container ms-auto col-lg-6 col-md-6">
      <div className="col-md-9 col-sm-12 form-box">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="heading mb-3">Let’s Get Started !</div>
        <div className="heading-2 mb-4">Create new account to access all features</div>
          <div className=" row gap-2">
            <div>
              <label htmlFor="email">Username</label>
            </div>
            <div className="form-input input-form">
              <input type="text" onChange={(e) => setForm({...form, username: e.target.value})} placeholder="Username" required />
            </div>
            <div>
              <label htmlFor="password">Email Address</label>
            </div>
            <div className="form-input input-form">
              <input type="email" onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email Address" required />
            </div>
            <div>
              <label htmlFor="password">Phone Number</label>
            </div>
            <div className="form-input input-form">
              <input type="text" onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="0851xxxxxxxx" required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-input input-form">
              <input type="password" onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Password" required />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
            </div>
            <div className="form-input input-form">
              <input type="password" onChange={(e) => setForm({...form, password2: e.target.value})} placeholder="Confirm Password" required />
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
            <button className="btn btn-primary" type="submit">Register</button>
            </div>
          </div>
        <div className="text-center signup-label">
          Already have account?
          <Link to="/" className="register">Log in Here</Link>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Register;