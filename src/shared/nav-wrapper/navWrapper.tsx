import { Navbar, Container, Nav } from "react-bootstrap";

export function NavWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">{children}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
