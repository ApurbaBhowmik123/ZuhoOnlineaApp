import React from 'react'
import '../css/navbar.css'
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import UserProfileModal from './UserProfileModal'



const Navbar = () => {
    // const [getprofile, setGetprofile] = useState('')
    // const { id } = useParams();
    // console.log(getprofile)
    // console.log(id)

    // useEffect(() => {
    //     profile(); // Fetch profile data when the component mounts
    // }, []);
    // const profile = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:4000/getprofile/${id}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         const data = await response.json();
    //         console.log(data)
    //         setGetprofile(data);
    //     } catch (error) {
    //         console.error('Error fetching profile data:', error);
    //     }

    // }
    return (
        <>
            <div className="">
                <div className="navbar-1">
                    <ul className="navbar-1-ul">
                        <div className="navbar-logo">
                            <Link to="/">
                                <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_640.png" />
                            </Link>
                        </div>
                        <div className="searchbutton">

                            <input type="text" placeholder="search product"></input>

                            <button>
                                <FaSearch />

                            </button>
                        </div>

                        <div className="navbar-right-item">
                            <div className="navbar-right-item-1">

                                <li><Link to="/cart"><FaCartShopping /></Link></li>
                            </div>
                            <div className="navbar-right-item-1">

                                <li><Link to="/wishlist"><FaRegHeart /></Link></li>
                            </div>
                            <div>

                                <li>
                                    {/* {getprofile ? (
                                        <img src={getprofile.image?.url} alt="Profile" />
                                    ) : ( */}
                                    <UserProfileModal />
                                    {/* )} */}
                                </li>
                            </div>
                        </div>
                    </ul>

                </div>
                <div className="navbar-2">
                    <ul className="navbar-2-ul">
                        <li> <Link to="/men"> men</Link></li>
                        <li> <Link to="/women"> women</Link></li>
                        <li> <Link to="/kids"> kids</Link></li>
                        <li> <Link to="/beauty">  beauty</Link></li>
                        <li> <Link to="/watch"> watch</Link></li>
                        <li> <Link to="/jewellery"> jewellery</Link></li>
                        <li> <Link to="/gadgets"> gadgets</Link></li>
                        <li> <Link to="/travel"> travel</Link></li>
                        <li> <Link to="/grocery"> grocery</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar