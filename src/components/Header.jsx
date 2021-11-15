/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Lanuch Your App</span>with Confidence And Creativity</h1>
                <p className='details'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <a href='#' className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header
