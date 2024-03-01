// MyProfile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Myprofile = () => {
    const [profileData, setProfileData] = useState(null);
    console.log(profileData)
    // const { id } = useParams();
    // console.log(id)

    // useEffect(() => {
    //     const fetchProfileData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:5000/profileget/${id}`);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch profile data');
    //             }
    //             const data = await response.json();
    //             setProfileData(data.profileData);
    //         } catch (error) {
    //             console.error('Error fetching profile data:', error);
    //         }
    //     };

    //     fetchProfileData();
    // }, [id]);
    useEffect(() => {
        // Retrieve user data from sessionStorage
        const storedUserData = sessionStorage.getItem('userData');
        if (storedUserData) {
            // Parse the JSON string to convert it back to an object
            const parsedUserData = JSON.parse(storedUserData);
            // Set the user data to the state
            setProfileData(parsedUserData);
        }
    }, []); // Empty dependency array to run only once when component mounts


    if (!profileData) {
        return <div class="text-center">
            <div class="spinner-border" role="status">
                {/* <span class="sr-only">Loading...</span> */}
            </div>
        </div>

    }

    return (
        <div>
            {profileData && (
                <div>
                    <p>Name: {profileData.name}</p>
                    <p>Email: {profileData.email}</p>
                    <p>Number: {profileData.number}</p>
                    <p>Gender: {profileData.gender}</p>
                    {/* Add more profile data display as needed */}
                </div>
            )}
        </div>
    );
};

export default Myprofile;
