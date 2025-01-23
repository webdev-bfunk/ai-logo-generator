import React from 'react'

import Image from 'next/image'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

function LogoDesign() {
    return (
        <div className='my-10'>
            <HeadingDescription
                title={Lookup.LogoDesignTitle}
                description={Lookup.LogoDesignDesc} />
        </div>
    )
}

export default LogoDesign
