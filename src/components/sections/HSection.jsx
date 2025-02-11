import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full bg-black text-yellow-400">
            <CenterImage />
            <ParallaxText text="BITCOIN:" start={-100} end={100} className="text-6xl md:text-8xl font-bold text-yellow-400 text-center absolute top-1/4 w-full" />
            <ParallaxText text="THE FUTURE OF MONEY" start={-100} end={100} className="text-6xl mt-32 md:text-8xl font-bold text-yellow-400 text-center absolute top-1/4 w-full" />

            <ParallaxText text="DECENTRALIZATION CHANGES EVERYTHING" start={0} end={150} className="text-4xl z-50 md:text-6xl md:mt-72 mt-32 font-semibold text-yellow-400 text-center absolute top-1/2 w-full" />
            <ParallaxText text="DISCOVER THE POWER OF BLOCKCHAIN" start={50} end={200} className="text-3xl md:text-5xl font-medium text-yellow-500 text-center absolute top-3/4 w-full" />
            <ParallaxImages />
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-black/0 to-black" />
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();
    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["70%", "100%"]);
    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage: "url(/assets/images/b0.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

const ParallaxText = ({ text, start, end, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.3]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 1.2]);

    return (
        <motion.h1 ref={ref} className={className} style={{ y, opacity, scale }}>
            {text}
        </motion.h1>
    );
};

const ParallaxImages = () => {
    return (
        <div className="mx-auto max-w-5xl px-4 pt-[200px]">
            <div className="mx-auto max-w-5xl px-4 pt-[200px]">
                <ParallaxImg
                    src="/assets/images/b4.png"
                    start={-200} end={200} className="lg:w-1/3 w-1/2" />
                <ParallaxImg
                    src="/assets/images/b5.png"
                    start={200} end={-250} className="mx-auto w-2/3" />
            </div>
        </div>
    );
};

const ParallaxImg = ({ className, src, start, end }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: [`${start}px end`, `end ${end * -1}px`] });
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    return (
        <motion.img src={src} className={className} ref={ref} style={{ y, opacity, scale }} />
    );
};

export default Hero;
