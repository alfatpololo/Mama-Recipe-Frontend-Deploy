import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../Component/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { deleteRecipe } from "../../Redux/action/recipe";
import { getRecipe } from "../../Redux/action/recipe";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const [dataRecipe, setDataRecipe] = useState([]);

  const data = JSON.parse(localStorage.getItem("data"));
  const dispatch=useDispatch();
  const recipe=useSelector((state) => {
    return state.recipe
  })

  useEffect(() => {
    dispatch(getRecipe())
  },[])
      

  const deleteRow = (id,e) => {
    e.preventDefault();
    deleteRecipe(id)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const posts = dataRecipe.filter((item) => item.id !== id);
        setDataRecipe({ data: posts });
        alert('Data berhasil dihapus')
        return navigate("/landing")
      });
  };

  return (
    <>
      <Navbar />
      {/*Profile Picture Section Start*/}
      <section className="profile-picture-section mt-5">
        <div className="container">
          <div className="row col-12 justify-content-center">
            <img
              className="profile-picture"
              src={require("../../Assets/Images/Ellipse 127.png")}
            />
            <a
              className="collapse-custom"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <img src={require("../../Assets/Images/Vector (1).png")} alt="" />
            </a>
            <h1 className="user-tag">{data? data.username: ""}</h1>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <a className="change-profile" href="#">
                  Change Profile Photo
                </a>
                <a className="change-password" href="#">
                  Change Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Profile Picture Section End*/}
      {/*Recipe Menus Section Start*/}
      <section className="recipe-menu-section mt-5">
        <div className="container">
          <div className="row">
            <div className="nav-left-menu col-2">
              <button
                className="my-recipe text-decoration-none fw-bold btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#my-recipe"
                aria-expanded="false"
                aria-controls="my-recipe"
                href
              >
                My recipe
              </button>
            </div>
            <div className="nav-left-menu col-2">
              <a className="text-decoration-none fw-bold" href>
                Saved Recipe
              </a>
            </div>
            <div className="nav-left-menu col-2">
              <a className="text-decoration-none fw-bold" href>
                Liked Recipe
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/*Recipe Menus Section End*/}
      {/*Recipe Menus Images Start*/}
      <section className="recipe-menu-images-section collapse" id="my-recipe">
        <div className="container">
          <div className="row">
            {recipe.data.map((item, index) => (
              <div key={index} className="carousel-top col-4">
                <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`} />
                <p className="fw-bold text-light">{item.title}</p>
                <Link to={`/recipe/update/${item.id}`}><button className="btn-update">Update</button></Link>
                <button onClick={(e) => deleteRow(item.id, e)} className="btn-delete">Delete</button>
                <button onClick={() => navigate(`/detail/${item.id}`)} className="btn-show">Show</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Recipe Menus Images End*/}
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
  );
};

export default Profile;
