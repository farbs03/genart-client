import React, {useState, useEffect} from 'react'
import {AnimatePresence, motion} from "framer-motion"

const FeatureCard = ({title, description, more, icon}) => {

    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            class="rounded-xl hover:shadow-lg transition duration-400 ease-in m-2"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{width: "300px"}}
        >
            <motion.div
                key="preview"
                class="flex h-full flex-col p-8 bg-gray-200 rounded-xl"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.4}}
            >

                <div class="flex items-center mb-3">
                    <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-green-400 to-blue-300 text-white flex-shrink-0">
                        <span><i class={icon} /></span>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">{title}</h2>
                </div>

                <div class="flex-grow">
                    <p class="leading-relaxed text-base text-gray-500">{description}</p>
                </div>
                
                {/*
                <AnimatePresence>
                    {hovered && 
                        <motion.div
                            initial={{opacity: 0, height: "0%"}}
                            animate={{opacity: 1, height: "auto"}}
                            transition={{duration: 0.4}}
                            exit={{opacity: 0, height: "0%"}}
                        >
                            <p class="leading-relaxed text-base text-gray-500">{more}</p>
                        </motion.div>
                    }
                </AnimatePresence>
                
                */}
            </motion.div>
        </motion.div>
    )
}

export default FeatureCard
