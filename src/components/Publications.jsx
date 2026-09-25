import '../styles/Publications.css'
import FadeInSection from './FadeInSection'

export default function Publications() {
  const publications = [
    {
      title: 'PnP-Transformer: A Neural Pose Solver for Zero-Shot 6D Object Pose Estimation',
      authors: 'E. B. Yilmaz and Y. Genc',
      venue: 'ECCV 2026 (R6D Workshop)',
      link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=CAESYgHrOzAV5uhLZsiWkhPJZFbH0eahwEr_5cUmIyp7wEilo28JmbOc6QElAWpDy6l3WEvJ7iiXYqZSFplM59JWFipFtEF0D1uAzoN1HYZhSgfitOSV1Kae6Ac0n_StLfxaE5ox&ved=2ahUKEwiA85L0jIqXAxVtR_EDHXu-IW8QFnoECB8QAQ&uoh=2&usg=AOvVaw3LqPC4fVbtkt7Hwjgqw9Tw'
    },
    {
      title: 'Architectural Works of the Early Republic Period from an Artificial Intelligence Perspective',
      authors: 'E. B. Yilmaz, et al.',
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
