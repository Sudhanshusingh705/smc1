import React, { useState } from "react";
import hero4 from "../assets/hero/hero4.png"; // Import the CSS file for styling
import logo05 from "../assets/logo/logo05.png";


import "../screen/Home.css";
  const NavBarWithImage = () => {
    const [dropdownOpen, setDropdownOpen] = useState();
  
    const handleDropdownClick = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <div>
     <div className="image-container" style={{ position: "relative" }}>
        <img src={hero4} alt="Background Image" />
        <div className="centered-content text-white">
        <h2>Find Over 25000+ Colleges in India</h2>

        <form className="example">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>

        <div className="buttons-container">
        {/* <p className="col">Your recent visite.</p>
        <button className="neet-button" style={{margin: '10px', height: '40px', top: '5px',width: '150px'}}>Neet</button>
        <button className="neet-button" style={{margin: '10px', height: '40px', width: '150px'}}>IIM Bangalore</button>
            <button className="button" style={{margin: '10px', height: '40px', width: '150px'}}>IIT Guwahati</button>*/}
            <button className="ciit-counseling-button">Need Counselling</button>
          </div>
      </div>
      </div>
      <div className="subnavbar justify-content-end" style={{ backgroundColor: "transparent" }}>
  <ul>
   
  
  <div className="dropdown">
  <button className="dropbtn">B.Tech
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
  
    <li>
      <div className="dropdown">
        <button onClick={dropdownOpen} className="dropbtn">
          MBA
          <i className="fa fa-caret-down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <button onClick={dropdownOpen} className="dropbtn">
          MBBS
          <i className="fa fa-caret-down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <button onClick={dropdownOpen} className="dropbtn">
      Design
          <i className="fa fa-caret-down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <button onClick={dropdownOpen} className="dropbtn">
         Law
          <i className="fa fa-caret-down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <button onClick={dropdownOpen} className="dropbtn">
        Science
          <i className="fa fa-caret-down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <button onClick={dropdownOpen} className="dropbtn">
    Study Abroad
         <i className="fa fa-caret-down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <button onClick={dropdownOpen} className="dropbtn">
       All Courses
          <i className="fa fa-caret-down"></i>
        </button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </li>
    {/* Add more subnav items as needed */}
  </ul>
      </div>

      <div className="navbar">
        <ul>
        {/*Logo*/}
        <li>
        <div className="logo-container">
          <img src={logo05} alt="Logo" className="logo-image" />
        </div>
        </li>
        {/*List Items*/}
          <li>
            <a href="#">Top Colleges</a>
          </li>
          <li>
            <a href="#">Top Courses</a>
          </li>
          <li>
            <a href="#">Exams</a>
          </li>
          <li>
            <a href="#">Study Abroad</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Addmission</a>
          </li>
          <div class="dropdown">
            <button class="dropbtn">
              More
              <i class="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <li>
            <a href="#">👤Login</a>
          </li>
          <li>
            <a href="#">📱Downloads</a>
          </li>
        </ul>

       {/* <ul className="nav justify-content-end"> 
  </ul> */}
      </div>
    </div>
    
  );
};

export default NavBarWithImage;
