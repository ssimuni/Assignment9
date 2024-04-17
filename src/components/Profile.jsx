import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useDynamicTitle from './useDynamicTitle';
import Swal from 'sweetalert2';
const Profile = () => {
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
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Profile Updated',
            });
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
        <div className='flex justify-center items-center min-h-screen bg-cover bg-gradient-to-tr from-transparent via-transparent to-black/60' style={{
            backgroundImage: `url("2.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 'full',
            height: '300px',
        }}>
            <div className="card w-96 glass text-white">
                <figure><img src={user.photoURL} alt="car" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl text-center">{user.displayName}</h2>
                    <p>{user.email}</p>
                </div>
                <p className='text-sm text-center -mt-3 font-bold'>*Fill Up Below Part If You Want To Change Your Name or Update Profile Picture.*</p>
                <div className="">
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder='Name'
                        className="w-64 mx-auto flex px-3 py-1 border border-gray-300 rounded text-black"
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        value={photoURL}
                        onChange={handlePhotoURLChange}
                        className="w-64 mx-auto flex mt-2 px-3 py-1 border border-gray-300 rounded text-black"
                        placeholder='Photo'
                    />
                </div>
                <div className="mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mx-auto flex mb-2"
                        onClick={handleSaveChanges}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Profile;
