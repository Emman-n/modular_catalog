import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./config"; // Adjust the path if necessary

const NewProd = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    product_name: "",
    product_details: "",
    product_image: "",
  });

  const [file, setFile] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_image", file);
    formData.append("product_name", values.product_name);
    formData.append("product_details", values.product_details);
    formData.append("price", values.price);

    axios
      .post(`${BASE_URL}addProd/${id}`, formData)
      .then((res) => {
        console.log(res);
        navigate(`/CategorieS/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
<div>
<h1 className="center-title">ADD PRODD</h1>

    <div className="center-container ">
    
      <div >
        <form>
          <div className="mb-2">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, product_name: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label>Product Description</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, product_details: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>
        </form>

        <div className="container">
          <input type="file" onChange={handleFile} />
          <button className="btn btn-success" onClick={handleSubmit}>Add Product</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewProd;
