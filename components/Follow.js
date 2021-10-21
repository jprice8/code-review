import React from "react"

import { FaGithubSquare, FaLinkedin } from "react-icons/fa"

const Follow = () => {
  return (
    <div className="">
      <div className="flex mt-4 justify-center">
        <div className="pr-4">
          <a href="https://www.linkedin.com/in/jackson-price-883424b2/">
            <FaLinkedin style={{ color: "gray", fontSize: "45px" }} />
          </a>
        </div>
        <div className="">
          <a href="https://github.com/jprice8">
            <FaGithubSquare style={{ color: "gray", fontSize: "45px" }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Follow
