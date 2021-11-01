import React from "react"
import Head from "next/head"

import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-blue-400 h-screen flex flex-col justify-between overflow-y-auto pb-10">
      <Head>
        <title>Code Review</title>
        <meta
          name="description"
          content="A visual tool for learning data structures and algorithms"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
