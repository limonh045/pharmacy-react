import Class from "../style/SideMenu.module.css";
import { NavLink } from "react-router-dom";
import {logHandel} from '../app/CartSlice'
import { useDispatch } from "react-redux";

export default function SideMenu() {
  const dispatch = useDispatch()
  return (
    <div className={Class.SideArea}>
      <NavLink
        exact
        className={Class.NavStyle}
        to="/overview"
      >
        Overview
      </NavLink>
      <NavLink
        exact
        className={Class.NavStyle}
        to="/drugs"
      >
        Drugs
      </NavLink>
      <NavLink
        exact
        className={Class.NavStyle}
        to="/vendors"
      >
        Vendor
      </NavLink>
      <NavLink
        exact
        className={Class.NavStyle}
        to="/order-history"
      >
        Order History
      </NavLink>
      <div
        className={Class.NavStyle}
        onClick={()=>dispatch(logHandel())}
      >
        Log Out
      </div>
    </div>
  );
}
