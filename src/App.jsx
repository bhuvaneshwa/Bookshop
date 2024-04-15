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
import Faq from "./pages/Faq";




import Membership from "./pages/Membership";
import Testimonial from "./pages/Testimonial";
import Newbookview from "./pages/Books/Viewsbook/Newbookview";
import Premiumbooks from "./pages/Books/Viewsbook/Premiumbooks";

import Generalview from "./pages/Books/Viewsbook/Generalview";
import Dashboard from "./components/Dashboard/Admins/Dashboard";

export default function App() {
  return (
    <Router>
      <div>
        <BannerOne />
        <BannerSecond />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeSection />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="track" element={<Tracking />} />
            <Route path="blog" element={<Blog />} />
            <Route path="register" element={<RegisterForm />} />
            
            <Route path="register/login" element={<Login />} />

            <Route path="faq" element={<Faq/>} />

            <Route path="register/login/dashboard" element={<Dashboard/>} />

           
            <Route path="membership" element={<Membership/>} />
            <Route path="testimonial" element={<Testimonial/>} />

            <Route path="newbookview" element={<Newbookview/>} />
            <Route path="premiumbooks" element={<Premiumbooks/>} />
            <Route path="generalview" element={<Generalview/>} />


          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
