import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import BlockchainSelection from './pages/BlockchainSelection';
import TokenTypeSelection from './pages/TokenTypeSelection';
import TokenCreationForm from './pages/TokenCreationForm';
import MarketPage from './pages/MarketPage';
import Tokenomics from './pages/Tokenomics';
import NotFound from './pages/NotFoundPage';
import './styles/index.css';

function App() {
    return (
        <Router>
            {/* Main Container */}
            <div className="min-h-screen flex flex-col text-white">
                {/* Fixed Navbar at the Top */}
                <Navbar className="fixed top-0 w-full z-50" />

                {/* Main Content Area */}
                <div className="w-full"> {/* Add padding-top to account for the fixed Navbar */}
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/choose-blockchain" element={<BlockchainSelection />} />
                        <Route path="/choose-token" element={<TokenTypeSelection />} />
                        <Route path="/token-creation" element={<TokenCreationForm />} />
                        <Route path="/market" element={<MarketPage />} />
                        <Route path="/tokenomics" element={<Tokenomics />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>

                {/* Footer at the Bottom */}
                <Footer className="w-full" />
            </div>
        </Router>
    );
}

export default App;