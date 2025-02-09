import React from 'react';
import { CurrencyEth, CurrencyCircleDollar, CurrencyCny } from "@phosphor-icons/react";

const BlockchainSelection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">
                    Choose a Blockchain
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="p-8 backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg shadow-2xl hover:shadow-yellow-400/50 transition-all">
                        <CurrencyEth size={64} className="mx-auto text-yellow-400" />
                        <h2 className="text-2xl font-semibold mt-4">Ethereum</h2>
                        <p className="text-gray-300 mt-2">The most popular blockchain for smart contracts.</p>
                    </div>
                    <div className="p-8 backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg shadow-2xl hover:shadow-yellow-400/50 transition-all">
                        <CurrencyCircleDollar size={64} className="mx-auto text-yellow-400" />
                        <h2 className="text-2xl font-semibold mt-4">Binance Smart Chain</h2>
                        <p className="text-gray-300 mt-2">Fast and low-cost transactions.</p>
                    </div>
                    <div className="p-8 backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg shadow-2xl hover:shadow-yellow-400/50 transition-all">
                        <CurrencyCny size={64} className="mx-auto text-yellow-400" />
                        <h2 className="text-2xl font-semibold mt-4">Polygon</h2>
                        <p className="text-gray-300 mt-2">Scalable and energy-efficient.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockchainSelection;