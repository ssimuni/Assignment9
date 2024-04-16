import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import Swal from 'sweetalert2';

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name)

        setRegisterError('');
        setSuccess('');

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
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    console.log(result.user);
                    setSuccess('Registration Successfull.');
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Registration Successful!',
                    });
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
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image"
                />
            </div>
            <form className="md:w-1/3 max-w-sm" onSubmit={handleRegister}>
                <div className="text-center md:text-left">
                    <h1 className="text-blue-800 font-bold text-center text-5xl mb-5">Register Here!</h1>
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
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account?{" "}
                    <a
                        className="text-blue-600 hover:underline hover:underline-offset-4"
                        href="/login"
                    >
                        Login
                    </a>
                </div>
            </form>
            {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
        </section>
    );
};

export default Register