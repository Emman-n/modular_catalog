import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "./config";  


const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}product/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
   {/* <New/>  */}
      {product.length > 0 ? (
        <div className="container border p-4 custom-container">
         

          {/* Title Row */}
          <div className="row mb-4">
            {/* <div className="col text-center">
          <h1>Title</h1>
        </div> */}
          </div>

          <div className="row">
            <div className="col-md-6 border pl-md-4">
              <img
                src={`${BASE_URL}images/` + product[0].product_image}
                alt="not found"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 border pr-md-4 d-flex align-items-stretch justify-content-flex custom-column">
              <ul className="list-unstyled custom-font text-left">
               
                <li className="mb-3">
                  <h1 className="prodct-title"> {product[0].product_name}</h1>
                </li>
                <li className="mb-3">
                  <h5>Price: {product[0].price}</h5>
                </li>
                <li className="mb-3">
                  <h5>Description: </h5>
                  {product[0].product_details}
                </li>
                <li className="mb-3">Item 5</li>
              </ul>
            </div>
          </div>
          <Link
            to={`/EditProd/${product[0].product_id}`}
            className="btn btn-danger buttonEdit">
            EDIT INFO
          </Link>
        </div>
      ) : (
        <p>NO DATA</p>
      )}

    
    </div>
  );
};

export default Details;
