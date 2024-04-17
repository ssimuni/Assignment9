import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const FeedbackForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Submitted feedback',
        }).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Feedback Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        id="name"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email format'
                            }
                        })}
                        type="email"
                        id="email"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
                    <textarea
                        {...register('feedback', { required: 'Feedback is required' })}
                        id="feedback"
                        rows="4"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        placeholder="Enter your feedback"
                    ></textarea>
                    {errors.feedback && <p className="text-red-500 mt-1">{errors.feedback.message}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
