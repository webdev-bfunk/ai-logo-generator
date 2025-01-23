"use client"
import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Suspense } from 'react'
function LogoTitle({ onHandleInputChange }) {

    const searchParam = useSearchParams();
    const [title, setTitle] = useState(searchParam?.get('title') ?? '');

    return (
        <Suspense>
            <div className='my-10'>
                <HeadingDescription
                    title={Lookup.LogoTitle}
                    description={Lookup.LogoTitleDesc} />

                <input type='text'
                    placeholder={Lookup.InputTitlePlaceholder}
                    className='p-4 border rounded-lg mt-5 w-full'
                    defaultValue={title}
                    onChange={(e) => onHandleInputChange(e.target.value)} />
            </div>
        </Suspense>
    )
}

export default LogoTitle
