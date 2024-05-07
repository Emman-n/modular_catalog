import React from "react";
 
import { Outlet, Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="NavTitle">
            <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <li>Modular Cat</li>
                <li>
                    <ul style={{ display: 'flex', listStyleType: 'none', paddingRight:10 }}>
                        <li>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                User Mode
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
