import React from "react";
import "./style.css";

const Forget = () => {
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
        <div className="heading mb-3">Forgot Password?</div>
        <div className="heading-2 mb-4">We just need your registered e-mail address
          to send your password resend</div>
        <form>
          <div className=" row gap-2">
            <div>
              <label htmlFor="email">Name</label>
            </div>
            <div className="form-input input-form">
              <input type="email" placeholder="Name" required />
            </div>
          </div>   
          <div>
            <a href="landing-page.html" className="btn btn-primary" type="submit">Send E-mail</a>
          </div>
        </form></div>
    </div>
  </div>
</div>

        </>
    )
}

export default Forget;