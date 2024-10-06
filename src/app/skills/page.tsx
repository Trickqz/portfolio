'use client'

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiPostgresql, SiDocker, SiHtml5, SiJavascript, SiCss3 } from 'react-icons/si';
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const skills = [
    { name: 'Next.js', icon: SiNextdotjs, level: 80 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    { name: 'Prisma', icon: SiPrisma, level: 50 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 40 },
    { name: 'Docker', icon: SiDocker, level: 35 },
    { name: 'TypeScript', icon: SiTypescript, level: 60 },
    { name: 'Node.js', icon: FaNodeJs, level: 45 },
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'HTML5', icon: SiHtml5, level: 100 },
    { name: 'JavaScript', icon: SiJavascript, level: 80 },
    { name: 'CSS3', icon: SiCss3, level: 100 },
];

export default function Skills() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mt-10 px-4"
        >
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="uppercase font-jura text-center text-2xl mb-2"
            >
                My Skills
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center text-sm mb-10 max-w-2xl text-muted-foreground"
            >
                Throughout my journey as a developer, I have gained experience in various technologies. 
                Here are some of my main skills and the level of proficiency in each of them.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * index, duration: 0.5 }}
                        className="bg-popover border p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="flex items-center mb-4">
                            <skill.icon className="text-2xl mr-4 text-primary" />
                            <h2 className="text-lg font-extrabold font-jura">{skill.name}</h2>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Proficiency Level</span>
                                <span className="font-jura font-extrabold text-muted-foreground">{skill.level}%</span>
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.2 * index + 0.5, duration: 0.8 }}
                            >
                                <Progress value={skill.level} className="w-full" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}