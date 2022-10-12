import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <nav className=" flex justify-between">
      <Link className="text-2xl no-underline" to="/">
        TRAVEL PLANNER
      </Link>
      <ul className="flex gap-3">
        {loggedIn && (
          <>
            <li>{user.username}</li>
            <li>
              <button className=" bg-blue-500 text-sm p-0.5 " onClick={logoutUser}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
