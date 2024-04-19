import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "./config"; // Adjust the path if necessary
import imagen1 from "../src/IMAGE_TEST.jpg"


const CategorieS = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}get_products/${id}`)
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);





  return (
    <div>
      <div className="container py-1">
        {detail.length > 0 && (
          <div className="container py-1">
            <div className="row py-2">
              <div className="col-lg-4 m-auto text-center">
                <h1>{detail[0].category_name}</h1>
                <h6>{detail[0].category_details}</h6>
                <br />
                <Link
                  to={`/NewProd/${detail[0].idcategories}`}
                  className="btn btn-sm btn-info"
                >
                  ADD Product +
                </Link>
              </div>
            </div>
          </div>
        )}
  
        {detail.map((product) => (
          <div key={product.product_id}>
            <div className="mt-5 col-md-12">
              <Link
                to={`/EditProd/${product.product_id}`}
                className="btn btn-info buttonEditProd"
              >
                Edit
              </Link>
  
              <Link
                to={`/Details/${product.product_id}`}
                className="  justify-content-center"
              >
                <div
                  className="container"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <div
                    className="row justify-content-center"
                    style={{
                      width: "700px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      border: "2px solid rgb(0, 0, 0)",
                      borderRadius: "15px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <div
                      className="container-fluid"
                      style={{ width: "80%", backgroundColor: "rgb(255, 255, 255)" }}
                    >
                      <div className="row">
                        <div className="col">
                          <div className="services-section">
                            <ul className="list-group list-group-flush">
                              <img
                                style={{ width: "500px", height: "500px" }}
                                src={imagen1} 
                                alt="no imagen"
                              />
                              ///static/media/IMAGE_TEST.da5c970fcfba610a72e7.jpg
  
                              <li className="list-group-item">
                                Product Name: {product.product_name}
                              </li>
                              
                              <li className="list-group-item">
                                Product Price: {product.price}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <></>
    </div>
  );
  
  
};

export default CategorieS;
