import React, { useState } from "react"
import Head from "next/head"
import Link from "next/link"

import { FaGithubSquare, FaHome, FaLinkedin } from "react-icons/fa"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}


const navigation = [
  { name: "Welcome", href: "/", icon: FaHome },
  { name: "Hash Table", href: "/dataStructures/hashTable", icon: FaHome },
  { name: "Linked List", href: "/dataStructures/linkedList", icon: FaHome },
  { name: "Queue", href: "/dataStructures/queue", icon: FaHome },
  { name: "Stack", href: "/dataStructures/stack", icon: FaHome },
  { name: "Binary Search Tree", href: "/dataStructures/binarySearchTree", icon: FaHome },
  { name: "Sorting", href: "/algorithms/sorting", icon: FaHome },
  { name: "Searching", href: "/algorithms/sorting", icon: FaHome },
]

const Layout = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("/")

  const linkHandler = (e) => {
    console.log('link clicked')
  }

  return (
    <div className="bg-gradient-to-b from-blue-400 h-screen flex flex-col justify-between overflow-y-auto pb-10">
      <Head>
        <title>Code Review</title>
        <meta
          name="description"
          content="A visual tool for learning data structures and algorithms"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="flex w-64 flex-col fixed inset-y-0">
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="" src="/favicon.svg" alt="Website logo" />
          </div>

          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    className={classNames(
                      currentTab === item.href ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    onClick={linkHandler}
                  >
                    <item.icon 
                      className={classNames(
                        currentTab === item.href ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-4 flex-shrink-0 h-6 w-6'
                      )}
                    />
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto mt-24">{children}</main>

      <footer className="w-full">
        <div className="max-w-3xl mx-auto">
          <article>
            <div className="mt-2">
              <div className="flex justify-center my-5">
                <div className="pr-8">
                  <a href="https://www.linkedin.com/in/jackson-price-883424b2/">
                    <FaLinkedin style={{ color: "gray", fontSize: "45px" }} />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/jprice8">
                    <FaGithubSquare
                      style={{ color: "gray", fontSize: "45px" }}
                    />
                  </a>
                </div>
              </div>
              <p className="text-center font-medium text-gray-500">
                ©2021 Jackson Price
              </p>
            </div>
          </article>
        </div>
      </footer>
    </div>
  )
}

export default Layout
