import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function Navbar() {
 
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <nav className='Navbar'>
    
      <Link className='NavbarLinks' to="/"> Home</Link>
    
      {loggedIn && (
        <>
          <Link className='NavbarLinks' to="/trips"> My Trips </Link>
          <div className='user-div'> <h3>{user.username}</h3> 
          <button  onClick={logoutUser}>Logout</button>
          </div>
        </>
      )}

      {!loggedIn && (
        <>
          <Link className='NavbarLinks' to="/signup"> Signup</Link>
          <Link className='NavbarLinks' to="/login"> Login</Link>
        </>
      )}
     
    </nav>
  );
}

export default Navbar;