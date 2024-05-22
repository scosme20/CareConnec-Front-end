// eslint-disable-next-line no-unused-vars
import { Outlet } from "react-router-dom";
import Navbar from "./components/navBar/navbar";


export default function Root() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }