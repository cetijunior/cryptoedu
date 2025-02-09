import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, Stack, GridFour, Wallet, List, X } from "@phosphor-icons/react";
import { motion, useAnimate } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky z-50 lg:opacity-65 opacity-100 top-0 left-0 w-full flex justify-between items-center px-8 py-4 backdrop-blur-lg bg-gray-900/50 border-b border-gray-800 shadow-xl">
            <Link to="/" className="text-3xl font-extrabold text-yellow-400 tracking-wide flex items-center gap-2">
                <span className="animate-pulse">⚡</span> CryptoDo
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
                <NavItem to="/" icon={<House size={24} />} text="Home" />
                <NavItem to="/choose-blockchain" icon={<Stack size={24} />} text="Blockchain" />
                <NavItem to="/choose-token" icon={<GridFour size={24} />} text="Tokens" />
                <NavItem to="/market" icon={<Wallet size={24} />} text="Market" />
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-yellow-400" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={32} /> : <List size={32} />}
            </button>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 left-0 w-full bg-gray-900/90 backdrop-blur-lg shadow-lg flex flex-row justify-evenly items-center py-4 md:hidden"
                >
                    <NavItem to="/" icon={<House size={24} />} text="Home" onClick={() => setIsOpen(false)} />
                    <NavItem to="/choose-blockchain" icon={<Stack size={24} />} text="Blockchain" onClick={() => setIsOpen(false)} />
                    <NavItem to="/choose-token" icon={<GridFour size={24} />} text="Tokens" onClick={() => setIsOpen(false)} />
                    <NavItem to="/market" icon={<Wallet size={24} />} text="Market" onClick={() => setIsOpen(false)} />
                </motion.div>
            )}
        </nav>
    );
};

const NavItem = ({ to, icon, text, onClick }) => {
    const [scope, animate] = useAnimate();

    return (
        <Link to={to}
            ref={scope}
            className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition-all py-2"
            onMouseEnter={() => animate(scope.current, { scale: 1.2, rotate: 5 }, { duration: 0.2 })}
            onMouseLeave={() => animate(scope.current, { scale: 1, rotate: 0 }, { duration: 0.2 })}
            onClick={onClick}
        >
            <div className="bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-yellow-400/50 transition-all">
                {icon}
            </div>
            <span className="text-xs mt-1">{text}</span>
        </Link>
    );
};

export default Navbar;
