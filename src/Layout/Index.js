import { Outlet } from "react-router-dom";
import CartItem from "../component/CartItem";
import Navbar from "../component/Navbar";
import SideMenu from "../component/SideMenu";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap"}}>
        <SideMenu />
        <CartItem/>
        <div className="outlet-section">
          <Outlet />
        </div>
       
      </div>
    </div>
  );
}
