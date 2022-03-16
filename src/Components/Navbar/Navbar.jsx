import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function Navbar() {
 
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <nav className={'Navbar '}>
      <Link to="/"> Home</Link>
      {loggedIn && (
        <>
          <Link to="/trips"> My Trips </Link>
          {user.username}
          <button onClick={logoutUser}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/signup"> Signup</Link>
          <Link to="/login"> Login</Link>
        </>
      )}

    </nav>
  );
}

export default Navbar;