import '../styles/About.css'
import profileImg from '/assets/my_photo.jpg'
import FadeInSection from './FadeInSection'

export default function About() {
  const techStack = [
    'Python',
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'SQL',
    'React.js',
    'Node.js',
    'C++'
  ]

  const paragraphOne = (
    <p>
      I’m a computer science student passionate about <b>machine learning</b>, <b>AI</b>, and data-driven software development. I enjoy solving real-world problems by building intelligent, scalable systems.
    </p>
  )

  const paragraphTwo = (
    <p>
      Recently, I've worked on projects involving <b>fast neural style transfer</b>, <b>computer vision</b>, and <b>augmented reality</b>. I’m also interested in full-stack web development and backend engineering.
    </p>
  )

  return (
    <section id="about">
      <FadeInSection>
        <div className="section-header">
          <h2>/ about me</h2>
        </div>
        <div className="about-content">
          <div className="about-description">
            {paragraphOne}
            {paragraphTwo}
            <p>Here are some technologies I’ve been working with recently:</p>
            <ul className="tech-stack">
              {techStack.map((tech, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li>{tech}</li>
                </FadeInSection>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <img src={profileImg} alt="Emirkan Burak Yilmaz" />
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
