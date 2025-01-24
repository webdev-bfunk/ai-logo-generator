"use client"
import Navbar from '@/components/Navbar'
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { UserDetailContext } from './_context/UserDetailContext'

function Provider({ children }) {

    const { user } = useUser();
    const [userDetail, setUserDetail] = useState();

    useEffect(() => {
        user && CheckUserAuth();
    }, [user]);

    // Save user data
    const CheckUserAuth = async () => {
        // Save User to Database
        const result = await axios.post("/api/users", {
            userName: user?.fullName,
            userEmail: user?.primaryEmailAddress?.emailAddress
        });
        console.log(result.data);
        setUserDetail(result.data);
    }

    return (
        <div>
            <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
                <Navbar />
                <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">
                    {children}
                </div>
            </UserDetailContext.Provider>
        </div>
    )
}

export default Provider
