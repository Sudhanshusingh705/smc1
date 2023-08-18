// import React from "react";
// import "./veterinary.css";


// const Veterinary = () => {
//   return (
//     <div>
//       <div className="container">
//         <div className="collegeListpageBody">
//           <div className="clgListHeroSection">
//             <div className="h1_tooltip">
//               <h1>Top Veterinary Colleges in India 2023</h1>
//             </div>
//             <div className="topContent">
            
//             </div>
//           </div>
//           <aside>
//             <div className="horizontalRectangle">
//               <div
//                 className="appendAdDiv xs-h100"
//                 style={{ background: "#EAEAEA" }}
//               >
//                 <div
//                   className="lazy-ad"
//                   data-slot={0}
//                   id="div-gpt-ad-1614408539431-0"
//                   style={{ height: 90 }}
//                 />{" "}
//               </div>
//             </div>
//           </aside>
//           <div className="row">
//             <div className="col-md-3 lg-pr-0">
//               <section
//                 className="filterSidebarSection"
//                 id="collegeFilterDSection"
//               >
//                 <p className="foundesults row">
//                   Found 43 Colleges
//                   <span id="clearAllClg" className="clearAll">
//                     Clear All
//                   </span>{" "}
//                 </p>
//                 <div className="filterCategory">
//                   <p className="filterCategoryName">Selected Filters</p>
//                   <div id="selectedFilters" className="filterDiv">
//                     <button id="veterinary" data-attr="stream">
//                       Veterinary{" "}
//                       <i className="spriteIcon closeIcon remove-college-filter" />
//                     </button>
//                   </div>
//                 </div>
//                 <form
//                   id="college-filter-form"
//                   action="/veterinary-colleges"
//                   method="post"
//                 >
//                   <input
//                     type="hidden"
//                     name="_csrf-frontend"
//                     defaultValue="e0vw9T1tuPqIZOb3ZWC3mOv2wLxyBgWsz_tRSBi8IQEzLpqUcg7bwrFWh6YDUvTt3oH09St_VfSIljwnc9lDag=="
//                   />
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">State</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-state">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[state]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-state">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="uttar-pradesh"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="uttar-pradesh"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/uttar-pradesh"
//                                 title="Top Veterinary Colleges in Uttar Pradesh 2023"
//                               >
//                                 <label htmlFor="uttar-pradesh">
//                                   Uttar Pradesh (6)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="maharashtra"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="maharashtra"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/maharashtra"
//                                 title="Top Veterinary Colleges in Maharashtra 2023"
//                               >
//                                 <label htmlFor="maharashtra">
//                                   Maharashtra (3)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="rajasthan"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="rajasthan"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/rajasthan"
//                                 title="Top Veterinary Colleges in Rajasthan 2023"
//                               >
//                                 <label htmlFor="rajasthan">Rajasthan (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="andhra-pradesh"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="andhra-pradesh"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/andhra-pradesh"
//                                 title="Top Veterinary Colleges in Andhra Pradesh 2023"
//                               >
//                                 <label htmlFor="andhra-pradesh">
//                                   Andhra Pradesh (3)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="kerala"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="kerala"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/kerala"
//                                 title="Top Veterinary Colleges in Kerala 2023"
//                               >
//                                 <label htmlFor="kerala">Kerala (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="assam"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="assam"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/assam"
//                                 title="Top Veterinary Colleges in Assam 2023"
//                               >
//                                 <label htmlFor="assam">Assam (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="himachal-pradesh"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="himachal-pradesh"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/himachal-pradesh"
//                                 title="Top Veterinary Colleges in Himachal Pradesh 2023"
//                               >
//                                 <label htmlFor="himachal-pradesh">
//                                   Himachal Pradesh (2)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="uttarakhand"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="uttarakhand"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/uttarakhand"
//                                 title="Top Veterinary Colleges in Uttarakhand 2023"
//                               >
//                                 <label htmlFor="uttarakhand">
//                                   Uttarakhand (2)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="karnataka"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="karnataka"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/karnataka"
//                                 title="Top Veterinary Colleges in Karnataka 2023"
//                               >
//                                 <label htmlFor="karnataka">Karnataka (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="tamil-nadu"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="tamil-nadu"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/tamil-nadu"
//                                 title="Top Veterinary Colleges in Tamil Nadu 2023"
//                               >
//                                 <label htmlFor="tamil-nadu">
//                                   Tamil Nadu (2)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="gujarat"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="gujarat"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/gujarat"
//                                 title="Top Veterinary Colleges in Gujarat 2023"
//                               >
//                                 <label htmlFor="gujarat">Gujarat (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="haryana"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="haryana"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/haryana"
//                                 title="Top Veterinary Colleges in Haryana 2023"
//                               >
//                                 <label htmlFor="haryana">Haryana (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="jharkhand"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="jharkhand"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/jharkhand"
//                                 title="Top Veterinary Colleges in Jharkhand 2023"
//                               >
//                                 <label htmlFor="jharkhand">Jharkhand (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bihar"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="bihar"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/bihar"
//                                 title="Top Veterinary Colleges in Bihar 2023"
//                               >
//                                 <label htmlFor="bihar">Bihar (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="madhya-pradesh"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="madhya-pradesh"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/madhya-pradesh"
//                                 title="Top Veterinary Colleges in Madhya Pradesh 2023"
//                               >
//                                 <label htmlFor="madhya-pradesh">
//                                   Madhya Pradesh (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="jammu-and-kashmir"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="jammu-and-kashmir"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/jammu-and-kashmir"
//                                 title="Top Veterinary Colleges in Jammu And Kashmir 2023"
//                               >
//                                 <label htmlFor="jammu-and-kashmir">
//                                   Jammu And Kashmir (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="puducherry"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="puducherry"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/puducherry"
//                                 title="Top Veterinary Colleges in Puducherry 2023"
//                               >
//                                 <label htmlFor="puducherry">
//                                   Puducherry (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="odisha"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="odisha"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/odisha"
//                                 title="Top Veterinary Colleges in Odisha 2023"
//                               >
//                                 <label htmlFor="odisha">Odisha (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="west-bengal"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="west-bengal"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/west-bengal"
//                                 title="Top Veterinary Colleges in West Bengal 2023"
//                               >
//                                 <label htmlFor="west-bengal">
//                                   West Bengal (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="telangana"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="telangana"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/telangana"
//                                 title="Top Veterinary Colleges in Telangana 2023"
//                               >
//                                 <label htmlFor="telangana">Telangana (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="punjab"
//                                 name="CollegeSearch[state][]"
//                                 defaultValue="punjab"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/punjab"
//                                 title="Top Veterinary Colleges in Punjab 2023"
//                               >
//                                 <label htmlFor="punjab">Punjab (1)</label>
//                               </a>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">City</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-city">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[city]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-city">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="ranchi"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="ranchi"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/ranchi"
//                                 title="Top Veterinary Colleges in Ranchi 2023"
//                               >
//                                 <label htmlFor="ranchi">Ranchi (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="tirupati"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="tirupati"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/tirupati"
//                                 title="Top Veterinary Colleges in Tirupati 2023"
//                               >
//                                 <label htmlFor="tirupati">Tirupati (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="nagpur"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="nagpur"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/nagpur"
//                                 title="Top Veterinary Colleges in Nagpur 2023"
//                               >
//                                 <label htmlFor="nagpur">Nagpur (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="palampur"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="palampur"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/palampur"
//                                 title="Top Veterinary Colleges in Palampur 2023"
//                               >
//                                 <label htmlFor="palampur">Palampur (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="wayanad"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="wayanad"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/wayanad"
//                                 title="Top Veterinary Colleges in Wayanad 2023"
//                               >
//                                 <label htmlFor="wayanad">Wayanad (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="patna"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="patna"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/patna"
//                                 title="Top Veterinary Colleges in Patna 2023"
//                               >
//                                 <label htmlFor="patna">Patna (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="jaipur"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="jaipur"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/jaipur"
//                                 title="Top Veterinary Colleges in Jaipur 2023"
//                               >
//                                 <label htmlFor="jaipur">Jaipur (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="vijayawada"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="vijayawada"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/vijayawada"
//                                 title="Top Veterinary Colleges in Vijayawada 2023"
//                               >
//                                 <label htmlFor="vijayawada">
//                                   Vijayawada (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="nainital"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="nainital"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/nainital"
//                                 title="Top Veterinary Colleges in Nainital 2023"
//                               >
//                                 <label htmlFor="nainital">Nainital (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="karnal"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="karnal"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/karnal"
//                                 title="Top Veterinary Colleges in Karnal 2023"
//                               >
//                                 <label htmlFor="karnal">Karnal (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="hisar"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="hisar"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/hisar"
//                                 title="Top Veterinary Colleges in Hisar 2023"
//                               >
//                                 <label htmlFor="hisar">Hisar (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bhubaneswar"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="bhubaneswar"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/bhubaneswar"
//                                 title="Top Veterinary Colleges in Bhubaneswar 2023"
//                               >
//                                 <label htmlFor="bhubaneswar">
//                                   Bhubaneswar (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="ludhiana"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="ludhiana"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/ludhiana"
//                                 title="Top Veterinary Colleges in Ludhiana 2023"
//                               >
//                                 <label htmlFor="ludhiana">Ludhiana (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="namakkal"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="namakkal"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/namakkal"
//                                 title="Top Veterinary Colleges in Namakkal 2023"
//                               >
//                                 <label htmlFor="namakkal">Namakkal (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="allahabad"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="allahabad"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/allahabad"
//                                 title="Top Veterinary Colleges in Allahabad 2023"
//                               >
//                                 <label htmlFor="allahabad">Allahabad (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bikaner"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="bikaner"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/bikaner"
//                                 title="Top Veterinary Colleges in Bikaner 2023"
//                               >
//                                 <label htmlFor="bikaner">Bikaner (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="guwahati"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="guwahati"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/guwahati"
//                                 title="Top Veterinary Colleges in Guwahati 2023"
//                               >
//                                 <label htmlFor="guwahati">Guwahati (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bidar"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="bidar"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/bidar"
//                                 title="Top Veterinary Colleges in Bidar 2023"
//                               >
//                                 <label htmlFor="bidar">Bidar (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="udaipur"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="udaipur"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/udaipur"
//                                 title="Top Veterinary Colleges in Udaipur 2023"
//                               >
//                                 <label htmlFor="udaipur">Udaipur (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bareilly"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="bareilly"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/bareilly"
//                                 title="Top Veterinary Colleges in Bareilly 2023"
//                               >
//                                 <label htmlFor="bareilly">Bareilly (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="jabalpur"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="jabalpur"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/jabalpur"
//                                 title="Top Veterinary Colleges in Jabalpur 2023"
//                               >
//                                 <label htmlFor="jabalpur">Jabalpur (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="meerut"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="meerut"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/meerut"
//                                 title="Top Veterinary Colleges in Meerut 2023"
//                               >
//                                 <label htmlFor="meerut">Meerut (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="navsari"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="navsari"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/navsari"
//                                 title="Top Veterinary Colleges in Navsari 2023"
//                               >
//                                 <label htmlFor="navsari">Navsari (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="shimoga"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="shimoga"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/shimoga"
//                                 title="Top Veterinary Colleges in Shimoga 2023"
//                               >
//                                 <label htmlFor="shimoga">Shimoga (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bhagalpur"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="bhagalpur"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/bhagalpur"
//                                 title="Top Veterinary Colleges in Bhagalpur 2023"
//                               >
//                                 <label htmlFor="bhagalpur">Bhagalpur (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="jorhat"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="jorhat"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/jorhat"
//                                 title="Top Veterinary Colleges in Jorhat 2023"
//                               >
//                                 <label htmlFor="jorhat">Jorhat (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="chennai"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="chennai"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/chennai"
//                                 title="Top Veterinary Colleges in Chennai 2023"
//                               >
//                                 <label htmlFor="chennai">Chennai (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="varanasi"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="varanasi"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/varanasi"
//                                 title="Top Veterinary Colleges in Varanasi 2023"
//                               >
//                                 <label htmlFor="varanasi">Varanasi (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="banaskantha"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="banaskantha"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/banaskantha"
//                                 title="Top Veterinary Colleges in Banaskantha 2023"
//                               >
//                                 <label htmlFor="banaskantha">
//                                   Banaskantha (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="hyderabad"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="hyderabad"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/hyderabad"
//                                 title="Top Veterinary Colleges in Hyderabad 2023"
//                               >
//                                 <label htmlFor="hyderabad">Hyderabad (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="pantnagar"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="pantnagar"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/pantnagar"
//                                 title="Top Veterinary Colleges in Pantnagar 2023"
//                               >
//                                 <label htmlFor="pantnagar">Pantnagar (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="pondicherry"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="pondicherry"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/pondicherry"
//                                 title="Top Veterinary Colleges in Pondicherry 2023"
//                               >
//                                 <label htmlFor="pondicherry">
//                                   Pondicherry (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="kolkata"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="kolkata"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/kolkata"
//                                 title="Top Veterinary Colleges in Kolkata 2023"
//                               >
//                                 <label htmlFor="kolkata">Kolkata (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="faizabad"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="faizabad"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/faizabad"
//                                 title="Top Veterinary Colleges in Faizabad 2023"
//                               >
//                                 <label htmlFor="faizabad">Faizabad (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="satara"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="satara"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/satara"
//                                 title="Top Veterinary Colleges in Satara 2023"
//                               >
//                                 <label htmlFor="satara">Satara (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="srinagar"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="srinagar"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/srinagar"
//                                 title="Top Veterinary Colleges in Srinagar 2023"
//                               >
//                                 <label htmlFor="srinagar">Srinagar (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mathura"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="mathura"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/mathura"
//                                 title="Top Veterinary Colleges in Mathura 2023"
//                               >
//                                 <label htmlFor="mathura">Mathura (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="thrissur"
//                                 name="CollegeSearch[city][]"
//                                 defaultValue="thrissur"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/veterinary-colleges/thrissur"
//                                 title="Top Veterinary Colleges in Thrissur 2023"
//                               >
//                                 <label htmlFor="thrissur">Thrissur (1)</label>
//                               </a>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Streams</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-stream">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[stream]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-stream">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="management"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="management"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/management-colleges"
//                                 title="Top Management Colleges in India 2023"
//                               >
//                                 <label htmlFor="management">
//                                   Management (4486)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="science"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="science"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/science-colleges"
//                                 title="Top Science Colleges in India 2023"
//                               >
//                                 <label htmlFor="science">Science (3706)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="engineering"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="engineering"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/engineering-colleges"
//                                 title="Top Engineering Colleges in India 2023"
//                               >
//                                 <label htmlFor="engineering">
//                                   Engineering (3662)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="arts"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="arts"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/arts-colleges"
//                                 title="Top Arts Colleges in India 2023"
//                               >
//                                 <label htmlFor="arts">Arts (3599)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="computer"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="computer"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/computer-colleges"
//                                 title="Top Computer Colleges in India 2023"
//                               >
//                                 <label htmlFor="computer">
//                                   Computer (2806)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="commerce"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="commerce"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/commerce-colleges"
//                                 title="Top Commerce Colleges in India 2023"
//                               >
//                                 <label htmlFor="commerce">
//                                   Commerce (2688)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="education"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="education"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/education-colleges"
//                                 title="Top Education Colleges in India 2023"
//                               >
//                                 <label htmlFor="education">
//                                   Education (1925)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="pharmacy"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="pharmacy"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/pharmacy-colleges"
//                                 title="Top Pharmacy Colleges in India 2023"
//                               >
//                                 <label htmlFor="pharmacy">Pharmacy (723)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="medical"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="medical"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/medical-colleges"
//                                 title="Top Medical Colleges in India 2023"
//                               >
//                                 <label htmlFor="medical">Medical (659)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="law"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="law"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/law-colleges"
//                                 title="Top Law Colleges in India 2023"
//                               >
//                                 <label htmlFor="law">Law (616)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="hotel-management"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="hotel-management"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/hotel-management-colleges"
//                                 title="Top Hotel Management Colleges in India 2023"
//                               >
//                                 <label htmlFor="hotel-management">
//                                   Hotel Management (437)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mass-communication"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="mass-communication"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mass-communication-colleges"
//                                 title="Top Mass Communication Colleges in India 2023"
//                               >
//                                 <label htmlFor="mass-communication">
//                                   Mass Communication (372)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="architecture"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="architecture"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/architecture-colleges"
//                                 title="Top Architecture Colleges in India 2023"
//                               >
//                                 <label htmlFor="architecture">
//                                   Architecture (346)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="design"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="design"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/design-colleges"
//                                 title="Top Design Colleges in India 2023"
//                               >
//                                 <label htmlFor="design">Design (332)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="paramedical"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="paramedical"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/paramedical-colleges"
//                                 title="Top Paramedical Colleges in India 2023"
//                               >
//                                 <label htmlFor="paramedical">
//                                   Paramedical (277)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="dental"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="dental"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/dental-colleges"
//                                 title="Top Dental Colleges in India 2023"
//                               >
//                                 <label htmlFor="dental">Dental (234)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="vocational-courses"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="vocational-courses"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/vocational-courses-colleges"
//                                 title="Top Vocational Courses Colleges in India 2023"
//                               >
//                                 <label htmlFor="vocational-courses">
//                                   Vocational Courses (158)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="veterinary"
//                                 name="CollegeSearch[stream][]"
//                                 defaultValue="veterinary"
//                                 defaultChecked=""
//                               />
//                               <a
//                                 href="javascript:;"
//                                 title="Top Veterinary Colleges in India 2023"
//                               >
//                                 <label htmlFor="veterinary">
//                                   Veterinary (43)
//                                 </label>
//                               </a>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Courses</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-course">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[course]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-course">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bvsc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-colleges"
//                                 title="Top B.V.Sc Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc">B.V.Sc (38)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mvsc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-colleges"
//                                 title="Top M.V.Sc Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc">M.V.Sc (29)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mfsc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mfsc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mfsc-colleges"
//                                 title="Top M.F.Sc Colleges in India 2023"
//                               >
//                                 <label htmlFor="mfsc">M.F.Sc (20)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="msc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="msc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/msc-colleges"
//                                 title="Top MSc Colleges in India 2023"
//                               >
//                                 <label htmlFor="msc">MSc (20)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="btech"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="btech"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/btech-colleges"
//                                 title="Top BTech Colleges in India 2023"
//                               >
//                                 <label htmlFor="btech">BTech (19)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bsc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bsc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bsc-colleges"
//                                 title="Top BSc Colleges in India 2023"
//                               >
//                                 <label htmlFor="bsc">BSc (17)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mtech"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mtech"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mtech-colleges"
//                                 title="Top MTech Colleges in India 2023"
//                               >
//                                 <label htmlFor="mtech">MTech (12)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bfsc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bfsc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bfsc-colleges"
//                                 title="Top B.F.Sc Colleges in India 2023"
//                               >
//                                 <label htmlFor="bfsc">B.F.Sc (9)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mba"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mba"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mba-colleges"
//                                 title="Top MBA Colleges in India 2023"
//                               >
//                                 <label htmlFor="mba">MBA (9)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="pgd-postgraduate-diploma"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="pgd-postgraduate-diploma"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/pgd-postgraduate-diploma-colleges"
//                                 title="Top PGD Colleges in India 2023"
//                               >
//                                 <label htmlFor="pgd-postgraduate-diploma">
//                                   PGD (5)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mca"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mca"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mca-colleges"
//                                 title="Top MCA Colleges in India 2023"
//                               >
//                                 <label htmlFor="mca">MCA (4)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="ma"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="ma"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/ma-colleges"
//                                 title="Top MA Colleges in India 2023"
//                               >
//                                 <label htmlFor="ma">MA (4)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mphil"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mphil"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mphil-colleges"
//                                 title="Top M.Phil Colleges in India 2023"
//                               >
//                                 <label htmlFor="mphil">M.Phil (4)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mcom"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mcom"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mcom-colleges"
//                                 title="Top M.Com Colleges in India 2023"
//                               >
//                                 <label htmlFor="mcom">M.Com (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="ba"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="ba"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/ba-colleges"
//                                 title="Top BA Colleges in India 2023"
//                               >
//                                 <label htmlFor="ba">BA (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bpharm"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bpharm"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bpharm-colleges"
//                                 title="Top B Pharmacy Colleges in India 2023"
//                               >
//                                 <label htmlFor="bpharm">B Pharmacy (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bjmc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bjmc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bjmc-colleges"
//                                 title="Top BJMC Colleges in India 2023"
//                               >
//                                 <label htmlFor="bjmc">BJMC (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bba"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bba"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bba-colleges"
//                                 title="Top BBA Colleges in India 2023"
//                               >
//                                 <label htmlFor="bba">BBA (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bped"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bped"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bped-colleges"
//                                 title="Top B.P.Ed Colleges in India 2023"
//                               >
//                                 <label htmlFor="bped">B.P.Ed (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bcom"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bcom"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bcom-colleges"
//                                 title="Top BCom Colleges in India 2023"
//                               >
//                                 <label htmlFor="bcom">BCom (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bed"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bed"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bed-colleges"
//                                 title="Top B.Ed Colleges in India 2023"
//                               >
//                                 <label htmlFor="bed">B.Ed (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bfa"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bfa"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bfa-colleges"
//                                 title="Top BFA Colleges in India 2023"
//                               >
//                                 <label htmlFor="bfa">BFA (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mpharm"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mpharm"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mpharm-colleges"
//                                 title="Top M.Pharm Colleges in India 2023"
//                               >
//                                 <label htmlFor="mpharm">M.Pharm (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="med"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="med"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/med-colleges"
//                                 title="Top M.Ed Colleges in India 2023"
//                               >
//                                 <label htmlFor="med">M.Ed (3)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bmlt"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bmlt"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bmlt-colleges"
//                                 title="Top BMLT Colleges in India 2023"
//                               >
//                                 <label htmlFor="bmlt">BMLT (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="md"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="md"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/md-colleges"
//                                 title="Top MD Colleges in India 2023"
//                               >
//                                 <label htmlFor="md">MD (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mfa"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mfa"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mfa-colleges"
//                                 title="Top MFA Colleges in India 2023"
//                               >
//                                 <label htmlFor="mfa">MFA (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mjmc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mjmc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mjmc-colleges"
//                                 title="Top MJMC Colleges in India 2023"
//                               >
//                                 <label htmlFor="mjmc">MJMC (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bhm"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bhm"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bhm-colleges"
//                                 title="Top BHM Colleges in India 2023"
//                               >
//                                 <label htmlFor="bhm">BHM (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="blibisc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="blibisc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/blibisc-colleges"
//                                 title="Top B.Lib.I.Sc Colleges in India 2023"
//                               >
//                                 <label htmlFor="blibisc">B.Lib.I.Sc (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mbbs"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mbbs"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mbbs-colleges"
//                                 title="Top MBBS Colleges in India 2023"
//                               >
//                                 <label htmlFor="mbbs">MBBS (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="llb"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="llb"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/llb-colleges"
//                                 title="Top LLB Colleges in India 2023"
//                               >
//                                 <label htmlFor="llb">LLB (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="ms"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="ms"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/ms-colleges"
//                                 title="Top M.S Colleges in India 2023"
//                               >
//                                 <label htmlFor="ms">M.S (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bca"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bca"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bca-colleges"
//                                 title="Top BCA Colleges in India 2023"
//                               >
//                                 <label htmlFor="bca">BCA (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="llm"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="llm"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/llm-colleges"
//                                 title="Top LLM Colleges in India 2023"
//                               >
//                                 <label htmlFor="llm">LLM (2)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mch"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mch"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mch-colleges"
//                                 title="Top Master of Chirurgiae [M.Ch] Colleges in India 2023"
//                               >
//                                 <label htmlFor="mch">
//                                   Master of Chirurgiae [M.Ch] (2)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="dlitt"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="dlitt"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/dlitt-colleges"
//                                 title="Top D.Litt Colleges in India 2023"
//                               >
//                                 <label htmlFor="dlitt">D.Litt (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mlibisc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mlibisc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mlibisc-colleges"
//                                 title="Top M.Lib.I.Sc Colleges in India 2023"
//                               >
//                                 <label htmlFor="mlibisc">M.Lib.I.Sc (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bnys"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bnys"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bnys-colleges"
//                                 title="Top BNYS Colleges in India 2023"
//                               >
//                                 <label htmlFor="bnys">BNYS (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bbs"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bbs"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bbs-colleges"
//                                 title="Top BBS Colleges in India 2023"
//                               >
//                                 <label htmlFor="bbs">BBS (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bth"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bth"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bth-colleges"
//                                 title="Top B.Th Colleges in India 2023"
//                               >
//                                 <label htmlFor="bth">B.Th (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvoc"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bvoc"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvoc-colleges"
//                                 title="Top B.Voc Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvoc">B.Voc (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mph"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mph"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mph-colleges"
//                                 title="Top MPH Colleges in India 2023"
//                               >
//                                 <label htmlFor="mph">MPH (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bdes"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bdes"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bdes-colleges"
//                                 title="Top B.Des Colleges in India 2023"
//                               >
//                                 <label htmlFor="bdes">B.Des (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mped"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mped"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mped-colleges"
//                                 title="Top M.P.Ed Colleges in India 2023"
//                               >
//                                 <label htmlFor="mped">M.P.Ed (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mfm"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mfm"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mfm-colleges"
//                                 title="Top MFM Colleges in India 2023"
//                               >
//                                 <label htmlFor="mfm">MFM (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mtm"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mtm"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mtm-colleges"
//                                 title="Top MTM Colleges in India 2023"
//                               >
//                                 <label htmlFor="mtm">MTM (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bams"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bams"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bams-colleges"
//                                 title="Top BAMS Colleges in India 2023"
//                               >
//                                 <label htmlFor="bams">BAMS (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mpa"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mpa"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mpa-colleges"
//                                 title="Top MPA Colleges in India 2023"
//                               >
//                                 <label htmlFor="mpa">MPA (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bpt"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bpt"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bpt-colleges"
//                                 title="Top BPT Colleges in India 2023"
//                               >
//                                 <label htmlFor="bpt">BPT (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mds"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mds"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mds-colleges"
//                                 title="Top MDS Colleges in India 2023"
//                               >
//                                 <label htmlFor="mds">MDS (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mth"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="mth"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mth-colleges"
//                                 title="Top M.Th Colleges in India 2023"
//                               >
//                                 <label htmlFor="mth">M.Th (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bds"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bds"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bds-colleges"
//                                 title="Top BDS Colleges in India 2023"
//                               >
//                                 <label htmlFor="bds">BDS (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bachelor-of-performing-arts"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="bachelor-of-performing-arts"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bachelor-of-performing-arts-colleges"
//                                 title="Top Bachelor of Performing Arts Colleges in India 2023"
//                               >
//                                 <label htmlFor="bachelor-of-performing-arts">
//                                   Bachelor of Performing Arts (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="msw"
//                                 name="CollegeSearch[course][]"
//                                 defaultValue="msw"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/msw-colleges"
//                                 title="Top MSW Colleges in India 2023"
//                               >
//                                 <label htmlFor="msw">MSW (1)</label>
//                               </a>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Specialization</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-specialization">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[specialization]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-specialization">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-biochemistry"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-biochemistry"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-biochemistry-colleges"
//                                 title="Top M.V.Sc Biochemistry Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-biochemistry">
//                                   M.V.Sc Biochemistry (17)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-genetics"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-genetics"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-genetics-colleges"
//                                 title="Top M.V.Sc Genetics Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-genetics">
//                                   M.V.Sc Genetics (15)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-pathology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-pathology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-pathology-colleges"
//                                 title="Top M.V.Sc Pathology Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-pathology">
//                                   M.V.Sc Pathology (14)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-microbiology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-microbiology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-microbiology-colleges"
//                                 title="Top M.V.Sc Microbiology Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-microbiology">
//                                   M.V.Sc Microbiology (14)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-pharmacology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-pharmacology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-pharmacology-colleges"
//                                 title="Top M.V.Sc Pharmacology Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-pharmacology">
//                                   M.V.Sc Pharmacology (12)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-anatomy"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-anatomy"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-anatomy-colleges"
//                                 title="Top M.V.Sc Anatomy Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-anatomy">
//                                   M.V.Sc Anatomy (10)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-physiology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-physiology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-physiology-colleges"
//                                 title="Top M.V.Sc Physiology Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-physiology">
//                                   M.V.Sc Physiology (10)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-microbiology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-microbiology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-microbiology-colleges"
//                                 title="Top B.V.Sc Microbiology Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-microbiology">
//                                   B.V.Sc Microbiology (6)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-pathology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-pathology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-pathology-colleges"
//                                 title="Top B.V.Sc Pathology Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-pathology">
//                                   B.V.Sc Pathology (6)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-anatomy"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-anatomy"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-anatomy-colleges"
//                                 title="Top B.V.Sc Anatomy Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-anatomy">
//                                   B.V.Sc Anatomy (5)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-genetics"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-genetics"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-genetics-colleges"
//                                 title="Top B.V.Sc Genetics Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-genetics">
//                                   B.V.Sc Genetics (5)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-pharmacology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-pharmacology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-pharmacology-colleges"
//                                 title="Top B.V.Sc Pharmacology Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-pharmacology">
//                                   B.V.Sc Pharmacology (4)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-biotechnology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-biotechnology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-biotechnology-colleges"
//                                 title="Top M.V.Sc Biotechnology Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-biotechnology">
//                                   M.V.Sc Biotechnology (4)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-physiology"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-physiology"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-physiology-colleges"
//                                 title="Top B.V.Sc Physiology Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-physiology">
//                                   B.V.Sc Physiology (3)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="mvsc-economics"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="mvsc-economics"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/mvsc-economics-colleges"
//                                 title="Top M.V.Sc Economics Colleges in India 2023"
//                               >
//                                 <label htmlFor="mvsc-economics">
//                                   M.V.Sc Economics (2)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-aquaculture"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-aquaculture"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-aquaculture-colleges"
//                                 title="Top B.V.Sc Aquaculture Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-aquaculture">
//                                   B.V.Sc Aquaculture (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-chemistry"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-chemistry"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-chemistry-colleges"
//                                 title="Top B.V.Sc Chemistry Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-chemistry">
//                                   B.V.Sc Chemistry (1)
//                                 </label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bvsc-biochemistry"
//                                 name="CollegeSearch[specialization][]"
//                                 defaultValue="bvsc-biochemistry"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/bvsc-biochemistry-colleges"
//                                 title="Top B.V.Sc Biochemistry Colleges in India 2023"
//                               >
//                                 <label htmlFor="bvsc-biochemistry">
//                                   B.V.Sc Biochemistry (1)
//                                 </label>
//                               </a>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Program Mode</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-mode">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[mode]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-mode">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="offline"
//                                 name="CollegeSearch[mode][]"
//                                 defaultValue="offline"
//                               />
//                               <label htmlFor="offline">Offline (43)</label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="online"
//                                 name="CollegeSearch[mode][]"
//                                 defaultValue="online"
//                               />
//                               <label htmlFor="online">Online (1)</label>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Ownership</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-ownership">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[ownership]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-ownership">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="public"
//                                 name="CollegeSearch[ownership][]"
//                                 defaultValue="public"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/public-colleges"
//                                 title="Top Public Colleges in India 2023"
//                               >
//                                 <label htmlFor="public">Public (28)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="private"
//                                 name="CollegeSearch[ownership][]"
//                                 defaultValue="private"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/private-colleges"
//                                 title="Top Private Colleges in India 2023"
//                               >
//                                 <label htmlFor="private">Private (11)</label>
//                               </a>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Exams Accepted</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-exam">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[exam]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-exam">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="aipvt"
//                                 name="CollegeSearch[exam][]"
//                                 defaultValue="aipvt"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/colleges-accepting-aipvt-score-in-india"
//                                 title="Colleges Accepting AIPVT Score in India 2023"
//                               >
//                                 <label htmlFor="aipvt">AIPVT (4)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="cat"
//                                 name="CollegeSearch[exam][]"
//                                 defaultValue="cat"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/colleges-accepting-cat-score-in-india"
//                                 title="Colleges Accepting CAT Score in India 2023"
//                               >
//                                 <label htmlFor="cat">CAT (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="cucet"
//                                 name="CollegeSearch[exam][]"
//                                 defaultValue="cucet"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/colleges-accepting-cucet-score-in-india"
//                                 title="Colleges Accepting CUET Score in India 2023"
//                               >
//                                 <label htmlFor="cucet">CUET (1)</label>
//                               </a>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="neet"
//                                 name="CollegeSearch[exam][]"
//                                 defaultValue="neet"
//                               />
//                               <a
//                                 href="https://www.getmyuni.com/colleges-accepting-neet-score-in-india"
//                                 title="Colleges Accepting NEET Score in India 2023"
//                               >
//                                 <label htmlFor="neet">NEET (1)</label>
//                               </a>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Course Type</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-course_type">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[course_type]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-course_type">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="bachelors"
//                                 name="CollegeSearch[course_type][]"
//                                 defaultValue="bachelors"
//                               />
//                               <label htmlFor="bachelors">Bachelors (43)</label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="masters"
//                                 name="CollegeSearch[course_type][]"
//                                 defaultValue="masters"
//                               />
//                               <label htmlFor="masters">Masters (39)</label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="diploma"
//                                 name="CollegeSearch[course_type][]"
//                                 defaultValue="diploma"
//                               />
//                               <label htmlFor="diploma">Diploma (5)</label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="postgraduate-diploma"
//                                 name="CollegeSearch[course_type][]"
//                                 defaultValue="postgraduate-diploma"
//                               />
//                               <label htmlFor="postgraduate-diploma">
//                                 Postgraduate Diploma (5)
//                               </label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="doctorate"
//                                 name="CollegeSearch[course_type][]"
//                                 defaultValue="doctorate"
//                               />
//                               <label htmlFor="doctorate">Doctorate (2)</label>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Affiliated By</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-affiliated_by">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[affiliated_by]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-affiliated_by">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur"
//                                 name="CollegeSearch[affiliated_by][]"
//                                 defaultValue="maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur"
//                               />
//                               <label htmlFor="maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur">
//                                 Maharashtra Animal and Fishery Sciences
//                                 University (2)
//                               </label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="pondicherry-university-puducherry"
//                                 name="CollegeSearch[affiliated_by][]"
//                                 defaultValue="pondicherry-university-puducherry"
//                               />
//                               <label htmlFor="pondicherry-university-puducherry">
//                                 Pondicherry University, Puducherry (1)
//                               </label>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Approvals</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-approvals">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[approvals]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-approvals">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="aicte"
//                                 name="CollegeSearch[approvals][]"
//                                 defaultValue="aicte"
//                               />
//                               <label htmlFor="aicte">AICTE (5)</label>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="filterCategory">
//                     <p className="filterCategoryName">Total Fees</p>
//                     <div className="filterDiv">
//                       <div className="filterSearch">
//                         <input type="text" placeholder="Search options" />
//                         <div className="form-group field-collegesearch-fees">
//                           <input
//                             type="hidden"
//                             name="CollegeSearch[fees]"
//                             defaultValue=""
//                           />
//                           <ul id="collegesearch-fees">
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="0-100000"
//                                 name="CollegeSearch[fees][]"
//                                 defaultValue="0-100000"
//                               />
//                               <label htmlFor="0-100000">
//                                 Less than 1 Lakh (20)
//                               </label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="100001-200000"
//                                 name="CollegeSearch[fees][]"
//                                 defaultValue="100001-200000"
//                               />
//                               <label htmlFor="100001-200000">
//                                 1 to 2 Lakhs (5)
//                               </label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="200001-300000"
//                                 name="CollegeSearch[fees][]"
//                                 defaultValue="200001-300000"
//                               />
//                               <label htmlFor="200001-300000">
//                                 2 to 3 Lakhs (3)
//                               </label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id={500001}
//                                 name="CollegeSearch[fees][]"
//                                 defaultValue={500001}
//                               />
//                               <label htmlFor={500001}>
//                                 More than 5 Lakhs (3)
//                               </label>
//                             </li>
//                             <li>
//                               <input
//                                 type="checkbox"
//                                 id="300001-500000"
//                                 name="CollegeSearch[fees][]"
//                                 defaultValue="300001-500000"
//                               />
//                               <label htmlFor="300001-500000">
//                                 3 to 5 Lakhs (2)
//                               </label>
//                             </li>
//                           </ul>
//                           <div className="help-block" />
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </section>
//               <aside>
//                 <aside className="stickyAds">
//                   <div
//                     className="sidebarAds desktopOnly"
//                     style={{ marginTop: 0 }}
//                   >
//                     <div
//                       className="appendAdDiv"
//                       style={{ background: "#EAEAEA" }}
//                     >
//                       <div
//                         className="lazy-ad"
//                         data-slot={1}
//                         id="div-gpt-ad-1614408539431-1"
//                         style={{ height: 90 }}
//                       />{" "}
//                     </div>
//                     <div
//                       className="appendAdDiv"
//                       style={{ background: "#EAEAEA" }}
//                     >
//                       <div
//                         className="lazy-ad"
//                         data-slot={2}
//                         id="div-gpt-ad-1614408539431-2"
//                         style={{ height: 90 }}
//                       />{" "}
//                     </div>
//                   </div>
//                 </aside>{" "}
//               </aside>
//             </div>
//             <div className="col-md-9">
//               <div className="sortBySection row">
//                 <div className=""></div>
//                 <div className="sortByList">
//                   <select id="college-sort" name="college-sort">
//                     <option value="position">Popularity</option>
//                     <option value="rank" selected="">
//                       Ranking
//                     </option>
//                     <option value="highest_fee">Highest Fees</option>
//                     <option value="lowest_fee">Lowest Fees</option>
//                   </select>{" "}
//                 </div>
//               </div>
//               <div className="searchedcollegeList">
//                 <div className="row" id="sponsor_list_slot1">
//                   {" "}
//                   <div className="collegeSponsoredInfoCards countCards">
//                     <div className="sponsorCard">
//                       <div className="sponsorContainer">
//                         <p className="sponsorLabel">
//                           <span>Sponsored</span>
//                         </p>
//                         <div className="row sponsoredRow">
//                           <div className="collegeLogo">
//                             <img
//                               className="lazyload"
//                               loading="lazy"
//                               src="https://media.getmyuni.com/azure/college-image/small/university-of-petroleum-and-energy-studies-upes-dehradun.jpg"
//                               onclick="gmu.url.goto('https://www.getmyuni.com/college/university-of-petroleum-and-energy-studies-upes-dehradun')"
//                               alt=""
//                             />
//                           </div>
//                           <div className="sponsoredBanner">
//                             <h3 className="collegeName">
//                               <a
//                                 href="https://www.getmyuni.com/college/university-of-petroleum-and-energy-studies-upes-dehradun"
//                                 title="UPES"
//                               >
//                                 UPES
//                               </a>
//                             </h3>
//                             <p className="collegeLocation">
//                               <i className="spriteIcon locationIconBlue" />
//                               Dehradun, Uttarakhand{" "}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="collegeDetails">
//                           <div className="collegeRating">
//                             3.7 <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon half-star" />
//                             <i className="spriteIcon empty-star" />{" "}
//                             <span className="spriteIcon tooltipIcon tooltipAngle">
//                               <span className="tooltipIconText">
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Academics &amp; Faculty
//                                   </span>
//                                   <span className="col-md-6 col-5">3.8</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Fees &amp; Scholarships
//                                   </span>
//                                   <span className="col-md-6 col-5">3.1</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     College Infrastructure &amp; Hostel
//                                     Facilities
//                                   </span>
//                                   <span className="col-md-6 col-5">4</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Placements &amp; Internships
//                                   </span>
//                                   <span className="col-md-6 col-5">3.8</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Clubs &amp; Associations
//                                   </span>
//                                   <span className="col-md-6 col-5">3.8</span>
//                                 </div>
//                               </span>
//                             </span>
//                             (
//                             <a href="/college/university-of-petroleum-and-energy-studies-upes-dehradun/reviews">
//                               147
//                             </a>
//                             )
//                           </div>
//                           <div className="row collegeKeyInfo">
//                             <div className="keyInfo">
//                               <p>Average Fees</p>
//                               <p>₹7.62 Lakh</p>
//                             </div>
//                             <div className="keyInfo">
//                               <p>No. of Courses Offered</p>
//                               <p>
//                                 {" "}
//                                 <a
//                                   title="UPES Courses & Fee Details"
//                                   href=" https://www.getmyuni.com/college/university-of-petroleum-and-energy-studies-upes-dehradun-courses-fees"
//                                 >
//                                   17 Courses
//                                 </a>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="clgInfoCardfooter">
//                         <button
//                           type="button"
//                           className="textRed getLeadForm brochureRed collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                           data-platform="web"
//                           data-entity="all-colleges"
//                           data-entityid={645}
//                           data-interestedlocation={790}
//                           data-ctalocation="colleges_listing_university-of-petroleum-and-energy-studies-upes-dehradun_web_card_left_cta"
//                           data-ctatext="Apply Now"
//                           data-leadformtitle="Sign-up to Apply"
//                           data-subheadingtext="UPES, Dehradun"
//                           data-image="https://media.getmyuni.com/azure/college-image/small/university-of-petroleum-and-energy-studies-upes-dehradun.jpg"
//                         >
//                           Apply Now
//                         </button>{" "}
//                         <button
//                           type="button"
//                           className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                           data-platform="web"
//                           data-entity="all-colleges"
//                           data-entityid={645}
//                           data-interestedlocation={790}
//                           data-ctalocation="colleges_listing_university-of-petroleum-and-energy-studies-upes-dehradun_web_card_right_cta"
//                           data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                           data-leadformtitle="Sign-up to Download"
//                           data-subheadingtext="UPES, Dehradun"
//                           data-image="https://media.getmyuni.com/azure/college-image/small/university-of-petroleum-and-energy-studies-upes-dehradun.jpg"
//                         >
//                           <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                           Brochure
//                         </button>{" "}
//                       </div>
//                     </div>
//                     <div className="sponsorCard">
//                       <div className="sponsorContainer">
//                         <p className="sponsorLabel">
//                           <span>Sponsored</span>
//                         </p>
//                         <div className="row sponsoredRow">
//                           <div className="collegeLogo">
//                             <img
//                               className="lazyload"
//                               loading="lazy"
//                               src="https://media.getmyuni.com/azure/college-image/small/lovely-professional-university-lpu-jalandhar.jpg"
//                               onclick="gmu.url.goto('https://www.getmyuni.com/college/lovely-professional-university-lpu-jalandhar')"
//                               alt=""
//                             />
//                           </div>
//                           <div className="sponsoredBanner">
//                             <h3 className="collegeName">
//                               <a
//                                 href="https://www.getmyuni.com/college/lovely-professional-university-lpu-jalandhar"
//                                 title="LPU"
//                               >
//                                 LPU
//                               </a>
//                             </h3>
//                             <p className="collegeLocation">
//                               <i className="spriteIcon locationIconBlue" />
//                               Jalandhar, Punjab{" "}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="collegeDetails">
//                           <div className="collegeRating">
//                             3.9 <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon half-star" />
//                             <i className="spriteIcon empty-star" />{" "}
//                             <span className="spriteIcon tooltipIcon tooltipAngle">
//                               <span className="tooltipIconText">
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Academics &amp; Faculty
//                                   </span>
//                                   <span className="col-md-6 col-5">3.9</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     College Infrastructure &amp; Hostel
//                                     Facilities
//                                   </span>
//                                   <span className="col-md-6 col-5">4.1</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Placements &amp; Internships
//                                   </span>
//                                   <span className="col-md-6 col-5">3.7</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Fees &amp; Scholarships
//                                   </span>
//                                   <span className="col-md-6 col-5">3.7</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Clubs &amp; Associations
//                                   </span>
//                                   <span className="col-md-6 col-5">4.1</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Entrance Exams &amp; Admissions
//                                   </span>
//                                   <span className="col-md-6 col-5">0</span>
//                                 </div>
//                               </span>
//                             </span>
//                             (
//                             <a href="/college/lovely-professional-university-lpu-jalandhar/reviews">
//                               508
//                             </a>
//                             )
//                           </div>
//                           <div className="row collegeKeyInfo">
//                             <div className="keyInfo">
//                               <p>Average Fees</p>
//                               <p>₹4.86 Lakh</p>
//                             </div>
//                             <div className="keyInfo">
//                               <p>No. of Courses Offered</p>
//                               <p>
//                                 {" "}
//                                 <a
//                                   title="LPU Courses & Fee Details"
//                                   href=" https://www.getmyuni.com/college/lovely-professional-university-lpu-jalandhar-courses-fees"
//                                 >
//                                   36 Courses
//                                 </a>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="clgInfoCardfooter">
//                         <button
//                           type="button"
//                           className="textRed getLeadForm brochureRed collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                           data-platform="web"
//                           data-entity="all-colleges"
//                           data-entityid={520}
//                           data-interestedlocation={552}
//                           data-ctalocation="colleges_listing_lovely-professional-university-lpu-jalandhar_web_card_left_cta"
//                           data-ctatext="Apply Now"
//                           data-leadformtitle="Sign-up to Apply"
//                           data-subheadingtext="LPU, Jalandhar"
//                           data-image="https://media.getmyuni.com/azure/college-image/small/lovely-professional-university-lpu-jalandhar.jpg"
//                         >
//                           Apply Now
//                         </button>{" "}
//                         <button
//                           type="button"
//                           className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                           data-platform="web"
//                           data-entity="all-colleges"
//                           data-entityid={520}
//                           data-interestedlocation={552}
//                           data-ctalocation="colleges_listing_lovely-professional-university-lpu-jalandhar_web_card_right_cta"
//                           data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                           data-leadformtitle="Sign-up to Download"
//                           data-subheadingtext="LPU, Jalandhar"
//                           data-image="https://media.getmyuni.com/azure/college-image/small/lovely-professional-university-lpu-jalandhar.jpg"
//                         >
//                           <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                           Brochure
//                         </button>{" "}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="collegeSponsoredInfoCards countCards">
//                     <div className="sponsorCard">
//                       <div className="sponsorContainer">
//                         <p className="sponsorLabel">
//                           <span>Sponsored</span>
//                         </p>
//                         <div className="row sponsoredRow">
//                           <div className="collegeLogo">
//                             <img
//                               className="lazyload"
//                               loading="lazy"
//                               src="https://media.getmyuni.com/azure/college-image/small/parul-university-gujarat.webp"
//                               onclick="gmu.url.goto('https://www.getmyuni.com/college/parul-university-gujarat')"
//                               alt=""
//                             />
//                           </div>
//                           <div className="sponsoredBanner">
//                             <h3 className="collegeName">
//                               <a
//                                 href="https://www.getmyuni.com/college/parul-university-gujarat"
//                                 title="Parul University"
//                               >
//                                 Parul University
//                               </a>
//                             </h3>
//                             <p className="collegeLocation">
//                               <i className="spriteIcon locationIconBlue" />
//                               Vadodara, Gujarat{" "}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="collegeDetails">
//                           <div className="collegeRating">
//                             3.6 <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon half-star" />
//                             <i className="spriteIcon empty-star" />{" "}
//                             <span className="spriteIcon tooltipIcon tooltipAngle">
//                               <span className="tooltipIconText">
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Fees &amp; Scholarships
//                                   </span>
//                                   <span className="col-md-6 col-5">3.3</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Academics &amp; Faculty
//                                   </span>
//                                   <span className="col-md-6 col-5">3.9</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     College Infrastructure &amp; Hostel
//                                     Facilities
//                                   </span>
//                                   <span className="col-md-6 col-5">3.8</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Placements &amp; Internships
//                                   </span>
//                                   <span className="col-md-6 col-5">3.5</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Clubs &amp; Associations
//                                   </span>
//                                   <span className="col-md-6 col-5">3.8</span>
//                                 </div>
//                               </span>
//                             </span>
//                             (
//                             <a href="/college/parul-university-gujarat/reviews">
//                               52
//                             </a>
//                             )
//                           </div>
//                           <div className="row collegeKeyInfo">
//                             <div className="keyInfo">
//                               <p>Average Fees</p>
//                               <p>₹6.38 Lakh</p>
//                             </div>
//                             <div className="keyInfo">
//                               <p>No. of Courses Offered</p>
//                               <p>
//                                 {" "}
//                                 <a
//                                   title="Parul University Courses & Fee Details"
//                                   href=" https://www.getmyuni.com/college/parul-university-gujarat-courses-fees"
//                                 >
//                                   39 Courses
//                                 </a>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="clgInfoCardfooter">
//                         <button
//                           type="button"
//                           className="textRed getLeadForm brochureRed collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                           data-platform="web"
//                           data-entity="all-colleges"
//                           data-entityid={5158}
//                           data-interestedlocation={171}
//                           data-ctalocation="colleges_listing_parul-university-gujarat_web_card_left_cta"
//                           data-ctatext="Apply Now"
//                           data-leadformtitle="Sign-up to Apply"
//                           data-subheadingtext="Parul University, Vadodara"
//                           data-image="https://media.getmyuni.com/azure/college-image/small/parul-university-gujarat.webp"
//                         >
//                           Apply Now
//                         </button>{" "}
//                         <button
//                           type="button"
//                           className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                           data-platform="web"
//                           data-entity="all-colleges"
//                           data-entityid={5158}
//                           data-interestedlocation={171}
//                           data-ctalocation="colleges_listing_parul-university-gujarat_web_card_right_cta"
//                           data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                           data-leadformtitle="Sign-up to Download"
//                           data-subheadingtext="Parul University, Vadodara"
//                           data-image="https://media.getmyuni.com/azure/college-image/small/parul-university-gujarat.webp"
//                         >
//                           <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                           Brochure
//                         </button>{" "}
//                       </div>
//                     </div>
//                     <div className="sponsorCard">
//                       <div className="sponsorContainer">
//                         <p className="sponsorLabel">
//                           <span>Sponsored</span>
//                         </p>
//                         <div className="row sponsoredRow">
//                           <div className="collegeLogo">
//                             <img
//                               className="lazyload"
//                               loading="lazy"
//                               src="https://media.getmyuni.com/azure/college-image/small/chandigarh-university-mohali.jpg"
//                               onclick="gmu.url.goto('https://www.getmyuni.com/college/chandigarh-university-mohali')"
//                               alt=""
//                             />
//                           </div>
//                           <div className="sponsoredBanner">
//                             <h3 className="collegeName">
//                               <a
//                                 href="https://www.getmyuni.com/college/chandigarh-university-mohali"
//                                 title="Chandigarh University"
//                               >
//                                 Chandigarh University
//                               </a>
//                             </h3>
//                             <p className="collegeLocation">
//                               <i className="spriteIcon locationIconBlue" />
//                               Mohali, Punjab{" "}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="collegeDetails">
//                           <div className="collegeRating">
//                             4.4 <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon full-star" />
//                             <i className="spriteIcon half-star" />{" "}
//                             <span className="spriteIcon tooltipIcon tooltipAngle">
//                               <span className="tooltipIconText">
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Academics &amp; Faculty
//                                   </span>
//                                   <span className="col-md-6 col-5">4.5</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Fees &amp; Scholarships
//                                   </span>
//                                   <span className="col-md-6 col-5">4.3</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Placements &amp; Internships
//                                   </span>
//                                   <span className="col-md-6 col-5">4.5</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     College Infrastructure &amp; Hostel
//                                     Facilities
//                                   </span>
//                                   <span className="col-md-6 col-5">4.5</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Clubs &amp; Associations
//                                   </span>
//                                   <span className="col-md-6 col-5">4.5</span>
//                                 </div>
//                                 <div className="row">
//                                   <span className="col-md-6 col-7">
//                                     Entrance Exams &amp; Admissions
//                                   </span>
//                                   <span className="col-md-6 col-5">0</span>
//                                 </div>
//                               </span>
//                             </span>
//                             (
//                             <a href="/college/chandigarh-university-mohali/reviews">
//                               1126
//                             </a>
//                             )
//                           </div>
//                           <div className="row collegeKeyInfo">
//                             <div className="keyInfo">
//                               <p>Average Fees</p>
//                               <p>₹4.36 Lakh</p>
//                             </div>
//                             <div className="keyInfo">
//                               <p>No. of Courses Offered</p>
//                               <p>
//                                 {" "}
//                                 <a
//                                   title="Chandigarh University Courses & Fee Details"
//                                   href=" https://www.getmyuni.com/college/chandigarh-university-mohali-courses-fees"
//                                 >
//                                   31 Courses
//                                 </a>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="clgInfoCardfooter">
//                         <button
//                           type="button"
//                           className="textRed getLeadForm brochureRed collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                           data-platform="web"
//                           data-entity="all-colleges"
//                           data-entityid={2544}
//                           data-interestedlocation={560}
//                           data-ctalocation="colleges_listing_chandigarh-university-mohali_web_card_left_cta"
//                           data-ctatext="Apply Now"
//                           data-leadformtitle="Sign-up to Apply"
//                           data-subheadingtext="Chandigarh University, Mohali"
//                           data-image="https://media.getmyuni.com/azure/college-image/small/chandigarh-university-mohali.jpg"
//                         >
//                           Apply Now
//                         </button>{" "}
//                         <button
//                           type="button"
//                           className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                           data-platform="web"
//                           data-entity="all-colleges"
//                           data-entityid={2544}
//                           data-interestedlocation={560}
//                           data-ctalocation="colleges_listing_chandigarh-university-mohali_web_card_right_cta"
//                           data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                           data-leadformtitle="Sign-up to Download"
//                           data-subheadingtext="Chandigarh University, Mohali"
//                           data-image="https://media.getmyuni.com/azure/college-image/small/chandigarh-university-mohali.jpg"
//                         >
//                           <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                           Brochure
//                         </button>{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader "
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/banaras-hindu-university-bhu-varanasi.webp)",
//                       }}
//                       onclick="gmu.url.goto('/college/banaras-hindu-university-bhu-varanasi')"
//                     >
//                       <p className="rankingLabel">#1 Rank</p>
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className=""
//                             loading=""
//                             src="https://media.getmyuni.com/azure/college-image/small/banaras-hindu-university-bhu-varanasi.webp"
//                             onclick="gmu.url.goto('/college/banaras-hindu-university-bhu-varanasi')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/banaras-hindu-university-bhu-varanasi"
//                             title="BHU"
//                           >
//                             BHU
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Varanasi, Uttar Pradesh
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         4.0 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">3.7</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">4.2</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4.2</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/banaras-hindu-university-bhu-varanasi/reviews">
//                           58
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Fantastic college and hostel accomodation. State of the
//                         art inf...{" "}
//                         <a
//                           title="BHU Reviews"
//                           href="/college/banaras-hindu-university-bhu-varanasi/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="BHU Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/banaras-hindu-university-bhu-varanasi-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>-</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/banaras-hindu-university-bhu-varanasi/admission"
//                             title="BHU Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/banaras-hindu-university-bhu-varanasi-cut-off"
//                             title="BHU Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/banaras-hindu-university-bhu-varanasi-placements"
//                             title="BHU Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={185}
//                         data-interestedlocation={782}
//                         data-ctalocation="colleges_listing_banaras-hindu-university-bhu-varanasi_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="BHU, Varanasi"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/banaras-hindu-university-bhu-varanasi.webp"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={185}
//                         data-interestedlocation={782}
//                         data-ctalocation="colleges_listing_banaras-hindu-university-bhu-varanasi_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="BHU, Varanasi"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/banaras-hindu-university-bhu-varanasi.webp"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader "
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/birsa-agricultural-university-bau-ranchi')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className=""
//                             loading=""
//                             src="https://media.getmyuni.com/azure/college-image/small/birsa-agricultural-university-bau-ranchi.jpg"
//                             onclick="gmu.url.goto('/college/birsa-agricultural-university-bau-ranchi')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/birsa-agricultural-university-bau-ranchi"
//                             title="BAU - Birsa Agricultural University"
//                           >
//                             BAU - Birsa Agricultural University
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Ranchi, Jharkhand
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         2.7 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">3.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/birsa-agricultural-university-bau-ranchi/reviews">
//                           1
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Any stream under agricultural sciences that can take
//                         this MB...{" "}
//                         <a
//                           title="BAU - Birsa Agricultural University Reviews"
//                           href="/college/birsa-agricultural-university-bau-ranchi/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹48,750 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="BAU - Birsa Agricultural University Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/birsa-agricultural-university-bau-ranchi-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/birsa-agricultural-university-bau-ranchi/admission"
//                             title="BAU - Birsa Agricultural University Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/birsa-agricultural-university-bau-ranchi-cut-off"
//                             title="BAU - Birsa Agricultural University Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/birsa-agricultural-university-bau-ranchi-placements"
//                             title="BAU - Birsa Agricultural University Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={11910}
//                         data-interestedlocation={249}
//                         data-ctalocation="colleges_listing_birsa-agricultural-university-bau-ranchi_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="BAU - Birsa Agricultural University, Ranchi"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/birsa-agricultural-university-bau-ranchi.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={11910}
//                         data-interestedlocation={249}
//                         data-ctalocation="colleges_listing_birsa-agricultural-university-bau-ranchi_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="BAU - Birsa Agricultural University, Ranchi"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/birsa-agricultural-university-bau-ranchi.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader "
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className=""
//                             loading=""
//                             src="https://media.getmyuni.com/azure/college-image/small/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry.jpg"
//                             onclick="gmu.url.goto('/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry"
//                             title="Rajiv Gandhi Institute of Veterinary Education and Research"
//                           >
//                             Rajiv Gandhi Institute of Veterinary Education and
//                             Research
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Pondicherry, Puducherry
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.6 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">2.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4.3</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry/reviews">
//                           2
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         The total number of seats available for U.G. is 60
//                         and...{" "}
//                         <a
//                           title="Rajiv Gandhi Institute of Veterinary Education and Research Reviews"
//                           href="/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹22,000 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Rajiv Gandhi Institute of Veterinary Education and Research Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>-</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry/admission"
//                             title="Rajiv Gandhi Institute of Veterinary Education and Research Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry-placements"
//                             title="Rajiv Gandhi Institute of Veterinary Education and Research Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry-facilities"
//                             title="Rajiv Gandhi Institute of Veterinary Education and Research Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={7316}
//                         data-interestedlocation={871}
//                         data-ctalocation="colleges_listing_rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Rajiv Gandhi Institute of Veterinary Education and Research, Pondicherry"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={7316}
//                         data-interestedlocation={871}
//                         data-ctalocation="colleges_listing_rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Rajiv Gandhi Institute of Veterinary Education and Research, Pondicherry"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/rajiv-gandhi-college-of-veterinary-and-animal-sciences-pondicherry.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader "
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className=""
//                             loading=""
//                             src="https://media.getmyuni.com/azure/college-image/small/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar.jpg"
//                             onclick="gmu.url.goto('/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar"
//                             title="SKUAST - Sher-E-Kashmir University of Agricultural Sciences and Technology of Kashmir"
//                           >
//                             SKUAST - Sher-E-Kashmir University of Agricultural
//                             Sciences and Technology of Kashmir
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Srinagar, Jammu And Kashmir
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         2.3 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">1.5</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar/reviews">
//                           4
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         The eligibility criteria to get into&nbsp;SKUAST is
//                         to...{" "}
//                         <a
//                           title="SKUAST - Sher-E-Kashmir University of Agricultural Sciences and Technology of Kashmir Reviews"
//                           href="/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹1.48 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="SKUAST - Sher-E-Kashmir University of Agricultural Sciences and Technology of Kashmir Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar/admission"
//                             title="SKUAST - Sher-E-Kashmir University of Agricultural Sciences and Technology of Kashmir Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar-facilities"
//                             title="SKUAST - Sher-E-Kashmir University of Agricultural Sciences and Technology of Kashmir Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar-images-videos"
//                             title="SKUAST - Sher-E-Kashmir University of Agricultural Sciences and Technology of Kashmir Images & Videos"
//                           >
//                             Gallery
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={11162}
//                         data-interestedlocation={232}
//                         data-ctalocation="colleges_listing_sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="SKUAST - Sher-E-Kashmir University of Agricultural Sciences and Technology of Kashmir, Srinagar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={11162}
//                         data-interestedlocation={232}
//                         data-ctalocation="colleges_listing_sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="SKUAST - Sher-E-Kashmir University of Agricultural Sciences and Technology of Kashmir, Srinagar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sher-e-kashmir-university-of-agricultural-sciences-and-technology-of-kashmir-skuast-srinagar.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader "
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut.jpg)",
//                       }}
//                       onclick="gmu.url.goto('/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className=""
//                             loading=""
//                             src="https://media.getmyuni.com/azure/college-image/small/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut.jpg"
//                             onclick="gmu.url.goto('/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut"
//                             title="Sardar Vallabh Bhai Patel University of Agriculture and Technology, [SVBPUAT] Meerut"
//                           >
//                             Sardar Vallabh Bhai Patel University of Agriculture
//                             and Technology, [SVBPUAT] Meerut
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Meerut, Uttar Pradesh
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.8 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">2.6</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">4.4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">4.1</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut/reviews">
//                           6
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Entrance exam: UPCATET which is conducted by any of
//                         th...{" "}
//                         <a
//                           title="Sardar Vallabh Bhai Patel University of Agriculture and Technology, [SVBPUAT] Meerut Reviews"
//                           href="/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Sardar Vallabh Bhai Patel University of Agriculture and Technology, [SVBPUAT] Meerut Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut/admission"
//                             title="Sardar Vallabh Bhai Patel University of Agriculture and Technology, [SVBPUAT] Meerut Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut-placements"
//                             title="Sardar Vallabh Bhai Patel University of Agriculture and Technology, [SVBPUAT] Meerut Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut-facilities"
//                             title="Sardar Vallabh Bhai Patel University of Agriculture and Technology, [SVBPUAT] Meerut Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={3226}
//                         data-interestedlocation={757}
//                         data-ctalocation="colleges_listing_sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Sardar Vallabh Bhai Patel University of Agriculture and Technology, [SVBPUAT] Meerut, Meerut"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={3226}
//                         data-interestedlocation={757}
//                         data-ctalocation="colleges_listing_sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Sardar Vallabh Bhai Patel University of Agriculture and Technology, [SVBPUAT] Meerut, Meerut"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sardar-vallabh-bhai-patel-university-of-agriculture-and-technology-svbpuat-meerut.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader "
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/kerala-veterinary-and-animal-sciences-university-wayanad')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className=""
//                             loading=""
//                             src="https://media.getmyuni.com/azure/college-image/small/kerala-veterinary-and-animal-sciences-university-wayanad.jpg"
//                             onclick="gmu.url.goto('/college/kerala-veterinary-and-animal-sciences-university-wayanad')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/kerala-veterinary-and-animal-sciences-university-wayanad"
//                             title="Kerala Veterinary And Animal Sciences University - KVASU"
//                           >
//                             Kerala Veterinary And Animal Sciences University -
//                             KVASU
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Wayanad, Kerala
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         {" "}
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                       </div>
//                       <p className="collegeIntroText"></p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹64,700 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Kerala Veterinary And Animal Sciences University - KVASU Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/kerala-veterinary-and-animal-sciences-university-wayanad-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/kerala-veterinary-and-animal-sciences-university-wayanad/admission"
//                             title="Kerala Veterinary And Animal Sciences University - KVASU Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/kerala-veterinary-and-animal-sciences-university-wayanad-cut-off"
//                             title="Kerala Veterinary And Animal Sciences University - KVASU Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/kerala-veterinary-and-animal-sciences-university-wayanad-placements"
//                             title="Kerala Veterinary And Animal Sciences University - KVASU Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={335}
//                         data-interestedlocation={365}
//                         data-ctalocation="colleges_listing_kerala-veterinary-and-animal-sciences-university-wayanad_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Kerala Veterinary And Animal Sciences University - KVASU, Wayanad"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/kerala-veterinary-and-animal-sciences-university-wayanad.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={335}
//                         data-interestedlocation={365}
//                         data-ctalocation="colleges_listing_kerala-veterinary-and-animal-sciences-university-wayanad_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Kerala Veterinary And Animal Sciences University - KVASU, Wayanad"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/kerala-veterinary-and-animal-sciences-university-wayanad.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row" id="sponsor_list_slot2" />
//                 <div className="horizontalRectangle">
//                   <div
//                     className="appendAdDiv"
//                     style={{ background: "#EAEAEA" }}
//                   >
//                     <div
//                       className="lazy-ad"
//                       data-slot={3}
//                       id="div-gpt-ad-1614408539431-3"
//                       style={{ height: 90 }}
//                     />{" "}
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading=""
//                             src="https://media.getmyuni.com/azure/college-image/small/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur.jpg"
//                             onclick="gmu.url.goto('/college/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur"
//                             title="Maharashtra Animal and Fishery Sciences University"
//                           >
//                             Maharashtra Animal and Fishery Sciences University
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Nagpur, Maharashtra
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         {" "}
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                       </div>
//                       <p className="collegeIntroText"></p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Maharashtra Animal and Fishery Sciences University Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur/admission"
//                             title="Maharashtra Animal and Fishery Sciences University Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur-facilities"
//                             title="Maharashtra Animal and Fishery Sciences University Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur-images-videos"
//                             title="Maharashtra Animal and Fishery Sciences University Images & Videos"
//                           >
//                             Gallery
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={142}
//                         data-interestedlocation={456}
//                         data-ctalocation="colleges_listing_maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Maharashtra Animal and Fishery Sciences University, Nagpur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={142}
//                         data-interestedlocation={456}
//                         data-ctalocation="colleges_listing_maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Maharashtra Animal and Fishery Sciences University, Nagpur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/maharashtra-animal-and-fisheries-sciences-university-mafsu-nagpur.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/veterinary-college-and-research-institute-vcri-namakkal')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/veterinary-college-and-research-institute-vcri-namakkal.jpg"
//                             onclick="gmu.url.goto('/college/veterinary-college-and-research-institute-vcri-namakkal')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/veterinary-college-and-research-institute-vcri-namakkal"
//                             title="Veterinary College & Research Institute, Namakkal"
//                           >
//                             Veterinary College &amp; Research Institute,
//                             Namakkal
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Namakkal, Tamil Nadu
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         {" "}
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                       </div>
//                       <p className="collegeIntroText"></p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹77,135 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Veterinary College & Research Institute, Namakkal Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/veterinary-college-and-research-institute-vcri-namakkal-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/veterinary-college-and-research-institute-vcri-namakkal-facilities"
//                             title="Veterinary College & Research Institute, Namakkal Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={10968}
//                         data-interestedlocation={649}
//                         data-ctalocation="colleges_listing_veterinary-college-and-research-institute-vcri-namakkal_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Veterinary College & Research Institute, Namakkal, Namakkal"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/veterinary-college-and-research-institute-vcri-namakkal.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={10968}
//                         data-interestedlocation={649}
//                         data-ctalocation="colleges_listing_veterinary-college-and-research-institute-vcri-namakkal_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Veterinary College & Research Institute, Namakkal, Namakkal"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/veterinary-college-and-research-institute-vcri-namakkal.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur.jpg"
//                             onclick="gmu.url.goto('/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur"
//                             title="Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya"
//                           >
//                             Chaudhary Sarwan Kumar Himachal Pradesh Krishi
//                             Vishvavidyalaya
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Palampur, Himachal Pradesh
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         2.5 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">1</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">1.5</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur/reviews">
//                           1
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Chaudhary Sarwan Kumar Himachal Pradesh Krishi
//                         Vishvav...{" "}
//                         <a
//                           title="Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya Reviews"
//                           href="/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹1.50 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur-placements"
//                             title="Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur-facilities"
//                             title="Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur-images-videos"
//                             title="Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya Images & Videos"
//                           >
//                             Gallery
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={242}
//                         data-interestedlocation={213}
//                         data-ctalocation="colleges_listing_chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya, Palampur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={242}
//                         data-interestedlocation={213}
//                         data-ctalocation="colleges_listing_chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Chaudhary Sarwan Kumar Himachal Pradesh Krishi Vishvavidyalaya, Palampur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/chaudhary-sarwan-kumar-himachal-pradesh-krishi-vishvavidyalaya-cskhpkv-palampur.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/sardarkrushinagar-dantiwada-agricultural-university-palanpur.jpg"
//                             onclick="gmu.url.goto('/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur"
//                             title="Sardarkrushinagar Dantiwada Agricultural University"
//                           >
//                             Sardarkrushinagar Dantiwada Agricultural University
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Palampur, Himachal Pradesh
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         4.0 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">4.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">3.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">4.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">3.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">3.5</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur/reviews">
//                           3
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Eligibility for getting admission in my college is 12th
//                         scie...{" "}
//                         <a
//                           title="Sardarkrushinagar Dantiwada Agricultural University Reviews"
//                           href="/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹1.02 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Sardarkrushinagar Dantiwada Agricultural University Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur/admission"
//                             title="Sardarkrushinagar Dantiwada Agricultural University Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur-placements"
//                             title="Sardarkrushinagar Dantiwada Agricultural University Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sardarkrushinagar-dantiwada-agricultural-university-palanpur-facilities"
//                             title="Sardarkrushinagar Dantiwada Agricultural University Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={323}
//                         data-interestedlocation={213}
//                         data-ctalocation="colleges_listing_sardarkrushinagar-dantiwada-agricultural-university-palanpur_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Sardarkrushinagar Dantiwada Agricultural University, Palampur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sardarkrushinagar-dantiwada-agricultural-university-palanpur.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={323}
//                         data-interestedlocation={213}
//                         data-ctalocation="colleges_listing_sardarkrushinagar-dantiwada-agricultural-university-palanpur_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Sardarkrushinagar Dantiwada Agricultural University, Palampur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sardarkrushinagar-dantiwada-agricultural-university-palanpur.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar.jpg"
//                             onclick="gmu.url.goto('/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar"
//                             title="Karanataka Veterinary Animal And Fisheries Science University - KVAFSU"
//                           >
//                             Karanataka Veterinary Animal And Fisheries Science
//                             University - KVAFSU
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Bidar, Karnataka
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         4 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar/reviews">
//                           1
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         We should complete 2nd PUC with a minimum percentage and
//                         thr...{" "}
//                         <a
//                           title="Karanataka Veterinary Animal And Fisheries Science University - KVAFSU Reviews"
//                           href="/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹6.11 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Karanataka Veterinary Animal And Fisheries Science University - KVAFSU Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar/admission"
//                             title="Karanataka Veterinary Animal And Fisheries Science University - KVAFSU Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar-cut-off"
//                             title="Karanataka Veterinary Animal And Fisheries Science University - KVAFSU Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar-placements"
//                             title="Karanataka Veterinary Animal And Fisheries Science University - KVAFSU Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={2047}
//                         data-interestedlocation={264}
//                         data-ctalocation="colleges_listing_karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Karanataka Veterinary Animal And Fisheries Science University - KVAFSU, Bidar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={2047}
//                         data-interestedlocation={264}
//                         data-ctalocation="colleges_listing_karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Karanataka Veterinary Animal And Fisheries Science University - KVAFSU, Bidar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/karnataka-veterinary-animal-and-fisheries-sciences-university-kvafsu-bidar.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/navsari-agricultural-university-nau-navsari')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/navsari-agricultural-university-nau-navsari.jpg"
//                             onclick="gmu.url.goto('/college/navsari-agricultural-university-nau-navsari')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/navsari-agricultural-university-nau-navsari"
//                             title="Navsari Agricultural University (NAU)"
//                           >
//                             Navsari Agricultural University (NAU)
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Navsari, Gujarat
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         {" "}
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                       </div>
//                       <p className="collegeIntroText"></p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Navsari Agricultural University (NAU) Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/navsari-agricultural-university-nau-navsari-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/navsari-agricultural-university-nau-navsari/admission"
//                             title="Navsari Agricultural University (NAU) Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/navsari-agricultural-university-nau-navsari-facilities"
//                             title="Navsari Agricultural University (NAU) Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={11924}
//                         data-interestedlocation={162}
//                         data-ctalocation="colleges_listing_navsari-agricultural-university-nau-navsari_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Navsari Agricultural University (NAU), Navsari"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/navsari-agricultural-university-nau-navsari.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={11924}
//                         data-interestedlocation={162}
//                         data-ctalocation="colleges_listing_navsari-agricultural-university-nau-navsari_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Navsari Agricultural University (NAU), Navsari"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/navsari-agricultural-university-nau-navsari.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana.jpg"
//                             onclick="gmu.url.goto('/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana"
//                             title="Guru Angad Dev Veterinary And Animal Sciences University"
//                           >
//                             Guru Angad Dev Veterinary And Animal Sciences
//                             University
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Ludhiana, Punjab
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.4 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana/reviews">
//                           1
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         The eligibility criteria for joining&nbsp;Guru Angad
//                         D...{" "}
//                         <a
//                           title="Guru Angad Dev Veterinary And Animal Sciences University Reviews"
//                           href="/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹1.70 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Guru Angad Dev Veterinary And Animal Sciences University Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana/admission"
//                             title="Guru Angad Dev Veterinary And Animal Sciences University Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana-placements"
//                             title="Guru Angad Dev Veterinary And Animal Sciences University Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana-facilities"
//                             title="Guru Angad Dev Veterinary And Animal Sciences University Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={155}
//                         data-interestedlocation={556}
//                         data-ctalocation="colleges_listing_guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Guru Angad Dev Veterinary And Animal Sciences University, Ludhiana"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={155}
//                         data-interestedlocation={556}
//                         data-ctalocation="colleges_listing_guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Guru Angad Dev Veterinary And Animal Sciences University, Ludhiana"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/guru-angad-dev-veterinary-and-animal-sciences-university-gadvasu-ludhiana.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai.jpg)",
//                       }}
//                       onclick="gmu.url.goto('/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai.jpg"
//                             onclick="gmu.url.goto('/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai"
//                             title="TANUVAS - Tamil Nadu Veterinary And Animal Sciences University"
//                           >
//                             TANUVAS - Tamil Nadu Veterinary And Animal Sciences
//                             University
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Chennai, Tamil Nadu
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         {" "}
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" /> (
//                         <a href="/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai/reviews">
//                           1
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Eligibility is minimum is 60% in 12th for getting
//                         into...{" "}
//                         <a
//                           title="TANUVAS - Tamil Nadu Veterinary And Animal Sciences University Reviews"
//                           href="/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹55,100 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="TANUVAS - Tamil Nadu Veterinary And Animal Sciences University Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai/admission"
//                             title="TANUVAS - Tamil Nadu Veterinary And Animal Sciences University Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai-placements"
//                             title="TANUVAS - Tamil Nadu Veterinary And Animal Sciences University Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai-facilities"
//                             title="TANUVAS - Tamil Nadu Veterinary And Animal Sciences University Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={2997}
//                         data-interestedlocation={627}
//                         data-ctalocation="colleges_listing_tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="TANUVAS - Tamil Nadu Veterinary And Animal Sciences University, Chennai"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={2997}
//                         data-interestedlocation={627}
//                         data-ctalocation="colleges_listing_tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="TANUVAS - Tamil Nadu Veterinary And Animal Sciences University, Chennai"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/tamil-nadu-veterinary-and-animal-sciences-university-tnvasu-chennai.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad.jpg)",
//                       }}
//                       onclick="gmu.url.goto('/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad.jpg"
//                             onclick="gmu.url.goto('/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad"
//                             title="SHUATS"
//                           >
//                             SHUATS
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Allahabad, Uttar Pradesh
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.3 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">3.6</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">2.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">3.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">3.6</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad/reviews">
//                           50
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Everyday early in the morning i kept my step to the
//                         ne...{" "}
//                         <a
//                           title="SHUATS Reviews"
//                           href="/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹1 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="SHUATS Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad/admission"
//                             title="SHUATS Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad-placements"
//                             title="SHUATS Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad-facilities"
//                             title="SHUATS Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={3108}
//                         data-interestedlocation={700}
//                         data-ctalocation="colleges_listing_sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="SHUATS, Allahabad"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={3108}
//                         data-interestedlocation={700}
//                         data-ctalocation="colleges_listing_sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="SHUATS, Allahabad"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sam-higginbottom-institute-of-agriculture-technology-and-sciences-shiats-allahabad.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="horizontalRectangle">
//                   <div
//                     className="appendAdDiv"
//                     style={{ background: "#EAEAEA" }}
//                   >
//                     <div
//                       className="lazy-ad"
//                       data-slot={4}
//                       id="div-gpt-ad-1614408539431-4"
//                       style={{ height: 90 }}
//                     />{" "}
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/college-of-veterinary-and-animal-sciences-udaipur')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/college-of-veterinary-and-animal-sciences-udaipur.jpg"
//                             onclick="gmu.url.goto('/college/college-of-veterinary-and-animal-sciences-udaipur')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/college-of-veterinary-and-animal-sciences-udaipur"
//                             title="College of Veterinary and Animal Science, Udaipur"
//                           >
//                             College of Veterinary and Animal Science, Udaipur
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Udaipur, Rajasthan
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         {" "}
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                       </div>
//                       <p className="collegeIntroText"></p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹53,850 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="College of Veterinary and Animal Science, Udaipur Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/college-of-veterinary-and-animal-sciences-udaipur-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/college-of-veterinary-and-animal-sciences-udaipur-images-videos"
//                             title="College of Veterinary and Animal Science, Udaipur Images & Videos"
//                           >
//                             Gallery
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={9144}
//                         data-interestedlocation={615}
//                         data-ctalocation="colleges_listing_college-of-veterinary-and-animal-sciences-udaipur_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="College of Veterinary and Animal Science, Udaipur, Udaipur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/college-of-veterinary-and-animal-sciences-udaipur.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={9144}
//                         data-interestedlocation={615}
//                         data-ctalocation="colleges_listing_college-of-veterinary-and-animal-sciences-udaipur_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="College of Veterinary and Animal Science, Udaipur, Udaipur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/college-of-veterinary-and-animal-sciences-udaipur.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/sri-venkateswara-veterinary-university-tirupati')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/sri-venkateswara-veterinary-university-tirupati.jpg"
//                             onclick="gmu.url.goto('/college/sri-venkateswara-veterinary-university-tirupati')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/sri-venkateswara-veterinary-university-tirupati"
//                             title="SVVU - Sri Venkateswara Veterinary University"
//                           >
//                             SVVU - Sri Venkateswara Veterinary University
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Tirupati, Andhra Pradesh
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">3</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/sri-venkateswara-veterinary-university-tirupati/reviews">
//                           1
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Below 50000k per year I can eligible for some of
//                         government ...{" "}
//                         <a
//                           title="SVVU - Sri Venkateswara Veterinary University Reviews"
//                           href="/college/sri-venkateswara-veterinary-university-tirupati/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹23,560 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="SVVU - Sri Venkateswara Veterinary University Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/sri-venkateswara-veterinary-university-tirupati-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sri-venkateswara-veterinary-university-tirupati/admission"
//                             title="SVVU - Sri Venkateswara Veterinary University Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sri-venkateswara-veterinary-university-tirupati-cut-off"
//                             title="SVVU - Sri Venkateswara Veterinary University Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/sri-venkateswara-veterinary-university-tirupati-placements"
//                             title="SVVU - Sri Venkateswara Veterinary University Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={6645}
//                         data-interestedlocation={36}
//                         data-ctalocation="colleges_listing_sri-venkateswara-veterinary-university-tirupati_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="SVVU - Sri Venkateswara Veterinary University, Tirupati"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sri-venkateswara-veterinary-university-tirupati.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={6645}
//                         data-interestedlocation={36}
//                         data-ctalocation="colleges_listing_sri-venkateswara-veterinary-university-tirupati_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="SVVU - Sri Venkateswara Veterinary University, Tirupati"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/sri-venkateswara-veterinary-university-tirupati.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar.jpg"
//                             onclick="gmu.url.goto('/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar"
//                             title="OUAT - Orissa University of Agriculture and Technology"
//                           >
//                             OUAT - Orissa University of Agriculture and
//                             Technology
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Bhubaneswar, Odisha
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.7 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">3.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">3.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">3.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4.2</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar/reviews">
//                           12
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         The eligibility criteria is&nbsp;students must pass
//                         12...{" "}
//                         <a
//                           title="OUAT - Orissa University of Agriculture and Technology Reviews"
//                           href="/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="OUAT - Orissa University of Agriculture and Technology Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar/admission"
//                             title="OUAT - Orissa University of Agriculture and Technology Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar-cut-off"
//                             title="OUAT - Orissa University of Agriculture and Technology Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar-placements"
//                             title="OUAT - Orissa University of Agriculture and Technology Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={55}
//                         data-interestedlocation={508}
//                         data-ctalocation="colleges_listing_orissa-university-of-agriculture-and-technology-ouat-bhubaneswar_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="OUAT - Orissa University of Agriculture and Technology, Bhubaneswar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={55}
//                         data-interestedlocation={508}
//                         data-ctalocation="colleges_listing_orissa-university-of-agriculture-and-technology-ouat-bhubaneswar_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="OUAT - Orissa University of Agriculture and Technology, Bhubaneswar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/orissa-university-of-agriculture-and-technology-ouat-bhubaneswar.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/college-of-veterinary-and-animal-sciences-covaas-bikaner.jpg)",
//                       }}
//                       onclick="gmu.url.goto('/college/college-of-veterinary-and-animal-sciences-covaas-bikaner')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/college-of-veterinary-and-animal-sciences-covaas-bikaner.jpg"
//                             onclick="gmu.url.goto('/college/college-of-veterinary-and-animal-sciences-covaas-bikaner')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/college-of-veterinary-and-animal-sciences-covaas-bikaner"
//                             title="College of Veterinary & Animal Science"
//                           >
//                             College of Veterinary &amp; Animal Science
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Bikaner, Rajasthan
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.9 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">2.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4.2</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">4.7</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">3.8</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/college-of-veterinary-and-animal-sciences-covaas-bikaner/reviews">
//                           3
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Eligibility criteria for joining the&nbsp;College of
//                         V...{" "}
//                         <a
//                           title="College of Veterinary & Animal Science Reviews"
//                           href="/college/college-of-veterinary-and-animal-sciences-covaas-bikaner/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹29,230 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="College of Veterinary & Animal Science Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/college-of-veterinary-and-animal-sciences-covaas-bikaner-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/college-of-veterinary-and-animal-sciences-covaas-bikaner/admission"
//                             title="College of Veterinary & Animal Science Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/college-of-veterinary-and-animal-sciences-covaas-bikaner-placements"
//                             title="College of Veterinary & Animal Science Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/college-of-veterinary-and-animal-sciences-covaas-bikaner-facilities"
//                             title="College of Veterinary & Animal Science Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={4626}
//                         data-interestedlocation={581}
//                         data-ctalocation="colleges_listing_college-of-veterinary-and-animal-sciences-covaas-bikaner_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="College of Veterinary & Animal Science, Bikaner"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/college-of-veterinary-and-animal-sciences-covaas-bikaner.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={4626}
//                         data-interestedlocation={581}
//                         data-ctalocation="colleges_listing_college-of-veterinary-and-animal-sciences-covaas-bikaner_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="College of Veterinary & Animal Science, Bikaner"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/college-of-veterinary-and-animal-sciences-covaas-bikaner.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad.jpg)",
//                       }}
//                       onclick="gmu.url.goto('/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad.jpg"
//                             onclick="gmu.url.goto('/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad"
//                             title="Acharya Narendra Deva University of Agriculture and Technology"
//                           >
//                             Acharya Narendra Deva University of Agriculture and
//                             Technology
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Faizabad, Uttar Pradesh
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.6 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">3.6</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4.2</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">3.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">2.9</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4.2</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad/reviews">
//                           5
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Class timings are from 7:30am to 4:40pm. Project is
//                         gi...{" "}
//                         <a
//                           title="Acharya Narendra Deva University of Agriculture and Technology Reviews"
//                           href="/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹4.06 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Acharya Narendra Deva University of Agriculture and Technology Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad/admission"
//                             title="Acharya Narendra Deva University of Agriculture and Technology Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad-placements"
//                             title="Acharya Narendra Deva University of Agriculture and Technology Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad-facilities"
//                             title="Acharya Narendra Deva University of Agriculture and Technology Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={3228}
//                         data-interestedlocation={726}
//                         data-ctalocation="colleges_listing_narendra-dev-university-of-agriculture-and-technology-nduat-faizabad_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Acharya Narendra Deva University of Agriculture and Technology, Faizabad"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={3228}
//                         data-interestedlocation={726}
//                         data-ctalocation="colleges_listing_narendra-dev-university-of-agriculture-and-technology-nduat-faizabad_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Acharya Narendra Deva University of Agriculture and Technology, Faizabad"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/narendra-dev-university-of-agriculture-and-technology-nduat-faizabad.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/national-dairy-research-institute-ndri-karnal.jpg)",
//                       }}
//                       onclick="gmu.url.goto('/college/national-dairy-research-institute-ndri-karnal')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/national-dairy-research-institute-ndri-karnal.jpg"
//                             onclick="gmu.url.goto('/college/national-dairy-research-institute-ndri-karnal')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/national-dairy-research-institute-ndri-karnal"
//                             title="NDRI - National Dairy Research Institute"
//                           >
//                             NDRI - National Dairy Research Institute
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Karnal, Haryana
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.9 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">3.4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">3.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">4.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">3.9</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4.3</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/national-dairy-research-institute-ndri-karnal/reviews">
//                           6
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Eligibility Criteria was that candidate should be passed
//                         10+...{" "}
//                         <a
//                           title="NDRI - National Dairy Research Institute Reviews"
//                           href="/college/national-dairy-research-institute-ndri-karnal/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="NDRI - National Dairy Research Institute Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/national-dairy-research-institute-ndri-karnal-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/national-dairy-research-institute-ndri-karnal/admission"
//                             title="NDRI - National Dairy Research Institute Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/national-dairy-research-institute-ndri-karnal-placements"
//                             title="NDRI - National Dairy Research Institute Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/national-dairy-research-institute-ndri-karnal-facilities"
//                             title="NDRI - National Dairy Research Institute Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={1785}
//                         data-interestedlocation={188}
//                         data-ctalocation="colleges_listing_national-dairy-research-institute-ndri-karnal_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="NDRI - National Dairy Research Institute, Karnal"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/national-dairy-research-institute-ndri-karnal.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={1785}
//                         data-interestedlocation={188}
//                         data-ctalocation="colleges_listing_national-dairy-research-institute-ndri-karnal_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="NDRI - National Dairy Research Institute, Karnal"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/national-dairy-research-institute-ndri-karnal.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/kumaun-university-nainital.webp)",
//                       }}
//                       onclick="gmu.url.goto('/college/kumaun-university-nainital')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/kumaun-university-nainital.jpg"
//                             onclick="gmu.url.goto('/college/kumaun-university-nainital')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/kumaun-university-nainital"
//                             title="Kumaun University"
//                           >
//                             Kumaun University
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Nainital, Uttarakhand
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.2 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">3.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">3.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">3.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">2.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">3.5</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/kumaun-university-nainital/reviews">
//                           3
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         One should complete graduation then only he/she will
//                         appear ...{" "}
//                         <a
//                           title="Kumaun University Reviews"
//                           href="/college/kumaun-university-nainital/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹2.24 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Kumaun University Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/kumaun-university-nainital-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/kumaun-university-nainital/admission"
//                             title="Kumaun University Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/kumaun-university-nainital-cut-off"
//                             title="Kumaun University Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/kumaun-university-nainital-placements"
//                             title="Kumaun University Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={332}
//                         data-interestedlocation={795}
//                         data-ctalocation="colleges_listing_kumaun-university-nainital_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Kumaun University, Nainital"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/kumaun-university-nainital.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={332}
//                         data-interestedlocation={795}
//                         data-ctalocation="colleges_listing_kumaun-university-nainital_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Kumaun University, Nainital"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/kumaun-university-nainital.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar.jpg"
//                             onclick="gmu.url.goto('/college/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar"
//                             title="Lala Lajpat Rai University of Veterinary and Animal Sciences"
//                           >
//                             Lala Lajpat Rai University of Veterinary and Animal
//                             Sciences
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Hisar, Haryana
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         {" "}
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                       </div>
//                       <p className="collegeIntroText"></p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹1.30 Lakh</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Lala Lajpat Rai University of Veterinary and Animal Sciences Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar/admission"
//                             title="Lala Lajpat Rai University of Veterinary and Animal Sciences Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar-placements"
//                             title="Lala Lajpat Rai University of Veterinary and Animal Sciences Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar-facilities"
//                             title="Lala Lajpat Rai University of Veterinary and Animal Sciences Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={11932}
//                         data-interestedlocation={184}
//                         data-ctalocation="colleges_listing_lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Lala Lajpat Rai University of Veterinary and Animal Sciences, Hisar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={11932}
//                         data-interestedlocation={184}
//                         data-ctalocation="colleges_listing_lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Lala Lajpat Rai University of Veterinary and Animal Sciences, Hisar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/lala-lajpat-rai-university-of-veterinary-and-animal-sciences-luvas-hisar.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/indian-veterinary-research-institute-ivri-bareilly')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/indian-veterinary-research-institute-ivri-bareilly.jpg"
//                             onclick="gmu.url.goto('/college/indian-veterinary-research-institute-ivri-bareilly')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/indian-veterinary-research-institute-ivri-bareilly"
//                             title="Indian Veterinary Research Institute, [IVRI] Bareilly"
//                           >
//                             Indian Veterinary Research Institute, [IVRI]
//                             Bareilly
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Bareilly, Uttar Pradesh
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         {" "}
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                       </div>
//                       <p className="collegeIntroText"></p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹70,550 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Indian Veterinary Research Institute, [IVRI] Bareilly Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/indian-veterinary-research-institute-ivri-bareilly-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/indian-veterinary-research-institute-ivri-bareilly-placements"
//                             title="Indian Veterinary Research Institute, [IVRI] Bareilly Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/indian-veterinary-research-institute-ivri-bareilly-facilities"
//                             title="Indian Veterinary Research Institute, [IVRI] Bareilly Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/indian-veterinary-research-institute-ivri-bareilly-scholarships"
//                             title="Indian Veterinary Research Institute, [IVRI] Bareilly Scholarship Details"
//                           >
//                             Scholarship
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={375}
//                         data-interestedlocation={716}
//                         data-ctalocation="colleges_listing_indian-veterinary-research-institute-ivri-bareilly_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Indian Veterinary Research Institute, [IVRI] Bareilly, Bareilly"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/indian-veterinary-research-institute-ivri-bareilly.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={375}
//                         data-interestedlocation={716}
//                         data-ctalocation="colleges_listing_indian-veterinary-research-institute-ivri-bareilly_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Indian Veterinary Research Institute, [IVRI] Bareilly, Bareilly"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/indian-veterinary-research-institute-ivri-bareilly.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="horizontalRectangle">
//                   <div
//                     className="appendAdDiv"
//                     style={{ background: "#EAEAEA" }}
//                   >
//                     <div
//                       className="lazy-ad"
//                       data-slot={5}
//                       id="div-gpt-ad-1614408539431-5"
//                       style={{ height: 90 }}
//                     />{" "}
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/azure/college-image/big/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar.jpg)",
//                       }}
//                       onclick="gmu.url.goto('/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar.jpg"
//                             onclick="gmu.url.goto('/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar"
//                             title="GBPUAT"
//                           >
//                             GBPUAT
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Pantnagar, Uttarakhand
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         3.3 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">2.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">3.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">3.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">3.4</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">3.7</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar/reviews">
//                           11
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         Class timings are from 9am-5pm. Overall good ...{" "}
//                         <a
//                           title="GBPUAT Reviews"
//                           href="/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹23,398 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="GBPUAT Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar/admission"
//                             title="GBPUAT Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar-cut-off"
//                             title="GBPUAT Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar-placements"
//                             title="GBPUAT Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={768}
//                         data-interestedlocation={796}
//                         data-ctalocation="colleges_listing_govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="GBPUAT, Pantnagar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={768}
//                         data-interestedlocation={796}
//                         data-ctalocation="colleges_listing_govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="GBPUAT, Pantnagar"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/govind-ballabh-pant-university-of-agriculture-and-technology-pantnagar.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/west-bengal-university-of-animal-and-fishery-sciences-kolkata.jpg"
//                             onclick="gmu.url.goto('/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata"
//                             title="West Bengal University of Animal and Fishery Sciences"
//                           >
//                             West Bengal University of Animal and Fishery
//                             Sciences
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Kolkata, West Bengal
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         4.6 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">4.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">4.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">4.8</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">4.3</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">4.5</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata/reviews">
//                           5
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         This is really a nice college. Teachers and staff are
//                         ...{" "}
//                         <a
//                           title="West Bengal University of Animal and Fishery Sciences Reviews"
//                           href="/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹29,800 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="West Bengal University of Animal and Fishery Sciences Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata-courses-fees"
//                             >
//                               1 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata/admission"
//                             title="West Bengal University of Animal and Fishery Sciences Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata-cut-off"
//                             title="West Bengal University of Animal and Fishery Sciences Cut Off Details"
//                           >
//                             Cut Off
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/west-bengal-university-of-animal-and-fishery-sciences-kolkata-placements"
//                             title="West Bengal University of Animal and Fishery Sciences Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={6270}
//                         data-interestedlocation={845}
//                         data-ctalocation="colleges_listing_west-bengal-university-of-animal-and-fishery-sciences-kolkata_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="West Bengal University of Animal and Fishery Sciences, Kolkata"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/west-bengal-university-of-animal-and-fishery-sciences-kolkata.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={6270}
//                         data-interestedlocation={845}
//                         data-ctalocation="colleges_listing_west-bengal-university-of-animal-and-fishery-sciences-kolkata_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="West Bengal University of Animal and Fishery Sciences, Kolkata"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/west-bengal-university-of-animal-and-fishery-sciences-kolkata.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                   <div className="collegeInfoCard">
//                     <div
//                       className="clgInfoCardHeader lazyload"
//                       style={{
//                         backgroundImage:
//                           "url(https://media.getmyuni.com/yas/images/banner.png)",
//                       }}
//                       onclick="gmu.url.goto('/college/bihar-agricultural-university-bhagalpur')"
//                     >
//                       <div className="row">
//                         <div className="collegeLogo">
//                           <img
//                             className="lazyload"
//                             loading="lazy"
//                             src="https://media.getmyuni.com/azure/college-image/small/bihar-agricultural-university-bhagalpur.jpg"
//                             onclick="gmu.url.goto('/college/bihar-agricultural-university-bhagalpur')"
//                             alt=""
//                           />
//                         </div>
//                         <h3 className="collegeName">
//                           <a
//                             href="/college/bihar-agricultural-university-bhagalpur"
//                             title="Bihar Agricultural University"
//                           >
//                             Bihar Agricultural University
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                     <div className=" aboutCollege">
//                       <p className="collegeLocation">
//                         <i className="spriteIcon locationIconBlue" />
//                         Bhagalpur, Bihar
//                       </p>
//                       <span className="bulletIcon" />
//                       <div className="collegeRating">
//                         2.3 <i className="spriteIcon full-star" />
//                         <i className="spriteIcon full-star" />
//                         <i className="spriteIcon half-star" />
//                         <i className="spriteIcon empty-star" />
//                         <i className="spriteIcon empty-star" />{" "}
//                         <span className="spriteIcon tooltipIcon tooltipAngle">
//                           <span className="tooltipIconText">
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Placements &amp; Internships
//                               </span>
//                               <span className="col-md-6 col-5">1</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Fees &amp; Scholarships
//                               </span>
//                               <span className="col-md-6 col-5">3.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Academics &amp; Faculty
//                               </span>
//                               <span className="col-md-6 col-5">2</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 College Infrastructure &amp; Hostel Facilities
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                             <div className="row">
//                               <span className="col-md-6 col-7">
//                                 Clubs &amp; Associations
//                               </span>
//                               <span className="col-md-6 col-5">2.5</span>
//                             </div>
//                           </span>
//                         </span>
//                         (
//                         <a href="/college/bihar-agricultural-university-bhagalpur/reviews">
//                           1
//                         </a>
//                         )
//                       </div>
//                       <p className="collegeIntroText">
//                         The eligibility criteria for joining&nbsp;Bihar
//                         Agricu...{" "}
//                         <a
//                           title="Bihar Agricultural University Reviews"
//                           href="/college/bihar-agricultural-university-bhagalpur/reviews"
//                         >
//                           Read More
//                         </a>
//                       </p>
//                       <div className="row collegeKeyinfo">
//                         <div className="keyInfo">
//                           <p>Average Fees</p>
//                           <p>₹24,280 </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>No. of Courses Offered</p>
//                           <p>
//                             {" "}
//                             <a
//                               title="Bihar Agricultural University Courses & Fee Details"
//                               href=" https://www.getmyuni.com/college/bihar-agricultural-university-bhagalpur-courses-fees"
//                             >
//                               2 Courses
//                             </a>
//                           </p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Median Salary</p>
//                           <p>--</p>
//                         </div>
//                         <div className="keyInfo">
//                           <p>Exams</p>
//                           <p>--</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="collegeCriteria">
//                       <ul className="row">
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/bihar-agricultural-university-bhagalpur/admission"
//                             title="Bihar Agricultural University Admission 2023 Details"
//                           >
//                             Admission 2023
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/bihar-agricultural-university-bhagalpur-placements"
//                             title="Bihar Agricultural University Placement and Companies Visiting Details"
//                           >
//                             Placements
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             href="https://www.getmyuni.com/college/bihar-agricultural-university-bhagalpur-facilities"
//                             title="Bihar Agricultural University Infrastructure & Facilities Details"
//                           >
//                             Infrastructure
//                           </a>
//                         </li>
//                       </ul>{" "}
//                     </div>
//                     <div className="clgInfoCardfooter">
//                       <button
//                         type="button"
//                         className="textRed getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={356}
//                         data-interestedlocation={75}
//                         data-ctalocation="colleges_listing_bihar-agricultural-university-bhagalpur_web_card_left_cta"
//                         data-ctatext="Apply Now"
//                         data-leadformtitle="Sign-up to Apply"
//                         data-subheadingtext="Bihar Agricultural University, Bhagalpur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/bihar-agricultural-university-bhagalpur.jpg"
//                         data-courseid=""
//                       >
//                         Apply Now
//                       </button>{" "}
//                       <button
//                         type="button"
//                         className="primaryBtn getLeadForm collegeFilterLead collegeLeadAutoFetch js-open-lead-form"
//                         data-platform="web"
//                         data-entity="all-colleges"
//                         data-entityid={356}
//                         data-interestedlocation={75}
//                         data-ctalocation="colleges_listing_bihar-agricultural-university-bhagalpur_web_card_right_cta"
//                         data-ctatext='<span class="spriteIcon whiteDownloadIcon redDownloadIcon"></span> Brochure'
//                         data-leadformtitle="Sign-up to Download"
//                         data-subheadingtext="Bihar Agricultural University, Bhagalpur"
//                         data-image="https://media.getmyuni.com/azure/college-image/small/bihar-agricultural-university-bhagalpur.jpg"
//                         data-courseid=""
//                       >
//                         <span className="spriteIcon whiteDownloadIcon redDownloadIcon" />{" "}
//                         Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row" id="sponsor_list_slot3" />
//               </div>
//               <div className="loadMoreColleges">
//                 <p className="col-12 loadMoreList" data-irank={2} data-page={2}>
//                   LOAD MORE <span className="spriteIcon redCaret" />
//                 </p>
//               </div>{" "}
//               <div className="filter-faq"></div>
//               <aside>
//                 <div className="horizontalRectangle">
//                   <div
//                     className="appendAdDiv"
//                     style={{ background: "#EAEAEA" }}
//                   >
//                     <div
//                       className="lazy-ad"
//                       data-slot={6}
//                       id="div-gpt-ad-1614408539431-6"
//                       style={{ height: 90 }}
//                     />{" "}
//                   </div>
//                 </div>
//               </aside>
//               <div className="removeFixedQuickLink"></div>
//             </div>
//           </div>
//         </div>{" "}
//       </div>
//     </div>
//   );
// };

// export default Veterinary;
