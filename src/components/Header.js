
import {LOGO} from "../utils/constants.js";
import {useState} from "react";
const Header=()=>{
     const  [login ,setlogin]=useState("Login");

  return (
 


   <div className="header">
      <div className="logo-container">
        <img  className="logo"src={LOGO} alt="Cant load Image"/>
      </div>

      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button onClick={()=>{
            login==="Login"?setlogin("Logout"):setlogin("Login");
          }}>
            {login}
            </button></li>
       
        </ul>
      </div>
    </div>
  );
};
export default Header;