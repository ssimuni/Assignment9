import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import auth from "../firebase/firebase.config";
import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../providers/AuthProvider";
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import useDynamicTitle from "./useDynamicTitle";


const Register = () => {
    useDynamicTitle('Register Page');
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [photo, setPhoto] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(email, password, name)

        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 character long.');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter.');
            return;
        }

        if (!/[a-z]/.test(password)) {
            setRegisterError('Password must contain at least one lowercase letter.');
            return;
        }

        if (password)
            await createUser(email, password, name, photo)
                .then(result => {
                    console.log(result.user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Registration Successful!',
                    });
                    logOut();
                    navigate('/login');
                })
                .catch(error => {
                    console.error(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: error.message,
                    });
                })
    }

    return (
        <div className="bg-white place-content-center justify-center flex mb-10">
            <section className="lg:w-[800px] lg:h-[500px] flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 md:mx-0 md:my-0 bg-white border-black border rounded-lg shadow-lg">
                <div className="md:w-1/3 max-w-sm">
                    <img
                    className="rounded-lg hidden sm:block"
                        src="lr.jpg"
                        alt="Sample image"
                    />
                </div>
                <form className="md:w-1/3 max-w-sm" onSubmit={handleRegister}>
                    <div className="text-center md:text-left">
                        <h1 className="text-black font-bold text-center text-4xl mb-5 animate__animated animate__repeat-2 animate__heartBeat mt-5">Register Here!</h1>
                    </div>
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                        type="text"
                        name='name'
                        required
                        placeholder="Name"
                    />
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        type="text"
                        name='photo'
                        required
                        placeholder="Select Profile Picture"
                    />
                    <input
                        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                        type="email"
                        name='email'
                        required
                        placeholder="Email Address"
                    />
                    <div className="flex">
                        <input
                            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                            type={showPassword ? "text" : "password"}
                            name='password'
                            required
                            placeholder="Password"
                        />
                        <span className="-ml-6 pt-6" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />
                            }
                        </span>
                    </div>


                    <div className="text-center md:text-left">
                        <button
                            className="mt-4 bg-black px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left mb-5">
                        Already have an account?{" "}
                        <a
                            className="text-black hover:underline hover:underline-offset-4"
                            href="/login"
                        >
                            Login
                        </a>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
            </section>
        </div>
    );
};

export default Register