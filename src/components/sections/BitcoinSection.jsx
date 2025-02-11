import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './WavingChainBackground';
import { Lightning, ChartLine, Coins } from "@phosphor-icons/react";

const BitcoinSection = () => {
    return (
        <div className="bg-black text-white overflow-hidden relative">
            {/* Particles Background */}
            <ParticlesBackground />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 pb-20"
            >
                <div className="max-w-[980px] mx-auto px-6">
                    {/* Header Section */}
                    <div className="text-center space-y-6 mb-28">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                                <span className="text-yellow-400">Bitcoin.</span>{' '}
                                <span className="text-white/90">Reimagined.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
                                Experience the future of finance with our revolutionary platform.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-medium px-8 py-4 rounded-full text-lg transition-all">
                                Get Started
                            </button>
                        </motion.div>
                    </div>


                </div>
            </motion.div>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all"
        >
            <div className="text-yellow-400 mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-medium text-white/90 mb-3">
                {title}
            </h3>
            <p className="text-white/60 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default BitcoinSection;