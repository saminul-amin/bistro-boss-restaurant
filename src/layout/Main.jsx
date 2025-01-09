import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Main() {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
}
