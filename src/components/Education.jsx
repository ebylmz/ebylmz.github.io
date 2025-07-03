import '../styles/Education.css'
import FadeInSection from './FadeInSection'

export default function Education() {
  const educationData = [
      {
        degree: "Master's in Computer Engineering",
        institution: 'Gebze Technical University',
        date: 'Feb 2025 - Present',
        location: 'Kocaeli, Gebze',
        details: [
          'Cumulative GPA: 4.00/4.00',
          // 'Relevant Coursework: Deep Learning, Statistical Data Analysis'
        ]
      },
      {
        degree: "Bachelor's in Computer Engineering",
        institution: 'Gebze Technical University',
        date: 'Sep 2019 - Jun 2024',
        location: 'Kocaeli, Gebze',
        details: [
          'Cumulative GPA: 3.51/4.00 (High Honors)',
          // 'Relevant Coursework: Natural Language Processing, Machine Learning, Augmented Reality, Computer Vision'
        ]
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
