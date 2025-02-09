import React from 'react';
import { Opulento } from "uvcanvas";
import { Rocket, CurrencyBtc, Lightning, ArrowRight, ChartLine, Coins } from "@phosphor-icons/react";

const BitcoinSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Background Animation */}
            {/* <Opulento className="absolute inset-0 w-full h-full opacity-20" /> */}

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="text-center">
                    <div className="flex justify-center items-center space-x-4">
                        <CurrencyBtc size={64} className="text-yellow-400 animate-pulse" />
                        <h1 className="text-6xl font-bold text-yellow-400 drop-shadow-lg">
                            Welcome to <span className="text-white">CryptoDo</span>
                        </h1>
                    </div>
                    <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
                        Revolutionizing the future of decentralized finance with Bitcoin and blockchain technology.
                    </p>
                    <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center justify-center mx-auto">
                        <Rocket size={24} className="inline mr-2" />
                        Get Started
                    </button>
                </div>

                {/* Bitcoin Intro Section */}
                {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">
                            What is Bitcoin?
                        </h2>
                        <p className="text-lg text-gray-300 mt-4">
                            Bitcoin is the first decentralized digital currency, powered by blockchain technology. It enables peer-to-peer transactions without the need for intermediaries, offering transparency, security, and financial freedom.
                        </p>
                        <button className="mt-6 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-yellow-400/50 transition-all flex items-center">
                            Learn More <ArrowRight size={20} className="inline ml-2" />
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg p-8 shadow-2xl">
                            <CurrencyBtc size={128} className="text-yellow-400 mx-auto" />
                            <p className="text-lg text-gray-300 mt-4 text-center">
                                Bitcoin is the future of money.
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* Features Section */}
                <div className="mt-20 text-center">
                    <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">
                        Why Choose CryptoDo?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg p-6 shadow-2xl hover:shadow-yellow-400/50 transition-all">
                            <Lightning size={48} className="text-yellow-400 mx-auto" />
                            <h3 className="text-2xl font-semibold mt-4">Fast Transactions</h3>
                            <p className="text-gray-300 mt-2">
                                Experience lightning-fast transactions with our optimized blockchain network.
                            </p>
                        </div>
                        <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg p-6 shadow-2xl hover:shadow-yellow-400/50 transition-all">
                            <ChartLine size={48} className="text-yellow-400 mx-auto" />
                            <h3 className="text-2xl font-semibold mt-4">Real-Time Data</h3>
                            <p className="text-gray-300 mt-2">
                                Access real-time market data and analytics to make informed decisions.
                            </p>
                        </div>
                        <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg p-6 shadow-2xl hover:shadow-yellow-400/50 transition-all">
                            <Coins size={48} className="text-yellow-400 mx-auto" />
                            <h3 className="text-2xl font-semibold mt-4">Secure & Reliable</h3>
                            <p className="text-gray-300 mt-2">
                                Built with cutting-edge security protocols to keep your assets safe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BitcoinSection;