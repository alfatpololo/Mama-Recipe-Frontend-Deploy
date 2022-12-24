import React from "react";
import "./style.css";
import Navbar from "../../Component/Navbar";

const Video = () => {
    return (
        <>
       <Navbar/>

  {/*Video Recipe Detail Section Start*/}
  <>
<section className="video-recipe-section mt-5">
  <div className="container-fluid">
    <div className="row">
      <div className="yellow-sidebar col-1">
      </div>
      <div className="video-left col-7">
        <video controls width={700} height={400}>
          <source src="/media/cc0-videos/flower.webm" type="video/webm" /> 
        </video>
        <h1>Beef Steak with Curry Sauce - [Step 4]
          Cut the condiment and then mix it</h1>
        <p>3 month ago</p>
      </div>
      <div className="video-right col-4">
        <h1 className="mb-5">Next</h1>
        <img src={require("../../Assets/Images/Rectangle 90.png")} />
        <p className="fw-bold w-60 mt-4">Beef Steak with Curry Sauce - [Step 5] <br />Saute condiments together until turn brown</p>
        <p className="text-secondary text-opacity-50 fw-bold mb-5">HanaLohana - 3 month ago</p>
        <img src={require("../../Assets/Images/Rectangle 90.png")} />
        <p className="fw-bold w-60 mt-4">Beef Steak with Curry Sauce - [Step 5] <br />Saute condiments together until turn brown</p>
        <p className="text-secondary text-opacity-50 fw-bold mb-5">HanaLohana - 3 month ago</p>
        <img src={require("../../Assets/Images/Rectangle 90.png")} />
        <p className="fw-bold w-60 mt-4">Beef Steak with Curry Sauce - [Step 5] <br />Saute condiments together until turn brown</p>
        <p className="text-secondary text-opacity-50 fw-bold mb-5">HanaLohana - 3 month ago</p>
      </div>
    </div>
  </div>
</section>
</>
{/*Video Recipe Detail Section End*/}

</>
    )
}

export default Video;