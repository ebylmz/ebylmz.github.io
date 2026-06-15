import { TypeAnimation } from 'react-type-animation'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import FadeInSection from './FadeInSection'
import '../styles/Intro.css'

export default function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <h1 className="intro-title">
          hi, I'm{' '}
          <span className="intro-name">Emirkan</span>.
        </h1>

        <div className="intro-typed">
          <TypeAnimation
            sequence={[
              'I love matrices, images, videos.',
              2000,
              'I build neural systems for computer vision.',
              2000,
              'My research involves 3D vision and spatial intelligence.',
              2000,
            ]}
            speed={50}
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </div>

        <FadeInSection>
          <p className="intro-desc">
            Research assistant and master's student in Computer Engineering
            at Gebze Technical University, focused on making machines
            understand and interact with the 3D world.
          </p>

          <a href="mailto:emirkan.b.yilmaz@gmail.com" className="intro-contact">
            <EmailRoundedIcon fontSize="small" /> Say hi
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}