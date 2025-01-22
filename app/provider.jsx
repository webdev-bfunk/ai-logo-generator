import Navbar from '@/components/Navbar'
import React from 'react'

function Provider({ children }) {
    return (
        <div>
            <Navbar />
            <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">
                {children}
            </div>
        </div>
    )
}

export default Provider
