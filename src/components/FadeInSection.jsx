import { useRef, useState, useEffect } from "react"

export default function FadeInSection({ children }) {
  const domRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const node = domRef.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    })

    observer.observe(node)
    return () => {
      if (node) observer.unobserve(node)
    }
  }, [])

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
      }}
    >
      {children}
    </div>
  )
}
