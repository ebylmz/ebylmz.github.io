import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import FadeInSection from './FadeInSection'
import '../styles/Experience.css'

const experienceData = {
  'GTU': {
    fullName: 'Gebze Technical University',
    roles: [
      {
        jobTitle: 'Research Assistant',
        duration: 'Dec 2025 – Present',
        location: 'Kocaeli, Turkey',
        desc: [
          'Designed and implemented a zero-shot 6DoF object pose estimation pipeline using transformer-based architectures in PyTorch.',
          'Achieved 49.8% Average Recall (AR) across 5 core datasets of the BOP Benchmark.',
          'Led problem-solving sessions and assisted with assessments for Linear Algebra and Numerical Analysis courses.'
        ]
      }
    ]
  },
  'PhiTech': {
    fullName: 'PhiTech Bioinformatics',
    roles: [
      {
        jobTitle: 'Machine Learning Engineer',
        duration: 'Feb 2024 – Apr 2025',
        location: 'Kocaeli, Turkey',
        desc: [
          'Managed medical data collection and preprocessing workflows.',
          'Developed Graph Neural Network (GNN) models for phenotype-driven gene and disease prioritization, achieving a Top-10 accuracy of 60%.',
          'Performed hyperparameter tuning and model evaluation using Weights & Biases.'
        ]
      }
    ]
  },
  'Maastricht Uni': {
    fullName: 'Maastricht University — Institute of Data Science',
    roles: [
      {
        jobTitle: 'Data Science Intern',
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
}

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`experience-tabpanel-${index}`}
      aria-labelledby={`experience-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  )
}

export default function JobList() {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const companies = Object.keys(experienceData)

  return (
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
      <Tabs
        orientation={isMobile ? 'horizontal' : 'vertical'}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        variant={isMobile ? 'scrollable' : 'standard'}
        scrollButtons={isMobile ? 'auto' : false}
        sx={{
          borderRight: isMobile ? 'none' : '1px solid var(--color-border-default)',
          borderBottom: isMobile ? '1px solid var(--color-border-default)' : 'none',
          minWidth: isMobile ? '100%' : '160px',
          '& .MuiTab-root': {
            alignItems: 'flex-start',
            textTransform: 'none',
            color: 'var(--color-text-muted)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 500,
            minHeight: '42px',
            padding: '8px 16px',
          },
          '& .Mui-selected': {
            color: 'var(--color-primary) !important',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'var(--color-primary)',
          }
        }}
      >
        {companies.map((company, i) => (
          <Tab
            key={company}
            label={company}
            id={`experience-tab-${i}`}
            aria-controls={`experience-tabpanel-${i}`}
          />
        ))}
      </Tabs>

      {companies.map((company, i) => (
        <TabPanel key={company} value={value} index={i}>
          {experienceData[company].roles.map((role, idx) => (
            <div key={idx} className="job-entry">
              <div className="joblist-job-title">
                {role.jobTitle}
                <span className="joblist-job-company"> @ {experienceData[company].fullName}</span>
              </div>
              <div className="joblist-duration">
                {role.duration} · {role.location}
              </div>
              <ul className="job-description">
                {role.desc.map((point, j) => (
                  <FadeInSection key={j} delay={`${j * 100}ms`}>
                    <li className="job-description-item">{point}</li>
                  </FadeInSection>
                ))}
              </ul>
            </div>
          ))}
        </TabPanel>
      ))}
    </Box>
  )
}