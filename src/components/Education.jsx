import '../styles/Education.css'
import FadeInSection from './FadeInSection'

export default function Education() {
  const educationData = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'Your University Name',
      date: '2020 – 2025',
      details: 'Specialization in AI & Machine Learning. Relevant coursework: Deep Learning, Computer Vision, Software Engineering.'
    },
    {
      degree: 'Erasmus Exchange Program in AI',
      institution: 'Technical University of Munich',
      date: 'Spring 2023',
      details: 'Focused on computer vision and applied machine learning.'
    }
  ]

  return (
    <section id="education">
      <div className="section-header">
        <h2>/ education</h2>
      </div>
      <div className="education-content">
        {educationData.map((edu, i) => (
          <FadeInSection key={i} delay={`${i * 100}ms`}>
            <div className="education-entry">
              <h3>{edu.degree}</h3>
              <p className="edu-meta">
                {edu.institution} — <span>{edu.date}</span>
              </p>
              <p className="edu-details">{edu.details}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
