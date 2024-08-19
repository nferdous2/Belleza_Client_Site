/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import { FaTrashAlt } from "react-icons/fa";


const Service = ({ item, showDescription = true }) => {


  const { name, image, price, duration, _id, description } = item;
  const { user } = useAuth()
  const navigate = useNavigate();
  const location = useLocation()
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart()
  const [isAdmin] = useAdmin();

  //cart added
  const handleAddToCart = () => {
    if (user && user.email) {
      //sending cart item to db
      const cartItem = {
        serviceId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
  .then(res => {
    if (res.data.success) {
      // Item successfully added to the cart
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} added to your list`,
        showConfirmButton: false,
        timer: 1500
      });
      // Refetch cart to update the cart items count
      refetch();
    } else if (res.data.message === 'Item already in cart') {
      // Item is already in the cart, show an alert
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: `${name} is already in your cart`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
    }
    else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }


  const handleDeleteItem = async (_id, name) => {
    console.log('Attempting to delete item with _id:', _id); // Log the _id

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Correct the URL construction using template literals
          const res = await axiosSecure.delete(`/deleteData/${_id}`);

          if (res.data.success) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} has been deleted`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch(); 
            window.location.reload();

          } else {
            console.error('Error deleting item:', res.data.error);
            Swal.fire('Error', res.data.error, 'error');
          }
        } catch (error) {
          console.error('Error deleting item:', error);
          Swal.fire('Error', 'Failed to delete item', 'error');
        }
      }
    });
  };



  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 p-2 w-full items-start sm:items-center sm:justify-between">
      <div className="flex space-x-2 items-center">

        <div className="avatar">
          <div className="mask mask-hexagon w-24">
            <img src={image} alt="" />
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold">{name}</h3>
          {showDescription && <p>{description}</p>}
          <p className="mt-4">
            <span style={{ fontWeight: "bold" }}>Estimate Time: </span>{duration} min
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <p className="text-yellow-400 font-bold m-3">${price}</p>
        {isAdmin ? (
          <button
            onClick={() => handleDeleteItem(_id, name)}
            className="btn btn-ghost btn-lg"
          >
            <FaTrashAlt className="text-red-600" />
          </button>
        ) : (
          <div onClick={handleAddToCart} className="w-full sm:w-auto">
            <button className="bg-white btn border-0 border-b-4 border-basic w-full sm:w-48">
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>

  );
};

export default Service;
