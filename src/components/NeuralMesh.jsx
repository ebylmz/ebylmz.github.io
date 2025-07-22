import React from 'react'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import '../styles/NeuralMesh.css'

const sketch = (p5) => {
  const NODE_COUNT = 80
  const WIDTH = 700
  const HEIGHT = 400

  let nodes = []
  let edges = []
  let angle = 0

  p5.setup = () => {
    const canvas = p5.createCanvas(WIDTH, HEIGHT)
    canvas.parent('neural-mesh')
    generateGraph()
  }

  function generateGraph() {
    nodes = []
    edges = []

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: p5.random(-150, 150),
        y: p5.random(-100, 100),
        z: p5.random(-120, 120),
        size: 6 + p5.random(3),
        neighbors: []
      })
    }

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const d = dist3D(nodes[i], nodes[j])
        if (d < 120) {
          edges.push({ a: i, b: j })
          nodes[i].neighbors.push(j)
          nodes[j].neighbors.push(i)
        }
      }
    }
  }

  function dist3D(a, b) {
    return p5.dist(a.x, a.y, a.z, b.x, b.y, b.z)
  }

  function project3D(node) {
    const rotated = rotateY(node, angle)
    const depth = 300 / (300 + rotated.z)
    return {
      x: rotated.x * depth + WIDTH / 2,
      y: rotated.y * depth + HEIGHT / 2,
      size: node.size * depth,
      depthFactor: depth
    }
  }

  function rotateY(point, theta) {
    return {
      x: point.x * Math.cos(theta) - point.z * Math.sin(theta),
      y: point.y,
      z: point.x * Math.sin(theta) + point.z * Math.cos(theta)
    }
  }

  function drawEdge(a, b, color = 'rgba(61, 174, 233, 0.15)', weight = 1.2) {
    const aP = project3D(a)
    const bP = project3D(b)
    p5.stroke(color)
    p5.strokeWeight(weight)
    p5.line(aP.x, aP.y, bP.x, bP.y)
  }

  p5.draw = () => {
    p5.clear()
    p5.background(18, 18, 18, 20) // dark translucent bg for subtle fade effect
    angle += 0.002 // slow rotation

    // Draw all edges with soft blue color
    for (let edge of edges) {
      const a = nodes[edge.a]
      const b = nodes[edge.b]
      drawEdge(a, b)
    }

    // Draw nodes with glowing bluish fill and slight depth fade
    for (let i = 0; i < nodes.length; i++) {
      const proj = project3D(nodes[i])
      p5.noStroke()
      const alpha = 100 + 155 * proj.depthFactor
      p5.fill(`rgba(61, 174, 233, ${alpha / 255})`)
      p5.circle(proj.x, proj.y, proj.size)
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
