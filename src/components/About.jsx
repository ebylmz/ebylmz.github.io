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
    I'm a machine learning engineer and currently pursuing my Master's in Computer Science, focusing on <b>3D vision</b> and <b>spatial intelligence</b>.
  </p>
)

const paragraphTwo = (
  <p>
    Right now, I'm working on my master's thesis research about <b>6-DoF pose estimation</b>. I find this topic really exciting because it plays a key role in <b>3D vision</b>, <b>robotics</b>, and <b>autonomous systems</b>.
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
            <p>Here are some technologies I've been working with recently:</p>
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
