import { useCallback, useState } from "react";

export const useCenteredTree = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const containerRef = useCallback((container) => {
    if (container !== null) {
      const { width, height } = container.getBoundingClientRect()
      setTranslate({ x: width / 2, y: 100 })
    }
  }, [])
  return [translate, containerRef]
}