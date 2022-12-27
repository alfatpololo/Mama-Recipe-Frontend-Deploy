import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../Component/Navbar";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
const [queryParam] = useSearchParams();

const titleSearch = queryParam.get("title");
const [title, setTitle] = useState([""]);

useEffect(() => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipe/${titleSearch}`)
    .then((res) => {
        console.log(res.data);
        setTitle(res.data);
    })
    .catch((err) => {
        console.log(err)
    })
}, [])

  return (
    <>
      <Navbar />
    
        <div>
            <div>
                {title.map((item) => {
                    return (
                    <>
                    <section className="searchSection">
                        <Link to={`/detail/${item.id}`}>
                        <img src={item.image} />
                        <h1 className="item-title">{item.title}</h1>
                        </Link>
                    </section>
                    </>
                    )
                })}
            </div>
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

export default Search;
