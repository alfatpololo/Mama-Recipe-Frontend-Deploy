import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import axios from "axios";
import Navbar from "../../Component/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import dummy from "../../Assets/Images/2.png";
import { updateRecipe } from "../../Redux/action/recipe";

const Update = () => {
  const navigate = useNavigate();
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState("");
  const [recipe, setRecipe] = useState([]);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    //panggil method "fetchData"
    getById();
  }, []);
  const { id } = useParams();

  const getById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`
    );
    //get response data
    const data = await response.data;

    //assign data to state
    setRecipe(data);
  };

  const updateSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("image", image);
    handlePost(Object.fromEntries(formData));
  };

  const updateGambar = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    document.getElementById("image").innerHTML = fileUploaded.name;
    setImage(fileUploaded);
  };

  const handlePost = (form) => {
    updateRecipe(id, form)
      .then((res) => {
        console.log(form)
        console.log(res);
        setImage("");
        alert("Recipe update successfully");
        return navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update recipe");
      });
  };

  let formPost = useRef();

  return (
    <>
      <Navbar />
      <div>
        {/*Add Form Section Start*/}
        <form onSubmit={updateSubmit}>
          {/*Add Form Section End*/}
          {/*Text Area Section Start*/}
          <section className="text-area-section mt-5">
            <div className="container">
              <div className="row ms-4 justify-content-center">
                <div className="row col-12 justify-content-center">
                <input
                  className="title-image mt-4 mb-4 pt-4 ps-4"
                  onChange={updateGambar}
                  type="file"
                  id="image"
                />
                  {recipe.map((item) => (
                    <textarea
                      className="title-box pt-4 ps-4"
                      name="title"
                      id
                      cols={5}
                      rows={2}
                      defaultValue={item.title}
                    />
                  ))}
                  {recipe.map((item) => (
                    <textarea
                      className="title-box mt-4 pt-4 ps-4"
                      name="ingredients"
                      id
                      cols={5}
                      rows={10}
                      defaultValue={item.ingredients}
                    />
                  ))}
                  <textarea
                    className="title-box mt-4 pt-4 ps-4"
                    name="video"
                    placeholder="video"
                    id
                    cols={5}
                    rows={2}
                    defaultValue={""}
                  />
                  <button className="mt-5 send-comment-button">Send</button>
                </div>
              </div>
            </div>
          </section>
        </form>
        {/*Text Area Section End*/}
      </div>

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

export default Update;
