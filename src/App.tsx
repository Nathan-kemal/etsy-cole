import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
