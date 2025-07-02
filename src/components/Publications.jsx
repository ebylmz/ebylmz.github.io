import '../styles/Publications.css'
import FadeInSection from './FadeInSection'

export default function Publications() {
  const publications = [
    {
      title: 'A Neural Approach to Perceptual Image Translation',
      venue: 'arXiv, 2025',
      link: 'https://arxiv.org/abs/your-paper-id'
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
