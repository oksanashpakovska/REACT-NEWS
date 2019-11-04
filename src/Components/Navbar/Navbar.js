import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col navigation">
        <nav>
          <ul className="main-nav">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to = "/about" > About </Link>
            </li>
            <li>
              < Link to = "/categories" > Categories </Link>
            </li>
            <li>
              < Link to = "https://www.reuters.com/news/lifestyle" target = "_blank" > Lifestyle </Link>
            </li>
            <li>
              < Link to = "/posts" > Posts </Link>
            </li>
            <li>
              < Link to = "/video" > Video </Link>
            </li>
            <li>
              < Link to = "/blog" > Blog </Link>
            </li>
            <li>
              < Link to = "/events" > Events </Link>
            </li>
            <li>
              < Link to = "/faq" > FAQ </Link>
            </li>
            <li>
              < Link to = "/get-in-touch" > Get in touch </Link>
            </li>
            <li>
              < Link to = "/login" > Login </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
