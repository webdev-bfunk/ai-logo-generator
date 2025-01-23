"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/nextjs'

function Navbar() {

    const { user } = useUser();

    return (
        <div className='flex justify-between px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 items-center shadow-sm'>
            <Link href="/"><Image src={'/logo.svg'} alt="Logo" width={180} height={100} /></Link>

            <div className="flex items-center gap-3">
                {user ? <Button variant="outline">Dashboard</Button> :
                    <Link href="/create">
                        <Button className="shadow-md">Get Started</Button>
                    </Link>}
                <UserButton />
            </div>
        </div>
    )
}

export default Navbar
