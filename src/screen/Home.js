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
      {/*  same card as top university Explore Programs  */}
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
        <br />
        <section className="featured-post container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body ">
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
                  <img src={tamil} alt="Avatar" className="card-avatar" />
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
                  <img src={bce} alt="Avatar" className="card-avatar" />
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
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
            <div className="card">
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
    

      {/*Top Exams */}

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
