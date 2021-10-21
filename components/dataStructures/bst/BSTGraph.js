import React from "react"
import Tree from "react-d3-tree"

import { useCenteredTree } from '../../../hooks/useCenteredTree'

const BSTGraph = ({ data }) => {
  const [translate, containerRef] = useCenteredTree()

  console.log(data)

  return (
    <div id="treeWrapper" className="h-full" ref={containerRef}>
      <Tree
        data={data}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        translate={translate}
        orientation="vertical"
      />
    </div>
  )
}

export default BSTGraph
