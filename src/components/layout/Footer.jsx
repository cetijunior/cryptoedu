import React from 'react';
import { Lightning, Envelope, TwitterLogo, GithubLogo, LinkedinLogo, DiscordLogo } from "@phosphor-icons/react";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-start w-full mx-auto gap-12 border-b border-gray-800 pb-8">
                    {/* Logo & Tagline */}
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center space-x-2">
                            <Lightning size={24} className="text-yellow-400" />
                            <span className="text-2xl font-semibold text-white">CryptoDo</span>
                        </div>
                        <p className="text-sm max-w-sm">
                            The future of decentralized finance starts here. Secure, scalable, and built for the next generation of blockchain enthusiasts.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                        <FooterColumn title="Explore">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/choose-blockchain">Blockchain</FooterLink>
                            <FooterLink href="/choose-token">Tokens</FooterLink>
                            <FooterLink href="/market">Market</FooterLink>
                        </FooterColumn>

                        <FooterColumn title="Resources">
                            <FooterLink href="/docs">Documentation</FooterLink>
                            <FooterLink href="/blog">Blog</FooterLink>
                            <FooterLink href="/faq">FAQs</FooterLink>
                            <FooterLink href="/support">Support</FooterLink>
                        </FooterColumn>

                        <FooterColumn title="Community">
                            <FooterLink href="https://twitter.com">Twitter</FooterLink>
                            <FooterLink href="https://github.com">GitHub</FooterLink>
                            <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
                            <FooterLink href="https://discord.com">Discord</FooterLink>
                        </FooterColumn>

                        <FooterColumn title="Stay Updated">
                            <form className="flex flex-col w-full space-y-3 mt-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-yellow-400 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-yellow-400/50 transition-all"
                                >
                                    <Envelope className='self-center w-full' size={24} />
                                </button>
                            </form>
                        </FooterColumn>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-6">
                    <p>&copy; {new Date().getFullYear()} CryptoDo. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <FooterLink href="/privacy">Privacy Policy</FooterLink>
                        <FooterLink href="/terms">Terms of Service</FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, children }) => (
    <div className="space-y-3">
        <h3 className="text-sm font-semibold text-white uppercase">{title}</h3>
        <ul className="space-y-2 text-sm">{children}</ul>
    </div>
);

const FooterLink = ({ href, children }) => (
    <li>
        <a href={href} className="hover:text-yellow-400 transition-all">{children}</a>
    </li>
);

export default Footer;