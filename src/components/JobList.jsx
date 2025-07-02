import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import FadeInSection from './FadeInSection'
import '../styles/Experience.css'

const experienceData = {
  'Company A': {
    jobTitle: 'Machine Learning Intern @',
    duration: 'Jun 2023 – Sep 2023',
    desc: [
      'Worked on neural style transfer models using PyTorch.',
      'Integrated the model into a Gradio web UI.',
      'Published results on arXiv.'
    ]
  },
  'Company B': {
    jobTitle: 'Data Science Intern @',
    duration: 'Jan 2023 – Apr 2023',
    desc: [
      'Developed dashboards using Streamlit.',
      'Analyzed customer churn using XGBoost.',
      'Collaborated with product team to deploy tools.'
    ]
  },
  'Research Lab C': {
    jobTitle: 'Undergraduate Researcher @',
    duration: 'Sep 2022 – Dec 2022',
    desc: [
      'Explored 3D vision techniques for CAD retrieval.',
      'Processed noisy depth data using point cloud denoising.',
      'Wrote a report for internal research use.'
    ]
  }
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

      {companies.map((company, i) => {
        const { jobTitle, duration, desc } = experienceData[company]
        return (
          value === i && (
            <Box key={company} sx={{ padding: '1rem', flex: 1 }}>
              <div className="joblist-job-title">
                {jobTitle}{' '}
                <span className="joblist-job-company">{company}</span>
              </div>
              <div className="joblist-duration">{duration}</div>
              <ul className="job-description">
                {desc.map((point, j) => (
                  <FadeInSection key={j} delay={`${j * 100}ms`}>
                    <li>{point}</li>
                  </FadeInSection>
                ))}
              </ul>
            </Box>
          )
        )
      })}
    </Box>
  )
}