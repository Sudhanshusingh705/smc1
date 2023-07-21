import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './screen/Home';
import Login from './screen/Login';
import Addmission from './pages/Addmission';
import Appdownload from './pages/Appdownload';
import Exams from './pages/Exams';
import News from './pages/News';
import More from './pages/More';
import Studyabroad from './pages/Studyabroad';
import Topcollege from './pages/Topcollege';
import Topcourse from './pages/Topcourse';
import  {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route excat path="/" element={<Home />} > </Route>
          <Route exact path="/login" element={<Login />} > </Route>
          {/*Pages folder route*/}
          <Route exact path="/addmission" element={<Addmission />} > </Route>
          <Route exact path="/appdownload" element={<Appdownload />} > </Route>
          <Route exact path="/exams" element={<Exams />} > </Route>
          <Route exact path="/news" element={<News />} > </Route>
          <Route exact path="/more" element={<More />} > </Route>
          <Route exact path="/studyabroad" element={<Studyabroad />} > </Route>
          <Route exact path="/topcollege" element={<Topcollege />} > </Route>
          <Route exact path="/topcourse" element={<Topcourse />} > </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
    
  )
}

export default App;
