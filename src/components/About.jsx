import '../styles/About.css'
import profileImg from '/assets/my_photo.jpeg'
import FadeInSection from './FadeInSection'

export default function About() {
  const techStack = [
    'Python',
    'PyTorch',
    'C / C++',
    'Unity',
    'TypeScript',
    'React',
  ]

  return (
    <section id="about">
      <FadeInSection>
        <div className="section-header">
          <h2>/ about</h2>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p>
              I am a research assistant and master's student in Computer
              Engineering at Gebze Technical University.
              My research focuses on <b>3D vision</b>, <b>spatial
                intelligence</b>, and <b>zero-shot 6-DoF pose estimation for
                  unseen objects</b>.
            </p>

            <p>
              Outside the lab, I enjoy building side projects, doing sports, and travelling to discover new places.
            </p>

            <p className="about-tech-label">Technologies I work with:</p>
            <div className="tech-stack">
              {techStack.map((tech, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <div className="tech-item">{tech}</div>
                </FadeInSection>
              ))}
            </div>
          </div>

          <div className="about-image">
            <img src={profileImg} alt="Emirkan Burak Yilmaz" loading="lazy" />
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
