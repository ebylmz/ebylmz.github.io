import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import '../styles/NeuralMesh.css'

const sketch = (p5) => {
  let nodes = []
  let edges = []
  const NODE_COUNT = 50
  const WIDTH = 700
  const HEIGHT = 400
  let activePath = []
  let pathIndex = 0
  let pathTimer = 0
  const PATH_INTERVAL = 30 // Faster animation

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

    // Build edges based on proximity
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
    activePath = []
    pathIndex = 0
    pathTimer = 0

    const start = p5.floor(p5.random(nodes.length))
    let current = start
    const visited = new Set()
    activePath.push(current)
    visited.add(current)

    for (let i = 0; i < 10; i++) {
      const options = nodes[current].neighbors.filter(n => !visited.has(n))
      if (options.length === 0) break
      current = p5.random(options)
      activePath.push(current)
      visited.add(current)
    }
  }

  p5.draw = () => {
    p5.clear()
    p5.background(255, 0)

    // Draw edges
    for (let { a, b } of edges) {
      const i = activePath.indexOf(a)
      const j = activePath.indexOf(b)
      const isConnectedInPath =
        i >= 0 && j >= 0 && Math.abs(i - j) === 1 &&
        Math.min(i, j) < pathIndex

      p5.stroke(isConnectedInPath ? '#00c896' : 'rgba(0,0,0,0.08)')
      p5.strokeWeight(isConnectedInPath ? 2 : 1)
      p5.line(nodes[a].x, nodes[a].y, nodes[b].x, nodes[b].y)
    }

    // Draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      const isActive = activePath.indexOf(i) <= pathIndex
      p5.noStroke()
      p5.fill(isActive ? '#00c896' : '#888')
      p5.circle(node.x, node.y, node.size)
    }

    // Animate path
    pathTimer++
    if (pathTimer > PATH_INTERVAL) {
      pathIndex++
      pathTimer = 0
      if (pathIndex >= activePath.length) {
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
