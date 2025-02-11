import React, { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const SECTION_HEIGHT = 1800; // Increased height for more breathing room

const Hero = () => {
    return (
        <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full bg-black text-yellow-400">
            <CenterImage />

            {/* Increased spacing between elements and refined typography */}
            <div className="relative z-10">
                <ParallaxText
                    text="BITCOIN"
                    start={-100}
                    end={100}
                    className="text-7xl md:text-9xl font-bold tracking-tight text-yellow-400 text-center absolute top-[20vh] w-full"
                />
                <ParallaxText
                    text="THE FUTURE OF MONEY"
                    start={-100}
                    end={100}
                    className="text-xl md:text-2xl font-light tracking-[0.25em] text-yellow-400 text-center absolute top-[35vh] w-full"
                />
            </div>

            <div className="relative z-10">
                <ParallaxText
                    text="DECENTRALIZATION CHANGES EVERYTHING"
                    start={0}
                    end={150}
                    className="text-3xl md:text-5xl tracking-wide font-light text-yellow-400/90 text-center absolute top-[55vh] w-full"
                />
                <ParallaxText
                    text="DISCOVER THE POWER OF BLOCKCHAIN"
                    start={50}
                    end={200}
                    className="text-lg md:text-xl tracking-[0.5em] font-light text-white/80 text-center absolute top-[70vh] w-full"
                />
            </div>

            {/* Added more padding for image sections */}
            <ParallaxImages />

            {/* Enhanced gradient for smoother transition */}
            <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-black/0 via-black/80 to-black" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();
    const clip1 = useTransform(scrollY, [0, 1500], [30, 0]); // Increased initial clip for more dramatic effect
    const clip2 = useTransform(scrollY, [0, 1500], [70, 100]);
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["100%", "120%"]); // Reduced size for more whitespace
    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                clipPath,
                backgroundSize,
                opacity,

                backgroundImage: "url(https://i.pinimg.com/736x/08/8b/cc/088bcc529bc02524bcd5f5c0e5d02bfd.jpg)",

                // backgroundImage: "url(/assets/images/b0.png)",

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-4xl px-8 pt-[40vh]"> {/* Increased padding and adjusted max-width */}
            <div className="space-y-64"> {/* Added significant vertical spacing between images */}
                <ParallaxImg
                    src="/assets/images/b4.png"
                    start={200}
                    end={-250}
                    className="mx-auto w-1/2 md:w-3/5" // Reduced image size for more whitespace
                />
                <ParallaxImg
                    src="/assets/images/b5.png"
                    start={200}
                    end={-250}
                    className="mx-auto w-1/2 md:w-3/5"
                />
            </div>
        </div>
    );
};

const ParallaxText = ({ text, start, end, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.2]); // More subtle fade
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 1.1]); // Reduced scale effect

    return (
        <motion.h1 ref={ref} className={className} style={{ y, opacity, scale }}>
            {text}
        </motion.h1>
    );
};

const ParallaxImg = ({ className, src, start, end }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`]
    });
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.95]); // More subtle scale effect

    return (
        <motion.img src={src} className={className} ref={ref} style={{ y, opacity, scale }} />
    );
};

export default Hero;