import styled from 'styled-components'

const Section = styled.section`
  background-color: grey;
  min-height: 100vh;
  padding: 150px 0;
  color: white;
  border-top: 5px solid red;
  border-bottom: 5px solid red;
`
const Header = styled.h1`
  color: whitesmoke;
  fontweight: 700;
  font-size 2.5em;
  line-height: 1.5em;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 20px;
`

const Subheader  = styled.p`
  font-size: 1.5em;
  letter-spacing: 2px;
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size:20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background: #e8e8e8;
  padding: 10px 20px;
  width: 50%;
  text-transform: uppercase;
  margin-top: 10px;
  box-shadow: 0px 0px 0px 3px red,
    -6px 6px grey,
    -6px 6px 0px 3px red;
  color: red !important;
`

export { Section, Header, Subheader, Button }