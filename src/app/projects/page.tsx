'use client'

import { useState } from "react"
import Image from "next/image"
import { projectsData } from "@/data/projectsData"
import type { Project } from "@/data/projectsData"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardGrid,
    CardImage,
    CardLink,
    CardTitle,
} from "@/components/ui/card"
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiHtml5Fill } from "react-icons/ri"
import { SiTypescript, SiTailwindcss, SiPrisma, SiPostgresql, SiDocker, SiJavascript, SiCss3, SiPython, SiFlask } from "react-icons/si"
import { FaGolang } from "react-icons/fa6";
import { motion } from "framer-motion"

const technologyIcons = {
    next: RiNextjsFill,
    node: RiNodejsFill,
    react: RiReactjsFill,
    typescript: SiTypescript,
    html: RiHtml5Fill,
    tailwind: SiTailwindcss,
    prisma: SiPrisma,
    postgresql: SiPostgresql,
    docker: SiDocker,
    javascript: SiJavascript,
    css: SiCss3,
    python: SiPython,
    flask: SiFlask,
    golang: FaGolang,
}

export default function Project() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    return (
        <motion.div 
            className="flex flex-col justify-center mt-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1 
                className="uppercase font-jura text-center text-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                my projects
            </motion.h1>
            <div className="flex justify-center">
                <div className="grid justify-items-center gap-5 mt-10 grid-cols-1 lg:grid-cols-2 px-3 2xl:grid-cols-3">
                    {projectsData.map((project: Project) => (
                        <motion.div key={project.id} variants={cardVariants}>
                            <Card
                                href={project.link}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <CardImage>
                                    {hoveredId === project.id ? (
                                        <Image
                                            src={project.image}
                                            alt={`Imagem do projeto ${project.title}`}
                                            width={443}
                                            height={147}
                                            className="object-cover rounded-t-lg opacity-0 transition-opacity duration-500 ease-in-out"
                                            onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                                        />
                                    ) : (
                                        <CardGrid>
                                            {project.technologies.map((tech) => {
                                                const Icon = technologyIcons[tech as keyof typeof technologyIcons]
                                                return <Icon key={tech} size={50} />
                                            })}
                                        </CardGrid>
                                    )}
                                </CardImage>
                                <CardContent>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <CardLink />
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}