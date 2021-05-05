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
        <meta name="Description" content="The platform connects donors and seekers." />
      </Head>
      <header>
        <Disclosure as="nav" className="bg-gradient-to-r from-pink-400 via-pink-500 to-red-500">
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
                      <a className="text-lg md:text-5xl font-extrabold ml-3 text-white capitalize text-3xl">Plusma</a>
                    </div>

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, itemIdx) =>
                          itemIdx === 0 ? (
                            <Fragment key={item}>
                              {/* Current: "bg-cyan-900 text-white", Default: "text-cyan-300 hover:bg-cyan-700 hover:text-white" */}
                              <a
                                href="#"
                                className="font-bold text-black hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm"
                              >
                                {item}
                              </a>
                            </Fragment>
                          ) : (
                            <a
                              key={item}
                              href="#"
                              className="font-bold text-black hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm"
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
                    <Disclosure.Button className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white">
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
                          className="text-black hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                        >
                          {item}
                        </a>
                      </Fragment>
                    ) : (
                      <a
                        key={item}
                        href="#"
                        className="text-black hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
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
      <main className="p-4 flex-grow bg-gradient-to-r from-green-400 to-blue-500">
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* 1 card */}
            <div className="relative bg-white py-6 px-12 rounded-3xl w-64 my-6 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-red-600 left-4 -top-6">
                {/* svg  */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="px-12 py-2 text-black font-bold uppercase">
                <div className="font-bold text-xl items-center justify-center uppercase">Blood</div>
              </div>
              <div className="border-t-4"></div>
              <div className="mt-8">
                <button
                  className="bg-pink-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <span>Donor</span>
                </button>

                <button
                  className="bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <span>Seeker</span>
                </button>
              </div>
            </div>
            {/* 2 card */}
            <div className="relative bg-white py-6 px-12 rounded-3xl w-64 my-6 shadow-xl">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
                {/* svg  */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <div className="px-12 py-2 text-black font-bold uppercase">
                <div className="font-bold text-xl items-center justify-center uppercase">Plasma</div>
              </div>
              <div className="border-t-4"></div>
              <div className="mt-8">
                <button
                  className="bg-pink-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <span>Donor</span>
                </button>

                <button
                  className="bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <span>Seeker</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-4 bg-black">
        <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
          <li>
            Created by{' '}
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
