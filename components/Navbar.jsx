import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function Navbar() {
    return (
        <div className='flex justify-between px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 items-center shadow-sm'>
            <Image src={'/logo.svg'} alt="Logo" width={180} height={100} />
            <Button href="/page.jsx">Get Started</Button>
        </div>
    )
}

export default Navbar
