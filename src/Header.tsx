import React, { useContext } from "react"
import { Form, Navbar, Nav, FormControl, Button } from "react-bootstrap"
import ThemeContext from "./themeContext"

const Header = () => {
  const contextValue = useContext(ThemeContext)
  return (
    <>
      <Navbar bg={contextValue?.theme} variant={contextValue?.theme}>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className="search-button">
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  )
}

export default Header