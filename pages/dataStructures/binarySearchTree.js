import React, { useState } from "react"
import Layout from "../../components/layout"

import { useBinarySearchTree } from "../../hooks/useBinarySearchTree"
import BSTControl from "../../components/dataStructures/bst/BSTControl"
import BSTGraph from "../../components/dataStructures/bst/BSTGraph"

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const BinarySearchTree = () => {
  const [insertValue, setInsertValue] = useState("")
  const [data, setData] = useState({ root: null })
  const [verify, setVerify] = useState(false)
  const [text, setText] = useState("")
  const array = []

  const handleInsertClick = (e) => {
    e.preventDefault()

    insert(parseInt(insertValue, 10))
    setInsertValue("")
  }

  const handleClearClick = (e) => {
    setData({ root: null })
  }

  function traverse(obj) {
    if (!obj) return null

    if (obj.left) {
      traverse(obj.left)
    }

    if (obj.value) {
      let children = []

      if (obj.left) {
        children = [...children, traverse(obj.left)]
      }

      if (obj.right) {
        children = [...children, traverse(obj.right)]
      }

      return {
        name: String(obj.value),
        children:
          children.length && [traverse(obj.left)].length ? children : [],
      }
    }
    if (obj.right) {
      traverse(obj.right)
    }
  }

  const formatData = (data) => {
    const res = Object.keys(data).map((key) => {
      return {
        name: data[key] && data[key].value ? String(data[key].value) : key,
        children: traverse(data.root) ? [traverse(data.root)] : null,
      }
    })

    if (res[0].children) {
      return res[0].children
    }

    return res
  }

  const insert = (val) => {
    let node = new Node(val)
    // Set node to root
    if (!data.root) {
      setData({ root: node })
    } else {
      let current = data.root
      while (current) {
        if (node.value < current.value) {
          // Use left subtree
          if (!current.left) {
            current.left = node
            break
          }
          // Move down a level
          current = current.left
        } else if (node.value > current.value) {
          // Use right subtree
          if (!current.right) {
            current.right = node
            break
          }
          // Move down a level
          current = current.right
        } else {
          break
        }
      }
    }
    setVerify(false)
    return data
  }

  return (
    <Layout>
      <div className="bg-white p-10 rounded-lg">
        <section className="pb-8 border-b border-gray-200">
          <h3 className="text-3xl leading-6 font-medium text-gray-900">
            Binary Search Tree
          </h3>
          <div className="mt-4 max-w-4xl text-sm text-gray-500">
            <p className="mt-8">
              A binary search tree (BST) is a data structure whose internal
              nodes each store a key greater than all the keys in the node's
              left subtree and less than those in its right subtree.
            </p>

            <p className="mt-4">We are showing three operations:</p>
            <ul className="ml-6 list-disc">
              <li>
                Insert, which traverses the tree by comparing the new value with
                the nodes and assigning accordingly.
              </li>
              <li>Remove, </li>
              <li>Search, </li>
            </ul>
          </div>
        </section>
        <section className="pt-4">
          <div>
            <BSTControl
              insertValue={insertValue}
              setInsertValue={setInsertValue}
              handleInsertClick={handleInsertClick}
              handleClearClick={handleClearClick}
            />
          </div>
        </section>
      </div>

      <div className="mt-12 h-full">
        <BSTGraph data={formatData(data)} />
      </div>
    </Layout>
  )
}

export default BinarySearchTree
