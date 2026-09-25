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
          'Developed a zero-shot 6D object pose estimation pipeline integrating vision transformer-based correspondence matching with neural pose recovery.',
          'Achieved 41.2\% AR using the neural solver and 52.2\% AR using RANSAC on the BOP benchmark, ranking second overall on the leaderboard while running roughly 2x faster than the top performer.',
          'Led weekly problem-solving sessions, prepared assessments for Linear Algebra and Numerical Analysis courses.'
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
          'Constructed a biomedical knowledge graph with ~1M edges, integrating phenotype, gene, disease, and patient data extracted from HPO and ClinVar databases using NumPy and Pandas.',
          'Developed Graph Neural Network (GNN) models using PyTorch Geometric for phenotype-driven gene/disease prioritization, achieving 36% Top-10 accuracy.',
          'Developed an SVM model for variant of uncertain significance (VUS) characterization using biomedical features, achieving 97% accuracy on ~12K patient records.',
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
          'Constructed a biomedical Named Entity Recognition (NER) dataset by extracting structured information from FDA DailyMed SPL drug labels.',
          'Developed NER models for biomedical entity extraction using spaCy, achieving an F1 score of 0.61.',
          'Benchmarked model performance against large language models (LLMs) for efficiency and accuracy.',
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