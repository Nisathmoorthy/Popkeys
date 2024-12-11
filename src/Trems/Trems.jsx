import React from "react";
import Tremstyle from "./Trems.module.css";
import Logo from "../Images/popkeyofficial-BQ3qTaDg.png";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div>
      <header>
        <nav className={Tremstyle.navbar}>
          <div className={Tremstyle.logo}>
            <a href="#">
              <img src={Logo} />
            </a>
          </div>
          <ul className={Tremstyle.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Terms;
