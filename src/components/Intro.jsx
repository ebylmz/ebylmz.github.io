import { TypeAnimation } from 'react-type-animation';
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import NeuralMesh from "./NeuralMesh";
import "../styles/Intro.css";

export default function Intro() {
  return (
    <section id="intro">
      <NeuralMesh />
      <h1 className="intro-title">
        <TypeAnimation
          sequence={['hi, Emirkan here.', 1000]}
          speed={50}
          cursor={true}
          repeat={0}
          style={{ display: 'inline-block' }}
        />
      </h1>
      <FadeInSection>
        <h2 className="intro-subtitle">I create data-driven tools.</h2>

        <p className="intro-desc">
          I’m a computer science student interested in AI, machine learning, and software engineering. I enjoy building intelligent systems that solve real-world problems.
        </p>

        <a href="mailto:emirkan.b.yilmaz@gmail.com" className="intro-contact">
          <EmailRoundedIcon /> Say hi!
        </a>
      </FadeInSection>
    </section>
  );
}