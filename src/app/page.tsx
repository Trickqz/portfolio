'use client'

import Image from "next/image";
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiPrisma, SiJavascript, SiTailwindcss, SiDocker, SiNextdotjs, SiPostgresql, SiHtml5, SiCss3 } from 'react-icons/si'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import My from "@/assets/euuu.jpg"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 xl:mt-60 flex flex-col items-center justify-center px-4 xl:px-0"
      >
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8 xl:mb-0 xl:order-last"
          >
            <Image className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] xl:ml-20 object-cover border-4 rounded-full" width={400} height={400} src={My} alt="minha foto" />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center xl:text-left p-4 xl:p-8 max-w-3xl"
          >
            <h1 className="text-3xl xl:text-5xl text-center xl:text-start font-jura font-bold mb-3">
              Hello, my name is Patrick
            </h1>
            <p className="text-base xl:text-lg text-center xl:text-start text-muted-foreground">
              During these 5 years as a full-stack, my role has always gone beyond my knowledge, always seeking to learn to apply in my codes and always looking for projects to grow.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-start gap-3 xl:gap-5 mt-6"
            >
              <SkillIcon Icon={SiNextdotjs} name="Next.js" />
              <SkillIcon Icon={SiTailwindcss} name="Tailwind CSS" />
              <SkillIcon Icon={SiPrisma} name="Prisma" />
              <SkillIcon Icon={SiPostgresql} name="PostgreSQL" />
              <SkillIcon Icon={SiDocker} name="Docker" />
              <SkillIcon Icon={SiTypescript} name="TypeScript" />
              <SkillIcon Icon={FaNodeJs} name="Node.js" />
              <SkillIcon Icon={FaReact} name="React" />
              <SkillIcon Icon={SiHtml5} name="HTML5" />
              <SkillIcon Icon={SiJavascript} name="JavaScript" />
              <SkillIcon Icon={SiCss3} name="CSS3" />
            </motion.div>
          </motion.div>
          <svg className="absolute hidden xl:block right-0 -z-30" width="885" viewBox="0 0 685 719" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M156 239.5C253 78.5 573.499 114 684.999 0V718.5C135.268 718.5 23.5 650 8.92667 634.616C-5.64667 619.231 -5.42806 534.5 37.4999 455C131.431 281.046 80.8887 364.169 156 239.5Z" fill="#3ECF8E" />
          </svg>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}

function SkillIcon({ Icon, name }: { Icon: React.ElementType, name: string }) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger>
        <div className="flex flex-col items-center">
          <Icon className="text-2xl text-buttonborder" />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
