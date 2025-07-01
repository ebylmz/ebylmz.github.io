import '../styles/Projects.css'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <h2>Projects</h2>
      </div>
      <div className="project-grid">
        <div className="project-card">
          <h3>Fast Neural Style Transfer</h3>
          <p>Real-time image stylization using perceptual loss.</p>
          <p className="project-tech">Python, PyTorch, Gradio</p>
          <a href="https://github.com/ebylmz/style-transfer" target="_blank">GitHub ↗</a>
        </div>
        <div className="project-card">
          <h3>AR Educational App</h3>
          <p>Augmented reality app using Unity and Vuforia.</p>
          <p className="project-tech">Unity, C#, Vuforia</p>
          <a href="https://github.com/ebylmz/ar-app" target="_blank">GitHub ↗</a>
        </div>
      </div>
    </section>
  )
}
