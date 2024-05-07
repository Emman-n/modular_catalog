import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "./config"; // Adjust the path if necessary

const EditCat = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}get_category/${id}`)
      .then((res) => {
        console.log(res);
        // Update state using functional update form
        setValues((v) => ({
          ...v,
          idcategories: res.data[0].idcategories,
          category_name: res.data[0].category_name,
          category_details: res.data[0].category_details,
          cat_image: res.data[0].cat_image, 
        }));
      })
      .catch((err) => console.log(err));
  }, [id]); // Include id as a dependency


  const [values, setValues] = useState({
    idcategories:'',
    category_name: "",
    category_details: "" ,
  });

const handleUpdate = (event)=>{
    event.preventDefault();
    axios.put(`${BASE_URL}editcat/${id}`, values)
    .then(res=>{
        console.log(res)
        alert('Product info UPDATED');
    }).catch((err) => console.log(err));
}


const handleCatDel = (id) => {
  axios.delete(`${BASE_URL}deleteCat/${id}`)
    .then(res => {
      console.log(res)
      navigate('/');
    })
    .catch(err => {
      console.log(err);
    });
};




  return (
    <div>
    <h1 className="center-title">EDIT CATEGORY INFO</h1>
      <div className="center-container ">

        <form onSubmit={handleUpdate}>
        <h2>ID: {values.idcategories}</h2>

          <div className="mb-2">
        
          <img style={{ width: '200px' }} 
          src={`${BASE_URL}images/` + values.cat_image} 
          alt="no image"/>
          <input type="file"  onChange={(e) => setValues({ ...values, cat_image: e.target.value })} />
                  {/* src={`${BASE_URL}images/` + product[0].product_image} */}

          <br></br>

            <label>name</label>
            <input
              type="text"
              className="form-control"
              value={values.category_name}
              onChange={(e) =>
                setValues({ ...values, category_name: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <label>detail</label>

            <input
              type="text"
              className="form-control"
              value={values.category_details}
              onChange={(e) => setValues({ ...values, category_details: e.target.value })}
            />
          </div>



          <button className="btn btn-success">Update</button>

          {/* <Link to={`/`} className="btn btn-sm btn-info"> 
          <button className="btn btn-success" onClick={() => handleCatDel(values.idcategories)}>DELETE</button>
          </Link> */}

          <button className="btn btn-danger" onClick={() => handleCatDel(values.idcategories)}>DELETE</button>

        </form>

        {/* <div className="container">
              <input type="file" onChange={handleFile} />
              <button onClick={handleSubmit}>Submit</button>
          </div> */}

      </div>
    </div>
  );
};

export default EditCat;
