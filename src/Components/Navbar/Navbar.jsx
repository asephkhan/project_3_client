import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function Navbar() {
 
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <nav className=''>
    
      <Link className='' to="/">TRAVEL PLANNER </Link>
    
      {loggedIn && (
        <>
          {/* <Link className='' to="/trips"> My Trips </Link> */}
          <div> <h3>{user.username}</h3> 
          <button  onClick={logoutUser}>Logout</button>
          </div>
        </>
      )}

     
     
    </nav>
  );
}

export default Navbar;