import React from 'react'
import Button from '../Components/Button'
import { motion } from 'framer-motion'
import MainImage from "../Assets/landing.svg"

import FeatureCard from "../Components/FeatureCard"

const Home = ({changeView}) => {

    return (
        <div style={{maxWidth: '1200px', margin: "10px auto"}}>
            <div className="sm:text-center lg:text-left container mx-auto flex py-10 md:flex-row flex-col items-center">
                <motion.div
                    initial={{opacity: 0, y: 4}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2, delay: 0.15}}
                    class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                >
                    <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium font-bold text-gray-900">
                        Create art with
                        <br class="hidden lg:inline-block" />
                        <h1 class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300" style={{lineHeight: "46px"}}>Machine Learning</h1>
                    </h1>

                    <motion.div
                        initial={{opacity: 0, y: 4}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.2, delay: 0.3}}
                    >
                        <p className="mt-1 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                            Use machine learning to integrate the artstyle of one image into another
                        </p>
                    </motion.div>

                    <div className="mt-4 flex">
                        <motion.div
                            initial={{opacity: 0, y: 4}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.2, delay: 0.45}}
                        >
                            <a href="/demo">
                                <Button variant="primary" title="Get Started" />
                            </a>
                            
                        </motion.div>
                    </div>

                </motion.div>

                <motion.div 
                    class="lg:max-w-lg lg:w-full md:w-2/3"
                    initial={{opacity: 0, x: 10}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.2, delay: 0.60}}
                >
                    <motion.div
                        class="rounded-xl shadow-xl p-6"
                        whileHover={{x: 5}}
                    >
                        <img class="object-cover object-center rounded-lg" alt="hero" src={MainImage} />
                    </motion.div>
                </motion.div>

            </div>

            <motion.div
                initial={{opacity: 0, y: 4}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.2, delay: 0.75}}
            >
                <div class="text-gray-700 body-font">
                    <div class="container py-20 mx-auto">
                        <div class="flex flex-col text-center w-full mb-8">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-bold">Features</h1>
                        </div>
                        <motion.div class="flex flex-wrap -m-4 justify-center">
                            {[0, 1, 2].map(() => (
                                <FeatureCard 
                                    title="Title here"
                                    description="Something idek"
                                    more="even more PogU"
                                    icon="far fa-envelope"
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Home
