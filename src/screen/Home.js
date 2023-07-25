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
import "./Home.css";

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
        <br />
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
        <br />

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
      {/*  same card as top university Explore Programs  */}
      <div className="container">
        <h2>Explore Programs</h2>
        <br />
        <div className="p-4">
          <div className="hstack gap-3">
            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  Previous
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  All
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  BE/B.Tech
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  MBA/PGDM
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  MBBS
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  ME/M.Tech
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  B.Sc
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  B.A
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  BCA
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  BBA/BBM
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn outline rounded className="mx-2" color="Secoundary">
                  BSC/Nursing
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>

            <MDBPaginationItem>
              <MDBPaginationLink href="#">
                <MDBBtn rounded className="mx-2" color="light">
                  Next
                </MDBBtn>
              </MDBPaginationLink>
            </MDBPaginationItem>
          </div>
        </div>

        <MDBContainer>
          <MDBRow>
            <MDBCol order="first">
              <MDBCard>
                <div class="card0-container">
                  <MDBCardBody>
                    <MDBCardTitle>Ranking</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBContainer>
                      <MDBRow>
                        <MDBCol size="6" sm="3">
                          <MDBBtn rounded className="mx-2" color="secondary">
                            Indiatoday-1545
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol size="6" sm="3">
                          <MDBBtn rounded className="mx-2" color="secondary">
                            Outlook-1189
                          </MDBBtn>
                        </MDBCol>
                        <div className="w-100 d-none d-md-block"></div>
                        <MDBCol size="6" sm="3">
                          <MDBBtn rounded className="mx-2" color="secondary">
                            NIRF-1174
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol size="6" sm="3">
                          <MDBBtn rounded className="mx-2" color="secondary">
                            IIRF-855
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                    <MDBBtn>Top Ranked Colleges in India</MDBBtn>
                  </MDBCardBody>
                </div>
              </MDBCard>
            </MDBCol>

            <MDBCol order="secound">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Find Colleges</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn>Discover To Colleges in India</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol order="third">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Compare Colleges</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn>Compare Colleges</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />
        <MDBContainer>
          <MDBRow>
            <MDBCol order="four">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Exams</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn>Check all Entrance exams in India</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol order="five">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Colleges Predictor</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn>find where you may get addmission</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol order="six">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Course Finder</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn>Get Top courses in india collegs</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <br />

      {/* Latest Notification */}
      <div className="container">
        <h2 className="text">Latest Notification </h2>
        <section className="featured-post container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0="
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Home Storage</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/685018656/photo/workplace-with-laptop-coffee-and-sketch.jpg?s=612x612&w=0&k=20&c=l9U-B21BJaDGqAVtbezfpg4r7prftk494kjxvgIE9GA="
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Business Storage</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw="
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Company Storage</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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

      {/* Top Universities/Colleges */}

      {/* College Ranking 2023 */}

      {/* Top Study Places */}

      {/* Explore Courses */}

      {/*Top Exams */}

      {/* Admission 2023 */}

      {/* Latest News & Stories */}

      {/* Admission 2023 */}

      {/* Study Abroad */}

      {/* Top Courses */}

      {/* LATEST POSTS  Section*/}
      <section className="featured-post container">
        <h3 className="text-center text-uppercase pt-4">LATEST POSTS</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Profit Margin</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Annual Revenue</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Storage Units</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
      </section>

      {/* View All Posts  Section*/}
      <section
        className="container-fluid bg-primary bg-gradient mt-4"
        style={{ minHight: "150px" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <i class="fs-1 text-warning my-3  fa-solid fa-location-dot"></i>
          <h3 className="text-white text-uppercase">
            We have wide variety of posts
          </h3>
          <button className="btn btn-warning my-2 text-dark text-uppercase">
            View All Posts
          </button>
        </div>
      </section>

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
