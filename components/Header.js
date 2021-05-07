import Image from 'next/image'
import Link from 'next/link'

import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { title: 'Home', route: '/' },
  { title: 'COVID', route: '/covid' },
  { title: 'Dashboard', route: '/dashboard' },
  { title: 'About', route: '/about' },
]

export default function Header() {
  return (
    <>
      <header>
        <Disclosure as="nav" className="bg-gradient-to-r from-pink-400 via-pink-500 to-red-500">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image src="/logo.svg" alt="logo" height={70} width={70} />
                    </div>
                    <div className="flex-shrink-0">
                      <Link href="/">
                        <a className="text-lg md:text-5xl font-extrabold ml-3 text-white capitalize text-3xl">
                          Plusma
                        </a>
                      </Link>
                    </div>

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, itemIdx) =>
                          itemIdx === 0 ? (
                            <Fragment key={item.title}>
                              {/* Current: "bg-cyan-900 text-white", Default: "text-cyan-300 hover:bg-cyan-700 hover:text-white" */}
                              <a
                                href={item.route}
                                className="font-bold text-black hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm"
                              >
                                {item.title}
                              </a>
                            </Fragment>
                          ) : (
                            <a
                              key={item.title}
                              href={item.route}
                              className="font-bold text-black hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm"
                            >
                              {item.title}
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
                      <Fragment key={item.title}>
                        {/* Current: "bg-cyan-900 text-white", Default: "text-cyan-300 hover:bg-cyan-700 hover:text-white" */}
                        <a
                          href={item.route}
                          className="text-black hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                        >
                          {item.title}
                        </a>
                      </Fragment>
                    ) : (
                      <a
                        key={item.title}
                        href={item.route}
                        className="text-black hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
                      >
                        {item.title}
                      </a>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  )
}
