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
  vertical-align: middle;
`

const Subheader  = styled.p`
  font-size: 1.5em;
  letter-spacing: 2px;
`

const Button = styled.a`
  margin-top: 100px !important;
  display: inline-block;
  text-decoration: none;
  font-size:20px;
  text-align: center;
  font-weight: bold;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  cursor: pointer !important;
  background: #e8e8e8;
  padding: 10px 20px;
  min-width: 50%;
  max-width: 60%;
  color: #807ab9;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 10px;
  font-decoration: none;
  border: 5px solid red;
    &:hover, &:focus {
      background-color: blue !important;
      color: white !important;
      text-decoration: none !important;
    }
 `
const ItemButton = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 15x;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background: #e8e8e8;
  padding: 5px 10px;
  text-transform: uppercase;
  margin-top: 10px;
  box-shadow: 0px 0px 0px 3px red,
    -2px 2px white,
    -6px 6px 0px 3px red;
  color: red !important;
  margin: 20px;
  &:hover, &:focus {
    background-color: grey !important;
    color: white !important;
    text-decoration: none !important;
  }
`

export { Section, Header, Subheader, Button }
export default ItemButton