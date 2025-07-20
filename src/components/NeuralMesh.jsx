import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import '../styles/NeuralMesh.css'

const sketch = (p5) => {
  const NODE_COUNT = 50
  const WIDTH = 700
  const HEIGHT = 400
  const PATH_INTERVAL = 35
  const MAX_TRAILS = 10

  let nodes = []
  let edges = []
  let activePath = []
  let pathIndex = 0
  let pathTimer = 0
  let trails = []

  p5.setup = () => {
    const canvas = p5.createCanvas(WIDTH, HEIGHT)
    canvas.parent('neural-mesh')
    generateGraph()
    generatePath()
  }

  function generateGraph() {
    nodes = []
    edges = []

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: p5.random(100, WIDTH - 100),
        y: p5.random(80, HEIGHT - 80),
        size: 6 + p5.random(3),
        neighbors: []
      })
    }

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        let d = p5.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
        if (d < 120) {
          edges.push({ a: i, b: j })
          nodes[i].neighbors.push(j)
          nodes[j].neighbors.push(i)
        }
      }
    }
  }

  function generatePath() {
    const path = []
    const visited = new Set()
    let current = p5.floor(p5.random(nodes.length))
    visited.add(current)
    path.push(current)

    for (let i = 0; i < 10; i++) {
      const options = nodes[current].neighbors.filter(n => !visited.has(n))
      if (options.length === 0) break
      current = p5.random(options)
      path.push(current)
      visited.add(current)
    }

    if (activePath.length > 0) {
      trails.push({ path: [...activePath], alpha: 255 })
      if (trails.length > MAX_TRAILS) trails.shift()
    }

    activePath = path
    pathIndex = 0
    pathTimer = 0
  }

  function drawEdge(a, b, color, alpha = 255, weight = 1.5) {
    p5.stroke(color + p5.hex(alpha, 2))
    p5.strokeWeight(weight)
    p5.line(a.x, a.y, b.x, b.y)
  }

  p5.draw = () => {
    p5.clear()
    p5.background(255, 0)

    // Draw all edges in light gray
    for (let edge of edges) {
      const a = nodes[edge.a]
      const b = nodes[edge.b]
      p5.stroke('rgba(0,0,0,0.08)')
      p5.strokeWeight(1)
      p5.line(a.x, a.y, b.x, b.y)
    }

    // Draw current active path in green
    for (let i = 0; i < pathIndex; i++) {
      const a = nodes[activePath[i]]
      const b = nodes[activePath[i + 1]]
      if (b) drawEdge(a, b, '#007acc', 255, 2.5)
    }

    // Draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const isActive = activePath.slice(0, pathIndex + 1).includes(i)
      p5.noStroke()
      p5.fill(isActive ? '#007acc' : '#ccc')
      p5.circle(nodes[i].x, nodes[i].y, nodes[i].size)
    }

    // Animate path step-by-step
    pathTimer++
    if (pathTimer > PATH_INTERVAL) {
      pathIndex++
      pathTimer = 0
      if (pathIndex >= activePath.length - 1) {
        generatePath()
      }
    }
  }
}

export default function NeuralMesh() {
  return (
    <div id="neural-mesh">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  )
}
