import React from "react";
import Prohibitedstyle from "./Prohibited.module.css";
import Logo from "../Images/popkeyofficial-BQ3qTaDg.png";
import { Link } from "react-router-dom";

function Prohibited() {
  return (
    <div>
      <header>
        <nav className={Prohibitedstyle.navbar}>
          <div className={Prohibitedstyle.logo}>
            <a href="#">
              <img src={Logo} />
            </a>
          </div>
          <ul className={Prohibitedstyle.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Prohibited;
