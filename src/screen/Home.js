import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {FiArrowRightCircle} from 'react-icons/fi'
/*study goal*/
import engineer from "../assets/icons/engineer.png";
import management from "../assets/icons/management.png";
import commerce from "../assets/icons/commerce.png";
import arts from "../assets/icons/art.png";
import medical from "../assets/icons/medical.png";
import design from "../assets/icons/design.png";
/*top collections*/
import cd1 from "../assets/topcollection/cd1.webp";
import cd2 from "../assets/topcollection/cd2.webp";
import cd3 from "../assets/topcollection/cd3.webp";
import cd4 from "../assets/topcollection/cd4.webp";
import cd5 from  "../assets/topcollection/cd5.webp";
import cd6 from "../assets/topcollection/cd6.webp";
import cd7 from "../assets/topcollection/cd7.webp";
import cd8 from "../assets/topcollection/cd8.webp";
import cd9 from "../assets/topcollection/cd9.webp";
import cd10 from "../assets/topcollection/cd10.webp";
import cd11 from "../assets/topcollection/cd11.webp";
import cd12 from "../assets/topcollection/cd12.webp";
import cd13 from "../assets/topcollection/cd13.webp";
import cd14 from "../assets/topcollection/cd14.webp";
import cd15 from "../assets/topcollection/cd15.webp";


import './Home.css'

function Home() {
  return (
    <div>

       {/* Search Bar */}
       <div className="search-bar">
       <div className="d-flex justify-content-center">
         <div className="input-group mb-3">
           <input
             type="text"
             className="form-control form-input"
             placeholder="Search..."
             aria-label="Search"
             aria-describedby="search-button"
           />
           <button
             className="btn btn-outline-secondary"
             type="button"
             id="search-button"
           >
             <BsSearch />
           </button>
         </div>
       </div>
  </div> 


         {/*  Carousal */}
      <section className='hero-section'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <section className="navigation">

        {/*RIGHT ALIGNED NAV */}
        <div class="container" id="sub-nav">
        <p class="text-end"></p>
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
      </div>

      
     </section>
          <img src="https://images.collegedunia.com/public/asset/img/homepage/banner/New1663389009.webp?mode=stretch" className="d-block w-100" alt="..." id="image-carousel"/>
        </div>
        <div className="carousel-item">
        <section className="navigation">
        {/*RIGHT ALIGNED NAV */}
        <div class="container" id="sub-nav">
        <p class="text-end"></p>
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
      </div>
     </section>
          <img src="https://images.collegedunia.com/public/asset/img/homepage/banner/IIT1671515040.webp?mode=stretch" className="d-block w-100" alt="..." id="image-carousel"/>
        </div>
        <div className="carousel-item">
        <section className="navigation">
        {/*RIGHT ALIGNED NAV */}
        <div class="container" id="sub-nav">
        <p class="text-end"></p>
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
      </div>

     </section>
          <img src="https://images.collegedunia.com/public/asset/img/homepage/banner/IIT1642250345.webp?mode=stretch" className="d-block w-100" alt="..."id="image-carousel"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </section>
      <br/>
      

      {/* Select Your Study Goal  Scrollup cards */}
      <div className="container">
      <h2 className='text'>Select Your Study Goal</h2>
      <div class="card-top-collection container">
      <ul className="cards">

        <li className="card">
          <div>
         <div className='nowrap'>
            <div className="circular-image colomn">
            <img
              src={engineer} height={50}
              alt=""
            />
          </div>
          <div className='colomn padding-card'>
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
       <div className='nowrap'>
          <div className="circular-image colomn">
          <img
            src={management} height={50}
            alt=""
          />
        </div>
        <div className='colomn padding-card'>
          <h3 className="card-title">Management</h3>
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
       <div className='nowrap'>
          <div className="circular-image colomn">
          <img
            src={commerce} height={50}
            alt=""
          />
        </div>
        <div className='colomn padding-card'>
          <h3 className="card-title">Commerce</h3>
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
       <div className='nowrap'>
          <div className="circular-image colomn">
          <img
            src={arts} height={50}
            alt=""
          />
        </div>
        <div className='colomn padding-card'>
          <h3 className="card-title">Arts</h3>
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
       <div className='nowrap'>
          <div className="circular-image colomn">
          <img
            src={medical} height={50}
            alt=""
          />
        </div>
        <div className='colomn padding-card'>
          <h3 className="card-title">Medical</h3>
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
       <div className='nowrap'>
          <div className="circular-image colomn">
          <img
            src={design} height={50}
            alt=""
          />
        </div>
        <div className='colomn padding-card'>
          <h3 className="card-title">Design</h3>
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
        {/*<li className="nowrap" id='2'>
          <div>
          <div className="circular-image column">
          <img
            src={commars} height={50}
            alt=""
          />
        </div>
        <div className='colomn padding-card'></div>
            <h3 className="card-title">Management</h3>
            <p>7295 Colleges</p>
            </div>
            <div className="card-content">
              <p>MBA/PGDM</p>
            </div>
            <div className="card-content">
              <p>BBA/BBM</p>
            </div>
            <div className="card-content">
              <p>Executive-MBA</p>
            </div>
  </li>*/}

        {/*<li className="card">
          <div>
          <div className="circular-image">
          <img
            src={commars} height={50}
            alt=""
          />
        </div>
            <h3 className="card-title">Commerce</h3>
            <p>4730 Colleges</p>
            <div className="card-content">
              <p>B.Com</p>
            </div>
            <div className="card-content">
              <p>M.Com</p>
            </div>
          </div>
        </li>*/}

        {/*<li className="card">
          <div>
          <div className="circular-image">
          <img
            src={arts} height={50}
            alt=""
          />
        </div>
            <h3 className="card-title">Arts</h3>
            <p>5317 colleges</p>
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
        </li>*/}

        {/*<li className="card">
          <div>
          <div className="circular-image">
          <img
            src={medical} 
            alt=""
          />
        </div>
            <h3 className="card-title">Medical</h3>
            <p>2150 Colleges</p>
            <div className="card-content">
              <p>MBBS</p>
            </div>
            <div className="card-content">
              <p>PG.Medical</p>
            </div>
          </div>
        </li>*/}
        
        {/*<li className="card">
          <div>
          <div className="circular-image">
          <img
            src={mass} 
            alt=""
          />
        </div>
            <h3 className="card-title">Design</h3>
            <p>1282 Colleges</p>
            <div className="card-content">
              <p>B.Des</p>
            </div>
            <div className="card-content">
              <p>M.Des</p>
            </div>
          </div> 
        </li>*/}

        <li className="card">
            <h3 className="card-title text-center" style={{ textAlign: 'center' }}>See All <FiArrowRightCircle  size={40} /></h3>
          </li>
      </ul>
      </div>
    </div>
    
         {/* Top Collections  */}
         <div className="container">
          <h2 className='text'>Top Collections </h2>
         <div class="card-top-collection container">
         <div class="card-top">
           <img src={cd1} alt="Card Image 1"/>
           <h2>Card 1</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div>
         <div class="card-top">
           <img src={cd2} alt="Card Image 2"/>
           <h2>Card 2</h2>
           <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
         </div>
         <div class="card-top">
           <img src={cd3} alt="Card Image 3"/>
           <h2>Card 3</h2>
           <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
         </div>
         <div class="card-top">
           <img src={cd4} alt="Card Image 4"/>
           <h2>Card 4</h2>
           <p>Excepteur sint occaecat cupidatat non proident.</p>
         </div>
         <div class="card-top">
           <img src={cd5} alt="Card Image 5"/>
           <h2>Card 5</h2>
           <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>
         <div class="card-top">
         <img src={cd6} alt="Card Image 1"/>
         <h2>Card 1</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
       <div class="card-top">
         <img src={cd7} alt="Card Image 2"/>
         <h2>Card 2</h2>
         <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
       </div>
       <div class="card-top">
         <img src={cd8} alt="Card Image 3"/>
         <h2>Card 3</h2>
         <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
       </div>
       <div class="card-top">
         <img src={cd9} alt="Card Image 4"/>
         <h2>Card 4</h2>
         <p>Excepteur sint occaecat cupidatat non proident.</p>
       </div>
       <div class="card-top">
         <img src={cd10} alt="Card Image 5"/>
         <h2>Card 5</h2>
         <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </div>
       <div class="card-top">
       <img src={cd11} alt="Card Image 1"/>
       <h2>Card 1</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </div>
     <div class="card-top">
       <img src={cd12} alt="Card Image 2"/>
       <h2>Card 2</h2>
       <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
     </div>
     <div class="card-top">
       <img src={cd13} alt="Card Image 3"/>
       <h2>Card 3</h2>
       <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
     </div>
     <div class="card-top">
       <img src={cd14} alt="Card Image 4"/>
       <h2>Card 4</h2>
       <p>Excepteur sint occaecat cupidatat non proident.</p>
     </div>
     <div class="card-top">
       <img src={cd15} alt="Card Image 5"/>
       <h2>Card 5</h2>
       <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     </div>
     <div class="card-top">
     <img src="image1.jpg" alt="Card Image 1"/>
     <h2>Card 1</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </div>
   <div class="card-top">
     <img src="image2.jpg" alt="Card Image 2"/>
     <h2>Card 2</h2>
     <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
   </div>
   <div class="card-top">
     <img src="image3.jpg" alt="Card Image 3"/>
     <h2>Card 3</h2>
     <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
   </div>
   <div class="card-top">
     <img src="image4.jpg" alt="Card Image 4"/>
     <h2>Card 4</h2>
     <p>Excepteur sint occaecat cupidatat non proident.</p>
   </div>
   <div class="card-top">
     <img src="image5.jpg" alt="Card Image 5"/>
     <h2>Card 5</h2>
     <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </div>
       </div>
       </div>

    


        {/* Explore Programs  */}


        {/* Latest Notification */}


        {/* Top 10 Colleges */}


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


       {/* FEATURED POSTS Section */}
      <section className='featured-post container'>
       <h3 className='text-center pt-4'>Top Collections for BE/B.Tech</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12 '>
           <div className='card'>
           <img src="https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0=" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Home Storage</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
           </div>
         </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 '>
          <div className='card'>
          <img src="https://media.istockphoto.com/id/685018656/photo/workplace-with-laptop-coffee-and-sketch.jpg?s=612x612&w=0&k=20&c=l9U-B21BJaDGqAVtbezfpg4r7prftk494kjxvgIE9GA=" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Business Storage</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
          </div>
        </div>
         </div>
         <div className='col-lg-4 col-md-4 col-sm-12 '>
         <div className='card'>
         <img src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw=" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Company Storage</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
         </div>
       </div>
        </div>
       </div>
      </section>

        {/* LATEST POSTS  Section*/}
      <section className='featured-post container'>
       <h3 className='text-center text-uppercase pt-4'>LATEST POSTS</h3>
       <div className='row'>
       <div className='col-lg-4 col-md-4 col-sm-12 '>
        <div className='card'>
        <img src="https://media.istockphoto.com/id/683754162/photo/success-concept.jpg?s=612x612&w=0&k=20&c=YWDg7OeSDmCaQJ0tsXOP_ruaYlrKuaQ63P2xeghBSY0=" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Profit Margin</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className='d-grid'>
          <a href="#" className="btn btn-warning">Read More</a>
          </div>
        </div>
      </div>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 '>
         <div className='card'>
         <img src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw=" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Annual Revenue</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
         </div>
       </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 '>
         <div className='card'>
         <img src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw=" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Storage Units</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className='d-grid'>
             <a href="#" className="btn btn-warning">Read More</a>
             </div>
         </div>
       </div>
        </div>
       </div>
       </section>

       {/* View All Posts  Section*/}
       <section className='container-fluid bg-primary bg-gradient mt-4' style={{minHight: "150px"}}>
           <div className='d-flex flex-column justify-content-center align-items-center'>
           <i class="fs-1 text-warning my-3  fa-solid fa-location-dot"></i>
           <h3 className='text-white text-uppercase'>We have wide variety of posts</h3>
           <button className='btn btn-warning my-2 text-dark text-uppercase'>View All Posts</button>
           </div>
       </section>

        {/* OUR PORTFOLIO Section */}
       <section className='featured-post container'>
       <h3 className='text-center text-uppercase py-4'>OUR PORTFOLIO</h3>
       <div className="container">
       <div className="row g-2">
         <div className="col-6">
           <div className="p-1 border bg-danger ">
           <img src="https://media.istockphoto.com/id/977409376/photo/coffee-cup-and-digital-table-dock-smart-keyboard-vase-flower-herbs-stylus-pen-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o3qQRinO_8Y4hO5rJbQeJ9aBCcmcpPMJmTT8pX4ahIw=" className="card-img-top" alt="..."/>
           </div>
         </div>
         <div className="col-6">
           <div className="p-1 border bg-dark">
           <img src="https://media.istockphoto.com/id/891036828/photo/saving-money-for-retirement-plan.jpg?s=612x612&w=0&k=20&c=PtWmG88gLx-XSHyVkg-j_Aw1wPyAIfRNfhPmmWY4384=" className="card-img-top" alt="..."/>
           </div>
         </div>
         <div className="col-6">
           <div className="p-1 border bg-dark">
           <img src="https://media.istockphoto.com/id/1436918941/photo/business-and-investment.jpg?s=612x612&w=0&k=20&c=CM8vaQxaaiIy2tGypKgsdD9Fhx5L-22TyVrcRfFLep8=" className="card-img-top" alt="..."/>
           </div>
         </div>
         <div className="col-6">
           <div className="p-1 border bg-danger">
           <img src="https://media.istockphoto.com/id/1449854429/vector/concept-of-coffee-break-brunch-or-time-lunch-at-work-successful-business-woman-take-a-break.jpg?s=612x612&w=0&k=20&c=GoeNinQU9_Tb1vEzbhIGIVkHLPFI-J_FvXAuy_ryhrA=" className="card-img-top" alt="..."/>
           </div>
         </div>
       </div>
     </div>
       </section>

       {/* Testimonials Section */}
       <section className="testimonials">
       <h3 className='text-center text-uppercase py-4'>TESTIMONIALS</h3>
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
           “If debugging is the process of removing software bugs, then programming must be the process of putting them in”
           </p>
           <p className="font-italic font-weight-normal mb-0">- Sudhanshu Singh</p>
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
           “Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”
           </p>
           <p className="font-italic font-weight-normal mb-0">- Divi Sharma </p>
         </div>
       </div>
     </section>
       </section>


    </div>
  )
}

export default Home