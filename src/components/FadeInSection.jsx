import { useEffect, useRef, useState } from 'react'

export default function FadeInSection({ children, delay }) {
  const domRef = useRef()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    })
    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: delay || '0ms' }}
      ref={domRef}
    >
      {children}
    </div>
  )
}
