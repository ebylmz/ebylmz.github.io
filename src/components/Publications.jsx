import '../styles/Publications.css'
import FadeInSection from './FadeInSection'

export default function Publications() {
  const publications = [
    {
      title: 'Architectural Works of the Early Republic Period from an Artificial Intelligence Perspective',
      venue: 'IEEE SIU 2024',
      link: 'https://ieeexplore.ieee.org/abstract/document/10600693/'
    }
  ]

  return (
    <section id="publications">
      <div className="section-header">
        <h2>/ publications</h2>
      </div>
      <ul className="publication-list">
        {publications.map((pub, i) => (
          <FadeInSection key={i} delay={`${i * 100}ms`}>
            <li>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>{' '}
              — <span className="venue">{pub.venue}</span>
            </li>
          </FadeInSection>
        ))}
      </ul>
    </section>
  )
}
