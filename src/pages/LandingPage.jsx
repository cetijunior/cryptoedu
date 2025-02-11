import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import Hero from '../components/sections/HSection'
import BitcoinSection from '../components/sections/BitcoinSection'


function LandingPage() {
    return (

        <div>
            <Hero />

            {/* <HeroSection /> */}

            <BitcoinSection />
        </div>
    )
}


export default LandingPage