import Head from 'next/head'
import Image from 'next/image'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = ['Home', 'Dashboard', 'About']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Index() {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Plusma</title>
        <meta
          name="Description"
          content="The platform connects donors and seekers."
        />
      </Head>
      <header>
        <Disclosure as="nav" className="bg-cyan-400">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-14 w-14" src="logo.svg" alt="logo" />
                    </div>
                    <div className="flex-shrink-0">
                      <link href="#" />
                      <a className="text-lg md:text-xl font-bold ml-3 text-white">Plusma</a>
                    </div>

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, itemIdx) =>
                          itemIdx === 0 ? (
                            <Fragment key={item}>
                              {/* Current: "bg-cyan-900 text-white", Default: "text-cyan-300 hover:bg-cyan-700 hover:text-white" */}
                              <a
                                href="#"
                                className="font-bold text-black hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm"
                              >
                                {item}
                              </a>
                            </Fragment>
                          ) : (
                            <a
                              key={item}
                              href="#"
                              className="font-bold text-black hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm"
                            >
                              {item}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-cyan-900 inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item, itemIdx) =>
                    itemIdx === 0 ? (
                      <Fragment key={item}>
                        {/* Current: "bg-cyan-900 text-white", Default: "text-cyan-300 hover:bg-cyan-700 hover:text-white" */}
                        <a
                          href="#"
                          className="text-black hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                        >
                          {item}
                        </a>
                      </Fragment>
                    ) : (
                      <a
                        key={item}
                        href="#"
                        className="text-black hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
      <main className="p-4 flex-grow bg-white">
        
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/* 1 card */}
          <div className="relative bg-white py-12 px-12 rounded-3xl w-64 my-8 shadow-xl">
            
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-red-600 left-4 -top-6">
              {/* svg  */}
              
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2">Blood</p>
              
              
            </div>
          </div>
          {/* 2 card */}
          <div className="relative bg-white py-12 px-12 rounded-3xl w-64 my-8 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
              {/* svg  */}
              
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2">Plasma</p>
            </div>
          </div>
          
        </div>
      </div>
        
      </main>
      <footer className="p-4 bg-cyan-400">

      
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://nawinto99.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Naveen Thurimerla
          </a>
        </li>

        <li>
          <a
            href="https://github.com/nawinto99/plusma-app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
        
        
      </footer>
    </div>
  )
}
