import '../styles/Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded'
import FadeInSection from './FadeInSection'

const projects = [
  {
    title: 'Fast Neural Style Transfer',
    description: 'Feedforward Neural Style Transfer using perceptual loss.',
    tech: 'PyTorch',
    github: 'https://github.com/ebylmz/fast-neural-style-transfer',
    live: 'https://your-demo-link.com'
  },
  {
    title: 'Architectural Style Classification',
    description: 'CNN-based classification of Turkish architects.',
    tech: 'PyTorch, U-Net, EfficientNet',
    github: 'https://github.com/ebylmz/arch-style-classification'
  },
  {
    title: 'GTUCAD',
    description: 'A CAD Library for drawing and manipulating 2D shapes.',
    tech: 'C, PostScript',
    github: 'https://github.com/ebylmz/GTUCAD'
  },
  {
    title: 'Interactive AR Application',
    description: 'Unity/Vuforia AR experience with interactive scenarios.',
    tech: 'C#, Unity, Vuforia',
    github: 'https://github.com/ebylmz/interactive-ar-experience'
  },
  {
    title: 'Turkish N-Gram Language Model',
    description: 'Syllable-based n-gram models with Good-Turing smoothing.',
    tech: 'Python, NLTK',
    github: 'https://github.com/ebylmz/turkish-ngram-model'
  },
  {
    title: 'GTU Assignments',
    description: 'Collection of course assignments & notes at GTU.',
    tech: 'C, C++, Java, Python, HTML, JS',
    github: 'https://github.com/ebylmz/gtu-cse'
  }
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <h2>/ projects</h2>
      </div>
      <ul className="projects-grid">
        {projects.map((proj, i) => (
          <FadeInSection key={i} delay={`${i * 100}ms`}>
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon style={{ fontSize: 28 }} />
                </div>
                <div className="card-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="github-icon">
                    <GitHubIcon />
                  </a>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="open-icon">
                      <LaunchIcon />
                    </a>
                  )}
                </div>
              </div>
              <div className="card-title">{proj.title}</div>
              <div className="card-desc">{proj.description}</div>
              <div className="card-tech">{proj.tech}</div>
            </li>
          </FadeInSection>
        ))}
      </ul>
    </section>
  )
}
