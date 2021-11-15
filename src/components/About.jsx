import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src= {props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2>{}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque fuga nam inventore natus nesciunt! Nihil, explicabo? 
                    Praesentium exercitationem mollitia eligendi at neque totam quasi 
                    doloribus dicta quisquam ex velit aliquid dolore, facere, iste consequuntur debitis.</p>
                    <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About
