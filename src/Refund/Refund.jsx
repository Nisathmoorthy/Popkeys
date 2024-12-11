import React from "react";
import Refundstyle from "./Refund.module.css";
import Logo from "../Images/popkeyofficial-BQ3qTaDg.png";
import { Link } from "react-router-dom";

function Refund() {
  return (
    <div>
      <header>
        <nav className={Refundstyle.navbar}>
          <div className={Refundstyle.logo}>
            <a href="#">
              <img src={Logo} />
            </a>
          </div>
          <ul className={Refundstyle.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Refund;
