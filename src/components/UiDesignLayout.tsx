import { Link, NavLink, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";

function UiDesignLayout() {
  return (
    <>
      <NavLink to={"/"}>
        <div className="fixed top-4 left-4 z-50 flex h-12 w-12 rounded-full bg-white p-2  shadow-lg">
          <img src="/icons/arrow-left.svg" />
        </div>
      </NavLink>
      <Outlet />
    </>
  );
}

export default UiDesignLayout;
