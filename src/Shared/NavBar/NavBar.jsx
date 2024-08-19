
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };



  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="dashboard">Dashboard</Link></li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-[#706f6f60] text-white">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-black text-xl menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}

              {user ? (
            <>

              <p className="text-xl p-2" onClick={handleLogOut}>Log Out</p>
            </>
          ) : (
            <>
              <Link className="text-xl p-2 ml-3" to="/login">Login</Link>

            </>
          )}
            </ul>
          </div>
          <p className="font-headingName lg:text-6xl sm:text-2xl tracking-wide">Belleza</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">{navOptions}</ul>
        </div>
        <div className="navbar-end  hidden lg:flex">
          {user ? (
            <>

              <p className="font-semibold text-xl" onClick={handleLogOut}>Log Out</p>
            </>
          ) : (
            <>
              <Link className="text-xl font-semibold" to="/login">Login</Link>
              <Link to="/signup">

                <button className="btn  bg-white ml-5 w-40 hover:bg-black hover:text-white">Sign Up</button>
              </Link>

            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
