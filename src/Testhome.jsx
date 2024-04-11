import React from 'react';
import './style.css';


const Testhome = () => {
    return (
        <div>
            <div className="container py-1">
                <div className="row gy-4 ">
                    <div className="col-lg-4-title    text-center">
                        <h1>Categorias</h1>
                        <h6>Categorias y usos para tuberia</h6>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col py-3 hover">
                            <a href="/agua">
                                <div className="card border-30px bg-light">
                                    <div className="services-section">
                                        <div className="card-body">
                                            <img src="../../assets/images/categorias/agua.jpg" className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                    <h5 style={{ textAlign: "center" }}>Agua</h5>
                                </div>
                            </a>
                        </div>

                      

                        <div className="col py-3">
                            <a href="/sanitarios">
                                <div className="card border-40px bg-light">
                                    <div className="services-section">
                                        <div className="card-body">
                                            <img src="../../assets/images/categorias/sanitarios.jpg" className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                    <h5 style={{ textAlign: "center" }}>Sanitarios</h5>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testhome;
