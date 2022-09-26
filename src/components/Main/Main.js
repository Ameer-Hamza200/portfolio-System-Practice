import React, {useState, useEffect} from 'react'
import About from '../About/About'
import Feedbacks from '../Feedbacks/Feedbacks'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Projects from '../ProjectDetails/Projects'
import Reviews from '../Reviews/Reviews'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
  const [userLogin, userLoggedIn] = useState(false);
  useEffect(() => {
    notify();
  },[]);
  
  const notify =()=>{
    toast.success("YOu are LogedIn", {
        position: "top-right",
        pauseOnHover: true,
        autoClose: 3000
      });}
  return (
    <div>
          
            <Header />
            <About />
            <Projects />
            <Feedbacks />
            <Reviews />
            <Footer/>
    </div>
  )
}

export default Main