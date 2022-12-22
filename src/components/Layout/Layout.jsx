import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './Layout.scss'

export const Layout = ( { children } ) => {
    return (
        <div className='layout-wrapper'>
            <NavBar />
                <div className='children-wrapper'>
                    {children}
                </div>
            <Footer />
        </div>
    )
}
