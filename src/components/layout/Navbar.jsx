import React from 'react';
import { Link } from 'react-router-dom';
import { House, Stack, GridFour, Wallet } from "@phosphor-icons/react";
import { useAnimate } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="sticky z-50 opacity-65 top-0 left-0 w-full flex justify-between items-center px-8 py-4 backdrop-blur-lg bg-gray-900/50 border-b border-gray-800 shadow-xl">
            <Link to="/" className="text-3xl font-extrabold text-yellow-400 tracking-wide flex items-center gap-2">
                <span className="animate-pulse">⚡</span> CryptoDo
            </Link>

            <div className="flex gap-6">
                <NavItem to="/" icon={<House size={24} />} text="Home" />
                <NavItem to="/choose-blockchain" icon={<Stack size={24} />} text="Blockchain" />
                <NavItem to="/choose-token" icon={<GridFour size={24} />} text="Tokens" />
                <NavItem to="/market" icon={<Wallet size={24} />} text="Market" />
            </div>
        </nav>
    );
};

const NavItem = ({ to, icon, text }) => {
    const [scope, animate] = useAnimate();

    return (
        <Link to={to}
            ref={scope}
            className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition-all"
            onMouseEnter={() => animate(scope.current, { scale: 1.2, rotate: 5 }, { duration: 0.2 })}
            onMouseLeave={() => animate(scope.current, { scale: 1, rotate: 0 }, { duration: 0.2 })}
        >
            <div className="bg-gray-800  p-3 rounded-full shadow-lg hover:shadow-yellow-400/50 transition-all">
                {icon}
            </div>
            <span className="text-xs mt-1">{text}</span>
        </Link>
    );
};

export default Navbar;
