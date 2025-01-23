"use client"
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import LogoDesc from './_components/LogoDesc';
import LogoColorPalette from './_components/LogoColorPalette';
import LogoDesign from './_components/LogoDesign';
import LogoIdea from './_components/LogoIdea';

function CreateLogo() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState();
    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
            {step == 1 ?
                <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} /> :
                step == 2 ?
                    <LogoDesc onHandleInputChange={(v) => onHandleInputChange('desc', v)} /> :
                    step == 3 ?
                        <LogoColorPalette onHandleInputChange={(v) => onHandleInputChange('palette', v)} /> :
                        step == 4 ?
                            <LogoDesign onHandleInputChange={(v) => onHandleInputChange('design', v)} /> :
                            step == 5 ?
                                <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea', v)} /> :
                                null
            }
            {/* 1 hr 5mins https://www.youtube.com/watch?v=VjimQ-VEIiE */}
            <div className="flex items-center justify-between">
                {step != 1 &&
                    <Button variant="outline" onClick={() => setStep(step - 1)}> <ArrowLeft />Go Back</Button>}
                <Button onClick={() => setStep(step + 1)}> Continue<ArrowRight /></Button>
            </div>
        </div>
    )
}

export default CreateLogo;