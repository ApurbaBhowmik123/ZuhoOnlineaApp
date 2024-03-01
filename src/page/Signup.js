import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const [formdata, setFormdata] = useState(
        {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            number: '',
            image: null,
            gender: '',
        }
    );
    const { name, email, password, cpassword, number, gender } = formdata;
    const [image, setImage] = useState('');



    const handleChange = (e) => {
        if (e.target.name === 'image') {
            const render = new FileReader();
            render.onload = () => {
                if (render.readyState === 2) {
                    setImage(render.result)
                }
            }
            render.readAsDataURL(e.target.files[0])
        } else {
            setFormdata({ ...formdata, [e.target.name]: e.target.value })
        }
    };

    const createshop = async (e) => {
        e.preventDefault();
        try {
            if (!image) {
                toast.error("Please select the image !")
                return;
            }
            const myForm = new FormData();
            myForm.append('name', name);
            myForm.append('email', email);
            myForm.append('number', number);
            myForm.append('image', image);
            myForm.append('gender', gender);
            myForm.append('password', password);
            myForm.append('cpassword', cpassword);

            const response = await fetch("http://localhost:5000/signup", {
                method: "post",
                body: myForm,
            })

            const ResponseData = await response.json();
            if (response.ok) {
                toast.success("Signup successful");
                navigate('/login');
            } else {
                toast.error(ResponseData.message || "Signup failed");
            }
        } catch (error) {
            console.error('Error during signup:', error);
            toast.error("Signup failed");
        }
    };

    return (
        <>
            <ToastContainer />
            <form onSubmit={(e) => createshop(e)}>
                <div className="signup">
                    <div className="signup-div">
                        <div className="signup-image">
                            {image ? <img src={image} /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VLpfFb9XJbgYtQqgbQODTNmQYqiS7r8ekw&usqp=CAU" alt="signup-img"></img>}
                        </div>

                        <div className="signup-form">
                            <span>Welcome To Signup Page</span>
                            <input type="text" name="name" value={name} onChange={handleChange} placeholder="Enter your Name" />
                            <input type="text" name="email" value={email} onChange={handleChange} placeholder="Enter your Email" />
                            <input type="text" name="number" value={number} onChange={handleChange} placeholder="Enter your Number" />
                            <input type="file" name="image" files={image} accept='image/*' onChange={handleChange} placeholder="Choose Your Image" />
                            <label>
                                <input type="radio" name="gender" value="male" onChange={handleChange} />
                                Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="female" onChange={handleChange} />
                                Female
                            </label>
                            <label>
                                <input type="radio" name="gender" value="others" onChange={handleChange} />
                                Others
                            </label>
                            <input type="password" name="password" value={password} onChange={handleChange} placeholder="Enter your Password" />
                            <input type="password" name="cpassword" value={cpassword} onChange={handleChange} placeholder="Confirm your Password" />
                            <button>Signup</button>
                        </div>

                    </div>
                </div>
            </form>
        </>
    );
}

export default Signup;
