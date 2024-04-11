import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditCat = () => {
  const { id } = useParams();
 
  const [file, setFile] = useState();


  const [values, setValues] = useState({
    categorie: '',
    details: "",
    cat_image: "",
    });

    useEffect(() => {
        axios
          .get(`http://localhost:8081/categorie/${id}`)
          .then((res) => {
            console.log(res);
            setValues((prevValues) => ({
              ...prevValues,
              categorie: res.data[0].categorie,
              details: res.data[0].details
            }));
          })
          .catch((err) => console.log(err));
      }, [id]);
      


    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('categorie', values.categorie);
            formData.append('details', values.details);
            formData.append('file', file);

            const response = await axios.put(`http://localhost:8081/editcat/${id}`, formData);
            console.log(response);
            // Optionally, show a success message to the user
        } catch (error) {
            console.error('Error:', error);
            // Optionally, show an error message to the user
        }
    };

return (
  <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <h2>Edit Categorie</h2>  
      <form onSubmit={handleEdit}>  
        <>
          <input type="file" onChange={handleFile} />
          <div className="mb-2">
            <label>name</label>
            <input
              type="text"
              className="form-control"
              value={values.categorie}
              onChange={(e) => setValues({ ...values, categorie: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label>details</label>
            <input
              type="text"
              className="form-control"
              value={values.details}
              onChange={(e) => setValues({ ...values, details: e.target.value })}
            />
          </div>
          <button type="submit" className='btn btn-success'>Submit</button>
        </>
      </form>
    </div>
  </div>
);
};

export default EditCat;
