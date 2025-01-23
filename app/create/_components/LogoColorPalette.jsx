"use client"
import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'


function LogoColorPalette({ onHandleInputChange }) {

    const [selectedOption, setSelectedOption] = useState();


    return (
        <div className='my-10'>
            <HeadingDescription
                title={Lookup.LogoColorPaletteTitle}
                description={Lookup.LogoColorPaletteDesc} />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                {Colors.map((palette, index) =>
                    <div className={`flex ${selectedOption == palette.name && 'border rounded-lg border-primary '} p-1 cursor-pointer`} key={index}>
                        {palette?.colors.map((color, index) => (
                            <div className='h-24 w-full'
                                key={index}
                                onClick={() => {
                                    setSelectedOption(palette.name);
                                    onHandleInputChange(palette.name)
                                }}

                                style={{
                                    backgroundColor: color
                                }}>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default LogoColorPalette
