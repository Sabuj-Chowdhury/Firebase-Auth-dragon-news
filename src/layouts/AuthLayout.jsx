import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#f3f3f3] ">
      <div className="w-11/12 mx-auto py-8">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
