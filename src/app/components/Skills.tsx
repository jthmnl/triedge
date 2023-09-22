"use client"
import { skillsData, skillsDataCysec } from "@/lib/Data"
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y:100,
    },
    animate: (index: number) => ({
        opacity:1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
};

export default function Skills () {
    return (
        <section className="mb-20 max-w-[53rem] text-center">
            <span className="flex justify-start mb-5 text-purple-500 uppercase font-bold">Skills</span>
            <p className="flex justify-start mb-5 text-slate-400 text-sm">Development</p>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-400 mb-5">
                {
                    skillsData.map((skill, index) => (
                        <motion.li 
                        className="
                        hover:animate-pulse
                        bg-white/10
                        backdrop-blur-5xl 
                        rounded-md px-3 py-2" 
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                        >
                            
                        {skill}</motion.li>
                    ))
                }
            </ul>

            <p className="flex justify-start mb-5 text-slate-400 text-sm">Cybersecurity</p>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-400">
                {
                    skillsDataCysec.map((skill, index) => (
                        <motion.li 
                        className=" 
                        hover:animate-pulse
                        bg-white/10
                        backdrop-blur-5xl 
                        rounded-md px-3 py-2" 
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                        >
                            
                        {skill}</motion.li>
                    ))
                }
            </ul>
        </section>
        
    )
}