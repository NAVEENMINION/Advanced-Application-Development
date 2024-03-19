import React, { useState } from "react";
import '../assets/css/Signup.css'; 
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        phoneNumber: "",
        role: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phoneNumber") {
            const phoneNumberRegex = /^\d{0,10}$/; 
            if (phoneNumberRegex.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.password &&formData.confirmpassword &&formData.phoneNumber &&formData.role
        ) {
            navigate("/");
            console.log(formData);
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="signup-container">
            <div className="box">
                <h1>𝓦𝓮𝓵𝓒𝓸𝓶𝓮..!!</h1>
                <h1>𝚈𝚘𝚞𝚛 𝚏𝚞𝚝𝚞𝚛𝚎 𝚜𝚝𝚊𝚛𝚝𝚜 𝚑𝚎𝚛𝚎</h1>
                
                <div className="login-box">
                    <button type="submit">Login</button>
                </div>
            </div>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">    
                    <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" value={formData.confirmpassword} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <input type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <select name="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>   
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};  

export default Signup;
