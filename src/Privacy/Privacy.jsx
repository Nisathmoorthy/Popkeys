import React from "react";
import Privacystyle from "./Privacy.module.css";
import Logo from "../Images/popkeyofficial-BQ3qTaDg.png";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div>
      <header>
        <nav className={Privacystyle.navbar}>
          <div className={Privacystyle.logo}>
            <a href="#">
              <img src={Logo} />
            </a>
          </div>
          <ul className={Privacystyle.links}>
            <li>
            <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Privacy;
