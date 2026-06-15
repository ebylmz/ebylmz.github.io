import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import useMediaQuery from '@mui/material/useMediaQuery'
import '../styles/NavBar.css'

const navLinks = [
  { label: 'Home', href: '#intro' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
]

const socialLinks = [
  { icon: <EmailRoundedIcon fontSize="small" />, href: 'mailto:emirkan.b.yilmaz@gmail.com', label: 'Email', external: false },
  { icon: <GitHubIcon fontSize="small" />, href: 'https://github.com/ebylmz', label: 'GitHub', external: true },
  { icon: <LinkedInIcon fontSize="small" />, href: 'https://linkedin.com/in/emirkanburakyilmaz', label: 'LinkedIn', external: true },
]

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:768px)')

  const handleNavClick = () => {
    setDrawerOpen(false)
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(13, 17, 23, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '1000px',
          width: '100%',
          margin: '0 auto',
          padding: '0 1.5rem',
          minHeight: '60px !important',
        }}
      >
        {/* Brand */}
        <a href="#" className="navbar-brand">
          Emirkan Burak Yilmaz
        </a>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop nav */}
        {!isMobile && (
          <>
            <nav className="navbar-links">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="navbar-social">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="social-icon"
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <IconButton
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            sx={{ color: 'var(--color-text-primary)' }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: 'var(--color-bg-surface)',
              color: 'var(--color-text-primary)',
              width: '260px',
              padding: '1rem',
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'var(--color-text-primary)' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <nav className="drawer-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="drawer-link" onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="drawer-social">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="social-icon"
                onClick={handleNavClick}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
