/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import GoogleLogin from "./GoogleLogin";

// eslint-disable-next-line react/prop-types
const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // const onSubmit = data =>{
    //     console.log(data);
    //     createUser(data.email, data.password)
    //     .then(result =>{
    //         const loggedUser = result.user;
    //         console.log(loggedUser)

    //     })
    // }

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            password: data.password
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <>
            <Helmet>
                <title>Belleza | Sign Up</title>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-gray-900  to-gray-700 flex justify-center items-center">

                <div className="card w-96 shadow-2xl bg-base-100 p-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-2 rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <p>Forgot password?</p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-black text-white text-xl hover:bg-white hover:text-black  border-0 border-b-4 border-basic " type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="px-6 text-xl">
                        <small>
                            Already have an account?
                            <Link
                                to="/login"
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300 underline"
                            >
                                Back to Login
                            </Link>
                        </small>
                    </p>

                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </>
    );
};

export default SignUp;

