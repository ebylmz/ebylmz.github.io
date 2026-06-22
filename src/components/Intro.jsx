import { TypeAnimation } from 'react-type-animation'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import FadeInSection from './FadeInSection'
import PointCloudPortrait from './PointCloudPortrait'
import '../styles/Intro.css'

export default function Intro() {
  return (
    <section id="intro">
      <div className="intro-portrait">
        <PointCloudPortrait imageSrc="/assets/intro_portrait.png" />
      </div>

      <div className="intro-content">
        <h1 className="intro-title">
          hi, I'm{' '}
          <span className="intro-name">Emirkan</span>.
        </h1>

        {/* <div className="intro-typed">
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
        </div> */}

        <FadeInSection>
          <p className="intro-desc">
            Machine Learning engineer and researcher in Istanbul, Turkey.
            I specialize in 3D Computer Vision and interested in building world models that can reason about space and objects.
          </p>

          <a href="mailto:emirkan.b.yilmaz@gmail.com" className="intro-contact">
            <EmailRoundedIcon fontSize="small" /> Say hi
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}