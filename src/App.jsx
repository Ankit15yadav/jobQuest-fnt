import { Route, Routes, useLoaderData, useLocation } from "react-router-dom";
import Home from "./component/Pages/Home";
import Navbar from "./component/common/Navbar";
import Login from "./component/Pages/Login";
import Signup from "./component/Pages/Singup"
import VerifyEmail from "./component/Pages/VerifyEmail";
import Companies from "./component/Pages/Companies";
import CreateCompany from "./component/Pages/CreateCompany";
import React from "react";
import JobListing from "./component/Pages/JobListing";
import Profile from "./component/Pages/My-Profile";
import Dashboard from "./component/Pages/Dashboard";
import AddCompany from "./component/Pages/AddCompany";
import CandidatesSelected from "./component/Pages/DashboardPages/CandidatesSelected";
import CheckApplication from "./component/Pages/DashboardPages/CheckApplication";
import DashEmployer from "./component/Pages/DashboardPages/DashEmployer";
import JobsCreated from "./component/Pages/DashboardPages/JobsCreated";
import MyCompnay from "./component/Pages/DashboardPages/MyCompnay";
import { useSelector } from "react-redux";
import Chatbot from "./component/Pages/Chatbot";
import Createjobs from "./component/Auth/Createjobs";
import EditMyProfile from "./component/Pages/EditMyProfile";

function App() {

  const { user } = useSelector((state) => state.profile)
  const { location } = useLocation();
  return (
    <div className=" bg-gradient-to-r from-black  to-black text-black w-screen min-h-screen overflow-x-hidden " >

      {/* {
        location.pathname !== "/" ? <Navbar /> : ""
      } */}
      <Navbar />
      {/* <Chatbot /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="dashboard/joblisting" element={<JobListing />} />
        <Route path="/create-company" element={<CreateCompany
        />} />

        <Route element={<Dashboard />}>
          <Route path="/dashboard/my-profile" element={<Profile />} />
          <Route path="/dashboard/createCompany" element={<CreateCompany />} />
          <Route path="/dashboard/Employer" element={<DashEmployer />} />
          <Route path={`/dashboard/myCompany/:userId`} element={<MyCompnay />} />
          <Route path="/dashboard/check-applications" element={<CheckApplication />} />
          <Route path="/dashboard/selected" element={<CandidatesSelected />} />
          <Route path="/dashboard/jobsCreated" element={<JobsCreated />} />
          <Route path="dashboard/edit-my-Profile" />
          <Route path="/dashboard/edit-my-profile/:userId" element={<EditMyProfile />} />

        </Route>
        <Route path="/createJobs/:userId/:companyId" element={<Createjobs />} />

      </Routes>
    </div>
  );
}

export default App;
