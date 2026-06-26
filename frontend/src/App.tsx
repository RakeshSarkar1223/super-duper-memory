// import { useState } from 'react'

import AboutWrapper from "./landing_page/about/AboutWrapper";
import HomeWrapper from "./landing_page/home/HomeWrapper";
import { Routes, Route } from "react-router-dom";
import ProductWrapper from "./landing_page/product/ProductWrapper";
import SignUpWrapper from "./landing_page/signup/SignUpWrapper";
import SupportWrapper from "./landing_page/support/SupportWrapper";
import PricingWrapper from "./landing_page/pricing/PricingWrapper";
import MyNavbar from "./landing_page/home/MyNavbar";
import Footer from "./landing_page/home/Footer";
import NotFound from "./landing_page/NotFound";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="pt-15 min-h-full">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/about" element={<AboutWrapper />} />
          <Route path="/products" element={<ProductWrapper />} />
          <Route path="/Signup" element={<SignUpWrapper />} />
          <Route path="/Support" element={<SupportWrapper />} />
          <Route path="/Pricing" element={<PricingWrapper />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
