"use client"
import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function PricingModel({ formData }) {

    const { user } = useUser();

    useEffect(() => {
        if (formData?.title && typeof window !== 'undefined') {
            localStorage.setItem('formData', JSON.stringify(formData))
        }
    }, [formData]);

    return (
        <div className="my-3">
            <HeadingDescription
                title={Lookup.LogoPricingModelTitle}
                description={Lookup.LogoPricingModelDesc}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 mb-8">
                {Lookup.pricingOption.map((pricing, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-5 border rounded-xl h-full"
                    >
                        <Image
                            src={pricing.icon}
                            alt={pricing.title}
                            height={60}
                            width={60}
                        />
                        <h2 className="font-medium text-2xl mt-5">{pricing.title}</h2>
                        {/* Add a flex-grow class to the features container */}
                        <div className="flex-grow">
                            {pricing.features.map((feature, index) => (
                                <h2 className="text-lg mt-3" key={index}>
                                    {feature}
                                </h2>
                            ))}
                        </div>

                        {user ?
                            <Link href={'/generate-logo?type=' + pricing.title}>
                                <Button className="mt-5">{pricing.button}</Button>
                            </Link>
                            : <SignInButton mode='modal' forceRedirectUrl={'/generate-logo?type=' + pricing.title}>
                                <Button className="mt-5">{pricing.button}</Button>
                            </SignInButton>
                        }
                        <SignOutButton>SignOut</SignOutButton>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default PricingModel
