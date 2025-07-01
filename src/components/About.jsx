import '../styles/About.css'
import profileImg from '/my_photo.jpg' // Replace with your image

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-description">
          <p>
            I’m a computer science student passionate about machine learning, AI, and data-driven software development. I enjoy solving real-world problems by building intelligent, scalable systems.
          </p>
          <p>
            Recently, I've worked on projects involving fast neural style transfer, computer vision, and augmented reality. I’m also interested in full-stack web development and backend engineering.
          </p>
          <p>Here are some technologies I’ve been working with recently:</p>
          <ul className="tech-list">
            <li>Python</li>
            <li>PyTorch</li>
            <li>TensorFlow</li>
            <li>Scikit-learn</li>
            <li>SQL</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>C++</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={profileImg} alt="Emirkan Burak Yilmaz" />
        </div>
      </div>
    </section>
  )
}
