import React from "react";
import logo from "../../img/Logo.svg";


const Nav = () => {
    return ( 
        <nav>
            <div className="container-lg">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <img src={logo} alt="app logo" />
                    </div>
                </div>
            </div>
           
        </nav>
     );
}
 
export default Nav;
