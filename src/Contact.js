import React from "react";
import './input.css';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Contact() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        <button
          type="button"
          onClick={openModal}
          className="bg-violet-700 ml-5 text-white px-3 pt-1 pb-2 rounded-md hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Contact
        </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
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
              <div className="inline-block h-44 max-w-md p-6 mb-56 ml-[47rem] 3xl:mb-[25rem] 3xl:ml-[63rem] overflow-hidden text-left transition-all transform bg-white shadow-2xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-semibold leading-6 text-violet-600"
                >
                  Get in touch with me!
                </Dialog.Title>
                  <img className="pt-1 -ml-1 pointer-events-none" src="images/Contact.png" alt="Nothing to see here @spambots" /> 
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}