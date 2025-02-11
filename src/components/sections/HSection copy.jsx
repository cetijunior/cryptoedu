import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="object-cover w-full h-full opacity-30"
                    src="/assets/images/b0.png"
                    alt="Bitcoin Hero"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 px-6 mx-auto max-w-4xl flex flex-col justify-center items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-yellow-500 leading-tight"
                >
                    The Future of Money.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl font-light text-yellow-300/80 mt-4 max-w-3xl"
                >
                    Bitcoin is more than just digital currency. It’s a decentralized revolution. Secure, borderless, and beyond control.
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="
                            px-8 py-4 text-lg font-medium
                            bg-yellow-500 text-black
                            rounded-full shadow-lg
                            transition-all duration-200
                            hover:bg-yellow-400
                        "
                    >
                        Learn More
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="
                            px-8 py-4 text-lg font-medium
                            border-2 border-yellow-500 text-yellow-500
                            rounded-full shadow-lg
                            transition-all duration-200
                            hover:bg-yellow-500 hover:text-black
                        "
                    >
                        Buy Bitcoin
                    </motion.a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="
                        inline-flex items-center justify-center
                        w-14 h-14
                        rounded-full bg-yellow-500/10 text-yellow-500
                        hover:bg-yellow-500/20
                        transition-all duration-200
                    "
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Hero;
