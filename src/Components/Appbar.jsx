import React, { Fragment, useState } from 'react'

import Button from './Button'
import classes from './classes'

import { Transition } from '@headlessui/react'
import LoginModal from './LoginModal'
import RegisterModal from "./RegisterModal"

import { useMediaQuery } from './useMediaQuery'
import {AnimatePresence, motion} from "framer-motion"

import Home from '../Views/Home'
import Demo from '../Views/Demo'

const Appbar = ({style}) => {

    const links = [
        {title: "Home", href: "#"},
        {title: "About", href: "#"},
        {title: "Resources", href: "#"}
    ]

    const [loginOpen, setloginOpen] = useState(false)

    function closeLogin() {
        setloginOpen(false)
    }

    function openLogin() {
        setloginOpen(true)
    }

    const [registerOpen, setRegisterOpen] = useState(false)

    function closeRegister() {
        setRegisterOpen(false)
    }

    function openRegister() {
        setRegisterOpen(true)
    }

let mobile = useMediaQuery('(max-width: 700px)')    

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            {!mobile ?
                <>
                    <div
                        className={classes.Appbar}
                    >
                        <div style={{width: "1200px", margin: "0px auto"}} className="justify-between items-center flex">
                            
                            <a href="/" style={{display: "flex"}}>
                                <div class="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-blue-300 text-white flex-shrink-0">
                                    <span><i class="fas fa-palette"></i></span>
                                </div>
                                <h1 className={classes.Title} style={{lineHeight: "40px"}}>genart.ai</h1>
                            </a>

                            <div className="justify-center items-center">
                                {links.map((link) => (
                                    <a href={link.href} className={classes.Link} style={{lineHeight: "40px"}}>{link.title}</a>
                                ))}
                            </div>

                            <div className="justify-center items-center">
                                <Button title="Login" variant="secondary" style={{marginRight: "5px"}} onClick={openLogin} />
                                <Button title="Register" variant="primary" onClick={openRegister} />
                            </div>
                        </div>

                    </div>

                </>
                :
                <>
                    <div
                        style={style}
                        className={classes.Appbar}
                    >

                        <h1 className={classes.Title}>Neural Next (idek)</h1>

                        <button style={{paddingTop: "3px"}} onClick={toggleMenuOpen}>
                            {!menuOpen ? 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            }
                        </button>
                        
                    </div>
                    
                </>
            }    

            <AnimatePresence>
                {menuOpen &&
                
                    <motion.div 
                        key="menu"
                        initial={{height: "0px"}}
                        animate={{height: "377px"}}
                        transition={{duration: 0.4, delay: !menuOpen ? 0.4 : 0}}
                        exit={{height: "0px"}}
                        className="bg-white shadow-md w-full py-4"
                    >
                        <div style={{borderBottom: "1px solid rgb(240, 240, 240)"}} className="px-6 divide-y divide-gray-200">
                            {links.map((link, idx) => (
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.1, delay: menuOpen ? 0.1 + 0.1 * idx : 0.5 - idx * 0.1}}
                                    exit={{opacity: 0}}
                                >
                                    <a href="#" className="m-2 hover:text-green-500 border-green-500 hover:border-b-2 transition ease-in duration-200" style={{display: "block", padding: "8px"}}>{link.title}</a>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            className="px-6 py-4" 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.2, delay: menuOpen ? 0.4 : 0.1}}
                            exit={{opacity: 0}}
                        >
                            <Button title="Login" variant="secondary" style={{marginBottom: "5px"}} onClick={openLogin} />
                            <Button title="Register" variant="primary" onClick={openRegister} style={{display: "block"}} />
                        </motion.div>
                    </motion.div>

                }
                
            </AnimatePresence>

            <LoginModal open={loginOpen} onClose={closeLogin} />
            <RegisterModal open={registerOpen} onClose={closeRegister} />    
        </>
    )
}

export default Appbar
