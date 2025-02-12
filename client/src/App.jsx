import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
// import { SignInButton } from "@clerk/clerk-react";

const Home = lazy(() => import("./pages/Home.jsx"));
const Result = lazy(() => import("./pages/Result.jsx"));
const BuyCredit = lazy(() => import("./pages/BuyCredit.jsx"));
const App = () => {
  return (
    <div className="">
      <Navbar />
      {/* <SignInButton /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
