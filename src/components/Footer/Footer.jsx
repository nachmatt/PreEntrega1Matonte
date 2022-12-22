import React from 'react'
import './Footer.scss'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h2 className='footer-title'>PC Parts</h2>
            </Link>
        </div>
    )
}

export default Footer