import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import Register from './Register';
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api/v1';
const Checkout = () => {
    const [success, setSuccess] = useState(false);
    const [details, setDetails] = useState({});
    const [batchValue, setBatchValue] = useState({ batchTiming: '6-7AM', amount: '500' });
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const { data, loading } = useFetch({ url: `${baseURL}/user/me`, token });
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen w-screen'>
                loading...
            </div>
        )
    }
    if (data.message === 'Unauthorized') {
        // console(data);
        navigate('/register');
        // return <Register></Register>
    }
    const { name, email } = data.user;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBatchValue({ [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(batchValue);
            let res = await fetch(`${baseURL}/batch/join`, {
                method: "POST",
                body: JSON.stringify(batchValue),
                headers: {
                    'Authorization': `Bearer ${JSON.parse(token)}`,
                    'Content-Type': 'application/json'
                },
            });
            console.log(res);
            let resJson = await res.json();
            if (res.status === 200) {
                console.log("Payment Done");
                setSuccess(true);
            }
            else if(res.status === 400){
                setSuccess(true);
            }
        } catch (err) {
            console.log(err);
        }
    }
    // console.log(data.message);
    return (
        <div className='h-screen w-screen flex justify-center items-center p-4 font-poppins'>
            <div className='bg-white w-full p-5 flex flex-col items-center rounded-lg drop-shadow-lg md:w-1/2 max-w-md'>
                <h1 className='text-xl font-medium mb-5'>Namaste,
                <span className='font-normal text-blue-600'> {name}</span>
                </h1>
                <div className='w-full flex flex-col items-center'>
                    <h2 className='text-xl mb-3 '>Choose your batch</h2>
                    <form className='flex flex-col items-center' action="" onSubmit={handleSubmit}>
                        <select className='block mb-5 p-2 rounded-md border-blue-500 border-2' name="batchTiming" id="batch" onChange={handleChange}>
                            <option value="6-7AM">6AM to 7AM</option>
                            <option value="7-8AM">7AM to 8AM</option>
                            <option value="8-9AM">8AM to 9AM</option>
                            <option value="5-6PM">5PM to 6PM</option>
                        </select>
                        {
                            (success) ?
                            (<p>You Successfully Joined </p>) :
                            (<button className='bg-blue-500 text-white px-5 py-2 rounded-md font-medium'>Pay ₹500</button>)

                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout