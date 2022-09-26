import "./App.css";
import "./components/About/About.css";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Projects from "./components/ProjectDetails/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp/Signup";
import Dashboards from "./components/Dashboard/Dashboards";
import AdminPannel from "./components/AdminPannel/AdminPannel";
import ManageProfile from "./components/ManageProfile/ManageProfile";
import SocialLinks from "./components/SocialLinks/SocialLinks";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element ={<Main/>}></Route>
          <Route exact path='/About' element={<About/>}></Route>
          <Route exact path='/header' element={<Header/>}></Route>
          <Route exact path='/feedbacks' element={<Feedbacks/>}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
          <Route exact path="/login" element={<Login />} />
          <Route exat path='/signup' element={<Signup/>}></Route>
          {/* <Route exact path ='/dashboard' element={<Dashboards/>}></Route> */}
          <Route exact path='/adminPannel' element={<AdminPannel/>}></Route>
          <Route exact path="/manageProfile" element={<ManageProfile/>}></Route>
          <Route exact path='/socialLinks' element={<SocialLinks/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
