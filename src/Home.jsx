import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './style.css';
import { BASE_URL } from "./config"; // Adjust the path if necessary


const Home = () => {
const [data, setData] = useState([]);

useEffect(() => {
axios
.get(`${BASE_URL}`)
.then((res) => {
setData(res.data);
})
.catch((err) => console.log(err));
}, []);

return (
<div>

  <div className="container py-1">

    <div className="row gy-4 ">
      <div className="col-lg-4-title    text-center">
        <h1>Catalogo</h1>
        <h6> <a href="/NewCat" className="btn btn-success buttonADD">
            Add category +
          </a>
        </h6>
      </div>
    </div>

    <div className="container" >
      <div className="row" >
        {data.map((category, index) => (
        <div key={index} className="col-md-4" style={{ marginTop: "20px" }}>

          <div className="card border-10px bg-light">
            <Link to={`/EditCat/${category.idcategories}`} className="btn btn-info buttonEdit">Edit</Link>

            <Link to={`/CategorieS/${category.idcategories}`} className="hover">
            <div className="services-section">
              <div className="card-body">
                <img style={{ width: "300px" }} src={`http://localhost:8081/images/${category.cat_image}`}
                  alt={`${category.cat_image}`} />
              </div>
            </div>
   
            <h5 style={{ textAlign: "center" }}>{category.category_name}</h5>

            </Link>
          </div>

        </div>
        ))}
      </div>
    </div>

  </div>
</div>
);
};

export default Home;