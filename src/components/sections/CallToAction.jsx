import React from 'react';
import { motion } from 'framer-motion';
import WavingChainBackground from './WavingChainBackground';

const CallToAction = () => {
    return (
        <section className='w-screen h-screen relative flex justify-center items-center overflow-hidden '>
            {/* Waving Chain Background */}
            <WavingChainBackground />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 flex flex-col justify-center items-center text-center px-6 w-full"
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                        <span className="text-yellow-400">Join the Revolution</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                        Be part of the future of finance. Sign up today and start your journey with CryptoDo.
                    </p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-medium px-8 py-4 rounded-full text-lg transition-all shadow-lg">
                            Get Started Now
                        </button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CallToAction;