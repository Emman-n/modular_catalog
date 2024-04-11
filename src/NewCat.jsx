import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewCat = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    categorie: "",
    details: "",
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
    formData.append("categorie", values.categorie);
    formData.append("details", values.details);

    axios
      .post("http://localhost:8081/categories", formData)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
       <h1 className="center-title">New Categorie</h1>
       <br></br>
      <div class="center-container ">
        <form>
          <div className="mb-2">
            <label>Categorie name:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, categorie: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label>Categorie Description:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, details: e.target.value })
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
