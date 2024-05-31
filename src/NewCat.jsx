import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./config"; // Adjust the path if necessary

const NewCat = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    category_name: "",
    category_details: "",
    cat_image: "",
  });

  const [file, setFile] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cat_image", file);
    formData.append("category_name", values.category_name);
    formData.append("category_details", values.category_details);

    axios
    .post(`${BASE_URL}addCategories`, formData)
    .then((res) => {
      console.log('SQL Query:', res.data.sql);
      console.log('Values:', res.data.values);
       navigate("/home"); 
    })
    .catch((err) => console.error(err));
};

  return (
    <div>
       <h1 className="center-title">New Categorie</h1>
       <br></br>
      <div className="center-container ">
        <form>
          <div className="mb-2">
            <label>Categorie name:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, category_name: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label>Categorie Description:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, category_details: e.target.value })
              }
            />
          </div>

          <input type="file" onChange={handleFile} />

          {/* <button className='btn btn-success' href="/">Submit</button> */}
          
          <button className="btn btn-success" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCat;
