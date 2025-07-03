import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import FadeInSection from './FadeInSection'
import '../styles/Experience.css'

const experienceData = {
  'PhiTech Bioinformatics': [
    {
      jobTitle: 'Machine Learning Engineer @',
      duration: 'Feb 2024 – Apr 2025',
      location: 'Kocaeli, Gebze',
      desc: [
        'Managed medical data collection and preprocessing workflows.',
        'Developed Graph Neural Network (GNN) models for phenotype-driven gene and disease prioritization, achieving a Top-10 accuracy of 60%.',
        'Performed hyperparameter tuning and model evaluation using Weights & Biases.'
      ]
    },
    {
      jobTitle: 'Software Engineer Intern @',
      duration: 'Jun 2022 – Sep 2022',
      location: 'Kocaeli, Gebze',
      desc: [
        'Developed and optimized a full-stack web application using Spring Boot, Angular Material, and MySQL.',
        'Improved backend logic and optimized MySQL queries to increase performance and maintain data integrity.'
      ]
    }
  ],
  'Maastricht University Institute of Data Science': [
    {
      jobTitle: 'Data Science Intern @',
      duration: 'Jun 2023 – Sep 2023',
      location: 'Maastricht, Netherlands',
      desc: [
        "Extracted and structured medical data from FDA's DailyMed SPL drug labels to build a specialized NER dataset.",
        'Trained spaCy-based Named Entity Recognition models, achieving an F1-score of 0.61.',
        'Benchmarked model performance against large language models (LLMs) for efficiency and accuracy.'
      ]
    }
  ]
}


export default function JobList() {
  const [value, setValue] = useState(0)
  const isSmallScreen = window.innerWidth < 600
  const companies = Object.keys(experienceData)

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
      <Tabs
        orientation={isSmallScreen ? 'horizontal' : 'vertical'}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        variant="scrollable"
        sx={{
          borderRight: isSmallScreen ? 'none' : '1px solid #ddd',
          minWidth: isSmallScreen ? '100%' : '180px'
        }}
      >
        {companies.map((company, i) => (
          <Tab
            key={company}
            label={isSmallScreen ? `0${i}.` : company}
            sx={{ alignItems: 'flex-start', textTransform: 'none' }}
          />
        ))}
      </Tabs>

    {companies.map((company, i) => (
      value === i && (
        <Box key={company} sx={{ padding: '1rem', flex: 1 }}>
          {experienceData[company].map((role, idx) => (
            <div key={idx} className="job-entry">
              <div className="joblist-job-title">
                {role.jobTitle}
                <span className="joblist-job-company"> {company}</span>
              </div>
              <div className="joblist-duration">{role.duration}</div>
              <ul className="job-description">
                {role.desc.map((point, j) => (
                  <FadeInSection key={j} delay={`${j * 100}ms`}>
                    <li>{point}</li>
                  </FadeInSection>
                ))}
              </ul>
            </div>
          ))}
        </Box>
      )
    ))}

    </Box>
  )
}