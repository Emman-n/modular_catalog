import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './style.css';

const Home = () => {
const [data, setData] = useState([]);

useEffect(() => {
axios
.get("http://localhost:8081/")
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
            Add categorie +
          </a>
        </h6>
      </div>
    </div>

    <div className="container" >
      <div className="row" >
        {data.map((categorie, index) => (
        <div key={index} className="col-md-4" style={{ marginTop: "20px" }}>

          <div className="card border-10px bg-light">
            <Link to={`/EditCat/${categorie.idcategories}`} className="btn btn-info buttonEdit">Edit</Link>

            <Link to={`/CategorieS/${categorie.idcategories}`} className="hover">
            <div className="services-section">
              <div className="card-body">
                <img style={{ width: "300px" }} src={`http://localhost:8081/images/${categorie.cat_image}`}
                  alt="noImage" />
              </div>
            </div>
            
            <h5 style={{ textAlign: "center" }}>{categorie.categorie}</h5>

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