import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CategorieS = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/categories/${id}`)
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
<div className="container py-1"  >
       
          {detail.length > 0 ? (
            <>
              <div className="container py-1">
                <div className="row py-2">
                  <div className="col-lg-4 m-auto text-center">
                    <h1>{detail[0].categorie}</h1>
                    <h7>{detail[0].details}</h7>
                    
                    <br></br>

                    <Link
                      to={`/NewProd/${detail[0].idcategories}`}
                      className="btn btn-sm btn-info">
                      ADD Product +
                    </Link>
                  </div>
                </div>
              </div>

              {detail.map((product) => (
 
                
                <div key={product.product_id}>
                
                
                    <div className="mt-5 col-md-12">
                    <Link to={`/EditProd/${product.product_id}`} className="btn btn-info buttonEditProd">Edit</Link>

                    <Link to={`/Details/${product.product_id}`} className="  justify-content-center">
                      <div
                        className="container"
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      >
                        <div
                          className="row justify-content-center"
                          style={{
                            width: "700px", // Change the value to whatever fixed width you desire
                            marginLeft: "auto",
                            marginRight: "auto",
                            border: "2px solid rgb(0, 0, 0)",
                            borderRadius: "15px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                          }}>
                          <div
                            className="container-fluid"
                            style={{
                              width: "80%",
                              backgroundColor: "rgb(255, 255, 255)",
                            }}>
                            <div className="row ">
                              <div className="col">
                                <div className="services-section">
                                  <ul className="list-group list-group-flush">
                                    <img
                                      style={{ width: "500px", height: "500px" }}
                                      src={
                                        `http://localhost:8081/images/` +
                                        product.image
                                      }
                                      alt="fuuck"
                                    />

                                    {/* <li className="list-group-item text-format">
                                      Product ID: {product.product_id}
                                    </li> */}
                                    <li className="list-group-item">
                                      Product Name: {product.product_name}
                                    </li>
                                    {/* <li className="list-group-item">
                                      Product Details: {product.details}
                                    </li> */}

                                    <li className="list-group-item">
                                      Product Price: {product.price}
                                    </li>
                                    
                                    {/* 
                                    <li className="list-group-item">
                                        imageeeeee:  {product.image}eeeeeeeee
                                    </li> */}

                                    {/* <Link to={`/NewProd/${product.idcategories}`} className="btn btn-sm btn-info">
                                        ADD Product
                                    </Link> */}
                                  </ul>
                                </div>
                              </div>

                              {/* <div className="col">
                                <div className="services-section">
                                    <img
                                    src="../../assets/images/Agua/cat1.jpg"
                                    className="img-fluid"
                                    alt="Cat 1"
                                    />
                                </div>
                                </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                    </div>
                
                </div>
              ))}
            </>
          ) : (
            <p>No details found</p>
          )}
       
      </div>

      <></>
    </div>
  );
};

export default CategorieS;
