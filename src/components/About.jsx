import '../styles/About.css'
import profileImg from '/assets/my_photo.jpg'
import FadeInSection from './FadeInSection'

export default function About() {
  const techStack = [
    'Python',
    'PyTorch',
    'TensorFlow',
    'SQL',
    'React.js',
  ]

  const paragraphOne = (
    <p>
      I'm a <b>Computer Engineering graduate</b> and current <b>Master's candidate</b> specializing in AI, with hands-on experience in both industry and research. My work focuses on <b>applied machine learning</b>, particularly in <b>computer vision</b>.
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
            <div className="tech-stack">
              {techStack.map((tech, i) => (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <div className="tech-item">{tech}</div>
                </FadeInSection>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={profileImg} alt="Emirkan Burak Yılmaz" />
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
