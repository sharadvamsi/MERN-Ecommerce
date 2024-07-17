
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { admin_login } from "../../store/Reducers/authReducer";



const AdminLogin = () => {


    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const inputData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(admin_login(formData))

    }
    return (
        <div className="min-w-screen min-h-screen bg-[#d8f1f7] flex justify-center items-center">
            <div className="w-[350px] text-red-50 font-serif p-2">
                <div className=" bg-[#31444d] p-4 rounded-md">
                    <h2 className="text-xl mb-3 font-bold text-center">Welcome Admin</h2>

                    <form onSubmit={submitForm}>

                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email"> Email</label>
                            <input onChange={inputData} className="px-3 py-2 outline-none border border-slate-800 bg-slate-200 rounded-md text-black" type="email" name='email' value={formData.email} placeholder="Enter your email" id="email" required />

                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="password"> Password</label>
                            <input onChange={inputData} className="px-3 py-2 outline-none border border-slate-800 bg-slate-200 rounded-md text-black" type="password" name='password' value={formData.password} placeholder="Enter your password" id="password" required />

                        </div>

                        <button className="bg-slate-800 w-full hover:shadow-blue-300  hover:shadow-lg rounded-md px-7 py-2 mb-3">Sign In</button>



                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;