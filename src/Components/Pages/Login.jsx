/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";

// eslint-disable-next-line react/prop-types
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Login Failed",
                    text: error.message,
                    icon: "error",
                });
            });
    };

    return (
        <>
            <Helmet>
                <title>Belleza |Login </title>
            </Helmet>
            <div className="min-h-screen bg-gradient-to-br from-gray-900  to-gray-700 flex justify-center items-center ">

                <div className="card w-96 shadow-2xl bg-base-100 ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input disabled={false} className="btn bg-black text-white hover:bg-white hover:text-black  border-0 border-b-4 border-basic " type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="px-6 text-xl">
                        <small>
                            New Here?
                            <Link
                                to="/signup"
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300 underline p-2"
                            >
                                Create an account
                            </Link>
                        </small>
                    </p>
                    <GoogleLogin />
                </div>
            </div>

        </>
    );
};

export default Login;
