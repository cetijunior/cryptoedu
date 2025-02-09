import React from 'react';
import { Lightning, Envelope, TwitterLogo, GithubLogo, LinkedinLogo, DiscordLogo } from "@phosphor-icons/react";

const Footer = () => {
    return (
        <footer className="backdrop-blur-lg bg-gray-900/50 border-t border-gray-800 shadow-xl py-12">
            <div className="container mx-auto px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Lightning size={24} className="text-yellow-400" />
                            <span className="text-xl font-bold text-white">CryptoDo</span>
                        </div>
                        <p className="text-gray-300">
                            Revolutionizing decentralized finance with cutting-edge blockchain technology.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400 transition-all"
                            >
                                <TwitterLogo size={24} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400 transition-all"
                            >
                                <GithubLogo size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400 transition-all"
                            >
                                <LinkedinLogo size={24} />
                            </a>
                            <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400 transition-all"
                            >
                                <DiscordLogo size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-300 hover:text-yellow-400 transition-all">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/choose-blockchain" className="text-gray-300 hover:text-yellow-400 transition-all">
                                    Blockchain
                                </a>
                            </li>
                            <li>
                                <a href="/choose-token" className="text-gray-300 hover:text-yellow-400 transition-all">
                                    Tokens
                                </a>
                            </li>
                            <li>
                                <a href="/market" className="text-gray-300 hover:text-yellow-400 transition-all">
                                    Market
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/docs" className="text-gray-300 hover:text-yellow-400 transition-all">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-gray-300 hover:text-yellow-400 transition-all">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="text-gray-300 hover:text-yellow-400 transition-all">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="/support" className="text-gray-300 hover:text-yellow-400 transition-all">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-yellow-400">Subscribe to Our Newsletter</h3>
                        <p className="text-gray-300">
                            Stay updated with the latest news and updates from CryptoDo.
                        </p>
                        <form className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-yellow-400 outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-yellow-400/50 transition-all"
                            >
                                <Envelope size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        &copy; {new Date().getFullYear()} CryptoDo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;