import React, { useState } from "react"
import { Tab } from "@headlessui/react"
import Link from "next/link"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function NavTabs() {
  let [categories] = useState({
    DataStructures: [
      {
        id: 1,
        title: "Hash Table",
        href: "/dataStructures/hashTable",
      },
      {
        id: 2,
        title: "Linked List",
        href: "/dataStructures/linkedList",
      },
      {
        id: 3,
        title: "Stack",
        href: "/dataStructures/stack",
      },
      {
        id: 4,
        title: "Queue",
        href: "/dataStructures/queue",
      },
      {
        id: 5,
        title: "Binary Search Tree",
        href: "/dataStructures/binarySearchTree",
      },
    ],
    Algorithms: [
      {
        id: 10,
        title: "Merge Sort",
        href: "/algorithms/mergeSort",
      },
      {
        id: 11,
        title: "Quick Sort",
        href: "/algorithms/quickSort",
      },
      {
        id: 12,
        title: "Binary Search",
        href: "/algorithms/binarySearch",
      },
    ],
  })

  return (
    <div className="max-w-md mx-auto px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900 bg-opacity-20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>
                    <Link href={post.href}>
                      <a
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
                        )}
                      ></a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
