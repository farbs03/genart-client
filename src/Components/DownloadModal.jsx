import React, { Fragment, useState } from 'react'

import classes from './classes'

import { Dialog, Transition } from '@headlessui/react'

const DownloadModal = ({open, onClose, downloadImage, uri}) => {

    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const confirmDownload = () => {
        if(name !== "") {
            downloadImage(name)
            onClose()
            setName("")
            setError("")
        }
        else {
            setError("*Please enter a name")
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
                                Download Your Art
                            </Dialog.Title>


                            <div class="mt-4">
                                <input className={classes.textfield} placeholder='Image Name' value={name} onChange={(e) => setName(e.target.value)} />
                                <p className="text-red-400">{error}</p>
                                <button
                                    onClick={confirmDownload}
                                    className='px-4 py-2 text-center mt-2 mx-auto rounded-lg bg-green-400 transition duration-200 ease-in hover:bg-green-500 text-white font-semibold'
                                >
                                    Confirm
                                </button>
                            </div>

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default DownloadModal
