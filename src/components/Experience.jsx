import '../styles/Experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Research Intern @ ABC University</h3>
        <p className="date">Jun 2024 – Sep 2024</p>
        <ul>
          <li>Worked on neural style transfer using PyTorch.</li>
          <li>Co-authored a research paper published on arXiv.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Data Science Intern @ XYZ Company</h3>
        <p className="date">Jul 2023 – Sep 2023</p>
        <ul>
          <li>Built dashboards with Streamlit and Plotly.</li>
          <li>Preprocessed large datasets for behavior analysis.</li>
        </ul>
      </div>
    </section>
  )
}
