import React from 'react';
import { ChartPieSlice, Coins } from "@phosphor-icons/react";

const Tokenomics = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">
                    Tokenomics
                </h1>
                <div className="mt-12 backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg p-8">
                    <ChartPieSlice size={64} className="mx-auto text-yellow-400" />
                    <p className="text-lg text-gray-300 mt-4">
                        Token distribution and team allocation details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;