import { useRef, useEffect, useState, useCallback } from 'react'

const PARTICLE_COLOR = { r: 88, g: 166, b: 255 } // --color-primary
const MOUSE_RADIUS = 40
const RETURN_SPEED = 0.004
const SCATTER_FORCE = 8

const calculateSize = (width) => {
  if (width <= 480) return Math.min(240, width - 40)
  if (width <= 768) return Math.min(300, width - 60)
  return 400
}

class Particle {
  constructor(targetX, targetY, brightness, size) {
    // Start scattered
    this.x = targetX + (Math.random() - 0.5) * 500
    this.y = targetY + (Math.random() - 0.5) * 500
    this.targetX = targetX
    this.targetY = targetY
    this.vx = 0
    this.vy = 0
    this.brightness = brightness
    this.size = size
    this.alpha = 0
    this.targetAlpha = brightness
    this.delay = Math.random() * 0.6
    this.shimmer = Math.random() * Math.PI * 2
  }

  update(mouseX, mouseY, mouseActive, elapsed) {
    // Fade in after delay
    if (elapsed > this.delay) {
      this.alpha += (this.targetAlpha - this.alpha) * 0.05
    }

    // Mouse repulsion
    if (mouseActive) {
      const dx = this.x - mouseX
      const dy = this.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < MOUSE_RADIUS) {
        const force = (1 - dist / MOUSE_RADIUS) * SCATTER_FORCE
        const angle = Math.atan2(dy, dx)
        this.vx += Math.cos(angle) * force
        this.vy += Math.sin(angle) * force
      }
    }

    // Spring back to target
    this.vx += (this.targetX - this.x) * RETURN_SPEED
    this.vy += (this.targetY - this.y) * RETURN_SPEED

    // Damping
    this.vx *= 0.85
    this.vy *= 0.85

    this.x += this.vx
    this.y += this.vy

    // Shimmer
    this.shimmer += 0.02
  }

  draw(ctx) {
    const shimmerAlpha = 0.7 + 0.3 * Math.sin(this.shimmer)
    const finalAlpha = this.alpha * shimmerAlpha

    if (finalAlpha < 0.02) return

    ctx.fillStyle = `rgba(${PARTICLE_COLOR.r}, ${PARTICLE_COLOR.g}, ${PARTICLE_COLOR.b}, ${finalAlpha})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

function createParticlesFromImage(img, canvasSize) {
  const offscreen = document.createElement('canvas')
  const offCtx = offscreen.getContext('2d')
  offscreen.width = canvasSize
  offscreen.height = canvasSize

  // Draw image centered and scaled
  const scale = 0.85
  const imgAspect = img.width / img.height

  let drawHeight = canvasSize * scale
  let drawWidth = drawHeight * imgAspect

  if (drawWidth > canvasSize * scale) {
    drawWidth = canvasSize * scale
    drawHeight = drawWidth / imgAspect
  }

  const offsetX = (canvasSize - drawWidth) / 2
  const offsetY = (canvasSize - drawHeight) / 2

  offCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
  const imageData = offCtx.getImageData(0, 0, canvasSize, canvasSize)
  const pixels = imageData.data

  const particles = []
  const isMobile = canvasSize <= 280
  const gap = isMobile ? 4 : 5
  const particleSize = isMobile ? 1.2 : 1.5

  for (let y = 0; y < canvasSize; y += gap) {
    for (let x = 0; x < canvasSize; x += gap) {
      const i = (y * canvasSize + x) * 4
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      const a = pixels[i + 3]

      if (a < 10) continue

      // Luminance
      const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255

      // Only place particles where there's visible content
      if (brightness > 0.08) {
        particles.push(new Particle(x, y, brightness, particleSize))
      }
    }
  }

  return particles
}

export default function PointCloudPortrait({ imageSrc }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const particlesRef = useRef([])
  const startTimeRef = useRef(null)
  const animFrameRef = useRef(null)
  const [size, setSize] = useState(() => calculateSize(window.innerWidth))

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (!startTimeRef.current) startTimeRef.current = performance.now()
    const elapsed = (performance.now() - startTimeRef.current) / 1000

    const mouse = mouseRef.current
    const particles = particlesRef.current

    for (let i = 0; i < particles.length; i++) {
      particles[i].update(mouse.x, mouse.y, mouse.active, elapsed)
      particles[i].draw(ctx)
    }

    animFrameRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const updateSize = () => setSize(calculateSize(window.innerWidth))
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = imageSrc

    img.onload = () => {
      particlesRef.current = createParticlesFromImage(img, size)
      startTimeRef.current = null
      animFrameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [size, imageSrc, animate])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false }
    }

    const handleTouchMove = (e) => {
      const touch = e.touches[0]
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        active: true,
      }
    }

    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true })
    canvas.addEventListener('touchend', handleTouchEnd)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div className="point-cloud-container">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          cursor: 'crosshair',
        }}
      />
    </div>
  )
}
