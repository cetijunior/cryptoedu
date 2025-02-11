import React from 'react';
import { motion } from 'framer-motion';
import { Lightning, ChartLine, Coins, ShieldCheck, Globe, Wallet } from "@phosphor-icons/react";

const FeaturesSection = () => {
    return (
        <div className="bg-black text-white overflow-hidden relative">
            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-yellow-400/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-black to-transparent" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 py-20"
            >
                <div className="max-w-[980px] mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-medium text-white/90">
                            Why Choose <span className="text-yellow-400">CryptoDo</span>
                        </h2>
                        <p className="text-xl text-white/60 mt-4 max-w-2xl mx-auto">
                            Discover the features that make us the best choice for your crypto journey.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <FeatureCard
                            icon={<Lightning weight="light" size={32} />}
                            title="Lightning Fast"
                            description="Experience instant transactions with our optimized network infrastructure."
                        />
                        <FeatureCard
                            icon={<ChartLine weight="light" size={32} />}
                            title="Real-Time Analytics"
                            description="Make informed decisions with our advanced market analysis tools."
                        />
                        <FeatureCard
                            icon={<Coins weight="light" size={32} />}
                            title="Bank-Grade Security"
                            description="Rest easy knowing your assets are protected by industry-leading security."
                        />
                        <FeatureCard
                            icon={<ShieldCheck weight="light" size={32} />}
                            title="Secure Storage"
                            description="Your funds are stored in highly secure, encrypted wallets."
                        />
                        <FeatureCard
                            icon={<Globe weight="light" size={32} />}
                            title="Global Access"
                            description="Trade and transact from anywhere in the world."
                        />
                        <FeatureCard
                            icon={<Wallet weight="light" size={32} />}
                            title="Easy Integration"
                            description="Seamlessly integrate with your existing financial systems."
                        />
                    </motion.div>
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

export default FeaturesSection;