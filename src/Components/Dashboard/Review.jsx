import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import rpic from "../../assets/home/review.png"
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";
const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
      try {
          const res = await axiosPublic.post('/give-reviews', data);
          
          if (res.data.insertedId) {
              Swal.fire({
                  title: 'Success!',
                  text: 'Thank you for your feedback',
                  icon: 'success',
                  confirmButtonText: 'OK'
              }).then(() => {
                  reset();
                  navigate('/'); 
              });
          }
      } catch (error) {
          console.error('Error adding review:', error);
      }
  }
  
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg  h-screen ">
        <div className="flex justify-center items-center">
          <img src={rpic} alt="Review Image" className="rounded-lg max-w-full" />
        </div>
        <div className="mb-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:mt-28 ">
            <div>
              <label className="label font-semibold text-gray-700">
                Give your valuable opinion
              </label>
              <textarea
                className="textarea textarea-bordered h-24 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                {...register("reviews", { required: true, maxLength: 40 })}
                required
              />
            </div>
            <div>
              <label className="label font-semibold text-gray-700">
                Your Name
              </label>
              <input
                className="input input-bordered w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                {...register("name", { required: true, maxLength: 10 })}
                required
              />
            </div>
            <button className="btn bg-black text-yellow-50 w-full text-xl  py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
              Done
            </button>
          </form>
        </div>
      </div>
      


    );
};

export default Review;