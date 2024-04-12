import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import BannerOne from "./pages/BannerOne";
import BannerSecond from "./pages/BannerSecond";
import HomeSection from "./pages/HomeSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import Tracking from "./pages/Tracking";
import Blog from "./pages/Blog";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
<<<<<<< HEAD
import Navbar from "./navbar";
=======
import Premiumbooks from "./pages/Books/Viewsbook/Premiumbooks";
>>>>>>> origin/master

import Dashboard from "./components/Dashboard/Dashboard"
import Dashboards from "./components/Dashboard/Admins/Dashboards";



export default function App() {
  return (
    <Router>
      <div>
        <BannerOne />
        <BannerSecond />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomeSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/track" element={<Tracking />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/register" element={<RegisterForm />} />
            {/* <Route  path="/loginsignup" element={<LoginSignup/>}/> */}
            <Route path="/register/login" element={<Login />} />


<<<<<<< HEAD
=======
            <Route path="/premiumbooks" element={<Premiumbooks/>}/>




            <Route path="/register/login/dashboard" element={<Dashboard/>}/>

            <Route path="/register/login/dashboard" element={<Dashboards/>}/>

          
>>>>>>> origin/master
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
