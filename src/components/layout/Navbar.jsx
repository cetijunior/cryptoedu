import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, Stack, GridFour, Wallet, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed w-full z-50">
            {/* Primary Navbar */}
            <nav className="relative bg-black/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center px-4 md:px-8 h-12">
                        {/* Logo */}
                        <Link to="/" className="text-xl font-medium text-white hover:text-yellow-400 transition-colors">
                            <span className="text-yellow-400">₿</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <NavItem to="/" text="Home" />
                            <NavItem to="/choose-blockchain" text="Blockchain" />
                            <NavItem to="/choose-token" text="Tokens" />
                            <NavItem to="/market" text="Market" />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white/80 hover:text-white transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <List size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="px-4 py-4 space-y-2">
                            <MobileNavItem to="/" text="Home" onClick={() => setIsOpen(false)} />
                            <MobileNavItem to="/choose-blockchain" text="Blockchain" onClick={() => setIsOpen(false)} />
                            <MobileNavItem to="/choose-token" text="Tokens" onClick={() => setIsOpen(false)} />
                            <MobileNavItem to="/market" text="Market" onClick={() => setIsOpen(false)} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const NavItem = ({ to, text }) => {
    return (
        <Link
            to={to}
            className="relative text-sm text-white/80 hover:text-white transition-colors group"
        >
            {text}
            <motion.div
                className="absolute -bottom-4 left-0 right-0 h-[1px] bg-yellow-400 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.2 }}
            />
        </Link>
    );
};

const MobileNavItem = ({ to, text, onClick }) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="block py-2 text-lg text-white/80 hover:text-white transition-colors"
        >
            {text}
        </Link>
    );
};

export default Navbar;