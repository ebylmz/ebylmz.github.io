import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import EmailRoundedIcon from "@mui/icons-material/EmailRounded"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import "../styles/NavBar.css"

export default function NavBarComponent() {
  return (
    <Navbar expand="md" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="#">Emirkan Burak Yılmaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#publications">Publications</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="mailto:emirkan.b.yilmaz@gmail.com" title="Email">
              <EmailRoundedIcon fontSize="small" />
            </Nav.Link>
            <Nav.Link href="https://github.com/ebylmz" target="_blank" title="GitHub">
              <GitHubIcon fontSize="small" />
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/emirkanburakyilmaz" target="_blank" title="LinkedIn">
              <LinkedInIcon fontSize="small" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
