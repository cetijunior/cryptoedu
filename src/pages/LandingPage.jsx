import React from 'react';
import Hero from '../components/sections/HSection copy';
import BitcoinSection from '../components/sections/BitcoinSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx/';
import CallToAction from '../components/sections/CallToAction.jsx';

function LandingPage() {
    return (
        <div className=" text-white">
            {/* Hero Section */}
            <Hero />

            {/* Features Section - Apple style */}
            <FeaturesSection />

            {/* Bitcoin Explainer Section */}
            <BitcoinSection />

            {/* Testimonials Section - Clean and Minimalist */}
            <TestimonialsSection />

            {/* Call To Action - Elegant and Simple */}
            <CallToAction />
        </div>
    );
}

export default LandingPage;
