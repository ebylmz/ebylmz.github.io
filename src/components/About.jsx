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
              I am a Master's student and Research Assistant in Computer Engineering at <a href="https://www.gtu.edu.tr/en" target="_blank" rel="noopener noreferrer">Gebze Technical University</a>, working under the supervision of <a href="https://scholar.google.com.tr/citations?user=SvK0gDEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. Yakup Genc</a>.
              My thesis research focuses on <b>zero-shot 6DoF pose estimation</b> for unseen objects.
              Previously, I worked as a Machine Learning Engineer in the bioinformatics field, where I designed and developed graph neural networks for gene-disease prioritization.
            </p>
            <p className="about-tech-label">Technologies I work with:</p>
            <div className="tech-stack">
              {techStack.map((tech, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <div className="tech-item">{tech}</div>
                </FadeInSection>
              ))}
            </div>

            <p>
              Outside of work, I love exploring new places and meeting new people.
              You don't know what you don't know, and every journey expands my perspective on the world and my place within it.
            </p>

            <p><i><b>*Actively seeking PhD opportunities.</b></i></p>

          </div>

          <div className="about-image">
            <img src={profileImg} alt="Emirkan Burak Yilmaz" loading="lazy" />
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
