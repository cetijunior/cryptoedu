import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'John Doe',
            role: 'CEO, Company A',
            quote: 'This platform has revolutionized the way we handle transactions. Highly recommended!',
        },
        {
            name: 'Jane Smith',
            role: 'CTO, Company B',
            quote: 'The security and speed are unmatched. A game-changer in the industry.',
        },
        {
            name: 'Alice Johnson',
            role: 'Founder, Company C',
            quote: 'Incredible user experience and seamless integration. Love it!',
        },
    ];

    return (
        <div className="bg-black text-white overflow-hidden relative">
            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-yellow-400/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-black to-transparent" />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 py-20"
            >
                <div className="max-w-[980px] mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-medium text-white/90">
                            What Our <span className="text-yellow-400">Users Say</span>
                        </h2>
                        <p className="text-xl text-white/60 mt-4 max-w-2xl mx-auto">
                            Hear from our satisfied users who have transformed their financial journey with us.
                        </p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                role={testimonial.role}
                                quote={testimonial.quote}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

const TestimonialCard = ({ name, role, quote }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all"
        >
            <p className="text-white/60 italic mb-6">
                "{quote}"
            </p>
            <h3 className="text-xl font-medium text-white/90">
                {name}
            </h3>
            <p className="text-white/60">
                {role}
            </p>
        </motion.div>
    );
};

export default TestimonialsSection;