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





export default function App() {
  return (
    <Router>
      <div>
        <BannerOne />
        <BannerSecond />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/track" element={<Tracking/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route  path="/register" element={<RegisterForm/>}/>
            {/* <Route  path="/loginsignup" element={<LoginSignup/>}/> */}
            <Route  path="/register/login" element={<Login/>}/>

          
          </Route>
        </Routes>


        <Footer/>
      </div>
    </Router>
  );
}
