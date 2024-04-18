import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useDynamicTitle from './useDynamicTitle';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
    useDynamicTitle('FeedBack Page');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Profile Updated',
        }).then(() => {
            navigate('/profile');
        });
    };
    const { user, updateUserInfo } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    useDynamicTitle('Profile Page');
    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhotoURLChange = (e) => {
        setPhotoURL(e.target.value);
    };

    const handleSaveChanges = async () => {
        try {
            await updateUserInfo(name, photoURL);
        } catch (error) {
            console.error('Error updating profile:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Profile Update Failed!',
                text: 'Please try again.',
            });
        }
    };

    return (
        <div className="container mx-auto mt-10 border border-blue-gray-700 rounded-lg shadow-lg w-[600px]">
            <h1 className="text-3xl font-bold mb-4 text-center text-black pt-5">Update Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <div className="">
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Photo URL</label>
                    <div className="">
                        <input
                            type="text"
                            value={photoURL}
                            onChange={handlePhotoURLChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div className="mt-4">
                    <button
                        className="bg-black text-white px-4 py-2 rounded mx-auto flex mb-2"
                        onClick={handleSaveChanges}
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile