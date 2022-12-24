import React, {useState} from 'react'
import "./style.css";
import Navbar from "../../Component/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Landing = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipe/${title}`)
    .then((res) => {
      navigate(`/search?title=${title}`);
    })
    .catch((err) => {
      console.log(err);
    })
  }

    return (
        <>
  <Navbar />
  {/*Hero Section Start*/}
  <section className="hero-section">
    <div className="container">
      <div className="row">
        {/*Hero Left*/}
        <div className="hero-left col-9">
          <h1>Discover Recipe &amp; Delicious Food</h1>
          <form onSubmit={(e) => onSubmitHandler(e)} className="form-search">
            <img src={require("../../Assets/Images/search.png")} />
          <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder=" search restaurant, food" />
          </form>
        </div>
        {/*Hero Right*/}
        <div className="hero-right col-3">
          <img src={require("../../Assets/Images/Rectangle 313.png")} />
        </div>
        <div className="yellow-block-1" />
      </div>
    </div>
  </section>
  {/*Hero Section End*/}
  {/*Popular Section Start*/}
  <section className="popular-section">
    <div className="container">
      <div className="first-page">
        <img src={require("../../Assets/Images/Rectangle 6.png")} />
        <h1>Popular For You !</h1>
      </div>
      <div className="container">
        <div className="row">
          {/*Popular Left*/}
          <div className="popular-left col-9">
            <img src={require("../../Assets/Images/2.png")} />
            <div className="yellow-frame">
              <img src={require("../../Assets/Images/Rectangle 309.png")} />
            </div>
          </div>
          {/*Popular Right*/}
          <div className="popular-right col-3">
            <h1>Healthy Bone Broth Ramen (Quick &amp; Easy)</h1>
            <img src={require("../../Assets/Images/Line 16.png")} />
            <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
            <button className="learn-more"><Link to="/detail" className="text-decoration-none fw-500 text-white"> Learn More</Link></button>
          </div>
        </div>
      </div>
    </div></section>
  {/*Popular Section End*/}
  {/*NewRecipe Section Start*/}
  <section className="newrecipe-section">
    <div className="container">
      <div className="first-page">
        <img src={require("../../Assets/Images/Rectangle 6.png")} />
        <h1>New Recipe</h1>
      </div>
      <div className="container">
        <div className="row">
          {/*NewRecipe Left*/}
          <div className="newrecipe-left col-9">
            <img src={require("../../Assets/Images/Rectangle 314.png")} />
          </div>
          {/*NewRecipe Right*/}
          <div className="newrecipe-right col-3">
            <h1>Healthy Bone Broth Ramen (Quick &amp; Easy)</h1>
            <img src={require("../../Assets/Images/Line 16.png")} />
            <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="yellow-block-bottom">
          <img src={require("../../Assets/Images/Rectangle 2.png")} />
        </div>
      </div>
    </div></section>
  {/*NewRecipe Section End*/}
  {/*Carousel Section Start*/}
  <section className="carousel-section">
    <div className="container">
      <div className="first-page">
        <img src={require("../../Assets/Images/Rectangle 6.png")} />
        <h1>Popular Recipe</h1>
      </div>
      <div className="container">
        <div className="row">
          {/*carousel top*/}
          <div className="carousel-top col-4">
            <img src={require("../../Assets/Images/chickenkare.png")} />
            <p className="fw-bold">Chicken Kare</p>
          </div>
          <div className="carousel-top col-4">
            <img src={require("../../Assets/Images/chickenbomb.png")} />
            <p className="fw-bold">Chicken Bomb</p>
          </div>
          <div className="carousel-top col-4">
            <img src={require("../../Assets/Images/bananasmoothiepop.png")} />
            <p className="fw-bold">Banana Smothie Pop</p>
          </div>
          {/*carousel bottom*/}
          <div className="carousel-bottom col-4">
            <img src={require("../../Assets/Images/indiansalad.png")} />
            <p className="fw-bold">Coffe Lava Cake</p>
          </div>
          <div className="carousel-bottom col-4">
            <img src={require("../../Assets/Images/sugarsalmon.png")} />
            <p className="fw-bold">Sugar Salmon</p>
          </div>
          <div className="carousel-bottom col-4">
            <img src={require("../../Assets/Images/coffeelavacake.png")} />
            <p className="fw-bold">Indian Salad</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Carousel Section Start*/}
  {/*Footer Section Start*/}
  <footer className="footer pt-5 pb-4">
    <section>
      <div className="row col-12 text-center">
        <h1>Eat, Cook, Repeat</h1>
        <p>Share your best recipe by uploading here !</p>
      </div>
    </section>
  </footer>
  {/*Footer Section End*/}
        </>
    )
}

export default Landing;