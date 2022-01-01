import React, { Fragment, useState } from 'react'

import classes from './classes'

import { Dialog, Transition } from '@headlessui/react'

const LoginModal = ({open, onClose}) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = () => {
        if(email === 'example@email.com' && password === 'password') {
            onClose()
            setEmail("")
            setPassword("")
        }
    }

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={onClose}
            >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                            <button onClick={onClose} className="p-1 rounded-lg bg-transparent hover:bg-gray-100 text-gray-700 transition duration-200 ease-in">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <Dialog.Title
                                as="h1"
                                className="text-xl font-semibold leading-6 text-gray-900 text-center mb-6"
                            >
                                Login
                            </Dialog.Title>


                            <form>
                                <div class="mt-4">
                                    <input className={classes.textfield} placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div class="mt-4">
                                    <input className={classes.textfield} placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                
                                <div class="mt-6 mb-4 flex align-center justify-between">
                                    <div class="flex align-center">
                                        <input type="checkbox" class={classes.checkbox} style={{marginRight: "8px"}}></input>
                                        <p style={{lineHeight: "20px"}}>Remember me</p>
                                    </div>
                                    <a class="text-green-500" style={{lineHeight: "20px"}} href="#">Forgot password?</a>
                                </div>

                                <button onClick={submitLogin} className="bg-green-400 hover:bg-green-500 w-full transition duration-200 ease-in rounded text-center font-semibold py-2 text-white">Login</button>

                                <div class="mt-4 text-center">
                                    <p>Don't have an account? <a class="text-green-500" style={{lineHeight: "20px"}} href="#">Sign up</a></p>
                                </div>
                            </form>

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default LoginModal
