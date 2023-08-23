import React, { useState } from 'react';
import "./Topcollege.css";

const Topcollege = () => {
  const [colleges, setColleges] = useState([
    // Your college data here

      { name: 'College 1', state: 'State 1', city: 'City 1', stream: 'Stream 1', course: 'Course 1', programMode: 'Program Mode 1', ownership: 'Ownership 1', examAccepted: 'Exam Accepted 1', courseType: 'Course Type 1', totalFees: 'Total Fees 1' },
      { name: 'College 2', state: 'State 2', city: 'City 2', stream: 'Stream 2', course: 'Course 2', programMode: 'Program Mode 2', ownership: 'Ownership 2', examAccepted: 'Exam Accepted 2', courseType: 'Course Type 2', totalFees: 'Total Fees 2' },
      { name: 'College 3', state: 'State 1', city: 'City 3', stream: 'Stream 1', course: 'Course 3', programMode: 'Program Mode 1', ownership: 'Ownership 1', examAccepted: 'Exam Accepted 1', courseType: 'Course Type 3', totalFees: 'Total Fees 3' },
      { name: 'College 4', state: 'State 2', city: 'City 4', stream: 'Stream 2', course: 'Course 2', programMode: 'Program Mode 2', ownership: 'Ownership 2', examAccepted: 'Exam Accepted 3', courseType: 'Course Type 2', totalFees: 'Total Fees 4' },
      { name: 'College 5', state: 'State 3', city: 'City 5', stream: 'Stream 1', course: 'Course 1', programMode: 'Program Mode 1', ownership: 'Ownership 1', examAccepted: 'Exam Accepted 2', courseType: 'Course Type 1', totalFees: 'Total Fees 5' },
      // Continue adding more college data entries
  ]);
  const [visibleColleges, setVisibleColleges] = useState(3);
  const [selectedFilters, setSelectedFilters] = useState({
    state: 'All',
    city: 'All',
    stream: 'All',
    course: 'All',
    ownership: 'All',
    courseType: 'All',
    affilatedBy: 'All',
  });

  const loadMoreColleges = () => {
    setVisibleColleges(prevVisibleColleges => prevVisibleColleges + 3);
  };

  const filterColleges = () => {
    // Filtering logic based on selectedFilters
    const filteredColleges = colleges.filter(college => {
      return (
        (selectedFilters.state === 'All' || college.state === selectedFilters.state) &&
        (selectedFilters.city === 'All' || college.city === selectedFilters.city) &&
        (selectedFilters.stream === 'All' || college.stream === selectedFilters.stream) &&
        (selectedFilters.course === 'All' || college.course === selectedFilters.course) &&
        (selectedFilters.ownership === 'All' || college.ownership === selectedFilters.ownership) &&
        (selectedFilters.courseType === 'All' || college.courseType === selectedFilters.courseType) &&
        (selectedFilters.affilatedBy === 'All' || college.affilatedBy === selectedFilters.affilatedBy)
      );
    });

    return filteredColleges;
  };

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
    setVisibleColleges(3); // Reset visible colleges when changing filters
  };

  const filteredColleges = filterColleges();

  // Define your filter options here
  const filterOptions = {
    state: ['Maharastra (1602)', 'TamilNadu (1274)', 'Uttar Pradesh (1209)', 'Karnataka (1109)', 'Kerala (835)', 'Telangana(630)', 'West Bangal (619)', 'Gujarat (577)', 'Punjab (547)', 'Haryana (546)', 'Andhra Predesh (538)', 'Madhya Pradesh (504)', 'Rajsthan (476)', 'Delhi NCR (371)', 'Odisha (306)', 'UttaraKhand (193)', 'Bihar (184)', 'Assam (183)', 'Chhattisgarh (132)', 'Himanchal Pradesh (128)', 'Jammu & Kashmir (110)', 'Jhar Khand (108)', 'Puducherry (54)', 'Goa (39)', 'Meghalaya (24)', 'Sikkim (20)', 'Manipur (19)', 'Nagaland (18)', 'Tripura (18)', 'Mizoram (10)', 'Arunachal Pradesh (1209)', 'Andaman & Nicobar (3)',], // Replace with actual state values
    city: ['Pune (83)', 'Nagpur (45)', 'Mumbai (43)', 'Nashik (19)', 'Aurangabad (17)', 'Kolhapur (14)', 'Solapur (14)', 'Amravati (13)', 'Jalgaon (11)', 'Ahmednagar (10)', 'Navi Mumbai (9)', 'Thane (8)', 'Satara (8)', 'Sangli (7)', 'Beed (6)', 'Ratnagiri (6)', 'Wardha (6)', 'Buldhana (5)', 'Akola (5)', 'Raigad (4)', 'Yavatmal (4)', 'Chandrapur (4)', 'Nandurbar (3)', 'Osmanabad (3)', 'Dhule (3)', 'Gondia (2)', 'Nanded (2)', 'Bhandara (2)', 'Washim (2)', 'Parbhani (2)', 'Latur (2)', 'Hingoli (1)', 'Gadchiroli (1)', 'Malad West (1)', 'Jalna (1)', 'Sindhudurg (1)', 'Karad (1)', 'Lonere (1)'], // Replace with actual city values
    stream: ['Management (600)', 'Engineering (434)', 'Science (398)', 'Arts (368)', 'Commerce (304)', 'Computer (264)', 'Education (113)', 'Pharmacy (69)', 'Law (67)', 'Medical (65)', 'Mass Communication (63)', 'Architecture (59)' , 'Design (49)' , 'Hotel Management (35)', 'Paramedical (33)', 'Dental (21)', 'Vocational Courses (14)', 'Veterinary (3)'],
    course: [ 'BTech (369)', 'MTech (226)' , 'Bachelor of Engineering (134)', 'MBA (126)', 'MCA (73)', 'BSc (50)', 'MSc (41)', 'ME (31)', 'BCA (30)', 'B.Arch (29)', 'BA (28)', 'PGD (27)', 'MA (24)', 'BCom (18)', 'B Pharmacy (14)', 'B.Des (14)', 'M.Com (14)', 'LLM (13)', 'BFA (13)', 'LLB (13)', 'M.Phil (12)', 'B.Ed (12)', 'M.Lib.I.Sc (11)', 'M.Ed (11)', 'M.Pharm (11)', 'MMS (10)', 'BHM (10)', 'BMS (9)', 'B.Lib.I.Sc (9)', 'BSW (8)' , 'BJMC (7)', 'MSW (7)', 'M.P.Ed (6)', 'MFA (6)', 'BBS (6)', 'B.F.Sc (5)' , 'MD (5)', 'BMLT (5)', 'MCM (5)' , 'M.Des (5)', 'M.S (5)', 'MTM (4)', 'BDS (4)', 'MMM (4)', 'MDS (4)', 'B.P.Ed (4)', 'BAMS (3)', 'MJMC (3)', 'M.F.Sc (3)', 'BMM (3)', 'Master of Chirurgiae [M.Ch] (3)', 'BPT (3)', 'MBBS (3)', 'MPH (2)', 'BVA (2)', 'B.Voc (2)', 'MFM (2)', 'M.V.Sc (2)', 'BHMS (2)', 'MPT (2)', 'MPA (2)', 'B.Optom (2)', 'B.Com LLB (1)', 'MHA (1)', 'BMC (1)', 'M.Voc (1)', 'M.Plan (1)', 'MIB (1)', 'MVA (1)', 'B.V.Sc (1)', 'Pharm.D (1)', 'MHM (1)', '[BOT] (1)', '[BHM] (1)'],
    programMode: ['Offline (368)', 'Distance Education (3)', 'Online (3)'], // Replace with actual program mode values
    ownership: ['Private (301)', 'Public (45)'], // Replace with actual ownership values
    courseType: ['Bachelors (368)', 'Masters (253)', 'Diploma (78)', 'Postgraduate Diploma (20)','Doctorate (6)','Dual Degree (5)','Postgraduate Certificate (5)','Certificate (4)'], // Replace with actual course type values
    affilatedBy: ['Savitribai Phule Pune University [SPPU]', 'University of Mumbai [UM] Mumbai (46)', 'Rashtrasant Tukadoji Maharaj Nagpur University (44)', 'Shivaji University, [SUK] Kolhapur (25)', 'Sant Gadge Baba Amravati University (21)', 'NMU - Kavayitri Bahinabai Chaudhari North Maharashtra University (15)', 'Vasantrao Naik Marathwada Krishi Vidyapeeth, [VNMKV] Parbhani (2)', 'Maharshi Dayanand University, [MDU] Rohtak (2)', 'Indira Gandhi National Open University, [IGNOU] New Delhi (2)', 'Biju Patnaik University of Technology (1)', 'JNTUH - Jawaharlal Nehru Technological University, Hyderabad (1)', 'Maharashtra Animal and Fishery Sciences University (1)', 'MPKV - Mahatma Phule Krishi Vidyapeeth (1)', 'KSOU - Karnataka State Open University (1)', 'AKU - Aryabhatta Knowledge University (1)', 'Jawaharlal Nehru University, [JNU] New Delhi (1)', 'SIU Pune - Symbiosis International (1)', 'Bharati Vidyapeeth Deemed University Pune (1)'] // Replace with actual total fees values
  };

  const [selectedState, setSelectedState] = useState('All');
  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const [selectedCity, setSelectedCity] = useState('All');
  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const [selectedStream, setSelectedStream] = useState('All');
  const handleStreamChange = (stream) => {
    setSelectedStream(stream);
  };

  const [selectedCourse, setSelectedCourse] = useState('All');
  const handleCourseChange = (course) => {
    setSelectedCourse(course);
  };
  
  const [selectedOwnership, setSelectedOwnership] = useState('All');
  const handleOwnershipChange = (ownership) => {
    setSelectedOwnership(ownership);
  };

  const [selectedCourseType, setSelectedCourseType] = useState('All');
  const handleCourseTypeChange = (coursetype) => {
    setSelectedCourseType(coursetype);
  };

  const [selectedAffilatedBy, setSelectedAffilatedBy] = useState('All');
  const handleAffilatedByChange = (state) => {
    setSelectedAffilatedBy(state);
  };

  return (
    <div className="row">
      <div className="col-md-3" style={{marginTop: '-120px'}}>
        {/* Left side filter sidebar */}
        <h4>Found 12403 Colleges</h4>
        <div className="filter-list">
          <h5>State</h5>
          <ul className={`list-group filter-scroll-state`}>
            <li
              className={`list-group-item ${selectedState === 'All' ? 'active' : ''}`}
              onClick={() => handleStateChange('All')}
            >
              All
            </li>
            {filterOptions.state.map(option => (
              <li
                key={option}
                className={`list-group-item ${selectedState === option ? 'active' : ''}`}
                onClick={() => handleStateChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          
          {/* Render other filter options only if a state is selected */}
          {selectedState !== 'All' && (
            <>
              {Object.entries(filterOptions).map(([filterName, options]) => (
                <div key={filterName}>
                  <h5>{filterName}</h5>
                  <ul className={`list-group filter-scroll-${filterName}`}>
                    <li
                      className={`list-group-item ${selectedFilters[filterName] === 'All' ? 'active' : ''}`}
                      onClick={() => handleFilterChange(filterName, 'All')}
                    >
                      All
                    </li>
                    {options.map(option => (
                      <li
                        key={option}
                        className={`list-group-item ${selectedFilters[filterName] === option ? 'active' : ''}`}
                        onClick={() => handleFilterChange(filterName, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
        {/*City option*/}
        <div className="filter-list">
          <h5>City</h5>
          <ul className={`list-group filter-scroll-city`}>
            <li
              className={`list-group-item ${selectedCity === 'All' ? 'active' : ''}`}
              onClick={() => handleCityChange('All')}
            >
              All
            </li>
            {filterOptions.city.map(option => (
              <li
                key={option}
                className={`list-group-item ${selectedCity === option ? 'active' : ''}`}
                onClick={() => handleCityChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          
          {/* Render other filter options only if a state is selected */}
          {selectedCity !== 'All' && (
            <>
              {Object.entries(filterOptions).map(([filterName, options]) => (
                <div key={filterName}>
                  <h5>{filterName}</h5>
                  <ul className={`list-group filter-scroll-${filterName}`}>
                    <li
                      className={`list-group-item ${selectedFilters[filterName] === 'All' ? 'active' : ''}`}
                      onClick={() => handleFilterChange(filterName, 'All')}
                    >
                      All
                    </li>
                    {options.map(option => (
                      <li
                        key={option}
                        className={`list-group-item ${selectedFilters[filterName] === option ? 'active' : ''}`}
                        onClick={() => handleFilterChange(filterName, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
        {/*Stream*/}
        <div className="filter-list">
          <h5>Stream</h5>
          <ul className={`list-group filter-scroll-stream`}>
            <li
              className={`list-group-item ${selectedStream === 'All' ? 'active' : ''}`}
              onClick={() => handleStreamChange('All')}
            >
              All
            </li>
            {filterOptions.stream.map(option => (
              <li
                key={option}
                className={`list-group-item ${selectedStream === option ? 'active' : ''}`}
                onClick={() => handleStreamChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          
          {/* Render other filter options only if a state is selected */}
          {selectedStream !== 'All' && (
            <>
              {Object.entries(filterOptions).map(([filterName, options]) => (
                <div key={filterName}>
                  <h5>{filterName}</h5>
                  <ul className={`list-group filter-scroll-${filterName}`}>
                    <li
                      className={`list-group-item ${selectedFilters[filterName] === 'All' ? 'active' : ''}`}
                      onClick={() => handleFilterChange(filterName, 'All')}
                    >
                      All
                    </li>
                    {options.map(option => (
                      <li
                        key={option}
                        className={`list-group-item ${selectedFilters[filterName] === option ? 'active' : ''}`}
                        onClick={() => handleFilterChange(filterName, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
        {/*Course*/}
        <div className="filter-list">
          <h5>Course</h5>
          <ul className={`list-group filter-scroll-course`}>
            <li
              className={`list-group-item ${selectedCourse === 'All' ? 'active' : ''}`}
              onClick={() => handleCourseChange('All')}
            >
              All
            </li>
            {filterOptions.state.map(option => (
              <li
                key={option}
                className={`list-group-item ${selectedCourse === option ? 'active' : ''}`}
                onClick={() => handleCourseChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          
          {/* Render other filter options only if a state is selected */}
          {selectedCourse !== 'All' && (
            <>
              {Object.entries(filterOptions).map(([filterName, options]) => (
                <div key={filterName}>
                  <h5>{filterName}</h5>
                  <ul className={`list-group filter-scroll-${filterName}`}>
                    <li
                      className={`list-group-item ${selectedFilters[filterName] === 'All' ? 'active' : ''}`}
                      onClick={() => handleFilterChange(filterName, 'All')}
                    >
                      All
                    </li>
                    {options.map(option => (
                      <li
                        key={option}
                        className={`list-group-item ${selectedFilters[filterName] === option ? 'active' : ''}`}
                        onClick={() => handleFilterChange(filterName, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
      {/*OwnerShip*/}
      <div className="filter-list">
          <h5>OwnerShip</h5>
          <ul className={`list-group filter-scroll-ownership`}>
            <li
              className={`list-group-item ${selectedOwnership === 'All' ? 'active' : ''}`}
              onClick={() => handleOwnershipChange('All')}
            >
              All
            </li>
            {filterOptions.ownership.map(option => (
              <li
                key={option}
                className={`list-group-item ${selectedOwnership === option ? 'active' : ''}`}
                onClick={() => handleOwnershipChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          
          {/* Render other filter options only if a state is selected */}
          {selectedOwnership !== 'All' && (
            <>
              {Object.entries(filterOptions).map(([filterName, options]) => (
                <div key={filterName}>
                  <h5>{filterName}</h5>
                  <ul className={`list-group filter-scroll-${filterName}`}>
                    <li
                      className={`list-group-item ${selectedFilters[filterName] === 'All' ? 'active' : ''}`}
                      onClick={() => handleFilterChange(filterName, 'All')}
                    >
                      All
                    </li>
                    {options.map(option => (
                      <li
                        key={option}
                        className={`list-group-item ${selectedFilters[filterName] === option ? 'active' : ''}`}
                        onClick={() => handleFilterChange(filterName, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>
        {/*courseType*/}
        <div className="filter-list">
        <h5>Course Type</h5>
        <ul className={`list-group filter-scroll-coursetype`}>
          <li
            className={`list-group-item ${selectedCourseType === 'All' ? 'active' : ''}`}
            onClick={() => handleCourseTypeChange('All')}
          >
            All
          </li>
          {filterOptions.state.map(option => (
            <li
              key={option}
              className={`list-group-item ${selectedCourseType === option ? 'active' : ''}`}
              onClick={() => handleCourseTypeChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
        
        {/* Render other filter options only if a coursetype is selected */}
        {selectedCourseType !== 'All' && (
          <>
            {Object.entries(filterOptions).map(([filterName, options]) => (
              <div key={filterName}>
                <h5>{filterName}</h5>
                <ul className={`list-group filter-scroll-${filterName}`}>
                  <li
                    className={`list-group-item ${selectedFilters[filterName] === 'All' ? 'active' : ''}`}
                    onClick={() => handleFilterChange(filterName, 'All')}
                  >
                    All
                  </li>
                  {options.map(option => (
                    <li
                      key={option}
                      className={`list-group-item ${selectedFilters[filterName] === option ? 'active' : ''}`}
                      onClick={() => handleFilterChange(filterName, option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
      {/*AffilatedBy*/}
      <div className="filter-list">
          <h5>Affilated By</h5>
          <ul className={`list-group filter-scroll-affilatedBy`}>
            <li
              className={`list-group-item ${selectedAffilatedBy === 'All' ? 'active' : ''}`}
              onClick={() => handleAffilatedByChange('All')}
            >
              All
            </li>
            {filterOptions.affilatedBy.map(option => (
              <li
                key={option}
                className={`list-group-item ${selectedAffilatedBy === option ? 'active' : ''}`}
                onClick={() => handleAffilatedByChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          
          {/* Render other filter options only if a state is selected */}
          {selectedAffilatedBy !== 'All' && (
            <>
              {Object.entries(filterOptions).map(([filterName, options]) => (
                <div key={filterName}>
                  <h5>{filterName}</h5>
                  <ul className={`list-group filter-scroll-${filterName}`}>
                    <li
                      className={`list-group-item ${selectedFilters[filterName] === 'All' ? 'active' : ''}`}
                      onClick={() => handleFilterChange(filterName, 'All')}
                    >
                      All
                    </li>
                    {options.map(option => (
                      <li
                        key={option}
                        className={`list-group-item ${selectedFilters[filterName] === option ? 'active' : ''}`}
                        onClick={() => handleFilterChange(filterName, option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
        </div>

      </div>

      <div className="col-md-9" style={{marginTop: '-120px'}}>
        {/* Top colleges list */}
        <h2>Top Colleges</h2>
        <div className="row">
          {filteredColleges.slice(0, visibleColleges).map(college => (
            <div className="col-md-4 mb-3" key={college.name}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{college.name}</h5>
                  <p className="card-text">{college.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleColleges < filteredColleges.length && (
          <button className="btn btn-primary" onClick={loadMoreColleges}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Topcollege;
