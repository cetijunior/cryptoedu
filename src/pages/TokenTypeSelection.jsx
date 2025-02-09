import React from 'react';
import { Coin, PokerChip } from "@phosphor-icons/react";

const TokenTypeSelection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">
                    Choose Token Type
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="p-8 backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg shadow-2xl hover:shadow-yellow-400/50 transition-all">
                        <Coin size={64} className="mx-auto text-yellow-400" />
                        <h2 className="text-2xl font-semibold mt-4">ERC-20</h2>
                        <p className="text-gray-300 mt-2">Create fungible tokens for your project.</p>
                    </div>
                    <div className="p-8 backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-lg shadow-2xl hover:shadow-yellow-400/50 transition-all">
                        <PokerChip size={64} className="mx-auto text-yellow-400" />
                        <h2 className="text-2xl font-semibold mt-4">ERC-721</h2>
                        <p className="text-gray-300 mt-2">Create unique NFTs for your collection.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenTypeSelection;