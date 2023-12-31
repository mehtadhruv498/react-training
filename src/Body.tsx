import React, { useContext } from "react"
import { Container } from "react-bootstrap"
import ThemeContext from "./themeContext"

export const Body = () => {
  const contextValue = useContext(ThemeContext);

  return (
    <Container fluid className={contextValue?.theme}>
      <h1>List of books</h1>
      <ul>
        <li>Sapiens</li>
        <li>Fear and loading of the campaign trail '72</li>
        <li>Range</li>
        <li>Chasing the scream</li>
        <li>Former People</li>
      </ul>
    </Container>
  )
}