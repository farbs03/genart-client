import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Button from '../Components/Button'
import DownloadModal from "../Components/DownloadModal"

import axios from "axios"
import classes from '../Components/classes'

const Demo = () => {

    const [contentUrl, setContentUrl] = useState()
    const [contentUrlPrompt, setContentUrlPrompt] = useState(false)
    const [contentUrlConfirmed, setContentUrlConfirmed] = useState(false)

    const [styleUrl, setStyleUrl] = useState()
    const [styleUrlPrompt, setStyleUrlPrompt] = useState(false)
    const [styleUrlConfirmed, setStyleUrlConfirmed] = useState(false)

    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const generateArt = () => {
        console.log(contentUrl, styleUrl)
        setLoading(true);
        setResponse(null)
        axios.post('http://127.0.0.1:5000/style', 
            {
                "contentUrl": contentUrl,
                "styleUrl": styleUrl
            }
        )
        .then(res => {
            setTimeout(() => {
                setLoading(false)
                setResponse(res.data.data)
            }, 500)
        })
    }

    const [downloadMenuOpen, setDownloadMenuOpen] = useState(false)
    const downloadImage = (name) => {
        var link = document.createElement('a');
        link.download = name;
        link.href = `data:image/png;base64,${response}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <motion.div
            initial={{opacity: 0, y: 4}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.2}}
            style={{maxWidth: '1200px', margin: "10px auto"}}
        >
            <div className="text-gray-700 body-font">
                <div className="container mx-auto">

                    <div className="flex flex-col text-center w-full mb-8">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-bold">Demo</h1>
                    </div>

                    <div className="flex flex-wrap justify-center my-2">
                        
                        <div style={{width: "300px"}} className="mr-4">

                            <div class="flex justify-center" style={{alignItems: "center"}}>
                                <p className="font-semibold mr-2 text-xl">Original Image</p>

                                <button onClick={() => setContentUrlPrompt(!contentUrlPrompt)} class="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-green-400 transition duration-200 ease-in hover:bg-green-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                
                            </div>

                            {contentUrlPrompt && 
                                <div class="flex flex-wrap align-center mt-2">
                                    <div class="flex flex-wrap">
                                        <input 
                                            className={classes.textfieldWithIcon}
                                            value={contentUrl}
                                            onChange={(e) => setContentUrl(e.target.value)}
                                            placeholder="Image URL"
                                        />
                                        <span className={classes.textfieldIcon}><i className="fas fa-link" /></span>
                                    </div>

                                    <button onClick={() => setContentUrlConfirmed(true)} class="ml-2 w-10 h-10 inline-flex items-center justify-center rounded-xl bg-green-400 transition duration-200 ease-in hover:bg-green-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                </div>
                            }

                            <motion.div 
                                className="rounded-xl shadow-xl mt-4 bg-gray-200" style={{height: "300px"}} 
                                initial={{padding: "0px"}}
                                whileHover={{padding: "4px"}}
                                transition={{duration: 0.2}}
                            >
                                {contentUrlConfirmed && contentUrl ? 
                                    <motion.img
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        src={contentUrl}
                                        alt="input-img"
                                        class="object-cover object-center rounded-lg"
                                        style={{height: "100%"}}
                                    />
                                :
                                    <div className="justify-center text-center pt-10">
                                        <div class="w-12 h-12 mx-auto inline-flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
                                            <span><i class="fas fa-folder-open"></i></span>
                                        </div>
                                        <p>No data uploaded</p>
                                    </div>
                                }


                            </motion.div>
                        </div>

                        <div style={{width: "300px"}} className="mr-4">

                            <div class="flex justify-center" style={{alignItems: "center"}}>
                                <p className="font-semibold mr-2 text-xl">Style Image</p>

                                <button onClick={() => setStyleUrlPrompt(!styleUrlPrompt)} class="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-green-400 transition duration-200 ease-in hover:bg-green-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                
                            </div>

                            {styleUrlPrompt && 
                                <div class="flex flex-wrap align-center mt-2">
                                    <div class="flex flex-wrap">
                                        <input 
                                            className={classes.textfieldWithIcon}
                                            value={styleUrl}
                                            onChange={(e) => setStyleUrl(e.target.value)}
                                            on
                                            placeholder="Image URL"
                                        />
                                        <span className={classes.textfieldIcon}><i className="fas fa-link" /></span>
                                    </div>

                                    <button onClick={() => setStyleUrlConfirmed(true)} class="ml-2 w-10 h-10 inline-flex items-center justify-center rounded-xl bg-green-400 transition duration-200 ease-in hover:bg-green-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                </div>
                            }

                            <motion.div 
                                className="rounded-xl shadow-xl mt-4 bg-gray-200" style={{height: "300px"}} 
                                initial={{padding: "0px"}}
                                whileHover={{padding: "4px"}}
                                transition={{duration: 0.2}}
                            >
                                {styleUrlConfirmed && styleUrl ? 
                                    <motion.img
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        src={styleUrl}
                                        alt="input-img"
                                        class="object-cover object-center rounded-lg"
                                        style={{height: "100%"}}
                                    />
                                :
                                    <div className="justify-center text-center pt-10">
                                        <div class="w-12 h-12 mx-auto inline-flex items-center justify-center rounded-full bg-gray-300 flex-shrink-0">
                                            <span><i class="fas fa-folder-open"></i></span>
                                        </div>
                                        <p>No data uploaded</p>
                                    </div>
                                }


                            </motion.div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-6">
                        <Button variant="primary" title="Generate" onClick={generateArt} />
                    </div>
                    
                    {loading && !response &&
                        <motion.div 
                            className="text-center flex text-xl justify-center mt-4"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                        >
                            {[0, 1, 2].map((idx) => (
                                <motion.div
                                    key={idx}
                                    className="w-4 h-4 m-2 rounded-full bg-gray-700"
                                    initial={{opacity: 0.7, y: -5}}
                                    animate={{opacity: 1, y: 5}}
                                    transition={{duration: 0.6, yoyo: Infinity, delay: 0.2 + 0.2 * idx}}
                                />
                            ))}
                        </motion.div>
                    }

                    {response &&
                        <motion.div 
                            style={{width: "300px"}} 
                            className="mx-auto my-2"
                            initial={{opacity: 0, y: 5}}
                            animate={{opacity: 1, y: 0}}
                        >
                            <p className="font-semibold text-center">Output</p>
                            <motion.div 
                                className="rounded-xl shadow-xl mt-4 bg-gray-200" style={{height: "300px"}}
                                initial={{padding: "0px"}}
                                whileHover={{padding: "4px"}}
                                transition={{duration: 0.2}}
                            >
                                <motion.img
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    src={`data:image/png;base64,${response}`}
                                    alt="style-img"
                                    className="object-cover object-center rounded-lg"
                                    style={{height: "100%"}}
                                />
                            </motion.div>
                            <div className="mt-4 justify-center flex">

                                <button className="w-12 h-12 m-2 inline-flex items-center justify-center rounded-full bg-green-400 transition duration-200 ease-in hover:bg-green-500 text-white flex-shrink-0">
                                    <i class="fas fa-expand"></i>
                                </button>
                            
                                <button 
                                    onClick={() => setDownloadMenuOpen(true)}
                                    className="w-12 h-12 m-2 inline-flex items-center justify-center rounded-full bg-green-400 transition duration-200 ease-in hover:bg-green-500 text-white flex-shrink-0"
                                >
                                    <i class="fas fa-arrow-circle-down" />
                                </button>
                                <DownloadModal downloadImage={downloadImage} open={downloadMenuOpen} onClose={() => setDownloadMenuOpen(false)} />

                                <button
                                    onClick={() => setResponse(null)}
                                    className="w-12 h-12 m-2 inline-flex items-center justify-center rounded-full bg-green-400 transition duration-200 ease-in hover:bg-green-500 text-white flex-shrink-0"
                                >
                                    <i class="fas fa-redo"></i>    
                                </button>

                            </div>
                        </motion.div>
                    }
                    
                    
                </div>
            </div>
        </motion.div>
    )
}

export default Demo
