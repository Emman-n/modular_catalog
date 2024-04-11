import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const EditCat = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/categorie/${id}`)
      .then((res) => {
        console.log(res);
        // Update state using functional update form
        setValues((v) => ({
          ...v,
          idcategories: res.data[0].idcategories,
          categorie: res.data[0].categorie,
          details: res.data[0].details,
          cat_image: res.data[0].cat_image, 
        }));
      })
      .catch((err) => console.log(err));
  }, [id]); // Include id as a dependency


  const [values, setValues] = useState({
    idcategories:'',
    categorie: "",
    details: "" ,
  });

const handleUpdate = (event)=>{
    event.preventDefault();
    axios.put(`http://localhost:8081/editcat/${id}`, values)
    .then(res=>{
        console.log(res)
    }).catch((err) => console.log(err));
}


const handleCatDel = (id) => {
  axios.delete(`http://localhost:8081/deleteCat/${id}`)
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
      <h1>EDIT Cat</h1>

      <form onSubmit={handleUpdate}>
      <h2>ID: {values.idcategories}</h2>

        <div className="mb-2">
      
        <img style={{ width: '200px' }} src={`http://localhost:8081/images/` + values.cat_image} alt="fuuck"/>
        <input type="file"  onChange={(e) => setValues({ ...values, cat_image: e.target.value })} />

<br></br>

          <label>name</label>
          <input
            type="text"
            className="form-control"
            value={values.categorie}
            onChange={(e) =>
              setValues({ ...values, categorie: e.target.value })
            }
          />
        </div>

        <div className="mb-2">
          <label>detail</label>

          <input
            type="text"
            className="form-control"
            value={values.details}
            onChange={(e) => setValues({ ...values, details: e.target.value })}
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
  );
};

export default EditCat;