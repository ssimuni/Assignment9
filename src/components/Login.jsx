import { VscGithub } from "react-icons/vsc";
import React, { useState } from 'react';
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import 'animate.css';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email, password)

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Login Successful!',
        });
        setEmail('');
        setPassword('');
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
        });
      })
  }
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Google Login Successful!',
      });
      setEmail('');
      setPassword('');
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Google Login Failed',
        text: 'Failed to sign in with Google.',
      });
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'GitHub Login Successful!',
      });
      setEmail('');
      setPassword('');
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'GitHub Login Failed',
        text: 'Failed to sign in with GitHub.',
      });
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <form className="md:w-1/3 max-w-sm" onSubmit={handleLogin}>
        <div className="text-center md:text-left">
          <h1 className="text-blue-800 font-bold text-center text-4xl mb-5 animate__animated animate__heartBeat animate__repeat-2 ">Login Here!</h1>
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            onClick={handleGithubLogin}
          >
            <VscGithub
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            onClick={handleGoogleLogin}
          >
            <AiOutlineGoogle
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-blue-600 hover:underline hover:underline-offset-4"
            href="/register"
          >
            Register
          </a>
        </div>
      </form>
    </section>
  );
};

export default Login