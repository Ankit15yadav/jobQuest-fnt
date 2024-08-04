import { Route, Routes } from "react-router-dom";
import Home from "./component/Pages/Home";
import Navbar from "./component/common/Navbar";

function App() {
  return (
    <div className=" bg-blue-200 text-black w-screen min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ab" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
