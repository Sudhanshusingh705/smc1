import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav">
              <a href="" className="navbar-brand mt-2 mt-lg-0">
                <img src={logo} height={40} alt="" loading="lazy" />
              </a>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="topcollege">
                  Top-College{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="topcourse">
                  Top-Course{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="studyabroad">
                  Study-Abroad{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="addmission">
                  Addmissions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="exams">
                  Exams
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="news">
                  News
                </NavLink>
              </li>

              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle text-white"
                  to="more"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Education Loan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Institute
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Q&A
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      College Predictor
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Test Series
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Practice Question
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Course Finder
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Scholership
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
            <br />
            <br />
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink className="nav-link text-white" to="login">
                    👤Login{" "}
                  </NavLink>
                </li>
                <br />
                <li className="nav-item">
                  <NavLink
                    className="nav-link navbar-dark text-white"
                    to="appdownload"
                  >
                    📱Downloads{" "}
                  </NavLink>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
