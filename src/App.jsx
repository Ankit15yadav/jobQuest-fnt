import { Route, Routes } from "react-router-dom";
import Home from "./component/Pages/Home";
import Navbar from "./component/common/Navbar";
import Login from "./component/Pages/Login";
import Signup from "./component/Pages/Singup"
import VerifyEmail from "./component/Pages/VerifyEmail";
import Companies from "./component/Pages/Companies";
import CreateCompany from "./component/Pages/CreateCompany";
import React from "react";
import { ThreeDCardDemo } from "./utils/test";
import JobListing from "./component/Pages/JobListing";
import Profile from "./component/Pages/My-Profile";


function App() {
  return (
    <div className=" bg-gradient-to-r from-gray-800 via-gray-900 to-black text-black w-screen min-h-screen overflow-x-hidden " >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/dashboard/joblisting" element={<JobListing />} />
        <Route path="/dashboard/my-profile" element={<Profile />} />
        <Route path="/create-company" element={<CreateCompany
        />} />
      </Routes>
    </div>
  );
}

export default App;
