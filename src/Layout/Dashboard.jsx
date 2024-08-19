import { FaEnvelope, FaHome,  FaMoneyCheckAlt,  FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { FaNoteSticky } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";
import { GiStabbedNote } from "react-icons/gi";


const Dashboard = () => {
    const { logOut } = useAuth();

    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        
        <div className="flex h-screen">
            {/* dashboard side bar */}
            <div className="w-64 bg-gray-900 text-white">
                <ul className="menu p-4 lg:text-xl" >
                
                <li className="mb-3 mt-5 ">
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
               
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                
                    {/* shared nav links */}
                    <div className="divider divider-warning" ></div>
                    {
                        isAdmin ? <>
                        <li className="lg:mb-5">
                           <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li className="lg:mb-5">
                              <NavLink to="/dashboard/addItems">
                                    <GiStabbedNote/>
                                    Add Service</NavLink>
                            </li>

                            <li className="lg:mb-5">
                            <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogOut}>  <RiLogoutBoxFill />LogOut</button>

                            </li>
                        </>
                            :
                            <>
                        
                               <li className="lg:mb-5">
                                    <NavLink to="/dashboard/cart">
                                        <FaNoteSticky></FaNoteSticky>
                                        Booking List ({cart.length})</NavLink>
                                </li>
                                <li className="lg:mb-5">
                                          <NavLink to="/dashboard/payhistory">

                                          <FaMoneyCheckAlt/> Payment History</NavLink>
                                </li>
                           
                                <li className="lg:mb-5">
                                    <NavLink to="/dashboard/review">
                                    <MdOutlineReviews />
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                <button onClick={handleLogOut}> <RiLogoutBoxFill /> LogOut</button>

                            </li>
                         
                            </>
                    }
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;