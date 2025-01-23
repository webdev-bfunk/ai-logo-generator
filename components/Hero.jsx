"use client"
import Lookup from '@/app/_data/Lookup'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link';

function Hero() {
    const [logoTitle, setLogoTitle] = useState('');

    return (
        <div className='flex items-center mt-24 flex-col gap-5'>
            <h2 className='text-primary text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
            <h2 className='text-5xl text-center font-bold'>{Lookup.HeroSubheading}</h2>
            <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

            <div className="flex gap-6 w-full max-w-2xl mt-10">
                <input
                    onChange={(event) => setLogoTitle(event?.target.value)}
                    placeholder={Lookup.InputTitlePlaceholder}
                    className='p-3 border rounded-md w-full shadow-md' />
                <Link href={'/create?title=' + logoTitle}>
                    <Button className="p-6 w-full">Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
