import React from 'react';

const ExplanationPage = () => {
    return (
        <div className="text-center py-10">
            <h1 className="text-3xl font-bold">Choose a Blockchain</h1>
            <div className="flex justify-center gap-6 mt-6">
                <div className="p-6 bg-gray-800 rounded-lg">Ethereum</div>
                <div className="p-6 bg-gray-800 rounded-lg">Binance Smart Chain</div>
                <div className="p-6 bg-gray-800 rounded-lg">Polygon</div>
            </div>
        </div>
    );
};

export default ExplanationPage;
