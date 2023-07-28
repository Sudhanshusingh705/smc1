import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiArrowRightCircle } from "react-icons/fi";
/*study goal*/
import engineer from "../assets/icons/engineer.png";
import management from "../assets/icons/management.png";
import commerce from "../assets/icons/commerce.png";
import arts from "../assets/icons/art.png";
import medical from "../assets/icons/medical.png";
import design from "../assets/icons/design.png";
/*top collections*/
import cd1 from "../assets/topcollection/cd1.jpg";
import cd2 from "../assets/topcollection/cd2.jpg";
import cd3 from "../assets/topcollection/cd3.jpg";
import cd4 from "../assets/topcollection/cd4.jpg";
import cd5 from "../assets/topcollection/cd5.jpg";
import cd6 from "../assets/topcollection/cd6.jpg";
import cd7 from "../assets/topcollection/cd7.jpg";
import cd8 from "../assets/topcollection/cd8.jpg";
import cd9 from "../assets/topcollection/cd9.jpg";
import cd10 from "../assets/topcollection/cd10.jpg";
import cd11 from "../assets/topcollection/cd11.jpg";
import cd12 from "../assets/topcollection/cd12.jpg";
import cd13 from "../assets/topcollection/cd13.jpg";
import cd14 from "../assets/topcollection/cd14.jpg";
import cd15 from "../assets/topcollection/cd15.jpg";
/*Explore Program*/
import ranking from "../assets/exploreprogram/ranking.jpeg";

/*Latets notifications*/
import bce from "../assets/latestnotificaton/bce.jpg";
import mcc from "../assets/latestnotificaton/mcc&joosa.jpg";
import tamil from "../assets/latestnotificaton/tamil.jpg";
import uttar from "../assets/latestnotificaton/Uttar.jpg";

/*Top Universities*/
import tp1 from "../assets/topuniversities/tp1.jpg";
import "./Home.css";
/*spacer */
import avatar from "../assets/avatar.png";
import { MDBCardImage, MDBCardLink } from "mdb-react-ui-kit";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
} from "mdb-react-ui-kit";
import { MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";
import { MDBRow } from "mdb-react-ui-kit";
import MDBAvatar from "mdb-react-ui-kit";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

import "animate.css";

function Home() {
  return (
    <div>
    {/*CAROUSEL*/}
      <MDBCarousel showControls touch={false}>
        <MDBNavbar expand="lg" class="justify-content-end navbar-transparent">
          <MDBContainer fluid>
            <ul class="nav justify-content-end">
              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  B'Tech
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <h5 class="dropdown-header">Top Colleges By Course</h5>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      B'Tech Colleges
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      M'Tech Colleges
                    </a>
                  </li>
                  <li>
                    <h5 class="dropdown-header">Top Colleges By State</h5>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  M.B.A
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

              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MBBS
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

              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Design
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

              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Law
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

              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Science
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

              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Study Abroad
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

              <div className="dropdown">
                <a
                  className="btn btn-transparent dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Courses
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
          </MDBContainer>
        </MDBNavbar>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="..."
          style={{ height: "50vh", position: "relative" }}
        >
          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -25%)",
              zIndex: "1",
              maxWidth: "80%",
              width: "70%",
            }}
          >
            {/* Replace the input and button elements with your actual search bar */}
            <h1 className="animate__animated animate__jackInTheBox">
              Find Over 25000+ College in India
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row", // Display elements side by side
              alignItems: "center",
              justifyContent: "center", // Center the elements horizontally
              position: "absolute",
              top: "50%", // Center vertically
              left: "50%", // Center horizontally
              transform: "translate(-50%, -50%)", // Center both horizontally and vertically
              zIndex: "1", // Make sure the search bar appears above the image
              maxWidth: "80%", // Limit the width to avoid stretching
              width: "70%",
            }}
          >
            {/* Replace the input and button elements with your actual search bar */}
            <input
              type="text"
              placeholder="Search..."
              style={{ flex: 1, padding: "8px" }} // Use flex: 1 to make the input take available space
            />
            <button
              type="button"
              style={{
                padding: "10px 50px",
                backgroundColor: "#ff7900",
                color: "white",
                border: "none",
              }}
            >
              Search
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row", // Display elements side by side
              position: "absolute",
              justifyContent: "end",
              top: "70%", // Center vertically
              left: "75%", // Center horizontally
              transform: "translate(-80%, -80%)", // Center both horizontally and vertically
              zIndex: "1", // Make sure the search bar appears above the image
              maxWidth: "80%", // Limit the width to avoid stretching
              width: "50%",
            }}
          >
            <button
              type="button"
              class="jsx-1138136204 big-orange-btn d-flex align-items-center"
            >
              Need Counselling
            </button>

            {/* Replace the input and button elements with your actual search bar */}
          </div>

          {/* Caption Text */}
        </MDBCarouselItem>
      </MDBCarousel>

      {/* Select Your Study Goal  Scrollup cards */}
      <div className="container">
        <h2 className="text">Select Your Study Goal</h2>
        <div class="card-top-collection container">
          <ul className="cards">
            <li className="card">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={engineer} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <h3 className="card-title">Engineering</h3>
                    <p>6105 Colleges</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>BE/B'Tech</p>
                </div>
                <div className="card-content">
                  <p>ME/M.Tech</p>
                </div>
                <div className="card-content">
                  <p>Diploma in Engineering</p>
                </div>
              </div>
            </li>

            <li className="card">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={management} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <h3 className="card-title">Management</h3>
                    <p>6105 Colleges</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>MBA/PGDM</p>
                </div>
                <div className="card-content">
                  <p>BBA/BBM</p>
                </div>
                <div className="card-content">
                  <p>Executive MBA</p>
                </div>
              </div>
            </li>

            <li className="card">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={commerce} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <h3 className="card-title">Commerce</h3>
                    <p>4731 Colleges</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>B.COM</p>
                </div>
                <div className="card-content">
                  <p>M.COM</p>
                </div>
              </div>
            </li>

            <li className="card">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={arts} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <h3 className="card-title">Arts</h3>
                    <p>5318 Colleges</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>BA</p>
                </div>
                <div className="card-content">
                  <p>MA</p>
                </div>
                <div className="card-content">
                  <p>BFA</p>
                </div>
                <div className="card-content">
                  <p>BSW</p>
                </div>
              </div>
            </li>

            <li className="card">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={medical} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <h3 className="card-title">Medical</h3>
                    <p>2152 Colleges</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>MBBS</p>
                </div>
                <div className="card-content">
                  <p>PG-Medical</p>
                </div>
              </div>
            </li>

            <li className="card">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={design} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <h3 className="card-title">Design</h3>
                    <p>1283 Colleges</p>
                  </div>
                </div>
                <div className="card-content">
                  <p>B.Des</p>
                </div>
                <div className="card-content">
                  <p>M.Des</p>
                </div>
              </div>
            </li>

            <li className="card">
              <h3
                className="card-title text-center"
                style={{ textAlign: "center" }}
              >
                See All <FiArrowRightCircle size={40} />
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <br />

      {/* Top Collections  */}
      <div className="container">
        <h2 className="text">Top Collections </h2>

        <div class="card-top-collection container">
          <div class="card-top" id="card1">
            <img src={cd1} alt="Image 1" />
            <h2>Best MBA Colleges in India</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div class="card-top">
            <img src={cd2} alt="Image 2" />
            <h2>Best BTech Colleges in India</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div class="card-top">
            <img src={cd3} alt="Image 3" />
            <h2>Best BTech Colleges in Pune</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </div>

          <div class="card-top">
            <img src={cd4} alt="Image 4" />
            <h2>Best MBA Colleges in Banglore</h2>
            <p>Excepteur sint occaecat cupidatat non proident.</p>
          </div>

          <div class="card-top">
            <img src={cd5} alt="Image 5" />
            <h2>Best MBA Colleges in Banglore</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="card-top">
            <img src={cd6} alt="Image 7" />
            <h2>Best MBA Colleges in Pune</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div class="card-top">
            <img src={cd7} alt="Image 8" />
            <h2>Best Btech Colleges in Hyderabad</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div class="card-top">
            <img src={cd8} alt="Image 9" />
            <h2>Best MBA Colleges in Delhi</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </div>

          <div class="card-top">
            <img src={cd9} alt="Image 10" />
            <h2>Best MBA Colleges in Mumbai</h2>
            <p>Excepteur sint occaecat cupidatat non proident.</p>
          </div>

          <div class="card-top">
            <img src={cd10} alt="Image 11" />
            <h2>Best BTech Colleges in Mumbai</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="card-top">
            <img src={cd11} alt="Image 12" />
            <h2>Best BTech Colleges in Chennai</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div class="card-top">
            <img src={cd12} alt="Image 13" />
            <h2>Best MBA Colleges in Hyderabad</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div class="card-top">
            <img src={cd13} alt="Image 14" />
            <h2>Best BTech Colleges in Coimbatore</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </div>

          <div class="card-top">
            <img src={cd14} alt="Image 15" />
            <h2>Best BTech Colleges in India</h2>
            <p>Excepteur sint occaecat cupidatat non proident.</p>
          </div>

          <div class="card-top">
            <img src={cd15} alt="Image 16" />
            <h2>Best Private BTech Colleges in India</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="card-top">
            <img src={cd15} alt="Image 1" />
            <h2>Best MBA Colleges in Kolkata</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div class="card-top">
            <img src={cd14} alt="Image 2" />
            <h2>Best BTech Colleges in TamilNadu</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div class="card-top">
            <img src={cd13} alt="Image 3" />
            <h2>Best BTech Colleges in Karnataka</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </div>

          <div class="card-top">
            <img src={cd12} alt="Image 4" />
            <h2>Best BTech Colleges in Jabalpur</h2>
            <p>Excepteur sint occaecat cupidatat non proident.</p>
          </div>

          <div class="card-top">
            <img src={cd11} alt="Image 5" />
            <h2>Best MBA Colleges in Ahmedabad</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <br />

      {/* Explore Programs  */}
      <div className="container">
        <h2>Explore Programs</h2>

        <div className="p-4">
        <div className="button2-row">
        <button className="button2">All</button>
        <button className="button2">BE/B'Tech</button>
        <button className="button2">MBA/PGDM</button>
        <button className="button2">ME/M'Tech</button>
        <button className="button2">B.Sc</button>
        <button className="button2">BA</button>
        <button className="button2">B.Com</button>
        <button className="button2">BCA</button>
        <button className="button2">BBA/BBM</button>
        <button className="button2">BSC.Nursing</button>
      </div>
        </div>
        <div className="slick-list">
  <div
    className="slick-track"
    style={{ width: 1110, opacity: 1, transform: "translate3d(0px, 0px, 0px)" }}
  >
    <div
      data-index={0}
      className="slick-slide slick-active slick-current"
      tabIndex={-1}
      aria-hidden="false"
      style={{ outline: "none", width: 370 }}
    >
    {/*RANKING*/}
      <div>
        <div className="jsx-3826371916 program-card">
          <div className="jsx-3826371916 top-section d-flex">
            <div className="jsx-3826371916 col-7 p-0">
              <h2 className="jsx-3826371916 program-heading">Ranking</h2>
              <p className="jsx-3826371916 program-subheading">
                College ranked based on real data
              </p>
            </div>
            <div className="jsx-3826371916 img-container img-2 category-logo">
              <svg
                width={149}
                height={83}
                viewBox="0 0 149 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m.915 83 38.872-.21 10.361-.004h3.433l10.381-.003 47.429-.013s10.848-14.518-.74-28.306c-12.015-14.296-17.856-2.655-21.55-22.778-9.296-50.654-101.203-21.172-77.096 21.932C20.685 69.138-5.081 60.888.915 83Z"
                  fill="#fff"
                />
                <path
                  d="M132.573 31.524c-2.417-.678-4.071-1.853-5.933-3.574l.788-1.358c1.956 2.097 2.592 3.23 5.042 3.066l.103 1.866Z"
                  fill="#FFB900"
                />
                <path
                  d="M100.081 36.637c-2.546.512-4.665.217-7.26-.474v-1.596c2.88.986 4.058 1.714 6.184.43l1.076 1.64Z"
                  fill="#4FB8DD"
                />
                <path
                  d="M76.632 30.144c-1.204 1.384-2.555 2.125-4.375 2.844l-.78-.909c2.123-.672 3.152-.763 3.738-2.408l1.417.473Z"
                  fill="#FF5C33"
                />
                <path
                  d="M39.965 30.778c-2.181-1.284-3.325-2.857-4.416-5.019l1.485-1.125c1.007 2.55 1.118 3.824 3.739 4.293l-.808 1.85Z"
                  fill="#4FB8DD"
                />
                <path
                  d="M29.415 42.048c-2.472 1.399-4.8 1.803-7.791 1.955l-.619-1.675c3.396.062 4.913.427 6.647-1.638l1.763 1.358Z"
                  fill="#007BFF"
                />
                <path
                  d="M46.42 6.417c-2.48 1.18-4.751 1.418-7.632 1.368l-.47-1.647c3.259.282 4.69.733 6.51-1.138l1.592 1.417Z"
                  fill="#FFB900"
                />
                <path
                  d="M81.566 10.49c-2.066-.825-3.404-2.02-4.868-3.717l.842-1.127c1.508 2.036 1.953 3.1 4.129 3.185l-.103 1.659Z"
                  fill="#4FB8DD"
                />
                <path
                  d="M123.654 13.01c2.262-1.079 3.517-2.486 4.769-4.447l-1.384-1.136c-1.197 2.33-1.405 3.515-4.039 3.807l.654 1.776ZM114.703 58.391c-.909 2.288-2.309 3.807-4.321 5.483l-1.44-.854c2.431-1.745 3.719-2.286 3.706-4.656l2.055.027ZM63.063 21.313c.53 0 .96-.347.96-.776 0-.43-.43-.777-.96-.777s-.96.348-.96.777c0 .429.43.776.96.776Z"
                  fill="#FF5C33"
                />
                <path
                  d="M97.351 21.313c.53 0 .96-.347.96-.776 0-.43-.43-.777-.96-.777s-.96.348-.96.777c0 .429.43.776.96.776Z"
                  fill="#FFB900"
                />
                <path
                  d="M122.443 44.982c.53 0 .96-.348.96-.777 0-.43-.43-.777-.96-.777-.531 0-.961.348-.961.777 0 .429.43.777.961.777Z"
                  fill="#FF5C33"
                />
                <path
                  d="M22.588 52.853c.53 0 .96-.347.96-.776 0-.43-.43-.777-.96-.777s-.96.348-.96.777c0 .429.43.776.96.776Z"
                  fill="#4FB8DD"
                />
                <path
                  d="M1.92 27.944 0 29.497l1.92 1.554 1.92-1.554-1.92-1.553Z"
                  fill="#FFB900"
                />
                <path
                  d="M62.69 44.071a3 3 0 0 1 3-3h19.526a3 3 0 0 1 3 3v38.834H62.69V44.07Z"
                  fill="#FC8D36"
                />
                <path
                  d="M88.215 66.76a3 3 0 0 1 3-3h13.144a3 3 0 0 1 3 3v16.145H88.215V66.76ZM40 60.38a3 3 0 0 1 3-3h16.69a3 3 0 0 1 3 3v22.525H40V60.379Z"
                  fill="#F2AE78"
                />
                <path
                  d="m74.347 12.346 3.328 6.9a.613.613 0 0 0 .454.337l7.443 1.108a.597.597 0 0 1 .302.139.618.618 0 0 1 .196.62.622.622 0 0 1-.164.294l-5.385 5.371a.617.617 0 0 0-.174.547l1.271 7.583a.631.631 0 0 1-.24.605.595.595 0 0 1-.636.047l-6.656-3.582a.596.596 0 0 0-.562 0l-6.658 3.582a.592.592 0 0 1-.635-.048.63.63 0 0 1-.24-.604l1.272-7.585a.634.634 0 0 0-.174-.546l-5.386-5.372a.62.62 0 0 1-.153-.632.618.618 0 0 1 .186-.282.597.597 0 0 1 .302-.139l7.442-1.107a.597.597 0 0 0 .455-.338l3.328-6.9a.613.613 0 0 1 .223-.251.594.594 0 0 1 .86.253Z"
                  fill="#FBC343"
                />
                <circle cx="52.833" cy="48.251" r="4.794" fill="#FF7900" />
                <circle cx="97.472" cy="56.291" r="4.794" fill="#3EAE8D" />
                <path
                  d="M123.565 13.39s1.334 2.195-1.173 3.577c0 0 1.926.694 2.599.432a1.46 1.46 0 0 1-.292.236s1.811.575 2.712.261c.901-.314 2.846-9.078-2.497-9.54 0 0-4.215-1.51-5.106 3.194-.892 4.703-2.514 4.247-2.514 4.247s.394.332.611.393c0 0 .35-.023.459-.167 0 0-.135.236-.236.296 0 0 1.709.646 2.756.282 1.047-.364 2.664-2.195 2.681-3.212Z"
                  fill="#163560"
                />
                <path
                  d="M118.205 82.584h6.817s.163-1.038-.193-1.827c-.341-.756-.872-1.223-.921-1.802-.433.446-.965.732-1.951.6-.121.196-.78 1.243-1.182 1.533-.45.32-2.437.207-2.57 1.496Z"
                  fill="#233862"
                />
                <path
                  d="M123.834 79.981c-.387.12-.786.2-1.189.242-1.073.096-1.23-.224-1.23-.224s-1.067-9.499-4.521-27.655c-.498-2.622-.695-4.073-.875-6.404-.054-.698-.106-1.474-.164-2.384-.157-2.448.215-6.566 2.048-7.648.834-.493 1.968-.358 3.501.847.12.094.244.196.369.305 4.476 3.872 2.641 14.99 2.822 20.217.03.867.116 1.571.294 2.054.231.625.727 1.49.84 2.306.943 6.78-1.895 18.344-1.895 18.344Z"
                  fill="#2B478B"
                />
                <path
                  d="m124.599 57.277-8.584-11.34c-.053-.698-.106-1.474-.164-2.384-.157-2.448.215-6.566 2.048-7.648l3.501.847c.121.094.244.196.37.305 4.483 3.875 2.648 14.993 2.829 20.22ZM148.85 68.239l-2.835-6.199s-1.012.284-1.581.936c-.546.625-.945.513-2.184-.35.468.724.531 1.15.821 2.1.228.029 1.528 1.286 2.859 1.633.529.141 1.689 2.291 2.92 1.88Z"
                  fill="#233862"
                />
                <path
                  d="M119.104 38.629s6.109 21.235 8.348 22.6c2.239 1.367 14.005 3.248 16.397 4.273 0 0 .291-.417.121-1.31-.038-.198-.376-.912-.376-.912s-7.307-5.492-12.117-6.047c-1.193-.138 2.43-18.365-5.636-19.094-7.368-.664-6.737.49-6.737.49Z"
                  fill="#2B478B"
                />
                <path
                  d="M138.53 6.545c.042.087.1.24.151.385v-.116c0-.29 1.08-1.86 1.523-1.958.444-.099 1.068 1.373.515 2.187-.284.417-.979 1.847-.979 1.847l-1.148-.593s-.066-.517-.229-.647-.134-.934-.18-1.27c.002 0 .193-.153.347.165ZM108.187 2.707c.081.051.211.152.331.248l-.062-.1c-.152-.245-.06-2.149.266-2.466.325-.317 1.63.606 1.588 1.589-.022.505-.056 2-.056 2l-1.093.186s-.328-.405-.535-.43c-.207-.025-.605-.724-.822-.985.002-.001.084-.232.383-.042ZM120.325 19.014c-.014.005 1.228.903 2.284.777.99-.118 1.797-1.26 1.783-1.265-.393-.14-.424-.708-.062-3.091l-.187.008-3.156.152s-.073.975-.206 1.884c-.115.76-.269 1.477-.456 1.535Z"
                  fill="#FFB27D"
                />
                <path
                  d="M120.984 15.592s-.073.975-.206 1.884c1.722.206 2.861-1.223 3.362-2.036l-3.156.152Z"
                  fill="#ED975D"
                />
                <path
                  d="M124.505 15.155s1.11-1.287 1.507-2.469c.282-.844.315-4.123-2.98-4.141a4.43 4.43 0 0 0-1.921.417c-.772.37-1.936 1.241-1.221 4.214l.152.99 4.463.99Z"
                  fill="#163560"
                />
                <path
                  d="M116.368 37.81s3.095 1.953 8.25.699c.06-.015 2.931-.473 2.931-.473-.072-.197-3.089-5.18-3.159-5.361-.915-2.363 1.204-13.628-.193-14.26-.357.388-1.376.654-2.248.577-1.005-.089-1.339-.523-1.26-.99-1.111.526-1.969 1.015-1.969 1.015-1.01 1.522-2.352 18.793-2.352 18.793ZM120.284 16.367s4.048.67 4.427-1.857c.379-2.527 1.156-4.143-1.413-4.677-2.569-.535-3.216.353-3.548 1.166-.331.813-.509 5.128.534 5.368Z"
                  fill="#FFB27D"
                />
                <path
                  d="M121.459 9.496s.67 3.13 2.31 3.822c1.639.692 2.447.346 2.447.346s-1.152-1.234-1.154-3.088c0 0-2.555-2.367-3.603-1.08Z"
                  fill="#163560"
                />
                <path
                  d="M121.698 9.778s-.927.538-1.226 1.152c-.298.613-.586 1.925-.965 1.822 0 0-.537-2.14.573-3.14 1.177-1.061 1.618.166 1.618.166Z"
                  fill="#163560"
                />
                <path
                  d="M139.479 8.89s-2.61 7.935-3.307 9.162c-.419.74-5.119 3.668-7.851 5.597a.44.44 0 0 0-.104.126c-.682 1.054-2.799 7.575-2.293 8.742 2.126 4.918 3.587 6.82 4.118 8.2a1.322 1.322 0 0 1-.033 1.02 1.313 1.313 0 0 1-.755.687 22.386 22.386 0 0 1-4.577 1.098c-4.195.532-7.035-.452-8.477-1.181a1.919 1.919 0 0 1-1.051-1.823c.086-1.556.866-3.096 1.216-6.838.265-2.84-2.185-7.162-2.081-8.673.041-.598.511-1.313.766-1.776.45-.82.697-1.562.393-1.973-1.996-2.74-6.307-6.518-6.483-7.462-.258-1.387-.141-9.955-.141-9.955.164-.058.407-.195.724-.223.213-.009.427.014.635.066 0 0 1.142 7.1 1.227 7.475.085.376 4.91 5.808 6.205 5.784 1.171-.02 2.824.885 3.081 1.06a12.438 12.438 0 0 0-1.314 4.382c-.184 1.76.993.978 1.732-.229 1-1.632 3.013-3.957 3.013-3.957s1.638-.426 2.859.017c1.221.442 7.535-3.124 7.737-3.452.203-.329 3.585-6.63 3.585-6.63s.28-.162.73.072a.825.825 0 0 1 .446.684Z"
                  fill="#F99746"
                />
                <path
                  d="M121.459 14.998s-.173.35-.405.356c-.233.006-.825-.05-.866-.11a3.187 3.187 0 0 1-.138-.426s.979-.042 1.409.18Z"
                  fill="#fff"
                />
                <path
                  d="M129.258 42.43a22.401 22.401 0 0 1-3.683.964c-1.448-1.995-3.898-4.506-3.267-9.124.651-4.774 5.345-9.798 5.906-10.491-.681 1.053-2.799 7.574-2.292 8.74 2.126 4.92 3.587 6.822 4.118 8.202a1.321 1.321 0 0 1-.03 1.02 1.314 1.314 0 0 1-.752.69ZM115.054 23.238c.451-.821.698-1.562.394-1.974-1.996-2.74-6.307-6.518-6.483-7.461.427 1.023 5.648 4.088 7.116 5.405 1.453 1.302-.969 3.966-1.027 4.03Z"
                  fill="#ED7D2B"
                />
              </svg>
            </div>
          </div>
          <div className="jsx-3826371916 bottom-section">
            <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Indiatoday 1545"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Indiatoday - 1545"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="indiatoday-ranked-colleges"
                href="/indiatoday-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                  Indiatoday
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Outlook 1189"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Outlook - 1189"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="outlook-ranked-colleges"
                href="/outlook-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                  Outlook
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="NIRF 1174"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="NIRF - 1174"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="nirf-ranked-colleges"
                href="/nirf-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">NIRF</span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="The Week 919"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="The Week - 919"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="the-week-ranked-colleges"
                href="/the-week-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                  The Week
                </span>
              </a>
            </div>
            <div className="jsx-3826371916 more-programs">
              <a
                className="text-dark"
                data-csm-track="true"
                data-csm-title="Top Ranked Colleges in India"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Top Ranked Colleges in India"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="india-colleges"
                href="/india-colleges"
              >
                Top Ranked Colleges in India
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 6, height: 10, marginLeft: 8 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
      {/*FIND COLLEGE*/}
     <div className="jsx-3826371916 program-card">
          <div className="jsx-3826371916 top-section d-flex">
            <div className="jsx-3826371916 col-7 p-0">
              <h2 className="jsx-3826371916 program-heading">Find Colleges</h2>
              <p className="jsx-3826371916 program-subheading">
              Discover 19000+ colleges via preferences
              </p>
            </div>
            <div className="jsx-3826371916 img-container img-2 category-logo">
            <svg
            width={144}
            height={78}
            viewBox="0 0 144 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1.033 78 43.899-.21 11.701-.004h3.877l11.723-.003 53.562-.013s12.25-14.518-.836-28.306c-13.568-14.296-20.165-2.655-24.336-22.778C90.125-23.968-13.667 5.514 13.557 48.618 23.36 64.138-5.738 55.888 1.033 78Z"
              fill="#fff"
            />
            <g opacity="0.68">
              <path
                d="m45.896 31.247-1.358 3.017a2.057 2.057 0 0 0 1.031 2.72l32.662 14.707a2.057 2.057 0 0 0 2.72-1.032l1.359-3.017a2.057 2.057 0 0 0-1.032-2.72L48.617 30.216a2.057 2.057 0 0 0-2.72 1.031Z"
                fill="#E9C896"
              />
              <path
                d="m44.23 34.945 1.948-4.335a1.34 1.34 0 0 1 1.767-.668 1.34 1.34 0 0 1 .671 1.767l-1.951 4.342a1.34 1.34 0 0 1-2.194.367 1.338 1.338 0 0 1-.242-1.473Z"
                fill="#D5AB6E"
              />
              <path
                d="M64.82 46.804a.941.941 0 0 1-.282-.313 47.081 47.081 0 0 1-1.197-1.925l-.259.588a1.003 1.003 0 0 1-1.321.5l-2.374-1.068a1.006 1.006 0 0 1-.5-1.324l3.262-7.255a.998.998 0 0 1 1.322-.5l2.373 1.068a1.003 1.003 0 0 1 .5 1.321l-.733 1.633a44.14 44.14 0 0 1 3.514.098c.142 0 .283.03.412.09a.337.337 0 0 1 .186.35c-.034.148-.192.229-.332.29l-.777.335c-.132.057-.272.12-.259.334a.564.564 0 0 0 .197.389c.418.382.783.817 1.086 1.296a.344.344 0 0 1-.363.518c-1.037-.215-2.669-.474-3.275-.54.469.615 1.21 1.532 1.751 2.151a.347.347 0 0 1-.277.576 6.413 6.413 0 0 1-1.653-.314.56.56 0 0 0-.435.02c-.192.102-.177.26-.161.397.029.28.057.557.088.837a.517.517 0 0 1-.088.433.336.336 0 0 1-.404.015Z"
                fill="#DC3545"
              />
              <path
                d="M61.183 43.485a3.229 3.229 0 1 0 2.65-5.888 3.229 3.229 0 0 0-2.65 5.888Z"
                fill="#EDB607"
              />
              <path
                opacity="0.66"
                d="M61.393 43.019a2.721 2.721 0 1 0 2.235-4.963 2.721 2.721 0 0 0-2.235 4.963Z"
                fill="#F8C100"
              />
              <path
                d="m60.81 22.012-1.163 1.031a2.057 2.057 0 0 0-.175 2.904l17.5 19.747c.754.85 2.054.928 2.904.175l1.164-1.032c.85-.753.929-2.054.175-2.904l-17.5-19.746a2.057 2.057 0 0 0-2.905-.175Z"
                fill="#E9C896"
              />
              <path
                d="m61.6 21.306-2.715 2.407a1.036 1.036 0 0 0-.086 1.44 1.037 1.037 0 0 0 1.441.086l2.708-2.402a1.036 1.036 0 0 0 .088-1.44 1.036 1.036 0 0 0-1.436-.091Z"
                fill="#D5AB6E"
              />
              <path
                d="M70.84 38.666a.701.701 0 0 1-.16-.28 34.391 34.391 0 0 1-.871-2.54l-.845.75a1.003 1.003 0 0 1-1.412-.086l-1.005-1.132a1.003 1.003 0 0 1 .085-1.412l4.187-3.71a1.005 1.005 0 0 1 1.412.082l1.003 1.135a1.003 1.003 0 0 1-.083 1.412l-.191.169c.562.132 1.119.274 1.674.435a.747.747 0 0 1 .295.132.26.26 0 0 1 .083.293.397.397 0 0 1-.296.163l-.63.125c-.108.02-.222.046-.258.207a.42.42 0 0 0 .082.324c.251.35.454.731.604 1.135a.26.26 0 0 1-.355.331 27.548 27.548 0 0 0-1.966-.777c.184.428.743 1.555 1.137 2.265a.258.258 0 0 1-.144.385.26.26 0 0 1-.156-.002 4.928 4.928 0 0 1-1.185-.5.435.435 0 0 0-.329-.054c-.158.046-.17.16-.184.259l-.067.64a.391.391 0 0 1-.135.308.258.258 0 0 1-.29-.057Z"
                fill="#DC3545"
              />
              <path
                d="M71.68 31.727a2.465 2.465 0 1 1-3.69 3.268 2.465 2.465 0 0 1 3.69-3.268Z"
                fill="#EDB607"
              />
              <path
                opacity="0.66"
                d="M71.39 31.984a2.072 2.072 0 1 1-3.107 2.742 2.072 2.072 0 0 1 3.106-2.742Z"
                fill="#F8C100"
              />
            </g>
            <path
              d="M129.15 17.951a14.684 14.684 0 0 0-6.445-11.77 14.69 14.69 0 0 0-22.4 8.26 14.686 14.686 0 0 0 2.738 13.136L91.299 39.974a1.94 1.94 0 0 0 .077 2.74c.252.236.564.4.902.472a1.938 1.938 0 0 0 1.848-.557l11.74-12.393a14.685 14.685 0 0 0 15.466 1.084 14.684 14.684 0 0 0 7.822-13.387l-.004.018Zm-6.844 7.826a10.801 10.801 0 0 1-17.928-11.295 10.805 10.805 0 0 1 11.909-6.784 10.8 10.8 0 0 1 8.977 10.356 10.81 10.81 0 0 1-2.956 7.723h-.002Z"
              fill="#2B478B"
            />
            <path
              d="m79.071 51.13-2.806 1.253a2.48 2.48 0 0 0-1.252 3.276l1.254 2.805a2.48 2.48 0 0 0 3.276 1.253l2.805-1.254a2.48 2.48 0 0 0 1.252-3.276l-1.253-2.806a2.48 2.48 0 0 0-3.276-1.252Z"
              fill="#FC8D36"
            />
            <path
              d="m81.334 50.117-7.333 3.278.951 2.129 7.334-3.278-.952-2.129Z"
              fill="#F2CC61"
            />
            <path
              d="M34 77.91h31.803V67.879H44.038A10.03 10.03 0 0 0 34 77.911ZM143.039 77.91h-31.803V67.879h21.765a10.028 10.028 0 0 1 10.038 10.033Z"
              fill="#F2AE78"
            />
            <path d="M131.493 52.821H99.689v25.09h31.804v-25.09Z" fill="#FFE7D3" />
            <path d="M131.542 70.995H99.638v2.726h31.904v-2.726Z" fill="#FFC292" />
            <path
              d="M131.444 52.821H99.638v-5.654h26.152a5.656 5.656 0 0 1 5.654 5.654ZM106.228 58.614h-4.452v8.904h4.452v-8.904ZM117.841 58.614h-4.452v8.904h4.452v-8.904ZM128.237 58.614h-4.452v8.904h4.452v-8.904Z"
              fill="#F2AE78"
            />
            <path d="M77.261 52.821H44.965v25.09h32.296v-25.09Z" fill="#FFE7D3" />
            <path d="M76.82 70.995H44.918v2.726H76.82v-2.726Z" fill="#FFC292" />
            <path
              d="M45.017 52.821H76.82v-5.654H50.671a5.654 5.654 0 0 0-5.654 5.654ZM73.819 58.614h-4.452v8.904h4.452v-8.904ZM63.678 58.614h-4.451v8.904h4.451v-8.904ZM51.807 58.614h-4.452v8.904h4.452v-8.904Z"
              fill="#F2AE78"
            />
            <path d="M99.695 22.935H76.877v54.927h22.818V22.935Z" fill="#FFE7D3" />
            <path
              d="M100.811 41.11h-25.05c-.248 0-.449.2-.449.448v1.93c0 .248.2.448.448.448h25.051c.248 0 .449-.2.449-.448v-1.93a.449.449 0 0 0-.449-.449Z"
              fill="#FFC292"
            />
            <path
              d="M101.84 22.935H74.68a.682.682 0 0 1-.259-1.308l13.461-5.7a.674.674 0 0 1 .518 0l13.702 5.7a.681.681 0 0 1-.262 1.308ZM88.592 58.218a7.825 7.825 0 0 0-7.825 7.826v11.66H95.81V65.44a7.218 7.218 0 0 0-7.219-7.221Z"
              fill="#FC8D36"
            />
            <path
              d="M94.086 34.79a5.957 5.957 0 1 0-11.601-2.711 5.957 5.957 0 0 0 11.601 2.71Z"
              fill="#F8C100"
            />
            <path
              d="M87.942 35.282v-4.978a.389.389 0 1 1 .777 0v3.11l1.096-1.107a.391.391 0 0 1 .664.275.387.387 0 0 1-.115.275l-2.422 2.425Z"
              fill="#FC8D36"
            />
          </svg>
            </div>
          </div>
          <div className="jsx-3826371916 bottom-section">
            <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Indiatoday 1545"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Indiatoday - 1545"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="indiatoday-ranked-colleges"
                href="/indiatoday-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                Best MBA colleges in India
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Outlook 1189"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Outlook - 1189"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="outlook-ranked-colleges"
                href="/outlook-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                Best BTech colleges in India
                </span>
              </a>
              
             
            </div>
            <div className="jsx-3826371916 more-programs">
              <a
                className="text-dark"
                data-csm-track="true"
                data-csm-title="Top Ranked Colleges in India"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Top Ranked Colleges in India"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="india-colleges"
                href="/india-colleges"
              >
              Discover Top Colleges in India
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 6, height: 10, marginLeft: 8 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      data-index={1}
      className="slick-slide slick-active"
      tabIndex={-1}
      aria-hidden="false"
      style={{ outline: "none", width: 370 }}
    >
      <div>
      {/*COMPARE COLLEGE*/}
        <div className="jsx-3826371916 program-card">
          <div className="jsx-3826371916 top-section d-flex">
            <div className="jsx-3826371916 col-7 p-0">
              <h2 className="jsx-3826371916 program-heading">Compare Colleges</h2>
              <p className="jsx-3826371916 program-subheading">
              Compare on the basis of rank, fees, etc.
              </p>
            </div>
            <div className="jsx-3826371916 img-container img-2 category-logo">
            <svg
            width={144}
            height={80}
            viewBox="0 0 144 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1.041 79.718 44.234-.215 11.79-.003h3.907l11.813-.004 53.97-.013s12.344-14.838-.842-28.93c-13.672-14.61-20.319-2.713-24.521-23.28C90.813-24.496-13.771 5.635 13.661 49.69c9.877 15.862-19.443 7.43-12.62 30.03Z"
              fill="#fff"
            />
            <path
              d="M120.185 27.094a.376.376 0 0 1-.375.375.376.376 0 0 1-.365-.375V21.31a.377.377 0 0 1 .365-.375.375.375 0 0 1 .375.375v5.785Z"
              fill="#FFB068"
            />
            <path
              d="M122.883 24.475h-2.7v-2.769h2.7l-.797 1.384.797 1.385Z"
              fill="#FFB068"
            />
            <path d="M142.723 38.868H96.896v29.446h45.827V38.868Z" fill="#FFE7D3" />
            <path
              d="M143.882 68.314H95.735v4.178h48.147v-4.178ZM143.882 34.69H95.735v4.178h48.147V34.69Z"
              fill="#FFCB9B"
            />
            <path d="M102.931 38.868h-3.714v29.446h3.714V38.868Z" fill="#FFC693" />
            <path
              d="M103.758 39.437a.565.565 0 0 1-.559.57h-4.242a.57.57 0 1 1 0-1.14h4.242a.57.57 0 0 1 .568.57h-.009ZM103.758 67.744a.563.563 0 0 1-.35.527.565.565 0 0 1-.218.043h-4.233a.571.571 0 0 1-.403-.972.57.57 0 0 1 .403-.167h4.242a.57.57 0 0 1 .568.569h-.009Z"
              fill="#FFB068"
            />
            <path d="M110.889 38.868h-3.714v29.446h3.714V38.868Z" fill="#FFC693" />
            <path
              d="M111.717 39.437a.563.563 0 0 1-.35.527.567.567 0 0 1-.218.043h-4.233a.57.57 0 0 1 0-1.14h4.233a.569.569 0 0 1 .568.57ZM111.717 67.744a.563.563 0 0 1-.35.527.565.565 0 0 1-.218.043h-4.233a.57.57 0 0 1 0-1.139h4.233a.569.569 0 0 1 .568.569Z"
              fill="#FFB068"
            />
            <path d="M132.444 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M133.277 39.437a.583.583 0 0 1-.166.403.572.572 0 0 1-.403.167h-4.237a.568.568 0 0 1-.527-.789.556.556 0 0 1 .309-.307.565.565 0 0 1 .218-.043h4.233a.562.562 0 0 1 .404.165.562.562 0 0 1 .169.404ZM133.277 67.744a.583.583 0 0 1-.166.403.572.572 0 0 1-.403.167h-4.237a.57.57 0 1 1 0-1.139h4.233a.57.57 0 0 1 .568.569h.005Z"
              fill="#FFB068"
            />
            <path d="M140.403 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M141.23 39.437a.564.564 0 0 1-.166.403.573.573 0 0 1-.403.167h-4.232a.57.57 0 1 1 0-1.14h4.232a.567.567 0 0 1 .569.57ZM141.23 67.744a.564.564 0 0 1-.166.403.573.573 0 0 1-.403.167h-4.232a.57.57 0 1 1 0-1.139h4.232a.567.567 0 0 1 .569.569Z"
              fill="#FFB068"
            />
            <path
              d="M124.782 68.312V56.618a4.985 4.985 0 0 0-1.419-3.586 4.988 4.988 0 0 0-3.555-1.494 4.978 4.978 0 0 0-4.974 5.08v11.694h9.948Z"
              fill="#FFA95A"
            />
            <path d="M119.809 26.644 96.896 34.69h45.827l-22.914-8.046Z" fill="#FFB068" />
            <path d="m119.81 27.639-17.249 6.057H137.057l-17.247-6.057Z" fill="#FFBE84" />
            <path
              d="M60.45 27.094a.378.378 0 0 1-.375.375.375.375 0 0 1-.364-.375V21.31a.373.373 0 0 1 .364-.375.375.375 0 0 1 .375.375v5.785Z"
              fill="#FFB068"
            />
            <path
              d="M63.148 24.475h-2.7v-2.769h2.7l-.797 1.384.797 1.385Z"
              fill="#FFB068"
            />
            <path d="M82.988 38.868H37.16v29.446h45.827V38.868Z" fill="#FFE7D3" />
            <path
              d="M84.147 68.314H36v4.178h48.147v-4.178ZM84.147 34.69H36v4.178h48.147V34.69Z"
              fill="#FFCB9B"
            />
            <path d="M43.197 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M44.024 39.437a.568.568 0 0 1-.56.57h-4.242a.57.57 0 1 1 0-1.14h4.242a.568.568 0 0 1 .568.57h-.008ZM44.024 67.744a.567.567 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.139h4.242a.569.569 0 0 1 .568.569h-.008Z"
              fill="#FFB068"
            />
            <path d="M51.154 38.868H47.44v29.446h3.714V38.868Z" fill="#FFC693" />
            <path
              d="M51.983 39.437a.57.57 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.14h4.233a.568.568 0 0 1 .569.57ZM51.983 67.744a.569.569 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.139h4.233a.569.569 0 0 1 .569.569Z"
              fill="#FFB068"
            />
            <path d="M72.709 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M73.542 39.437a.569.569 0 0 1-.569.57h-4.237a.568.568 0 0 1-.404-.973.568.568 0 0 1 .404-.166h4.233a.569.569 0 0 1 .573.569ZM73.542 67.744a.569.569 0 0 1-.569.57h-4.237a.57.57 0 1 1 0-1.139h4.233a.569.569 0 0 1 .568.569h.005Z"
              fill="#FFB068"
            />
            <path d="M80.668 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M81.495 39.437a.567.567 0 0 1-.569.57h-4.232a.57.57 0 1 1 0-1.14h4.232a.568.568 0 0 1 .569.57ZM81.495 67.744a.567.567 0 0 1-.569.57h-4.232a.57.57 0 1 1 0-1.139h4.232a.569.569 0 0 1 .569.569Z"
              fill="#FFB068"
            />
            <path
              d="M65.047 68.312V56.618a4.975 4.975 0 1 0-9.947 0v11.694h9.947Z"
              fill="#FFA95A"
            />
            <path d="M60.075 26.644 37.16 34.69h45.827l-22.913-8.046Z" fill="#FFB068" />
            <path d="m60.075 27.639-17.25 6.057h34.497l-17.247-6.057Z" fill="#FFBE84" />
            <path
              d="M94.342 26.735h-9.296l.653-4.215-2.611 4.215h-2.101c.69-26.886 25.917-28.396 26.047 0h-2.086l-.788-6.375-.92 6.375h-3.852v-6.282l-1.226 6.282h-3.82Z"
              fill="#202938"
            />
            <path
              d="M87.966 18.382c.49 3.101-2.112 3.543-2.672.454-.493-3.101 2.11-3.543 2.672-.454ZM100.725 18.382c-.491 3.101 2.111 3.543 2.671.454.492-3.101-2.111-3.543-2.671-.454Z"
              fill="#FFB27D"
            />
            <path
              d="M98.275 20.995h-7.859c.95 2.706-1.12 16.265-1.12 16.265h10.103s-2.072-13.559-1.124-16.265Z"
              fill="#F4D2C6"
            />
            <path
              d="M101.929 18.765c-.188 12.139-14.981 12.137-15.169 0-1.345-12.426 16.113-12.548 15.169 0Z"
              fill="#FFB27D"
            />
            <path
              d="M90.52 26.735s3.563 2.747 7.647 0l.215 2.459s-4.398 2.055-8.078.025l.217-2.484Z"
              fill="#FFB27D"
            />
            <path
              d="M95.88 9.538v5.813s-4.695.385-9.017 1.051C85.654 8.875 95.66 6.085 95.88 9.538Z"
              fill="#202938"
            />
            <path
              d="m95.83 9.09 1.24 5.985c1.618.257 3.201.702 4.716 1.328 0 0 2.121-8.569-5.955-7.313Z"
              fill="#202938"
            />
            <path
              d="M109.884 41.273c-1.506-8.213-8.161-10.093-15.54-9.608h-.214c-7.266-.525-13.908 1.589-15.328 9.608L75.727 67.93c17.183 4.964 20.112 4.67 37.233 0l-3.076-26.658Z"
              fill="#F99746"
            />
            <mask
              id="a"
              maskUnits="userSpaceOnUse"
              x={76}
              y={31}
              width={38}
              height={41}
              style={{ maskType: "luminance" }}
            >
              <path
                d="M110.243 41.62c-1.506-8.212-8.161-10.092-15.54-9.607h-.215c-7.266-.525-13.907 1.589-15.327 9.608l-3.076 26.658c17.183 4.964 20.112 4.67 37.234 0l-3.076-26.658Z"
                fill="#fff"
              />
            </mask>
            <g mask="url(#a)">
              <path
                d="M77.879 55c6.319 3.502 20.065 11.828 30.59 10.558-15.708 8.158-14.707 8.23-31.165 1.803L77.879 55Z"
                fill="#FF7900"
              />
            </g>
            <path
              d="M88.378 31.472c.731 5.349 11.211 5.325 11.93 0 0 0-6.09-.468-11.93 0Z"
              fill="#F4D2C6"
            />
            <path
              d="m94.342 35.568-3.83 3.818s-3.895-2.4-3.266-7.392l1.023-.206 6.073 3.78ZM94.343 35.568l3.83 3.818s3.896-2.4 3.267-7.392l-1.023-.206-6.074 3.78Z"
              fill="#fff"
            />
            <path
              d="M74.658 46.76c-.28 5.747-4.53 15.533 4.552 16.48l-.735-13.854-3.817-2.626ZM113.5 47.135c.364 5.97 4.392 15.39-4.573 16.888l.757-14.262 3.816-2.626Z"
              fill="#FFB27D"
            />
            <path
              d="M87.096 74.808s-2.956-1.833-4.513-1.352c-.233.073-1.858 2.078-1.858 2.078l-5.516 2.09c-1.023.35-1.547 1.358-1.696 2.376h13.986l-.403-5.192Z"
              fill="#EDA19D"
            />
            <path
              d="M86.722 73.665s24.573-13.606 33.326-12.412c8.754 1.194 9.136 13.375 1.576 15.961C114.064 79.8 87.208 80 87.208 80l-.486-6.335Z"
              fill="#48639E"
            />
            <path
              d="M101.964 73.665S77.39 60.059 68.637 61.253c-8.752 1.194-9.136 13.375-1.575 15.961C74.622 79.8 101.477 80 101.477 80l.487-6.335Z"
              fill="#355395"
            />
            <path
              d="M101.876 74.808s2.954-1.833 4.512-1.352c.234.073 1.858 2.078 1.858 2.078l5.516 2.09c1.024.35 1.546 1.358 1.697 2.376h-13.983l.4-5.192Z"
              fill="#F4D2C6"
            />
            <path
              d="m75.098 37.674 17.212 7.239v19.608l-17.212-7.514V37.674ZM112.917 37.674l-17.211 7.239v19.608l17.211-7.514V37.674Z"
              fill="#323C4F"
            />
            <path d="M95.706 44.913h-3.397V64.52h3.397V44.913Z" fill="#28354F" />
            <path
              d="m76.267 38.166 3.957-.906 13.707 5.848-1.622 1.805-16.042-6.747ZM93.931 43.108l1.775 1.805 15.617-6.568-2.856-1.08-14.536 5.843Z"
              fill="#fff"
            />
            <path d="m93.931 43.108-1.622 1.805h3.397l-1.775-1.805Z" fill="#DCECFD" />
            <path
              d="M112.838 44.654c-1.241.753-3.732 1.519-3.852 3.27-.399 2.083 1.996 3.89 3.903 3.013.401-.38.842-.851.81-1.445v-3.478a1.5 1.5 0 0 0-.859-1.36h-.002ZM75.096 44.654c1.241.753 3.733 1.519 3.852 3.27.4 2.083-1.995 3.89-3.903 3.013-.4-.38-.842-.85-.81-1.445v-3.478a1.506 1.506 0 0 1 .861-1.36Z"
              fill="#FFB27D"
            />
          </svg>
          
            </div>
          </div>
          <div className="jsx-3826371916 bottom-section">
            <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Indiatoday 1545"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Indiatoday - 1545"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="indiatoday-ranked-colleges"
                href="/indiatoday-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                IIT Madras
                </span>
               
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Outlook 1189"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Outlook - 1189"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="outlook-ranked-colleges"
                href="/outlook-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                IIT Delhi
                </span>
              
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="NIRF 1174"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="NIRF - 1174"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="nirf-ranked-colleges"
                href="/nirf-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">IIT Madras</span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="The Week 919"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="The Week - 919"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="the-week-ranked-colleges"
                href="/the-week-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                 IIT Bombay
                </span>
              </a>
            </div>
            <div className="jsx-3826371916 more-programs">
              <a
                className="text-dark"
                data-csm-track="true"
                data-csm-title="Top Ranked Colleges in India"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Top Ranked Colleges in India"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="india-colleges"
                href="/india-colleges"
              >
              Compare Colleges
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 6, height: 10, marginLeft: 8 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*EXAMS*/}
      <div>
       <div className="jsx-3826371916 program-card">
          <div className="jsx-3826371916 top-section d-flex">
            <div className="jsx-3826371916 col-7 p-0">
              <h2 className="jsx-3826371916 program-heading">Exams</h2>
              <p className="jsx-3826371916 program-subheading">
              Know more about your exams
              </p>
            </div>
            <div className="jsx-3826371916 img-container img-2 category-logo">
            <svg
            width={132}
            height={76}
            viewBox="0 0 132 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m.97 76 41.218-.205 10.986-.003h3.64l11.008-.003 50.29-.013s11.503-14.146-.784-27.58C104.589 34.266 98.394 45.608 94.478 26 84.621-23.353-12.832 5.373 12.73 47.371 21.933 62.493-5.388 54.456.97 76Z"
              fill="#fff"
            />
            <path d="m61.505 32.485 1.003-7.094-1.003 7.094Z" fill="#0384A4" />
            <path
              d="M41 71.372v2.516a1.713 1.713 0 0 0 1.714 1.717h44.859a1.717 1.717 0 0 0 1.717-1.718v-2.515H41ZM87.573 71.275V46.441a.686.686 0 0 0-.686-.685H43.173a.689.689 0 0 0-.686.685v24.834h45.086Z"
              fill="#FF7900"
            />
            <path
              d="M85.151 71.275V48.991a.623.623 0 0 0-.623-.624H45.32a.623.623 0 0 0-.624.624v22.284h40.455Z"
              fill="#FFE7D3"
            />
            <path d="M89.29 71.275H41v1.403h48.29v-1.403Z" fill="#EDEDED" />
            <path
              d="M73.81 51.114H56.188v1.954H73.81v-1.954ZM76.792 57.659H53.467v.81h23.325v-.81ZM57.846 66.316h-9.512v.833h9.512v-.833ZM57.846 67.731h-9.512v.833h9.512v-.833ZM57.849 69.187h-9.512v.832h9.512v-.832ZM69.767 66.307h-9.512v.832h9.512v-.832ZM69.767 67.725h-9.512v.832h9.512v-.832ZM69.77 69.177h-9.512v.833h9.512v-.833ZM81.423 66.298h-9.512v.832h9.512v-.832ZM81.423 67.716h-9.512v.832h9.512v-.832ZM81.423 69.168h-9.512V70h9.512v-.832Z"
              fill="#E6C3A5"
            />
            <path
              d="M102.787 52.977c-1.823 3.74-6.691 4.578-7.411 4.706-.72-.128-5.567-.963-7.39-4.706 0 0-14.52 2.181-14.726 8.92L73.475 76l21.92-.209 21.919.209.209-14.106c-.218-6.739-14.736-8.917-14.736-8.917Z"
              fill="#48639E"
            />
            <path
              d="M100.986 47.208a12.619 12.619 0 0 1-5.46 2.316v.03h-.169v-.03a12.675 12.675 0 0 1-5.541-2.375c-.103 1.337-.546 5.653-1.83 5.828 1.64 3.37 5.741 4.507 7.069 4.793h.664c1.327-.286 5.426-1.424 7.068-4.793-1.34-.18-1.726-4.66-1.801-5.77Z"
              fill="#DFA17A"
            />
            <path
              d="M106.259 9.783c-.184-.15-.374-.293-.564-.43l-.09-.066a10.99 10.99 0 0 0-.558-.374l-.106-.068c-.19-.119-.383-.234-.577-.346l-.075-.041c-.196-.109-.395-.215-.595-.312l-.034-.015a14.868 14.868 0 0 0-.623-.29l-.097-.04a11.425 11.425 0 0 0-.623-.25l-.097-.034a15.773 15.773 0 0 0-.642-.228h-.025a18.056 18.056 0 0 0-.667-.2h-.034a16.527 16.527 0 0 0-.667-.167l-.075-.016c-.221-.05-.443-.097-.664-.137h-.05c-.464-.084-.935-.15-1.393-.197h-.016c-.23-.024-.46-.043-.691-.056h-.035c-5.678-.333-10.82 2.03-10.771 4.853 0 0-8.477.78-5.753 13.068l1.789 8.166 1.399-7s4.052-2.334 4.9-7.312a15.403 15.403 0 0 0 6.856 5.966l.06.024c.17.079.345.15.523.222l.05.018c.168.066.34.131.514.19l.053.02c.184.065.368.124.558.183l.087.025c.181.056.368.11.558.156h.028c.198.05.397.097.599.14l.112.025c.405.084.826.156 1.246.212l.134.016c.216.028.431.05.652.068h.068c.203 0 .412.028.624.038h.947l.624-.019h.13c.237 0 .48-.031.727-.05l.162-.015c.227-.022.458-.047.692-.078h.09c.256-.032.514-.072.776-.119l.187-.031c.268-.047.536-.1.81-.159l1.4 7.792 1.013-6.689s4.7-10.378-2.846-16.443Z"
              fill="#202938"
            />
            <path
              d="m109.152 28.71-.293-.651-.733 4.825-1.399-7.792c-.274.06-.542.112-.81.159l-.187.031c-.262.047-.521.087-.776.118h-.091c-.234.032-.464.056-.692.078l-.152.031c-.247.02-.49.038-.727.05h-.131l-.623.02h-.947c-.212 0-.421-.023-.624-.038h-.068c-.222-.019-.437-.04-.652-.069l-.134-.016c-.43-.056-.85-.127-1.246-.211l-.113-.025a12.72 12.72 0 0 1-.598-.14h-.028c-.19-.047-.377-.1-.558-.156l-.087-.025c-.19-.06-.374-.119-.558-.184l-.053-.019c-.175-.06-.346-.125-.514-.19l-.05-.019a13.259 13.259 0 0 1-.524-.221l-.059-.025a15.346 15.346 0 0 1-6.857-5.965c-.854 4.986-4.9 7.311-4.9 7.311l-1.399 7-.847-3.861c-.337 0-2.615.184-2.135 3.837.517 3.94 2.072 5.921 3.94 4.874 0 0 2.564 10.547 11.861 12.102v.031h.169v-.03c9.297-1.56 11.862-12.103 11.862-12.103 1.87 1.038 3.428-.935 3.939-4.874.512-3.94-2.206-3.853-2.206-3.853Z"
              fill="#EEB991"
            />
            <path
              d="M87.036 53.176a41.52 41.52 0 0 0-5.102 1.35c.508 3.481 2.805 8.29 11.416 9.222l2.007-5.582c-1.044-.196-5.953-1.296-8.321-4.99Z"
              fill="#FF7900"
            />
            <path
              d="M88.145 52.977c-1.334.221-2.656.51-3.961.866.146 2.89 1.605 7.77 9.612 8.637l1.673-4.657c-.928-.174-5.557-1.215-7.324-4.846Z"
              fill="#fff"
            />
            <path
              d="M108.843 54.439a40.633 40.633 0 0 0-5.096-1.331c-2.365 3.706-7.218 4.466-8.262 4.675l2.12 5.978c8.648-.948 10.743-5.838 11.238-9.322Z"
              fill="#FF7900"
            />
            <path
              d="M102.809 52.937a39.11 39.11 0 0 1 3.961.863c-.146 2.892-1.605 7.77-9.611 8.636l-1.674-4.656c.932-.168 5.557-1.225 7.324-4.843Z"
              fill="#fff"
            />
            <path d="M73.927 4.7h-1.222v7.86h1.222V4.7Z" fill="#333" />
            <path
              d="M72.063 24.902s-3.843-3.379-.583-8.908h3.553s2.852 5.53-.467 9.023a2.256 2.256 0 0 0-.056-1.805s-.119 1.87-1.225 2.911c0 0-1.047-1.804-.698-3.26 0 0-.58 1.107-.524 2.039Z"
              fill="#FF7900"
            />
            <path
              d="M75.033 11.721H71.48a.785.785 0 0 0-.776.78v3.493a.782.782 0 0 0 .776.789h3.553a.71.71 0 0 0 .527-.21l.022-.018.022-.022a.72.72 0 0 0 .205-.526V12.5a.785.785 0 0 0-.776-.779Z"
              fill="#333"
            />
            <path
              d="M110.719 7.473H79.983a.785.785 0 0 0-.78.776v14.674a.786.786 0 0 0 .78.776h30.736a.714.714 0 0 0 .527-.21l.022-.018a.732.732 0 0 0 .231-.549V8.25a.787.787 0 0 0-.78-.776Z"
              fill="#202020"
            />
            <path
              d="M111.499 8.25a.787.787 0 0 0-.78-.777H79.983a.785.785 0 0 0-.78.776v3.117l10.513 3.03 9.46 2.723c.732.212 1.305-.05 1.869-.196l4.22-1.075 6.234-1.621V8.249Z"
              fill="#141414"
            />
            <path
              d="m126.726 7.377-24.952-5.685-5.74-1.306-.225-.056h-.04l-.624-.165h-.019l-.243-.06a2.805 2.805 0 0 0-.982-.096L85.4 1.424 65.452 4.746c-.277.047-.405.168-.424.312-.093.193.028.436.452.586.124.062.258.102.396.118l23.868 6.879 9.459 2.724c.732.212 1.306-.05 1.87-.197l4.192-1.115 21.966-5.729c.636-.162.162-.798-.505-.947ZM106.774 28.645s-.901-.789-4.052-.789c-1.34 0-3.117.134-4.363.683-.313.144-.61.316-.892.514l-.676.57s-.25.228-1.287.237h-.137c-1.038 0-1.288-.236-1.288-.236l-.657-.57c-.281-.199-.58-.371-.892-.515-1.246-.549-3.013-.683-4.363-.683-3.15 0-4.052.789-4.052.789h-1.891v1.06l.813.766c.128.897.306 1.786.533 2.662.34 1.318.742 3.033 2.182 3.519a8.73 8.73 0 0 0 2.836.352c1.287 0 3.198.016 4.005-1.203.76-1.147 1.053-2.646 1.318-3.974a.739.739 0 0 1 .42-.477h2.207a.738.738 0 0 1 .421.477c.265 1.328.558 2.827 1.319 3.974.807 1.218 2.717 1.203 4.005 1.203.958.04 1.916-.08 2.836-.352 1.452-.486 1.87-2.2 2.181-3.519a25.11 25.11 0 0 0 .537-2.662l.81-.766v-1.06h-1.873Zm-13.757 2.768a9.882 9.882 0 0 1-.427 2.103c-.2.736-.418 1.559-1.032 2.076-.708.583-1.945.714-2.82.739h-.347c-.935-.025-1.982-.134-2.764-.674a2.125 2.125 0 0 1-.782-1.153c-.025-.065-.35-1.031-.312-1.04a10.577 10.577 0 0 1-.405-1.917 5.67 5.67 0 0 1-.063-.935c.05-1.817 3.226-1.886 4.507-1.886a10.44 10.44 0 0 1 3.291.433c.44.128.82.403 1.079.78.28.464.118.969.075 1.474Zm13.751.134a10.63 10.63 0 0 1-.406 1.916c.025 0-.311.976-.311 1.041a2.146 2.146 0 0 1-.786 1.154c-.782.539-1.839.648-2.764.673h-.346c-.876-.025-2.113-.156-2.82-.739-.624-.508-.833-1.34-1.032-2.076-.217-.684-.36-1.389-.427-2.103-.044-.505-.206-1.01.068-1.475a1.96 1.96 0 0 1 1.075-.779 10.446 10.446 0 0 1 3.317-.445c1.277 0 4.453.068 4.503 1.885.004.317-.02.634-.071.948Z"
              fill="#231F20"
            />
            <path
              d="m117.609 73.136-.284-.327a.52.52 0 0 0-.732-.028l-1.091.935a.525.525 0 0 0-.084.729l.283.327 1.908-1.636Z"
              fill="#E5E5E5"
            />
            <path
              d="m117.609 73.136.281.33a.525.525 0 0 1-.085.73l-1.09.935a.522.522 0 0 1-.733-.028l-.28-.328 1.907-1.639Z"
              fill="#C9C9C9"
            />
            <path
              d="m117.609 73.136-.284-.327a.52.52 0 0 0-.732-.028l-1.091.935a.525.525 0 0 0-.084.729l.283.327 1.908-1.636Z"
              fill="#E5E5E5"
            />
            <path
              d="m117.609 73.136.281.33a.525.525 0 0 1-.085.73l-1.09.935a.522.522 0 0 1-.733-.028l-.28-.328 1.907-1.639Z"
              fill="#C9C9C9"
            />
            <path
              d="m128.392 62.63-12.169 10.452.619.722 12.169-10.453-.619-.72Z"
              fill="#48639E"
            />
            <path
              d="m129.008 63.351-12.169 10.452.618.719 12.169-10.452-.618-.719Z"
              fill="#4FB8DD"
            />
            <path
              d="m128.392 62.63-12.169 10.452.619.722 12.169-10.453-.619-.72Z"
              fill="#48639E"
            />
            <path
              d="m129.008 63.351-12.169 10.452.618.719 12.169-10.452-.618-.719Z"
              fill="#4FB8DD"
            />
            <path
              d="m128.43 62.592-.134.116 1.237 1.436.131-.115 1.216-2.191-.05-.056-.05-.06-2.35.87Z"
              fill="#E8B58B"
            />
            <path d="m130.646 61.772.396-.174-.231.364-.165-.19Z" fill="#333231" />
            <path
              d="m116.406 72.925-.336.288.618.719.336-.289-.618-.718Z"
              fill="#F8611B"
            />
            <path
              d="m117.025 73.643-.336.289.617.718.336-.288-.617-.719Z"
              fill="#DD3E1A"
            />
            <path
              d="m116.406 72.925-.336.288.618.719.336-.289-.618-.718Z"
              fill="#F8611B"
            />
            <path
              d="m117.025 73.643-.336.289.617.718.336-.288-.617-.719Z"
              fill="#DD3E1A"
            />
            <path
              d="m106.897 70.025 18.304 2.325-.038-.027-18.313-2.347.047.05Z"
              fill="#808082"
            />
            <path
              d="M106.825 70.166c.047-.1.035-.147.125-.134l.168.022.664.084 2.378.311 3.319.421 3.709.47 3.538.453 2.805.355 1.533.196.131.016c-.823 1.206.405 3.03 1.77 3.036-2.265-.275-5.002-.284-7.511-.312-2.509-.028-8.805.168-9.431.162a4.11 4.11 0 0 1-1.381-.118 3.326 3.326 0 0 1-1.729-1.758 3.732 3.732 0 0 1-.094-3.201l.006-.003Z"
              fill="#DABE95"
            />
            <path
              d="M108.891 69.58a1.56 1.56 0 0 1 1.247-.586c.265.026.528.067.788.121l.935.15c.624.103 4.295 1.038 7.957 1.633 3.522.574 7.047.813 7.792.935a1.249 1.249 0 0 0-1.387 1.02.995.995 0 0 0 .444 1.105c.121.074.257.122.398.14l-7.515-.48-7.511-.48-1.87-.12a7.603 7.603 0 0 1-.801-.054.982.982 0 0 1-.43-.174 1.916 1.916 0 0 1-.623-1.87c.067-.492.272-.954.592-1.334l-.016-.006Z"
              fill="#DABE95"
            />
            <path
              d="M109.371 70.701a.628.628 0 0 1 .524-.227l.904.112 1.87.237 3.74.47 7.48.936 3.475.44a.498.498 0 0 0-.53.457.394.394 0 0 0 .331.437l-7.505-.652-7.521-.651-1.614-.14-.789-.069a.748.748 0 0 1-.312-.065c-.448-.25-.311-.97-.046-1.288l-.007.004Z"
              fill="#C4A270"
            />
            <path
              d="M109.764 72.082a.567.567 0 0 0 .259-.252c0-.022.118-.312.093-.312h.15l.623.063 2.359.236 3.351.337 3.721.371 3.466.358 2.606.262 1.118.112c.022 0 0 .05 0 .063a.35.35 0 0 1-.327.27 4.257 4.257 0 0 1-.445-.033l-.49-.044-.935-.078-3.74-.312-7.508-.623-4.466-.377a.372.372 0 0 0 .184-.031l-.019-.01Z"
              fill="#E8D2B0"
            />
            <path
              d="M110.69 71.378a1.03 1.03 0 0 0-.776-1.007c1.224.138 2.446.312 3.668.468l3.74.48 7.48.957 1.87.237c.253.034.517.046.767.102a.626.626 0 0 1 .343.215.829.829 0 0 1 .048.863.835.835 0 0 1-.743.44l-1.007-.062-2.525-.156-3.428-.212-3.74-.23-3.428-.21-2.509-.155-.979-.06c.832.05 1.297-.966 1.247-1.67-.031 0-.025.047-.028 0Z"
              fill="#E8D2B0"
            />
            <path
              d="M111.456 69.61a1.821 1.821 0 0 0-1.486-.704 1.774 1.774 0 0 0-1.306.854 2.842 2.842 0 0 0-.461 1.6 1.873 1.873 0 0 0 .645 1.452c.216.175.493.257.77.23.264-.046.502-.186.67-.396a1.734 1.734 0 0 0 .342-1.558 1.012 1.012 0 0 0-.479-.623.646.646 0 0 0-.714.068 1.064 1.064 0 0 0-.184 1.425.443.443 0 0 0 .595.096.712.712 0 0 0 .268-.514h-.065a.678.678 0 0 1-.041.178.52.52 0 0 1-.268.311.448.448 0 0 1-.551-.311c-.2-.452.077-1.247.654-1.247.577 0 .81.689.776 1.169-.034.48-.33 1.128-.869 1.296-.54.169-1.013-.205-1.247-.645a2.29 2.29 0 0 1-.147-1.642 2.35 2.35 0 0 1 .898-1.381 1.479 1.479 0 0 1 1.49-.1c1.072.511 1.415 1.87 1.284 2.958s-.698 2.313-1.73 2.864a2.05 2.05 0 0 1-1.589.172 2.832 2.832 0 0 1-1.334-1.02 4.133 4.133 0 0 1-.792-3.263 3.096 3.096 0 0 1 .284-.779c.034-.065.034-.06-.016-.109a3.777 3.777 0 0 0-.056 3.276c.424 1.01 1.309 2.072 2.493 2.075 1.185.004 2.11-1.013 2.519-2.05.408-1.038.473-2.344-.125-3.345a2.542 2.542 0 0 0-.228-.311v-.025Z"
              fill="#FFE8C5"
            />
            <path
              d="M127.629 71.783a1.558 1.558 0 0 1 1.141.916c.147.353.181.743.097 1.116a1.999 1.999 0 0 1-1.898 1.624c-.156 0-3.139-.346-6.664-.368-4.927-.03-10.852.256-11.024.256 1.2 0 2.117-1.007 2.528-2.048.37-.884.418-1.87.134-2.786-.256-.739-.817-1.434-1.624-1.558.181.03 5.473 1.246 10.186 2.032 3.655.604 6.99.804 7.124.826v-.01Z"
              fill="#E8D2B0"
            />
            <path
              d="M120.108 74.666c.124-.308.201-.632.228-.963.031-.33.031-.663 0-.994a3.785 3.785 0 0 0-.234-.966 1.866 1.866 0 0 0-.567-.801c.248.218.438.496.552.807.116.31.191.633.224.963a5.26 5.26 0 0 1-.072 1.477c-.03.163-.073.322-.131.477Z"
              fill="#FF9196"
            />
            <path
              d="M121.302 71.085c1.817.256 1.559 4.092.624 4.018-.527 0-2.182-.016-2.26-.016.826.031 1.147-4.09-.732-4.4-.003.015 2.103.358 2.368.398Z"
              fill="#E06E79"
            />
          </svg>
            </div>
          </div>
          <div className="jsx-3826371916 bottom-section">
            <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Indiatoday 1545"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Indiatoday - 1545"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="indiatoday-ranked-colleges"
                href="/indiatoday-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                  B.Com
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Outlook 1189"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Outlook - 1189"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="outlook-ranked-colleges"
                href="/outlook-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                B.Sc
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="NIRF 1174"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="NIRF - 1174"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="nirf-ranked-colleges"
                href="/nirf-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">B.Sc[Nursing]</span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="The Week 919"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="The Week - 919"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="the-week-ranked-colleges"
                href="/the-week-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                 M'Tech
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="The Week 919"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="The Week - 919"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="the-week-ranked-colleges"
                href="/the-week-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                 BE/B'Tech
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="The Week 919"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="The Week - 919"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="the-week-ranked-colleges"
                href="/the-week-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                 MBBS
                </span>
              </a>
            </div>
            <div className="jsx-3826371916 more-programs">
              <a
                className="text-dark"
                data-csm-track="true"
                data-csm-title="Top Ranked Colleges in India"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Top Ranked Colleges in India"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="india-colleges"
                href="/india-colleges"
              >
              Check All Entrance Exams in India
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 6, height: 10, marginLeft: 8 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      data-index={2}
      className="slick-slide slick-active"
      tabIndex={-1}
      aria-hidden="false"
      style={{ outline: "none", width: 370 }}
    >
      <div>
      {/*COLLEGE PREDICTOR */}
        <div className="jsx-3826371916 program-card">
          <div className="jsx-3826371916 top-section d-flex">
            <div className="jsx-3826371916 col-7 p-0">
              <h2 className="jsx-3826371916 program-heading">College Predictor</h2>
              <p className="jsx-3826371916 program-subheading">
              Know your college admission chances
              </p>
            </div>
            <div className="jsx-3826371916 img-container img-2 category-logo">
            <svg
            width={133}
            height={78}
            viewBox="0 0 133 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1.049 78 44.569-.208 11.88-.003h3.936l11.902-.003 54.379-.013s12.438-14.332-.848-27.943c-13.775-14.113-20.473-2.62-24.707-22.486-10.659-50.004-116.035-20.9-88.396 21.65C23.716 64.316-5.826 56.172 1.049 78Z"
              fill="#fff"
            />
            <path
              d="M66.726 18.032c-.262 10.545-1.11 44.075-.705 56.966a2.587 2.587 0 0 0 2.504 2.506c6.757.22 26.198.781 37.251.317a4.358 4.358 0 0 0 4.181-4.262c.23-11.068.736-39.356-.468-53.616a3.558 3.558 0 0 0-3.194-3.24c-7.36-.736-26.906-2.534-36.455-1.916a3.336 3.336 0 0 0-3.114 3.245Z"
              fill="#FC8D36"
            />
            <path
              d="M69.433 21.479c-.37 8.838-1.536 35.415-1.166 46.287.054 1.59 1.281 2.874 2.837 2.968 6.403.382 22.826 1.225 32.218.458 1.691-.139 3.018-1.534 3.11-3.264.476-9.017 1.842-33.57 1.488-44.32-.057-1.714-1.359-3.115-3.033-3.268-6.927-.635-24.718-2.146-32.7-1.701-1.498.083-2.69 1.31-2.754 2.84Z"
              fill="#FFE7D3"
            />
            <path
              d="M83.522 16.568a.588.588 0 0 0 .563.59c1.564.081 5.968.311 7.937.425a.6.6 0 0 0 .61-.437.586.586 0 0 0 .009-.267l-.013-.064a.59.59 0 0 0-.53-.477c-1.33-.121-5.346-.456-8.005-.362a.597.597 0 0 0-.406.182.587.587 0 0 0-.165.41Z"
              fill="#F5F8F9"
            />
            <path
              d="M91.874 72.803H81.69c-.43 0-.778.36-.778.806v1.636c0 .445.348.806.778.806h10.183c.43 0 .778-.36.778-.806V73.61a.792.792 0 0 0-.778-.806Z"
              fill="#fff"
            />
            <path
              d="m73.36 45.843-.923-22.476a.827.827 0 0 1 .77-.884c1.618-.107 5.77-.005 13.786 2.354l.768 20.666-14.4.34Z"
              fill="#FC8D36"
            />
            <path
              d="m74.734 45.843-.994-23.677a.642.642 0 0 1 .643-.685c2.247.003 9.409.264 12.611 3.385l.767 20.593-13.027.384Z"
              fill="#F2AE78"
            />
            <path
              opacity="0.7"
              d="M75.501 45.518a.57.57 0 0 1-.55-.535l-.884-22.511a.621.621 0 0 1 .614-.666c2.106 0 8.728.243 11.869 3.111a.58.58 0 0 1 .19.407l.694 19.156a.575.575 0 0 1-.59.594l-11.343.444Z"
              fill="#FFE7D3"
            />
            <path
              d="M87.435 24.71s6.154-4.216 13.898-1.867c.226.068.423.209.563.4.14.19.214.422.213.66l-.152 21.94-14.221-.486-.301-20.647Z"
              fill="#FC8D36"
            />
            <path
              d="m100.982 22.513.148 23.33-13.262-.457-.76-20.722s6.494-4.192 12.777-3.41c.302.04.58.19.782.42.201.232.313.53.315.84Z"
              fill="#F2AE78"
            />
            <path
              opacity="0.7"
              d="m100.663 23.115.141 21.756a.653.653 0 0 1-.412.604.648.648 0 0 1-.255.043l-11.655-.397a.68.68 0 0 1-.655-.654l-.719-19.289s6.347-4.03 12.483-3.278a1.223 1.223 0 0 1 1.072 1.215Z"
              fill="#FFE7D3"
            />
            <path
              d="m73.237 55.588 28.487.973a1.947 1.947 0 0 0 2.015-1.949V52.34a1.947 1.947 0 0 0-1.948-1.95h-27.9c-.654 0-1.234.297-1.445.738-.397.825-.892 2.23-.548 3.608.12.47.67.822 1.34.852Z"
              fill="#FFCDA6"
            />
            <path
              d="M102.435 47.218a1.673 1.673 0 0 0-.507-1.203 1.735 1.735 0 0 0-1.224-.497H74.646c-.536 0-1.013.243-1.17.6a4.567 4.567 0 0 0 .017 3.727c.144.324.572.545 1.058.545h26.153a1.752 1.752 0 0 0 1.224-.498 1.674 1.674 0 0 0 .507-1.202v-1.472Z"
              fill="#FC8D36"
            />
            <path
              d="m74.735 50.065 3.187-.12c.397-.015.708-.247.708-.528v-2.65c0-.284-.32-.518-.725-.527l-3.145-.072c-.362-.009-.679.166-.755.415-.196.643-.466 1.91-.038 3.081.09.245.41.414.768.4ZM80.154 49.74c.427-.02.759-.248.759-.525v-2.522c0-.294-.375-.531-.832-.525-.443.005-.799.24-.799.525v2.523c0 .304.4.544.872.523Z"
              fill="#F2AE78"
            />
            <path
              d="m74.65 69.696 26.04.183a1.74 1.74 0 0 0 1.612-1.061c.088-.21.133-.436.133-.663v-5.322a1.73 1.73 0 0 0-.523-1.233 1.728 1.728 0 0 0-1.252-.49l-25.44.616c-.603.02-1.128.294-1.332.697-.554 1.096-1.366 3.485-.225 6.719.113.323.518.55.987.554Z"
              fill="#FFCDA6"
            />
            <path
              d="m75.133 61.758 25.602-.566c.454-.01.887-.194 1.204-.513a1.69 1.69 0 0 0 .496-1.194v-1.823c0-.448-.18-.878-.5-1.197a1.753 1.753 0 0 0-1.212-.51l-25.822-.367c-.583-.011-1.11.249-1.278.638-.725 1.683-.794 3.355.287 5.005.216.332.698.542 1.223.527Z"
              fill="#FC8D36"
            />
            <path
              d="m76.018 61.433 1.079-.062c.327-.018.573-.226.554-.466l-.334-4.21c-.017-.222-.255-.399-.556-.416l-.745-.04c-.349-.02-.647.183-.647.44v4.313c.001.258.3.46.65.44Z"
              fill="#FFE7D3"
            />
            <path d="m98.734 4.525-.607-.3-1.943 3.89.607.302 1.943-3.892Z" fill="#333" />
            <path
              d="M92.813 14.068s-1.075-2.62 1.913-4.554l1.766.875s.05 3.44-2.464 4.352a1.248 1.248 0 0 0 .418-.907s-.52.896-1.328 1.14c0 0-.074-1.152.46-1.787 0 0-.563.405-.765.88Z"
              fill="#FF7900"
            />
            <path
              d="M97.548 8.274 95.782 7.4a.438.438 0 0 0-.578.195l-.864 1.73a.432.432 0 0 0 .19.58l1.766.876a.397.397 0 0 0 .314.026l.015-.003.016-.006a.401.401 0 0 0 .233-.21l.867-1.736a.433.433 0 0 0-.193-.577Z"
              fill="#333"
            />
            <path
              d="m116.334 14.96-15.276-7.57a.437.437 0 0 0-.579.192l-3.628 7.265a.433.433 0 0 0 .195.576l15.276 7.57a.4.4 0 0 0 .314.027l.015-.004a.404.404 0 0 0 .25-.215l3.628-7.264a.434.434 0 0 0-.195-.576Z"
              fill="#202020"
            />
            <path
              d="M116.529 15.537a.434.434 0 0 0-.195-.576l-15.276-7.57a.437.437 0 0 0-.579.191l-.77 1.543 4.475 4.09 4.028 3.678c.311.285.661.297.978.363l2.363.507 3.498.733 1.478-2.96Z"
              fill="#141414"
            />
            <path
              d="m124.314 18.855-10.996-8.96-2.53-2.06-.098-.083-.02-.01-.269-.236-.009-.004-.106-.09a1.575 1.575 0 0 0-.464-.289l-4.576-1.394-10.735-3.268c-.15-.045-.243-.016-.288.05-.094.073-.094.223.08.402a.65.65 0 0 0 .168.156l10.161 9.284 4.027 3.678c.312.285.662.297.978.363l2.36.48 12.333 2.575c.356.076.278-.355-.016-.594Z"
              fill="#231F20"
            />
            <path
              d="M84.566 41.201a13.333 13.333 0 0 0-.672-6.253 13.378 13.378 0 0 0-3.465-5.256 13.45 13.45 0 0 0-5.494-3.1 13.486 13.486 0 0 0-12.038 2.382 13.39 13.39 0 0 0-3.886 4.956 13.337 13.337 0 0 0 .593 12.211l-12.383 9.481a1.767 1.767 0 0 0-.323 2.476c.194.249.452.44.747.554a1.78 1.78 0 0 0 1.749-.238l12.38-9.477a13.45 13.45 0 0 0 6.452 3.553c2.442.562 4.992.433 7.364-.373a13.435 13.435 0 0 0 6.057-4.19 13.356 13.356 0 0 0 2.925-6.74l-.006.014Zm-7.303 6.067a9.906 9.906 0 0 1-12.529-.402 9.831 9.831 0 0 1-3.237-5.794 9.809 9.809 0 0 1 1.187-6.525 9.87 9.87 0 0 1 5.074-4.293 9.915 9.915 0 0 1 6.656-.113 9.874 9.874 0 0 1 5.217 4.119 9.81 9.81 0 0 1 1.41 6.48 9.84 9.84 0 0 1-3.776 6.529l-.002-.001Z"
              fill="#48639E"
            />
            <ellipse
              cx="9.529"
              cy="9.907"
              rx="9.529"
              ry="9.907"
              transform="rotate(8.969 -146.351 417.949) skewX(-.069)"
              fill="#fff"
              fillOpacity="0.4"
            />
          </svg>
            </div>
          </div>
          <div className="jsx-3826371916 bottom-section">
            <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Indiatoday 1545"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Indiatoday - 1545"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="indiatoday-ranked-colleges"
                href="/indiatoday-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                 NEET
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Outlook 1189"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Outlook - 1189"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="outlook-ranked-colleges"
                href="/outlook-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                CAT
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="NIRF 1174"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="NIRF - 1174"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="nirf-ranked-colleges"
                href="/nirf-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">NMAT</span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="The Week 919"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="The Week - 919"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="the-week-ranked-colleges"
                href="/the-week-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                  GATE
                </span>
              </a>
            </div>
            <div className="jsx-3826371916 more-programs">
              <a
                className="text-dark"
                data-csm-track="true"
                data-csm-title="Top Ranked Colleges in India"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Top Ranked Colleges in India"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="india-colleges"
                href="/india-colleges"
              >
              Find Where you may get Admission
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 6, height: 10, marginLeft: 8 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*COURSE FINDER*/}
      <div>
        <div className="jsx-3826371916 program-card">
          <div className="jsx-3826371916 top-section d-flex">
            <div className="jsx-3826371916 col-7 p-0">
              <h2 className="jsx-3826371916 program-heading">Course Finder</h2>
              <p className="jsx-3826371916 program-subheading">
              Discover top courses in Indian Colleges 2023
              </p>
            </div>
            <div className="jsx-3826371916 img-container img-2 category-logo">
            <svg
            width={144}
            height={80}
            viewBox="0 0 144 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1.041 79.718 44.234-.215 11.79-.003h3.907l11.813-.004 53.97-.013s12.344-14.838-.842-28.93c-13.672-14.61-20.319-2.713-24.521-23.28C90.813-24.496-13.771 5.635 13.661 49.69c9.877 15.862-19.443 7.43-12.62 30.03Z"
              fill="#fff"
            />
            <path
              d="M120.185 27.094a.376.376 0 0 1-.375.375.376.376 0 0 1-.365-.375V21.31a.377.377 0 0 1 .365-.375.375.375 0 0 1 .375.375v5.785Z"
              fill="#FFB068"
            />
            <path
              d="M122.883 24.475h-2.7v-2.769h2.7l-.797 1.384.797 1.385Z"
              fill="#FFB068"
            />
            <path d="M142.723 38.868H96.896v29.446h45.827V38.868Z" fill="#FFE7D3" />
            <path
              d="M143.882 68.314H95.735v4.178h48.147v-4.178ZM143.882 34.69H95.735v4.178h48.147V34.69Z"
              fill="#FFCB9B"
            />
            <path d="M102.931 38.868h-3.714v29.446h3.714V38.868Z" fill="#FFC693" />
            <path
              d="M103.758 39.437a.565.565 0 0 1-.559.57h-4.242a.57.57 0 1 1 0-1.14h4.242a.57.57 0 0 1 .568.57h-.009ZM103.758 67.744a.563.563 0 0 1-.35.527.565.565 0 0 1-.218.043h-4.233a.571.571 0 0 1-.403-.972.57.57 0 0 1 .403-.167h4.242a.57.57 0 0 1 .568.569h-.009Z"
              fill="#FFB068"
            />
            <path d="M110.889 38.868h-3.714v29.446h3.714V38.868Z" fill="#FFC693" />
            <path
              d="M111.717 39.437a.563.563 0 0 1-.35.527.567.567 0 0 1-.218.043h-4.233a.57.57 0 0 1 0-1.14h4.233a.569.569 0 0 1 .568.57ZM111.717 67.744a.563.563 0 0 1-.35.527.565.565 0 0 1-.218.043h-4.233a.57.57 0 0 1 0-1.139h4.233a.569.569 0 0 1 .568.569Z"
              fill="#FFB068"
            />
            <path d="M132.444 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M133.277 39.437a.583.583 0 0 1-.166.403.572.572 0 0 1-.403.167h-4.237a.568.568 0 0 1-.527-.789.556.556 0 0 1 .309-.307.565.565 0 0 1 .218-.043h4.233a.562.562 0 0 1 .404.165.562.562 0 0 1 .169.404ZM133.277 67.744a.583.583 0 0 1-.166.403.572.572 0 0 1-.403.167h-4.237a.57.57 0 1 1 0-1.139h4.233a.57.57 0 0 1 .568.569h.005Z"
              fill="#FFB068"
            />
            <path d="M140.403 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M141.23 39.437a.564.564 0 0 1-.166.403.573.573 0 0 1-.403.167h-4.232a.57.57 0 1 1 0-1.14h4.232a.567.567 0 0 1 .569.57ZM141.23 67.744a.564.564 0 0 1-.166.403.573.573 0 0 1-.403.167h-4.232a.57.57 0 1 1 0-1.139h4.232a.567.567 0 0 1 .569.569Z"
              fill="#FFB068"
            />
            <path
              d="M124.782 68.312V56.618a4.985 4.985 0 0 0-1.419-3.586 4.988 4.988 0 0 0-3.555-1.494 4.978 4.978 0 0 0-4.974 5.08v11.694h9.948Z"
              fill="#FFA95A"
            />
            <path d="M119.809 26.644 96.896 34.69h45.827l-22.914-8.046Z" fill="#FFB068" />
            <path d="m119.81 27.639-17.249 6.057H137.057l-17.247-6.057Z" fill="#FFBE84" />
            <path
              d="M60.45 27.094a.378.378 0 0 1-.375.375.375.375 0 0 1-.364-.375V21.31a.373.373 0 0 1 .364-.375.375.375 0 0 1 .375.375v5.785Z"
              fill="#FFB068"
            />
            <path
              d="M63.148 24.475h-2.7v-2.769h2.7l-.797 1.384.797 1.385Z"
              fill="#FFB068"
            />
            <path d="M82.988 38.868H37.16v29.446h45.827V38.868Z" fill="#FFE7D3" />
            <path
              d="M84.147 68.314H36v4.178h48.147v-4.178ZM84.147 34.69H36v4.178h48.147V34.69Z"
              fill="#FFCB9B"
            />
            <path d="M43.197 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M44.024 39.437a.568.568 0 0 1-.56.57h-4.242a.57.57 0 1 1 0-1.14h4.242a.568.568 0 0 1 .568.57h-.008ZM44.024 67.744a.567.567 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.139h4.242a.569.569 0 0 1 .568.569h-.008Z"
              fill="#FFB068"
            />
            <path d="M51.154 38.868H47.44v29.446h3.714V38.868Z" fill="#FFC693" />
            <path
              d="M51.983 39.437a.57.57 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.14h4.233a.568.568 0 0 1 .569.57ZM51.983 67.744a.569.569 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.139h4.233a.569.569 0 0 1 .569.569Z"
              fill="#FFB068"
            />
            <path d="M72.709 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M73.542 39.437a.569.569 0 0 1-.569.57h-4.237a.568.568 0 0 1-.404-.973.568.568 0 0 1 .404-.166h4.233a.569.569 0 0 1 .573.569ZM73.542 67.744a.569.569 0 0 1-.569.57h-4.237a.57.57 0 1 1 0-1.139h4.233a.569.569 0 0 1 .568.569h.005Z"
              fill="#FFB068"
            />
            <path d="M80.668 38.868h-3.715v29.446h3.715V38.868Z" fill="#FFC693" />
            <path
              d="M81.495 39.437a.567.567 0 0 1-.569.57h-4.232a.57.57 0 1 1 0-1.14h4.232a.568.568 0 0 1 .569.57ZM81.495 67.744a.567.567 0 0 1-.569.57h-4.232a.57.57 0 1 1 0-1.139h4.232a.569.569 0 0 1 .569.569Z"
              fill="#FFB068"
            />
            <path
              d="M65.047 68.312V56.618a4.975 4.975 0 1 0-9.947 0v11.694h9.947Z"
              fill="#FFA95A"
            />
            <path d="M60.075 26.644 37.16 34.69h45.827l-22.913-8.046Z" fill="#FFB068" />
            <path d="m60.075 27.639-17.25 6.057h34.497l-17.247-6.057Z" fill="#FFBE84" />
            <path
              d="M94.342 26.735h-9.296l.653-4.215-2.611 4.215h-2.101c.69-26.886 25.917-28.396 26.047 0h-2.086l-.788-6.375-.92 6.375h-3.852v-6.282l-1.226 6.282h-3.82Z"
              fill="#202938"
            />
            <path
              d="M87.966 18.382c.49 3.101-2.112 3.543-2.672.454-.493-3.101 2.11-3.543 2.672-.454ZM100.725 18.382c-.491 3.101 2.111 3.543 2.671.454.492-3.101-2.111-3.543-2.671-.454Z"
              fill="#FFB27D"
            />
            <path
              d="M98.275 20.995h-7.859c.95 2.706-1.12 16.265-1.12 16.265h10.103s-2.072-13.559-1.124-16.265Z"
              fill="#F4D2C6"
            />
            <path
              d="M101.929 18.765c-.188 12.139-14.981 12.137-15.169 0-1.345-12.426 16.113-12.548 15.169 0Z"
              fill="#FFB27D"
            />
            <path
              d="M90.52 26.735s3.563 2.747 7.647 0l.215 2.459s-4.398 2.055-8.078.025l.217-2.484Z"
              fill="#FFB27D"
            />
            <path
              d="M95.88 9.538v5.813s-4.695.385-9.017 1.051C85.654 8.875 95.66 6.085 95.88 9.538Z"
              fill="#202938"
            />
            <path
              d="m95.83 9.09 1.24 5.985c1.618.257 3.201.702 4.716 1.328 0 0 2.121-8.569-5.955-7.313Z"
              fill="#202938"
            />
            <path
              d="M109.884 41.273c-1.506-8.213-8.161-10.093-15.54-9.608h-.214c-7.266-.525-13.908 1.589-15.328 9.608L75.727 67.93c17.183 4.964 20.112 4.67 37.233 0l-3.076-26.658Z"
              fill="#F99746"
            />
            <mask
              id="a"
              maskUnits="userSpaceOnUse"
              x={76}
              y={31}
              width={38}
              height={41}
              style={{ maskType: "luminance" }}
            >
              <path
                d="M110.243 41.62c-1.506-8.212-8.161-10.092-15.54-9.607h-.215c-7.266-.525-13.907 1.589-15.327 9.608l-3.076 26.658c17.183 4.964 20.112 4.67 37.234 0l-3.076-26.658Z"
                fill="#fff"
              />
            </mask>
            <g mask="url(#a)">
              <path
                d="M77.879 55c6.319 3.502 20.065 11.828 30.59 10.558-15.708 8.158-14.707 8.23-31.165 1.803L77.879 55Z"
                fill="#FF7900"
              />
            </g>
            <path
              d="M88.378 31.472c.731 5.349 11.211 5.325 11.93 0 0 0-6.09-.468-11.93 0Z"
              fill="#F4D2C6"
            />
            <path
              d="m94.342 35.568-3.83 3.818s-3.895-2.4-3.266-7.392l1.023-.206 6.073 3.78ZM94.343 35.568l3.83 3.818s3.896-2.4 3.267-7.392l-1.023-.206-6.074 3.78Z"
              fill="#fff"
            />
            <path
              d="M74.658 46.76c-.28 5.747-4.53 15.533 4.552 16.48l-.735-13.854-3.817-2.626ZM113.5 47.135c.364 5.97 4.392 15.39-4.573 16.888l.757-14.262 3.816-2.626Z"
              fill="#FFB27D"
            />
            <path
              d="M87.096 74.808s-2.956-1.833-4.513-1.352c-.233.073-1.858 2.078-1.858 2.078l-5.516 2.09c-1.023.35-1.547 1.358-1.696 2.376h13.986l-.403-5.192Z"
              fill="#EDA19D"
            />
            <path
              d="M86.722 73.665s24.573-13.606 33.326-12.412c8.754 1.194 9.136 13.375 1.576 15.961C114.064 79.8 87.208 80 87.208 80l-.486-6.335Z"
              fill="#48639E"
            />
            <path
              d="M101.964 73.665S77.39 60.059 68.637 61.253c-8.752 1.194-9.136 13.375-1.575 15.961C74.622 79.8 101.477 80 101.477 80l.487-6.335Z"
              fill="#355395"
            />
            <path
              d="M101.876 74.808s2.954-1.833 4.512-1.352c.234.073 1.858 2.078 1.858 2.078l5.516 2.09c1.024.35 1.546 1.358 1.697 2.376h-13.983l.4-5.192Z"
              fill="#F4D2C6"
            />
            <path
              d="m75.098 37.674 17.212 7.239v19.608l-17.212-7.514V37.674ZM112.917 37.674l-17.211 7.239v19.608l17.211-7.514V37.674Z"
              fill="#323C4F"
            />
            <path d="M95.706 44.913h-3.397V64.52h3.397V44.913Z" fill="#28354F" />
            <path
              d="m76.267 38.166 3.957-.906 13.707 5.848-1.622 1.805-16.042-6.747ZM93.931 43.108l1.775 1.805 15.617-6.568-2.856-1.08-14.536 5.843Z"
              fill="#fff"
            />
            <path d="m93.931 43.108-1.622 1.805h3.397l-1.775-1.805Z" fill="#DCECFD" />
            <path
              d="M112.838 44.654c-1.241.753-3.732 1.519-3.852 3.27-.399 2.083 1.996 3.89 3.903 3.013.401-.38.842-.851.81-1.445v-3.478a1.5 1.5 0 0 0-.859-1.36h-.002ZM75.096 44.654c1.241.753 3.733 1.519 3.852 3.27.4 2.083-1.995 3.89-3.903 3.013-.4-.38-.842-.85-.81-1.445v-3.478a1.506 1.506 0 0 1 .861-1.36Z"
              fill="#FFB27D"
            />
          </svg>
          
            </div>
          </div>
          <div className="jsx-3826371916 bottom-section">
            <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Indiatoday 1545"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Indiatoday - 1545"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="indiatoday-ranked-colleges"
                href="/indiatoday-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                BE/B.Tech
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="Outlook 1189"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Outlook - 1189"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="outlook-ranked-colleges"
                href="/outlook-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                ME/M'Tech
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="NIRF 1174"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="NIRF - 1174"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="nirf-ranked-colleges"
                href="/nirf-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">MBA/PGDM</span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="The Week 919"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="The Week - 919"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="the-week-ranked-colleges"
                href="/the-week-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                 B.Sc
                </span>
              </a>
              <a
                className="inner-pill"
                data-csm-track="true"
                data-csm-title="The Week 919"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="The Week - 919"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="the-week-ranked-colleges"
                href="/the-week-ranked-colleges"
              >
                <span className="jsx-3826371916 line-clamp-1">
                 B.A
                </span>
              </a>
            </div>
            <div className="jsx-3826371916 more-programs">
              <a
                className="text-dark"
                data-csm-track="true"
                data-csm-title="Top Ranked Colleges in India"
                data-event-type="link_click"
                data-section_name="Explore Programs"
                data-sub_section_name="Ranking"
                data-csm-href="https://collegedunia.com/"
                data-ga-title="Top Ranked Colleges in India"
                data-ga-track="true"
                data-ga-module="homepage"
                data-ga-section="Explore Programs"
                data-ga-href="india-colleges"
                href="/india-colleges"
              >
              Get Top Courses in Indian Colleges
                <svg
                  fill="#666"
                  xmlns="http://www.w3.org/2000/svg"
                  width="451.846"
                  height="451.847"
                  viewBox="0 0 451.846 451.847"
                  xmlSpace="preserve"
                  style={{ width: 6, height: 10, marginLeft: 8 }}
                >
                  <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>    
        </div>
        <br />

      {/* Latest Notification */}
      <div className="container">
        <h2 className="text">Latest Notification </h2>
        <br />
        <section className="featured-post container">
          <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              JoSAA 2023 Round 6 Seat Allotment Result Releasing on July
              26
            </h5>
            <img src={uttar} alt="Avatar" className="card-avatar" />
            <h6 className="card-subtitle mb-2 text-muted">
              Exam ⏰ july 25, 2023
            </h6>

            <p className="card-text">
              JoSAA 2023 Round 6 Seat Allotment Result is going to be
              released on July 26 at josaa.nic.in. Candidates must
              complete online reporting with fee payment by July 28.
            </p>
            <a href="#" className="card-button">
              Read more
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-12 ">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            JoSAA 2023 Round 6 Seat Allotment Result Releasing on July
            26
          </h5>
          <img src={mcc} alt="Avatar" className="card-avatar" />
          <h6 className="card-subtitle mb-2 text-muted">
            Exam ⏰ july 25, 2023
          </h6>

          <p className="card-text">
            JoSAA 2023 Round 6 Seat Allotment Result is going to be
            released on July 26 at josaa.nic.in. Candidates must
            complete online reporting with fee payment by July 28.
          </p>
          <a href="#" className="card-button">
            Read more
          </a>
        </div>
      </div>
    </div>

      <div className="col-lg-4 col-md-4 col-sm-12 ">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            JoSAA 2023 Round 6 Seat Allotment Result Releasing on July
            26
          </h5>
          <img src={uttar} alt="Avatar" className="card-avatar" />
          <h6 className="card-subtitle mb-2 text-muted">
            Exam ⏰ july 25, 2023
          </h6>

          <p className="card-text">
            JoSAA 2023 Round 6 Seat Allotment Result is going to be
            released on July 26 at josaa.nic.in. Candidates must
            complete online reporting with fee payment by July 28.
          </p>
          <a href="#" className="card-button">
            Read more
          </a>
        </div>
      </div>
    </div>
          </div>
        </section>
        <br />
        <section className="featured-post container">
          <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
          <div className="card" style={{ width: "25rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                JoSAA 2023 Round 6 Seat Allotment Result Releasing on July
                26
              </h5>
              <img src={mcc} alt="Avatar" className="card-avatar" />
              <h6 className="card-subtitle mb-2 text-muted">
                Exam ⏰ july 25, 2023
              </h6>

              <p className="card-text">
                JoSAA 2023 Round 6 Seat Allotment Result is going to be
                released on July 26 at josaa.nic.in. Candidates must
                complete online reporting with fee payment by July 28.
              </p>
              <a href="#" className="card-button">
                Read more
              </a>
            </div>
          </div>
        </div>

            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    JoSAA 2023 Round 6 Seat Allotment Result Releasing on July
                    26
                  </h5>
                  <img src={uttar} alt="Avatar" className="card-avatar" />
                  <h6 className="card-subtitle mb-2 text-muted">
                    Exam ⏰ july 25, 2023
                  </h6>

                  <p className="card-text">
                    JoSAA 2023 Round 6 Seat Allotment Result is going to be
                    released on July 26 at josaa.nic.in. Candidates must
                    complete online reporting with fee payment by July 28.
                  </p>
                  <a href="#" className="card-button">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    JoSAA 2023 Round 6 Seat Allotment Result Releasing on July
                    26
                  </h5>
                  <img src={mcc} alt="Avatar" className="card-avatar" />
                  <h6 className="card-subtitle mb-2 text-muted">
                    Exam ⏰ july 25, 2023
                  </h6>

                  <p className="card-text">
                    JoSAA 2023 Round 6 Seat Allotment Result is going to be
                    released on July 26 at josaa.nic.in. Candidates must
                    complete online reporting with fee payment by July 28.
                  </p>
                  <a href="#" className="card-button">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>

      {/* Top 10 Colleges */}
      <div className="container">
        <h2 className="text">Top 10 Colleges </h2>
        <br />
        <div>
          <table
            className="table align-middle mb-0 bg-white"
            style={{ border: "1px solid black" }}
          >
            <thead className="bg-light">
              <tr>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>Rank</th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                  College
                </th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Ranking
                </th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>Cutoff</th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Application
                </th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>Dates</th>
              </tr>
            </thead>
            <tbody>
              {/*1*/}

              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #1
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIM Bangalore - Indian Institute of Management
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Bangalore,Karnataka | ⭐10/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #1 out of 50 in india
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    CAT 2022 cut off 99
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹ 2,09,550
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*2*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #2
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Madras - Indian Institute of Technology - [IITM]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Chennai,Tamil Nadu | ⭐10/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                      // className="rounded-square"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #15 out of 50 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 144
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹ 1,09,550
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*3*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #3
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Kharagpur - Indian Institute of Technology -
                        [IITKGP]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Kharagpur,West Bengal | ⭐10/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #6 out of 50 in india 2019
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 261
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹2,23,600
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*4*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #4
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Delhi - Indian Institute of Technology [IITD]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        New Delhi,Delhi NCR | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #9 out of 50 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 115
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹2,55,150
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*5*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #5
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Bombay - Indian Institute of Technology - [IITB]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Mumbai,Maharashtra | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #10 out of 50 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 66
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹2,29,200
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*6*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #6
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Kanpur - Indian Institute of Technology
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Kanpur,Uttar Pradesh | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #22 out of 50 in india
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 215
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹ 2,29,200
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*7*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #7
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Roorkee - Indian Institute of Technology - [IITR]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Roorkee,Uttarakhand | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #11 out of 50 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 396
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹2,84,500
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*8*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #8
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        BITS Pilani (Pilani Campus)
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Pilani,Rajasthan | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #5 out of 34 in india
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2021
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    BITSAT 2022 Cut off 125
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹ 6,39,150
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*9*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #9
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian Institute of Technology - IIT Guwahati.png?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Guwahati - Indian Institute of Technology - [IITG]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Guwahati,Assam | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #7 out of 34 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2021
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 601
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹ 2,57,250
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>

              {/*10*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #10
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        All India Institute of Medical Sciences - [AIIMS]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        New Delhi,Delhi NCR | ⭐9.8/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #6 out of 200 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2023
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    NEET 2022 Cut off 55
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    ₹ 1,145
                  </p>
                  <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                    1st year fees
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />

      {/* Top Universities/Colleges */}
      <div className="container">
        <h2 className="text">Top Universities/Colleges</h2>
        <br />
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card01">
              <img
                src="https://fthmb.tqn.com/02kxivQuEHZDKtvQC3Sf0s8Yjgc=/3008x2000/filters:fill(auto,1)/clemson-university-Angie-Yates-flickr-56a185d55f9b58b7d0c05ac9.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="ms-3">
                  <p
                    className="fw-bold mb-1"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    IIM Bangalore - Indian Institute of Management
                  </p>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "16px", textDecoration: "underline" }}
                  >
                    Bangalore, Karnataka | ⭐10/10
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "blue",
                      textDecoration: "underline",
                    }}
                  >
                    24.50 Lacs Total Fees
                  </p>
                </div>
                <p
                  className="text-muted mb-0"
                  style={{ fontSize: "16px", textDecoration: "underline" }}
                >
                  Ranked 1 out of 50 Financial Express
                </p>

                <div
                  className="buttons-column"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <a
                    data-csm-track="true"
                    data-csm-title="View All Courses and Fees"
                    data-event-type="link_click"
                    data-section_name="Top Universities/Colleges"
                    data-csm-href="https://collegedunia.com/"
                    data-ga-title="View All Courses and fees"
                    data-ga-track="true"
                    data-ga-module="homepage"
                    data-ga-section="Top Universities/Colleges"
                    data-ga-href="university/25396-iit-guwahati-indian-institute-of-technology-iitg-guwahati/courses-fees"
                    className="collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                    href="/university/25396-iit-guwahati-indian-institute-of-technology-iitg-guwahati/courses-fees"
                  >
                    View All Courses and fees
                  </a>

                  <button
                    type="button"
                    data-csm-track="true"
                    data-csm-title="Download Brochure"
                    data-event-type="link_click"
                    data-section_name="Top Universities/Colleges"
                    data-csm-href="https://collegedunia.com/"
                    data-ga-title="Download Brochure"
                    data-ga-track="true"
                    data-ga-module="homepage"
                    data-ga-section="Top Universities/Colleges"
                    className="collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                  >
                    Download Brochure
                  </button>

                  <button
                    type="button"
                    data-csm-track="true"
                    data-csm-title="25396-IIT Guwahati - Indian Institute of Technology - [IITG]"
                    data-event-type="cc_popup_open"
                    data-csm-href="https://collegedunia.com/"
                    data-ga-title="Compare"
                    data-ga-track="true"
                    data-ga-module="homepage"
                    data-ga-section="Top Universities/Colleges"
                    className="collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                  >
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card01">
              <img
                src="https://www.umw.edu/news/wp-content/uploads/sites/7/2015/05/Orientation-12-1-scaled.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  IIT Madras - Indian Institute of Technology - [IITM]
                </h5>
                <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                  Chennai, Tamil Nadu | AICTE | ⭐8.7/10
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card01">
              <img
                src="https://hamsat.com.ng/wp-content/uploads/2022/03/TOP-10-TUITION-FREE-UNIVERSITIES-IN-THE-UNITED-STATES-AND-HOW-TO-APPLY-1536x1024.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Chandigarh University - [CU]</h5>
                <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                  Chandigarh, Chandigarh | NCTE, AICTE | ⭐9/10
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card01">
              <img
                src="https://i.pinimg.com/originals/f9/77/42/f9774243cd764cdc01ad0d3533084538.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  IIT Guwahati - Indian Institute of Technology - [IITG]
                </h5>
                <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                  Guwahati, Assam | AICTE, UGC | ⭐8.7/10
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card01">
              <img
                src="https://smapse.com/storage/2021/07/kolledz-v-amerike-smapse2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  All India Institute of Medical Sciences - [AIIMS]
                </h5>
                <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                  New Delhi, Delhi NCR | MCI, UGC | ⭐8.4/10
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card01">
              <img
                src="https://nypost.com/wp-content/uploads/sites/2/2017/11/istock-476226598.jpg?quality=75&amp;strip=all&amp;w=1024"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Indian Institute of Management - [IIMA]
                </h5>
                <p className="text-muted mb-0" style={{ fontSize: "16px" }}>
                  Ahmedabad, Gujarat | UGC | ⭐9.1/10
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Know your chances of Addmission*/}
      <section className="jsx-249750319 section-control-inner d-flex align-items-center">
        <div className="jsx-249750319 d-lg-flex align-items-center col">
          <h3
            className="jsx-249750319 mb-0 mr-3 heading font-weight-bold"
            style={{ color: "rgb(90,106,159)" }}
          >
            Know your chances of Admission
          </h3>
          <a
            data-ga-title="Start Now"
            data-ga-track="true"
            data-ga-module="homepage"
            data-ga-section="Know your chances of Admission"
            data-ga-href="/college-predictor"
            className="jsx-249750319 cta d-flex align-items-center justify-content-center font-weight-bold"
            href="/college-predictor"
          >
            Start Now
          </a>
        </div>
        <svg
          width={133}
          height={115}
          viewBox="0 0 133 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto predictor-bar-illustration"
        >
          <g opacity="0.9" clipPath="url(#a)">
            <path
              d="M28.33 52.106c-.937.052-1.869.09-2.785.132-5.748.262-11.832 1.453-15.51 6.336-10 13.285 4.384 30.315 14.831 37.616 10.447 7.301 22.324 12.565 34.693 15.588 12.283 3.001 25.881 4.857 38.225 1.202 13.31-3.939 25.263-13.994 31.402-26.635 5.062-10.425 5.008-22.92.296-33.58-5.331-12.059-16.259-20.5-27.034-27.424-12.288-7.895-25.944-14.564-40.519-15.17-3.43-.143-6.943.069-10.15 1.301-3.208 1.232-6.101 3.607-7.367 6.818-1.921 4.875.184 10.288.952 15.474.74 4.939.022 10.482-3.513 13.994-3.453 3.437-8.553 4.084-13.52 4.348Z"
              fill="#FEF4EB"
            />
            <path
              d="M101.675 75.37a.094.094 0 0 1-.066-.028.095.095 0 0 1-.027-.065V42.43h-7.714v20.137a.093.093 0 0 1-.093.093.094.094 0 0 1-.092-.093V42.245h8.075v33.032a.091.091 0 0 1-.024.062.09.09 0 0 1-.059.03Z"
              fill="#212121"
            />
            <path
              d="M119.255 100.196a.09.09 0 0 1-.065-.027.094.094 0 0 1-.027-.066V52.028h-17.488a.09.09 0 0 1-.065-.027.093.093 0 0 1 .065-.159h17.673v48.261c0 .025-.01.049-.027.066a.091.091 0 0 1-.066.027Z"
              fill="#212121"
            />
            <path
              d="M115.471 56.422h-10.022a.092.092 0 0 1-.064-.028.09.09 0 0 1-.028-.065.092.092 0 0 1 .092-.093h10.022a.092.092 0 0 1 .092.093.09.09 0 0 1-.027.066.091.091 0 0 1-.065.027ZM115.471 62.66h-10.022a.092.092 0 0 1-.064-.028.09.09 0 0 1-.028-.065.092.092 0 0 1 .092-.093h10.022a.092.092 0 0 1 .092.093.092.092 0 0 1-.092.093ZM46.108 63.38a.092.092 0 0 1-.092-.094V51.842h9.959v7.736a.095.095 0 0 1-.093.092.092.092 0 0 1-.092-.093v-7.55H46.2v11.269a.093.093 0 0 1-.093.083Z"
              fill="#212121"
            />
            <path
              d="M37.834 84.066a.092.092 0 0 1-.092-.093v-20.78H52.74c.024 0 .048.01.065.028a.093.093 0 0 1-.065.158H37.927v20.594a.093.093 0 0 1-.093.093ZM30.687 100.897a.094.094 0 0 1-.065-.027.096.096 0 0 1-.027-.066V57.186l-9.722 3.269v32.537a.095.095 0 0 1-.093.093.092.092 0 0 1-.092-.093V60.321l10.092-3.393V100.8a.093.093 0 0 1-.093.097Z"
              fill="#212121"
            />
            <path
              d="M35.529 96.591s2.507 10.83 9.69 10.83c6.166 0 14.704-14.098 14.704-14.098L35.53 96.592Z"
              fill="#FFAA7B"
            />
            <path
              d="M75.1 14.588c0-.613.341-7.083 10.168-7.696 0 0-4.806.682-5.623 2.861 0 0 3.253-2.724 5.964-1.906 2.71.818 4.4 5.448 4.468 7.018.068 1.57-1.294 6.606-2.982 7.083-.61.205-1.355.136-2.034.07.507.737.96 1.51 1.357 2.314 4.132 7.968.542 17.435-2.773 16.62-2.168-.478-3.457 3.2-3.457 3.2l-20.6-17.839c-.14-.01 7.11-16.015 15.513-11.725Z"
              fill="#0B101A"
            />
            <path
              d="M62.092 68.736a25.304 25.304 0 0 0 8.74 3.746c13.484 3.133 18.634-8.31 20.6-16.21-1.83-1.09-3.592-1.3-4.54-1.43-.944-.132-1.894-.2-2.846-.205-1.492-1.158-3.795-5.926-4.27-13.35l-.608.205-10.64 2.929s.474 3.406.74 6.605c.204 2.522.204 4.906-.272 5.517a12.65 12.65 0 0 1-1.355.273 66.72 66.72 0 0 0-5.55 11.92Z"
              fill="#FFAA7B"
            />
            <path
              d="M68.529 44.352s.473 3.406.74 6.607c6.03-.613 8.808-6.403 9.893-9.536L68.53 44.352Z"
              fill="#212121"
            />
            <path
              d="M68.4 49.46s13.892-3.609 11.52-12.264S77.752 22.28 68.806 24.19c-8.945 1.91-9.764 5.727-9.696 8.79.067 3.132 5.624 17.232 9.29 16.48Z"
              fill="#FFAA7B"
            />
            <path
              d="M58.232 28.075c1.423-3.202 3.185-3.066 4.337-2.52 6.437-6.268 12.94-1.43 12.94-1.43 2.644 5.925 8.064 8.24 8.064 8.24s-2.1 2.248-8.267 2.384c-1.897 0-3.793-.818-5.555-1.975a32.262 32.262 0 0 0 7.385 5.243c-7.792-1.3-13.214-10.22-13.824-11.169-.608 1.022-1.828 3.133-1.897 4.831-.068 2.384.814 7.015-.541 7.22-.07.073-4.814-6.056-2.642-10.825Z"
              fill="#0B101A"
            />
            <path
              d="M64.395 56.068s23.31-5.653 33.407 2.724l-5.084 70.906-45.533-11.039s1.294-4.495 10.027-16.413c8.733-11.918 4.946-29.424 7.183-46.178Z"
              fill="#FFAA7B"
            />
            <path
              d="M100.985 79.019c-1.151 8.514-5.623 19.003-7.25 24.589 0 0 2.71 19.547.137 24.86a2.452 2.452 0 0 1-1.085 1.224c-9.488 4.155-46.484.138-48.043-11.849-.541-4.359 14.094-19.685 14.974-21.523.338-.743.74-3.27-1.017-8.445-2.44 7.559-15.855 5.38-15.855 5.38 1.558-2.725 5.488-21.455 9.892-29.969C56.065 56.885 64.867 56 64.867 56s3.66 5.858 12.537 5.04c8.877-.817 10.502-6.267 10.502-6.267s7.86 1.022 10.299 2.997c.342.342 4.209 10.08 2.78 21.25Z"
              fill="#48639E"
            />
            <path
              d="M93.735 103.608s2.71 19.547.136 24.86c-6.912-3.475-15.924-11.034-13.214-22.818 3.999-17.095 20.335-26.698 20.335-26.698-1.166 8.581-5.63 19.07-7.257 24.656Z"
              fill="#48639E"
            />
            <path
              d="m64.868 80.519 15.858 25.608H53.69L38.58 81.063l26.288-.544Z"
              fill="#212121"
            />
            <path
              d="m79.844 104.832.272-.884L65.14 79.701l-.272.818 14.976 24.313Z"
              fill="#fff"
            />
            <path
              d="m65.14 79.701-25.41.749-1.15.613 26.288-.544.272-.818Z"
              fill="#fff"
            />
            <path
              d="M38.579 81.063 24.349 73.3l16.6 26.289 12.74 6.538-15.11-25.064Z"
              fill="#212121"
            />
            <path
              d="M114.061 98.975c-1.559.682-5.422 5.313-6.84 5.79-6.3 2.111-33.067-3.541-33.067-3.541l.814-4.7s26.291.68 29.208-.068c.542-.136 3.389-4.63 4.472-5.244l5.413 7.763Z"
              fill="#FFAA7B"
            />
            <path
              d="M74.965 96.591s-3.185-2.588-5.285-1.975c-2.168.613-5.285 3.345-6.437 3.95-1.151.606-4.337 2.929-2.71 4.36 1.625 1.362 6.64.204 8.605-.885 1.966-1.089 5.082-.682 5.082-.682l.745-4.768Z"
              fill="#FFAA7B"
            />
            <path
              d="M70.29 94.48s-3.863-.477-4.878-.408c-1.085 0-.74.273-.203 1.09.61.816 2.575 1.158 2.71 1.43.068.273 2.371-2.111 2.371-2.111Z"
              fill="#FFAA7B"
            />
            <path
              d="M87.84 54.705s11.452 1.362 14.568 6.266c3.999 6.199 13.349 30.99 13.078 37.256 0 0-6.84 11.706-30.425 9.876 0 0-2.439-8.719 2.508-11.578 0 0 12.06-2.18 13.484-3.407l-4.067-16.89-9.147-21.523Z"
              fill="#48639E"
            />
            <path
              d="M42.237 90.462c-.338-1.43-3.523-.545-4.54.273-.32.272-.595.594-.813.953 0-.271-.069-.476-.069-.68-.066-.682-.88-1.908-1.014-.955-.204.886-.544 4.768-.544 4.768-.067 3.066 1.965 4.359 3.185 3.344 1.289-1.027 4.202-6.273 3.795-7.704Z"
              fill="#FFB78F"
            />
            <path
              d="M67.163 45.153c-.274 0-.457-.013-.483-.015a.185.185 0 0 1-.172-.199.186.186 0 0 1 .198-.173c.026 0 2.474.171 3.492-.817a.184.184 0 0 1 .263 0 .186.186 0 0 1 0 .262c-.856.836-2.485.942-3.298.942ZM35.377 90.917a.184.184 0 0 1-.166-.102l-1.803-3.624a.187.187 0 0 1 .084-.249.184.184 0 0 1 .247.084l1.803 3.623a.187.187 0 0 1-.083.25.185.185 0 0 1-.082.018ZM37.343 90.917a.203.203 0 0 1-.049 0 .182.182 0 0 1-.121-.09.186.186 0 0 1-.015-.15l.99-3.774a.185.185 0 0 1 .357.095l-.99 3.774a.186.186 0 0 1-.172.145ZM38.83 91.978a.185.185 0 0 1-.174-.246.185.185 0 0 1 .07-.092l3.003-2.113a.184.184 0 0 1 .288.184.186.186 0 0 1-.077.12l-3.002 2.11a.184.184 0 0 1-.108.037ZM112.027 16.85a10.611 10.611 0 0 1-4.974-1.301c-3.086-1.654-5.177-4.57-5.452-7.61-.325-3.576 2.242-7.06 5.845-7.93a.096.096 0 0 1 .07.012c.02.013.035.033.041.057a.094.094 0 0 1-.068.113c-3.512.848-6.021 4.244-5.705 7.732.272 2.973 2.324 5.838 5.361 7.462 2.438 1.3 5.132 1.635 7.395.901a7.213 7.213 0 0 0 3.628-2.846c.973-1.47 1.252-3.07.788-4.508-.555-1.695-1.717-2.601-3.206-2.503-2.116.147-3.712 2.098-4.03 3.902a.094.094 0 0 1-.107.076.093.093 0 0 1-.074-.107c.37-2.135 2.219-3.916 4.199-4.053 1.578-.11 2.819.85 3.394 2.631.48 1.487.184 3.159-.808 4.668a7.42 7.42 0 0 1-3.727 2.92 8.23 8.23 0 0 1-2.57.383ZM13.22 75.37a.092.092 0 0 1-.09-.075c-.528-2.555-1.71-4.305-3.513-5.203-3.882-1.923-9.428.744-9.476.762a.092.092 0 0 1-.129-.114.093.093 0 0 1 .047-.053c.058-.026 5.674-2.724 9.639-.762 1.856.924 3.072 2.728 3.612 5.33a.092.092 0 0 1-.013.07.093.093 0 0 1-.059.04l-.018.005Z"
              fill="#212121"
            />
            <path
              d="M78.798 14.588c0-.613.34-7.083 10.168-7.696 0 0-4.807.682-5.624 2.861 0 0 3.254-2.724 5.964-1.906 2.71.818 4.4 5.448 4.468 7.018.069 1.57-1.294 6.606-2.982 7.083-.61.205-1.355.136-2.033.07.507.737.96 1.51 1.357 2.314l-11.318-9.744Z"
              fill="#0B101A"
            />
            <path
              d="m96.787 94.48-6.853 1.444.038.182 6.853-1.444-.038-.182ZM89.147 108.443c-1.37.016-2.74-.067-4.099-.249h-.064l-.439-2.262.185-.035.414 2.133c3.513.522 9.04.021 9.096.015l.016.186c-.04-.008-2.455.212-5.11.212ZM60.557 76.95l-1.284 2.887.169.076 1.284-2.887-.169-.076ZM98.206 80.886l-.18.043 1.303 5.413.18-.044-1.303-5.412Z"
              fill="#fff"
            />
            <path
              d="M28.702 46.234c-.63 0-1.258-.034-1.884-.1h-.051l-2.274-4.698a.093.093 0 0 1 .042-.124.093.093 0 0 1 .124.043l2.23 4.591c5.061.511 8.158-1.167 9.868-2.668a9.627 9.627 0 0 0 2.518-3.397l-1.932-3.973a.093.093 0 0 1 .042-.124.092.092 0 0 1 .124.043l1.969 4.052-.013.037c-.028.07-2.409 6.316-10.763 6.318Z"
              fill="#212121"
            />
            <path
              d="m32.536 41.622-11.987-.185 7.519-8.65 11.992.197-7.524 8.638Zm-11.591-.371 11.508.186 7.2-8.284-11.51-.186-7.198 8.284ZM111.34 37.28h-.012a2.955 2.955 0 0 1-1.782-1.182 2.982 2.982 0 0 1 .478-3.975 2.952 2.952 0 0 1 2.013-.72c.088 0 .176.004.264.013a4.456 4.456 0 0 1 1.636-2.132 4.42 4.42 0 0 1 5.106.03 4.456 4.456 0 0 1 1.61 2.152c.196-.041.396-.063.597-.064a2.948 2.948 0 0 1 2.012.718 2.986 2.986 0 0 1 .486 3.972 2.956 2.956 0 0 1-1.779 1.186h-.022l-10.607.002Zm.697-5.692a2.765 2.765 0 0 0-1.891.67 2.793 2.793 0 0 0 1.216 4.84h10.572a2.77 2.77 0 0 0 1.661-1.117 2.797 2.797 0 0 0-.462-3.718 2.764 2.764 0 0 0-1.883-.671 2.83 2.83 0 0 0-.638.076l-.083.02-.026-.081a4.26 4.26 0 0 0-1.529-2.123 4.229 4.229 0 0 0-4.963-.036 4.268 4.268 0 0 0-1.559 2.101l-.024.07h-.074a2.812 2.812 0 0 0-.317-.03Z"
              fill="#212121"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h133v115H0z" />
            </clipPath>
          </defs>
        </svg>
      </section>
      <br />

      {/* Top Study Places */}

      <div className="container">
        <h2 className="text">Top Study Places</h2>
        <ul className="cards4">
          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/New Delhi.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Delhi{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Bangalore.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Bangalore{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Hyderabad.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Hyderabad{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Pune.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Pune{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Mumbai.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Mumbai{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Chennai.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Chennai{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Kolkata.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Kolkata{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Bhopal.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Bhopal{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Indore.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Indore{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Nagpur.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Nagpur{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>
        </ul>
      </div>
      <br />

      {/* Subscribe for regular alerts */}
      <section className="jsx-249750319 section-control-inner d-flex align-items-center">
      <div className="jsx-249750319 d-lg-flex align-items-center col">
        <h3
          className="jsx-249750319 mb-0 mr-3 heading font-weight-bold"
          style={{ color: "rgb(90,106,159)" }}
        >
        Subscribe For Regular Alerts
        </h3>
        <a
          data-ga-title="Start Now"
          data-ga-track="true"
          data-ga-module="homepage"
          data-ga-section="Know your chances of Admission"
          data-ga-href="/college-predictor"
          className="jsx-249750319 cta d-flex align-items-center justify-content-center font-weight-bold"
          href="/college-predictor"
        >
        Subscribe Now
        </a>
      </div>
      <svg
        width={133}
        height={115}
        viewBox="0 0 133 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-auto predictor-bar-illustration"
      >
        <g opacity="0.9" clipPath="url(#a)">
          <path
            d="M28.33 52.106c-.937.052-1.869.09-2.785.132-5.748.262-11.832 1.453-15.51 6.336-10 13.285 4.384 30.315 14.831 37.616 10.447 7.301 22.324 12.565 34.693 15.588 12.283 3.001 25.881 4.857 38.225 1.202 13.31-3.939 25.263-13.994 31.402-26.635 5.062-10.425 5.008-22.92.296-33.58-5.331-12.059-16.259-20.5-27.034-27.424-12.288-7.895-25.944-14.564-40.519-15.17-3.43-.143-6.943.069-10.15 1.301-3.208 1.232-6.101 3.607-7.367 6.818-1.921 4.875.184 10.288.952 15.474.74 4.939.022 10.482-3.513 13.994-3.453 3.437-8.553 4.084-13.52 4.348Z"
            fill="#FEF4EB"
          />
          <path
            d="M101.675 75.37a.094.094 0 0 1-.066-.028.095.095 0 0 1-.027-.065V42.43h-7.714v20.137a.093.093 0 0 1-.093.093.094.094 0 0 1-.092-.093V42.245h8.075v33.032a.091.091 0 0 1-.024.062.09.09 0 0 1-.059.03Z"
            fill="#212121"
          />
          <path
            d="M119.255 100.196a.09.09 0 0 1-.065-.027.094.094 0 0 1-.027-.066V52.028h-17.488a.09.09 0 0 1-.065-.027.093.093 0 0 1 .065-.159h17.673v48.261c0 .025-.01.049-.027.066a.091.091 0 0 1-.066.027Z"
            fill="#212121"
          />
          <path
            d="M115.471 56.422h-10.022a.092.092 0 0 1-.064-.028.09.09 0 0 1-.028-.065.092.092 0 0 1 .092-.093h10.022a.092.092 0 0 1 .092.093.09.09 0 0 1-.027.066.091.091 0 0 1-.065.027ZM115.471 62.66h-10.022a.092.092 0 0 1-.064-.028.09.09 0 0 1-.028-.065.092.092 0 0 1 .092-.093h10.022a.092.092 0 0 1 .092.093.092.092 0 0 1-.092.093ZM46.108 63.38a.092.092 0 0 1-.092-.094V51.842h9.959v7.736a.095.095 0 0 1-.093.092.092.092 0 0 1-.092-.093v-7.55H46.2v11.269a.093.093 0 0 1-.093.083Z"
            fill="#212121"
          />
          <path
            d="M37.834 84.066a.092.092 0 0 1-.092-.093v-20.78H52.74c.024 0 .048.01.065.028a.093.093 0 0 1-.065.158H37.927v20.594a.093.093 0 0 1-.093.093ZM30.687 100.897a.094.094 0 0 1-.065-.027.096.096 0 0 1-.027-.066V57.186l-9.722 3.269v32.537a.095.095 0 0 1-.093.093.092.092 0 0 1-.092-.093V60.321l10.092-3.393V100.8a.093.093 0 0 1-.093.097Z"
            fill="#212121"
          />
          <path
            d="M35.529 96.591s2.507 10.83 9.69 10.83c6.166 0 14.704-14.098 14.704-14.098L35.53 96.592Z"
            fill="#FFAA7B"
          />
          <path
            d="M75.1 14.588c0-.613.341-7.083 10.168-7.696 0 0-4.806.682-5.623 2.861 0 0 3.253-2.724 5.964-1.906 2.71.818 4.4 5.448 4.468 7.018.068 1.57-1.294 6.606-2.982 7.083-.61.205-1.355.136-2.034.07.507.737.96 1.51 1.357 2.314 4.132 7.968.542 17.435-2.773 16.62-2.168-.478-3.457 3.2-3.457 3.2l-20.6-17.839c-.14-.01 7.11-16.015 15.513-11.725Z"
            fill="#0B101A"
          />
          <path
            d="M62.092 68.736a25.304 25.304 0 0 0 8.74 3.746c13.484 3.133 18.634-8.31 20.6-16.21-1.83-1.09-3.592-1.3-4.54-1.43-.944-.132-1.894-.2-2.846-.205-1.492-1.158-3.795-5.926-4.27-13.35l-.608.205-10.64 2.929s.474 3.406.74 6.605c.204 2.522.204 4.906-.272 5.517a12.65 12.65 0 0 1-1.355.273 66.72 66.72 0 0 0-5.55 11.92Z"
            fill="#FFAA7B"
          />
          <path
            d="M68.529 44.352s.473 3.406.74 6.607c6.03-.613 8.808-6.403 9.893-9.536L68.53 44.352Z"
            fill="#212121"
          />
          <path
            d="M68.4 49.46s13.892-3.609 11.52-12.264S77.752 22.28 68.806 24.19c-8.945 1.91-9.764 5.727-9.696 8.79.067 3.132 5.624 17.232 9.29 16.48Z"
            fill="#FFAA7B"
          />
          <path
            d="M58.232 28.075c1.423-3.202 3.185-3.066 4.337-2.52 6.437-6.268 12.94-1.43 12.94-1.43 2.644 5.925 8.064 8.24 8.064 8.24s-2.1 2.248-8.267 2.384c-1.897 0-3.793-.818-5.555-1.975a32.262 32.262 0 0 0 7.385 5.243c-7.792-1.3-13.214-10.22-13.824-11.169-.608 1.022-1.828 3.133-1.897 4.831-.068 2.384.814 7.015-.541 7.22-.07.073-4.814-6.056-2.642-10.825Z"
            fill="#0B101A"
          />
          <path
            d="M64.395 56.068s23.31-5.653 33.407 2.724l-5.084 70.906-45.533-11.039s1.294-4.495 10.027-16.413c8.733-11.918 4.946-29.424 7.183-46.178Z"
            fill="#FFAA7B"
          />
          <path
            d="M100.985 79.019c-1.151 8.514-5.623 19.003-7.25 24.589 0 0 2.71 19.547.137 24.86a2.452 2.452 0 0 1-1.085 1.224c-9.488 4.155-46.484.138-48.043-11.849-.541-4.359 14.094-19.685 14.974-21.523.338-.743.74-3.27-1.017-8.445-2.44 7.559-15.855 5.38-15.855 5.38 1.558-2.725 5.488-21.455 9.892-29.969C56.065 56.885 64.867 56 64.867 56s3.66 5.858 12.537 5.04c8.877-.817 10.502-6.267 10.502-6.267s7.86 1.022 10.299 2.997c.342.342 4.209 10.08 2.78 21.25Z"
            fill="#48639E"
          />
          <path
            d="M93.735 103.608s2.71 19.547.136 24.86c-6.912-3.475-15.924-11.034-13.214-22.818 3.999-17.095 20.335-26.698 20.335-26.698-1.166 8.581-5.63 19.07-7.257 24.656Z"
            fill="#48639E"
          />
          <path
            d="m64.868 80.519 15.858 25.608H53.69L38.58 81.063l26.288-.544Z"
            fill="#212121"
          />
          <path
            d="m79.844 104.832.272-.884L65.14 79.701l-.272.818 14.976 24.313Z"
            fill="#fff"
          />
          <path
            d="m65.14 79.701-25.41.749-1.15.613 26.288-.544.272-.818Z"
            fill="#fff"
          />
          <path
            d="M38.579 81.063 24.349 73.3l16.6 26.289 12.74 6.538-15.11-25.064Z"
            fill="#212121"
          />
          <path
            d="M114.061 98.975c-1.559.682-5.422 5.313-6.84 5.79-6.3 2.111-33.067-3.541-33.067-3.541l.814-4.7s26.291.68 29.208-.068c.542-.136 3.389-4.63 4.472-5.244l5.413 7.763Z"
            fill="#FFAA7B"
          />
          <path
            d="M74.965 96.591s-3.185-2.588-5.285-1.975c-2.168.613-5.285 3.345-6.437 3.95-1.151.606-4.337 2.929-2.71 4.36 1.625 1.362 6.64.204 8.605-.885 1.966-1.089 5.082-.682 5.082-.682l.745-4.768Z"
            fill="#FFAA7B"
          />
          <path
            d="M70.29 94.48s-3.863-.477-4.878-.408c-1.085 0-.74.273-.203 1.09.61.816 2.575 1.158 2.71 1.43.068.273 2.371-2.111 2.371-2.111Z"
            fill="#FFAA7B"
          />
          <path
            d="M87.84 54.705s11.452 1.362 14.568 6.266c3.999 6.199 13.349 30.99 13.078 37.256 0 0-6.84 11.706-30.425 9.876 0 0-2.439-8.719 2.508-11.578 0 0 12.06-2.18 13.484-3.407l-4.067-16.89-9.147-21.523Z"
            fill="#48639E"
          />
          <path
            d="M42.237 90.462c-.338-1.43-3.523-.545-4.54.273-.32.272-.595.594-.813.953 0-.271-.069-.476-.069-.68-.066-.682-.88-1.908-1.014-.955-.204.886-.544 4.768-.544 4.768-.067 3.066 1.965 4.359 3.185 3.344 1.289-1.027 4.202-6.273 3.795-7.704Z"
            fill="#FFB78F"
          />
          <path
            d="M67.163 45.153c-.274 0-.457-.013-.483-.015a.185.185 0 0 1-.172-.199.186.186 0 0 1 .198-.173c.026 0 2.474.171 3.492-.817a.184.184 0 0 1 .263 0 .186.186 0 0 1 0 .262c-.856.836-2.485.942-3.298.942ZM35.377 90.917a.184.184 0 0 1-.166-.102l-1.803-3.624a.187.187 0 0 1 .084-.249.184.184 0 0 1 .247.084l1.803 3.623a.187.187 0 0 1-.083.25.185.185 0 0 1-.082.018ZM37.343 90.917a.203.203 0 0 1-.049 0 .182.182 0 0 1-.121-.09.186.186 0 0 1-.015-.15l.99-3.774a.185.185 0 0 1 .357.095l-.99 3.774a.186.186 0 0 1-.172.145ZM38.83 91.978a.185.185 0 0 1-.174-.246.185.185 0 0 1 .07-.092l3.003-2.113a.184.184 0 0 1 .288.184.186.186 0 0 1-.077.12l-3.002 2.11a.184.184 0 0 1-.108.037ZM112.027 16.85a10.611 10.611 0 0 1-4.974-1.301c-3.086-1.654-5.177-4.57-5.452-7.61-.325-3.576 2.242-7.06 5.845-7.93a.096.096 0 0 1 .07.012c.02.013.035.033.041.057a.094.094 0 0 1-.068.113c-3.512.848-6.021 4.244-5.705 7.732.272 2.973 2.324 5.838 5.361 7.462 2.438 1.3 5.132 1.635 7.395.901a7.213 7.213 0 0 0 3.628-2.846c.973-1.47 1.252-3.07.788-4.508-.555-1.695-1.717-2.601-3.206-2.503-2.116.147-3.712 2.098-4.03 3.902a.094.094 0 0 1-.107.076.093.093 0 0 1-.074-.107c.37-2.135 2.219-3.916 4.199-4.053 1.578-.11 2.819.85 3.394 2.631.48 1.487.184 3.159-.808 4.668a7.42 7.42 0 0 1-3.727 2.92 8.23 8.23 0 0 1-2.57.383ZM13.22 75.37a.092.092 0 0 1-.09-.075c-.528-2.555-1.71-4.305-3.513-5.203-3.882-1.923-9.428.744-9.476.762a.092.092 0 0 1-.129-.114.093.093 0 0 1 .047-.053c.058-.026 5.674-2.724 9.639-.762 1.856.924 3.072 2.728 3.612 5.33a.092.092 0 0 1-.013.07.093.093 0 0 1-.059.04l-.018.005Z"
            fill="#212121"
          />
          <path
            d="M78.798 14.588c0-.613.34-7.083 10.168-7.696 0 0-4.807.682-5.624 2.861 0 0 3.254-2.724 5.964-1.906 2.71.818 4.4 5.448 4.468 7.018.069 1.57-1.294 6.606-2.982 7.083-.61.205-1.355.136-2.033.07.507.737.96 1.51 1.357 2.314l-11.318-9.744Z"
            fill="#0B101A"
          />
          <path
            d="m96.787 94.48-6.853 1.444.038.182 6.853-1.444-.038-.182ZM89.147 108.443c-1.37.016-2.74-.067-4.099-.249h-.064l-.439-2.262.185-.035.414 2.133c3.513.522 9.04.021 9.096.015l.016.186c-.04-.008-2.455.212-5.11.212ZM60.557 76.95l-1.284 2.887.169.076 1.284-2.887-.169-.076ZM98.206 80.886l-.18.043 1.303 5.413.18-.044-1.303-5.412Z"
            fill="#fff"
          />
          <path
            d="M28.702 46.234c-.63 0-1.258-.034-1.884-.1h-.051l-2.274-4.698a.093.093 0 0 1 .042-.124.093.093 0 0 1 .124.043l2.23 4.591c5.061.511 8.158-1.167 9.868-2.668a9.627 9.627 0 0 0 2.518-3.397l-1.932-3.973a.093.093 0 0 1 .042-.124.092.092 0 0 1 .124.043l1.969 4.052-.013.037c-.028.07-2.409 6.316-10.763 6.318Z"
            fill="#212121"
          />
          <path
            d="m32.536 41.622-11.987-.185 7.519-8.65 11.992.197-7.524 8.638Zm-11.591-.371 11.508.186 7.2-8.284-11.51-.186-7.198 8.284ZM111.34 37.28h-.012a2.955 2.955 0 0 1-1.782-1.182 2.982 2.982 0 0 1 .478-3.975 2.952 2.952 0 0 1 2.013-.72c.088 0 .176.004.264.013a4.456 4.456 0 0 1 1.636-2.132 4.42 4.42 0 0 1 5.106.03 4.456 4.456 0 0 1 1.61 2.152c.196-.041.396-.063.597-.064a2.948 2.948 0 0 1 2.012.718 2.986 2.986 0 0 1 .486 3.972 2.956 2.956 0 0 1-1.779 1.186h-.022l-10.607.002Zm.697-5.692a2.765 2.765 0 0 0-1.891.67 2.793 2.793 0 0 0 1.216 4.84h10.572a2.77 2.77 0 0 0 1.661-1.117 2.797 2.797 0 0 0-.462-3.718 2.764 2.764 0 0 0-1.883-.671 2.83 2.83 0 0 0-.638.076l-.083.02-.026-.081a4.26 4.26 0 0 0-1.529-2.123 4.229 4.229 0 0 0-4.963-.036 4.268 4.268 0 0 0-1.559 2.101l-.024.07h-.074a2.812 2.812 0 0 0-.317-.03Z"
            fill="#212121"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h133v115H0z" />
          </clipPath>
        </defs>
      </svg>
    </section>
    <br />

      {/* Explore Courses */}
      <section className="jsx-3399163233 jsx-4093795240 section-control mb-0 bg-white ">
  <div className="jsx-3399163233 jsx-4093795240 container" style={{textAlign: 'left'}}>
    <h2 className="jsx-3399163233 jsx-4093795240 heading1 font-weight-bold">
      Explore Courses
    </h2>
    < br />
    <div
      className="slick-slider carousel-control fluid-height-carousel slick-initialized"
      dir="ltr"
    >
    <div className="button1-row">
    <button className="button1">Bachelore</button>
    <button className="button1">Masters</button>
    <button className="button1">Doctorate</button>
    <button className="button1">Diploma</button>
    <button className="button1">Certification</button>
  </div>
  <br />
      <div className="slick-list">
        <div
          className="slick-track"
          style={{
            width: 1440,
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)"
          }}
        >
          <div
            data-index={0}
            className="slick-slide slick-active slick-current"
            tabIndex={-1}
            aria-hidden="false"
            style={{ outline: "none", width: 288 }}
          >
            <div>
              <div className="jsx-4093795240 overflow-grid-item px-1">
                <div className="jsx-4093795240 selected-box position-relative h-100 selected-box-sm-box rounded-lg">
                  <div className="jsx-4093795240 d-inline-flex align-items-center justify-content-center selected-box-badge mb-2">
                    Full Time
                  </div>
                  <a
                    data-csm-track="true"
                    data-csm-title="B.Com General"
                    data-event-type="link_click"
                    data-section_name="Explore Courses"
                    data-csm-href="https://collegedunia.com/"
                    data-ga-title="B.Com General"
                    data-ga-track="true"
                    data-ga-module="homepage"
                    data-ga-section="Explore Courses"
                    data-ga-href="courses/bachelor-of-commerce-bcom"
                    className="jsx-4093795240 selected-box-title line-clamp-2 selected-box-title-md mb-12 color-base hover-color-primary"
                    href="/courses/bachelor-of-commerce-bcom"
                  >
                  <span>B.Com General</span>
                  </a>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Duration
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        3 Years
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Total Avg. Fees
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        61.95 K
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Colleges
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        6481
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 fluid-height-footer-divider" />
                  <div className="jsx-4093795240 fluid-height-footer">
                    <hr className="jsx-4093795240 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Course Overview"
                      data-event-type="link_click"
                      data-section_name="Explore Courses"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Course Overview"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Explore Courses"
                      data-ga-href="courses/bachelor-of-commerce-bcom"
                      className="jsx-4093795240 d-flex font-weight-semi font-weight-medium color-base selected-box-line align-items-center justify-content-between hover-color-primary"
                      href="/courses/bachelor-of-commerce-bcom"
                    >
                      <span>Course Overview</span>
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-index={1}
            className="slick-slide slick-active"
            tabIndex={-1}
            aria-hidden="false"
            style={{ outline: "none", width: 288 }}
          >
            <div>
              <div className="jsx-4093795240 overflow-grid-item px-1">
                <div className="jsx-4093795240 selected-box position-relative h-100 selected-box-sm-box rounded-lg">
                  <div className="jsx-4093795240 d-inline-flex align-items-center justify-content-center selected-box-badge mb-2">
                    Full Time
                  </div>
                  <a
                    data-csm-track="true"
                    data-csm-title="B.Ed General"
                    data-event-type="link_click"
                    data-section_name="Explore Courses"
                    data-csm-href="https://collegedunia.com/"
                    data-ga-title="B.Ed General"
                    data-ga-track="true"
                    data-ga-module="homepage"
                    data-ga-section="Explore Courses"
                    data-ga-href="courses/bachelor-of-education-bed"
                    className="jsx-4093795240 selected-box-title line-clamp-2 selected-box-title-md mb-12 color-base hover-color-primary"
                    href="/courses/bachelor-of-education-bed"
                  >
                    <span>B.Ed General</span>
                  </a>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Duration
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        2 Years
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Total Avg. Fees
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        81.82 K
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Colleges
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        5433
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 fluid-height-footer-divider" />
                  <div className="jsx-4093795240 fluid-height-footer">
                    <hr className="jsx-4093795240 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Course Overview"
                      data-event-type="link_click"
                      data-section_name="Explore Courses"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Course Overview"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Explore Courses"
                      data-ga-href="courses/bachelor-of-education-bed"
                      className="jsx-4093795240 d-flex font-weight-semi font-weight-medium color-base selected-box-line align-items-center justify-content-between hover-color-primary"
                      href="/courses/bachelor-of-education-bed"
                    >
                      <span>Course Overview</span>
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-index={2}
            className="slick-slide slick-active"
            tabIndex={-1}
            aria-hidden="false"
            style={{ outline: "none", width: 288 }}
          >
            <div>
              <div className="jsx-4093795240 overflow-grid-item px-1">
                <div className="jsx-4093795240 selected-box position-relative h-100 selected-box-sm-box rounded-lg">
                  <div className="jsx-4093795240 d-inline-flex align-items-center justify-content-center selected-box-badge mb-2">
                    Full Time
                  </div>
                  <a
                    data-csm-track="true"
                    data-csm-title="BCA General"
                    data-event-type="link_click"
                    data-section_name="Explore Courses"
                    data-csm-href="https://collegedunia.com/"
                    data-ga-title="BCA General"
                    data-ga-track="true"
                    data-ga-module="homepage"
                    data-ga-section="Explore Courses"
                    data-ga-href="courses/bachelor-of-computer-applications-bca"
                    className="jsx-4093795240 selected-box-title line-clamp-2 selected-box-title-md mb-12 color-base hover-color-primary"
                    href="/courses/bachelor-of-computer-applications-bca"
                  >
                    <span>BCA General</span>
                  </a>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Duration
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        3 Years
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Total Avg. Fees
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        1.32 L
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Colleges
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        4870
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 fluid-height-footer-divider" />
                  <div className="jsx-4093795240 fluid-height-footer">
                    <hr className="jsx-4093795240 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Course Overview"
                      data-event-type="link_click"
                      data-section_name="Explore Courses"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Course Overview"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Explore Courses"
                      data-ga-href="courses/bachelor-of-computer-applications-bca"
                      className="jsx-4093795240 d-flex font-weight-semi font-weight-medium color-base selected-box-line align-items-center justify-content-between hover-color-primary"
                      href="/courses/bachelor-of-computer-applications-bca"
                    >
                      <span>Course Overview</span>
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-index={3}
            className="slick-slide slick-active"
            tabIndex={-1}
            aria-hidden="false"
            style={{ outline: "none", width: 288 }}
          >
            <div>
              <div className="jsx-4093795240 overflow-grid-item px-1">
                <div className="jsx-4093795240 selected-box position-relative h-100 selected-box-sm-box rounded-lg">
                  <div className="jsx-4093795240 d-inline-flex align-items-center justify-content-center selected-box-badge mb-2">
                    Full Time
                  </div>
                  <a
                    data-csm-track="true"
                    data-csm-title="BA General"
                    data-event-type="link_click"
                    data-section_name="Explore Courses"
                    data-csm-href="https://collegedunia.com/"
                    data-ga-title="BA General"
                    data-ga-track="true"
                    data-ga-module="homepage"
                    data-ga-section="Explore Courses"
                    data-ga-href="courses/bachelor-of-arts-ba"
                    className="jsx-4093795240 selected-box-title line-clamp-2 selected-box-title-md mb-12 color-base hover-color-primary"
                    href="/courses/bachelor-of-arts-ba"
                  >
                    <span>BA General</span>
                  </a>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Duration
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        3 Years
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Total Avg. Fees
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        41.45 K
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Colleges
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        3892
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 fluid-height-footer-divider" />
                  <div className="jsx-4093795240 fluid-height-footer">
                    <hr className="jsx-4093795240 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Course Overview"
                      data-event-type="link_click"
                      data-section_name="Explore Courses"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Course Overview"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Explore Courses"
                      data-ga-href="courses/bachelor-of-arts-ba"
                      className="jsx-4093795240 d-flex font-weight-semi font-weight-medium color-base selected-box-line align-items-center justify-content-between hover-color-primary"
                      href="/courses/bachelor-of-arts-ba"
                    >
                      <span>Course Overview</span>
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-index={4}
            className="slick-slide"
            tabIndex={-1}
            aria-hidden="true"
            style={{ outline: "none", width: 288 }}
          >
            <div>
              <div className="jsx-4093795240 overflow-grid-item px-1">
                <div className="jsx-4093795240 selected-box position-relative h-100 selected-box-sm-box rounded-lg">
                  <div className="jsx-4093795240 d-inline-flex align-items-center justify-content-center selected-box-badge mb-2">
                    Full Time
                  </div>
                  <a
                    data-csm-track="true"
                    data-csm-title="B.Tech Mechanical Engineering"
                    data-event-type="link_click"
                    data-section_name="Explore Courses"
                    data-csm-href="https://collegedunia.com/"
                    data-ga-title="B.Tech Mechanical Engineering"
                    data-ga-track="true"
                    data-ga-module="homepage"
                    data-ga-section="Explore Courses"
                    data-ga-href="courses/bachelor-of-technology-btech-mechanical-engineering"
                    className="jsx-4093795240 selected-box-title line-clamp-2 selected-box-title-md mb-12 color-base hover-color-primary"
                    href="/courses/bachelor-of-technology-btech-mechanical-engineering"
                  >
                    <span>B.Tech Mechanical</span>
                  </a>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Duration
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        4 Years
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Total Avg. Fees
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        3.51 L
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 row">
                    <div className="jsx-4093795240 col">
                      <p className="jsx-4093795240 selected-box-line mb-lg-3 mb-8p">
                        Colleges
                      </p>
                    </div>
                    <div className="jsx-4093795240 col-auto text-right">
                      <p className="jsx-4093795240 selected-box-line font-weight-bold color-base mb-lg-3 mb-8p">
                        3519
                      </p>
                    </div>
                  </div>
                  <div className="jsx-4093795240 fluid-height-footer-divider" />
                  <div className="jsx-4093795240 fluid-height-footer">
                    <hr className="jsx-4093795240 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Course Overview"
                      data-event-type="link_click"
                      data-section_name="Explore Courses"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Course Overview"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Explore Courses"
                      data-ga-href="courses/bachelor-of-technology-btech-mechanical-engineering"
                      className="jsx-4093795240 d-flex font-weight-semi font-weight-medium color-base selected-box-line align-items-center justify-content-between hover-color-primary"
                      href="/courses/bachelor-of-technology-btech-mechanical-engineering"
                    >
                      <span>Course Overview</span>
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 <br />

      {/* Search from 30k course finder poster */}
      <div className="course-finder-banner pointer py-9" style={{textAlign: 'center'}}>
      <a
        data-ga-title="Course Finder Banner"
        data-ga-track="true"
        data-ga-module="homepage"
        data-ga-section="Finder banner"
        data-ga-href="/course-finder"
        href="/course-finder"
      >
        <img
          data-src="https://images.collegedunia.com/public/asset/img/ap-banner/desktop-homepage-course-banner.png?h=118&w=1130&mode=stretch"
          src="https://images.collegedunia.com/public/asset/img/ap-banner/desktop-homepage-course-banner.png?h=118&w=1130&mode=stretch"
          alt="Course Finder"
          height="118px"
          className="jsx-538463183  ls-is-cached lazyloaded"
        />
      </a>
    </div>
    <br />
    
      {/*Top Exams */}
      <div className="container1">
      <h2 className="text">Top Exams</h2>
      <br />
      <div className="jsx-3399163233 jsx-600450678 container1">
  <div
    className="slick-slider carousel-control fluid-height-carousel slick-initialized"
    dir="ltr"
  >
    <div className="slick-list">
      <div
        className="slick-track"
        style={{
          width: 2960,
          opacity: 1,
          transform: "translate3d(0px, 0px, 0px)"
        }}
      >
        <div
          data-index={0}
          className="slick-slide slick-active slick-current"
          tabIndex={-1}
          aria-hidden="false"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="NEET"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="NEET"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/neet"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/neet"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/NTA- Logo.png?h=44&w=44&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/logos/NTA- Logo.png?h=44&w=44&mode=stretch"
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Offline Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      NEET
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      819
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      May 04, 2024
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/neet/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/neet/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/neet"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/neet"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={1}
          className="slick-slide slick-active"
          tabIndex={-1}
          aria-hidden="false"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="JEE Main"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="JEE Main"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/jee-main"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/jee-main"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/2019-01-09.png?h=44&w=44&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/logos/2019-01-09.png?h=44&w=44&mode=stretch"
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      JEE Main
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      1683
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      January 23, 2024
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/jee-main/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/jee-main/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/jee-main"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/jee-main"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={2}
          className="slick-slide slick-active"
          tabIndex={-1}
          aria-hidden="false"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="CAT"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="CAT"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/cat"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/cat"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/CAT logo.jpg?h=44&w=44&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/logos/CAT logo.jpg?h=44&w=44&mode=stretch"
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      CAT
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      1434
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      November 25, 2023
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/cat/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/cat/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/cat"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/cat"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={3}
          className="slick-slide slick-active"
          tabIndex={-1}
          aria-hidden="false"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="JEE Advanced"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="JEE Advanced"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/jee-advanced"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/jee-advanced"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/gatellogo.png?h=44&w=44&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/logos/gatellogo.png?h=44&w=44&mode=stretch"
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      JEE Advanced
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      45
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      June 03, 2023
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/jee-advanced/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/jee-advanced/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/jee-advanced"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/jee-advanced"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={4}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="GATE"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="GATE"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/gate"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/gate"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/iit kanpur logo.jpg?h=44&w=44&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/logos/iit kanpur logo.jpg?h=44&w=44&mode=stretch"
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      GATE
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      1364
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      January 02, 2024
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/gate/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/gate/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/gate"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/gate"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={5}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="NMAT"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="NMAT"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/nmat"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/nmat"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/Capture.JPG?h=44&w=44&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/logos/Capture.JPG?h=44&w=44&mode=stretch"
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      NMAT
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      117
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      November 30, 2023
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/nmat/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/nmat/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/nmat"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/nmat"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={6}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="MAT"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="MAT"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/mat"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/mat"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/MAT Exam Logo.jpg?h=44&w=44&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/logos/MAT Exam Logo.jpg?h=44&w=44&mode=stretch"
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online + Offline Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      MAT
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      1298
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      September 02, 2023
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/mat/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/mat/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/mat"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/mat"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={7}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="XAT"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="XAT"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/xat"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/xat"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/XAT_0.jpg?h=44&w=44&mode=stretch"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle clgdn_lazyload"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      XAT
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      834
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      January 06, 2024
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/xat/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/xat/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/xat"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/xat"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={8}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="BITSAT"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="BITSAT"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/bitsat"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/bitsat"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/BITS Pilani Logo.png?h=44&w=44&mode=stretch"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle clgdn_lazyload"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      BITSAT
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      5
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      June 17, 2023
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/bitsat/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/bitsat/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/bitsat"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/bitsat"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-index={9}
          className="slick-slide"
          tabIndex={-1}
          aria-hidden="true"
          style={{ outline: "none", width: 296 }}
        >
          <div>
            <div className="jsx-600450678 ">
              <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                <a
                  data-csm-track="true"
                  data-csm-title="IIT JAM"
                  data-event-type="link_click"
                  data-section_name="Top Exams"
                  data-csm-href="https://collegedunia.com/"
                  data-ga-title="IIT JAM"
                  data-ga-track="true"
                  data-ga-module="homepage"
                  data-ga-section="Top Exams"
                  data-ga-href="exams/iit-jam"
                  className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                  href="/exams/iit-jam"
                >
                  <div className="jsx-600450678 exam-img mr-3">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/logos/IIT Kharagur Logo.png?h=44&w=44&mode=stretch"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                      alt=""
                      height="44px"
                      className="jsx-2173310127 rounded-circle clgdn_lazyload"
                    />
                  </div>
                  <div className="jsx-600450678">
                    <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                      Online Exam
                    </div>
                    <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                      IIT JAM
                    </h3>
                  </div>
                </a>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Participating Colleges
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      50
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col pr-1">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Date
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right pl-1">
                    <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      {" "}
                      February 11, 2023
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 row">
                  <div className="jsx-600450678 col">
                    <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                      Exam Level
                    </p>
                  </div>
                  <div className="jsx-600450678 col-auto text-right">
                    <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                      national
                    </p>
                  </div>
                </div>
                <div className="jsx-600450678 fluid-height-footer-divider double" />
                <div className="jsx-600450678 fluid-height-footer double">
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Application Process"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/iit-jam/application-process"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/iit-jam/application-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-600450678">
                    <hr className="jsx-600450678 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exam Info"
                      data-event-type="link_click"
                      data-section_name="Top Exams"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Exam Info"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Exams"
                      data-ga-href="exams/iit-jam"
                      className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                      href="/exams/iit-jam"
                    >
                      Exam Info
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>         




      {/* Admission 2023 */}

      {/* Latest News & Stories */}

      {/* Admission 2023 */}

      {/* Study Abroad */}

      {/* Top Courses */}

      {/* OUR PORTFOLIO Section */}
      <section className="featured-post container">
        <h3 className="text-center text-uppercase py-4">OUR PORTFOLIO</h3>
        <div className="container">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-1 border bg-danger ">
                <img
                  src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw="
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-dark">
                <img
                  src="https://media.istockphoto.com/id/891036828/photo/saving-money-for-retirement-plan.jpg?s=612x612&w=0&k=20&c=PtWmG88gLx-XSHyVkg-j_Aw1wPyAIfRNfhPmmWY4384="
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-dark">
                <img
                  src="https://media.istockphoto.com/id/1436918941/photo/business-and-investment.jpg?s=612x612&w=0&k=20&c=CM8vaQxaaiIy2tGypKgsdD9Fhx5L-22TyVrcRfFLep8="
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-danger">
                <img
                  src="https://media.istockphoto.com/id/1449854429/vector/concept-of-coffee-break-brunch-or-time-lunch-at-work-successful-business-woman-take-a-break.jpg?s=612x612&w=0&k=20&c=GoeNinQU9_Tb1vEzbhIGIVkHLPFI-J_FvXAuy_ryhrA="
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="text-center text-uppercase py-4">TESTIMONIALS</h3>
        <section>
          <div className="row text-center  text-uppercase pt-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/65748069?v=4"
                  className="rounded-circle shadow-1-strong"
                  width={100}
                  height={100}
                />
              </div>
              <p className="lead my-3  text-center">
                “If debugging is the process of removing software bugs, then
                programming must be the process of putting them in”
              </p>
              <p className="font-italic font-weight-normal mb-0">
                - Sudhanshu Singh
              </p>
            </div>
            <div className="col-md-6 mb-0">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src="https://avatars.githubusercontent.com/u/110010807?v=4"
                  className="rounded-circle shadow-1-strong"
                  width={100}
                  height={100}
                />
              </div>
              <p className="lead my-3 ">
                “Measuring programming progress by lines of code is like
                measuring aircraft building progress by weight.”
              </p>
              <p className="font-italic font-weight-normal mb-0">
                - Divi Sharma{" "}
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
