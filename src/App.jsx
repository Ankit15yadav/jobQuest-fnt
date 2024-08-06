import { Route, Routes } from "react-router-dom";
import Home from "./component/Pages/Home";
import Navbar from "./component/common/Navbar";
import Login from "./component/Pages/Login";
import Signup from "./component/Pages/Singup"

function App() {
  return (
    <div className=" bg-blue-200 text-black w-screen min-h-screen overflow-x-hidden" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
