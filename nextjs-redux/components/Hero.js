import React from 'react'


export const Hero = (props) => {
    const {classes} = props;
    return (
        <div className="hero">
            <div className="hero-text ml-20">
                <div className="flex flex-column">
                    <h2>BetterCensus.com</h2>
                    <h3>Get in. Get out. Get your data.</h3>
                    <div className='mt-20'>
                        <a className='purple-button mt-20' href="#about">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
