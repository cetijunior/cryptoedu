import React from 'react';
import { MagicWand, PaperPlaneRight } from "@phosphor-icons/react";

const TokenCreationForm = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">
                    Create Your Token
                </h1>
                <form className="mt-12 space-y-6">
                    <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg p-6">
                        <input
                            type="text"
                            placeholder="Token Name"
                            className="w-full bg-transparent border-b border-gray-700 focus:border-yellow-400 outline-none py-2 text-white placeholder-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Token Symbol"
                            className="w-full bg-transparent border-b border-gray-700 focus:border-yellow-400 outline-none py-2 text-white placeholder-gray-500 mt-4"
                        />
                        <input
                            type="number"
                            placeholder="Total Supply"
                            className="w-full bg-transparent border-b border-gray-700 focus:border-yellow-400 outline-none py-2 text-white placeholder-gray-500 mt-4"
                        />
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-yellow-400/50 transition-all">
                        <MagicWand size={24} className="inline mr-2" />
                        Generate Token
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TokenCreationForm;