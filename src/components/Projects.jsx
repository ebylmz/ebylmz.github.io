import '../styles/Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import FadeInSection from './FadeInSection'

const projects = [
  {
    title: 'Fast Neural Style Transfer',
    description: 'Real-time image stylization using perceptual loss and a feedforward network.',
    tech: 'PyTorch, Gradio, Python',
    image: '/assets/style_transfer.jpg',
    github: 'https://github.com/yourusername/style-transfer',
    live: 'https://style-transfer-demo.com'
  },
  {
    title: 'AR Application',
    description: 'Marker-based AR experience with Unity and Vuforia.',
    tech: 'Unity, Vuforia, C#',
    image: '/assets/nomansland.png',
    github: 'https://github.com/yourusername/ar-app'
  },
  {
    title: 'CAD Retrieval Pipeline',
    description: '3D model retrieval from noisy factory inputs.',
    tech: 'OpenCV, PyTorch, Point Clouds',
    image: '/assets/gtu_cad.png',
    github: 'https://github.com/yourusername/cad-matching',
    live: ''
  },
  {
    title: 'GTU Assignments',
    description: '3D model retrieval from noisy factory inputs.',
    tech: 'OpenCV, PyTorch, Point Clouds',
    image: '/assets/gtu_cad.png',
    github: 'https://github.com/yourusername/cad-matching',
    live: ''
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <h2>/ projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, i) => (
          <FadeInSection key={i} delay={`${i * 100}ms`}>
            <div className="project-card">
              <div className="project-image-wrapper">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} className="project-img" />
                  </a>
                ) : (
                  <img src={project.image} alt={project.title} className="project-img" />
                )}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.tech}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <GitHubIcon />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <LaunchIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
