import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./config"; // Adjust the path if necessary

const EditProd = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}product/${id}`)
      .then((res) => {
        console.log(res);
        // Update state using functional update form
        setValues((v) => ({
          ...v,
          product_id: res.data[0].product_id,
          product_name: res.data[0].product_name,
          details: res.data[0].product_details,
          price: res.data[0].price,
          image: res.data[0].product_image,
        }));
      })
      .catch((err) => console.log(err));
  }, [id]); // Include id as a dependency

  const [values, setValues] = useState({
    product_id: "",
    product_name: "",
    product_details: "",
    price: "",
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`${BASE_URL}editprod/${id}`, values)
      .then((res) => {
        console.log(res);
        alert('Product info UPDATED');
      })
      .catch((err) => console.log(err));
  };

  const handleCatDel = (id) => {
    axios
      .delete(`${BASE_URL}deleteProd/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
    <h1 className="center-title">EDIT PRODUCT INFO</h1>
    <div className="center-container ">
      <form onSubmit={handleUpdate}>
        <h2>ID: {values.product_id}</h2>
 
        <div className="mb-2">
          <img
            style={{ width: "200px" }}
            src={`${BASE_URL}images/` + values.image}
            alt="not found"
          />
          <br></br>
          <input
            type="file"
            onChange={(e) => setValues({ ...values, image: e.target.value })}
          />

          <br></br>

          <label>Product name:</label>
          <input
            type="text"
            className="form-control"
            value={values.product_name}
            onChange={(e) =>
              setValues({ ...values, product_name: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label>Product details:</label>
          <br></br>
          <textarea
            placeholder={values.product_details}
            rows="5"
            cols="33"
            className="form-control-details"
            value={values.product_details}
            onChange={(e) => setValues({ ...values, product_details: e.target.value })}
          />

        </div>

        <div className="mb-2">
          <label>Price</label>

          <input
            type="number"
            className="form-control"
            value={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
          />
        </div>

        <button className="btn btn-success">Update</button>

        {/* <Link to={`/`} className="btn btn-sm btn-info"> 
            <button className="btn btn-success" onClick={() => handleCatDel(values.idcategories)}>DELETE</button>
             </Link> */}

        <button
          className="btn btn-danger"
          onClick={() => handleCatDel(values.product_id)}
        >
          DELETE
        </button>
      </form>

      {/* <div className="container">
                <input type="file" onChange={handleFile} />
                <button onClick={handleSubmit}>Submit</button>
            </div> */}
    </div>
  </div>
  );
};

export default EditProd;
