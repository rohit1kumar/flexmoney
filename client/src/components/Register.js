import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const bastURL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api/v1';

const Register = () => {

    const initialValues = { email: "", password: "", name: "", dateOfBirth: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        if (isSubmit) {
            try {
                console.log(formValues);
                let res = await fetch(`${bastURL}/user/register`, {
                    method: "POST",
                    body: JSON.stringify(formValues),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(JSON.stringify(formValues))
                console.log(res);
                let resJson = await res.json();
                if (res.status === 201) {
                    setFormValues(initialValues);
                    // console.log(resJson.stringify());
                    localStorage.setItem('token', JSON.stringify(resJson.token))
                    console.log(resJson.token);
                    navigate('/checkout')
                    // setMessage("User created successfully");
                } else {
                    console.log(resJson);
                }
            } catch (err) {
                console.log(err);
            }

        }
    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        if (!values.dateOfBirth) {
            errors.dateOfBirth = "DOB is required!"
        }
        return errors;
    };

    return (
        <div className="w-screen h-screen flex font-poppins">
            <div className='w-1/2 drop-shadow-xl hidden md:block'>
                <img className='h-full object-cover' src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="yoga img" />
            </div>
            <div className='bg-white p-10 w-full h-full overflow-scroll flex flex-col items-center justify-center md:w-1/2'>
                <h1 className='text-5xl p-5 my-5 font-semibold text-blue-600 text-center'>Join Yoga Classes</h1>
                <div className='p-10 w-full max-w-md drop-shadow-lg rounded-lg bg-white'>
                    <form className="flex flex-col font-medium text-gray-700" onSubmit={handleSubmit}>
                        <div className='mb-1 border-2 p-2 border-blue-500 rounded'>
                            <label className='block mb-1' htmlFor="name">Name</label>
                            <input className='w-full p-1 text-gray-600' type="text" name="name" placeholder='Rohit Kumar' value={formValues.name} onChange={handleChange} />
                        </div>
                        <p className='mb-3 text-xs text-red-600'>{formErrors.name}</p>
                        <div className='mb-3 border-2 p-2 border-blue-500 rounded'>
                            <label className='block mb-1' htmlFor="dob">DOB</label>
                            <input className='w-full p-1 text-gray-600' type="date" name="dateOfBirth" onChange={handleChange} />
                        </div>
                        <p className='mb-3 text-xs text-red-600'>{formErrors.dateOfBirth}</p>
                        <div className='mb-1 border-2 p-2 border-blue-500 rounded'>
                            <label className='block mb-1' htmlFor="email">Email</label>
                            <input className='w-full p-1 text-gray-600' type="email" name="email" placeholder='test@xyz.com' value={formValues.email} onChange={handleChange} />
                        </div>
                        <p className='mb-3 text-xs text-red-600'>{formErrors.email}</p>
                        <div className='mb-1 border-2 p-2 border-blue-500 rounded'>
                            <label className='block mb-1' htmlFor="password">Password</label>
                            <input className='w-full p-1 text-gray-600' type="password" name="password" placeholder='********' value={formValues.password} onChange={handleChange} />
                        </div>
                        <p className='mb-3 text-xs text-red-600'>{formErrors.password}</p>
                        <p className='text-gray-500'>or <Link to='/login'><span className='text-blue-500'>login</span></Link></p>
                        <div className='flex justify-center'>
                            <button className='py-3 px-8 mt-5 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-48 transition-all' type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register