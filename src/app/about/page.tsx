'use client'

import { motion } from "framer-motion"

export default function About() {
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
                className="uppercase font-jura text-center text-2xl mb-4"
            >
                About Me
            </motion.h1>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center max-w-3xl space-y-2 text-muted-foreground"
            >
                {[ 
                    "Hello! I'm 20 years old and an intermediate-level fullstack developer, with experience working on both backend and frontend of web applications. Currently, I'm pursuing a degree in Computer Science and always strive to be at the forefront of new technologies to apply the best practices in my projects.",
                    "My passion lies in frontend development, focusing on creating intuitive and user-centered interfaces. I have a special interest in UX (User Experience) and believe that a well-thought-out design can make all the difference in how users interact with a digital product.",
                    "Currently, I'm enhancing my skills with <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong> and using <strong>Prisma</strong> as an ORM in the backend. Additionally, I'm exploring technologies such as <strong>TypeScript</strong>, <strong>GraphQL</strong>, and <strong>TailwindCSS</strong> to make my projects even more scalable and efficient.",
                    "I work as a fullstack developer at a company in my city, where I collaborate with teams on different types of projects, from corporate web platforms to applications focused on personalized experiences. I have experience with agile methodologies, especially SCRUM, which allows me to work in an organized and efficient manner, delivering quality results on time.",
                    "I'm an extremely curious person, always looking for new challenges that can expand my knowledge. I've participated in hackathons, programming marathons, and I'm a big advocate of open-source culture, contributing to the community whenever possible.",
                    "My professional goal is to continue developing myself, both technically and personally, always striving for excellence in what I do. I see each project as an opportunity for learning and continuous improvement, and I'm always open to new opportunities and collaborations.",
                    "Besides technology, I'm a music enthusiast. In my free time, I like to explore different music genres, which helps me relax and stimulate my creativity. I believe this passion for music complements my creative approach to software development.",
                    "I'm an active member of the Rocketseat community, where I share knowledge, participate in discussions, and stay updated with the latest trends in web development. This interaction with other developers has been fundamental to my professional growth and for building a valuable network of contacts in the field.",
                    "If you're looking for a fullstack developer with a strong passion for technology, design, and innovation, I'd be happy to discuss how I can contribute to your next project!"
                ].map((paragraph, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}