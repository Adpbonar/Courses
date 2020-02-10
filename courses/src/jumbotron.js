import React from 'react'
import { Section, Header, Subheader, Button } from './style.js'

const Jumbotron = () =>{
return(
  <Section className="app-section--1">
    <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-5">
          <div className="pt-4 mt-4">
            <Header>Take one of our courses</Header> 
            <Subheader>Unlock your potential.</Subheader>
          </div>
        </div>
        <div className="col col-sm12 col-md-7">
          <div className="pt4 mt4 text-center">
          <div className="CTA">
              <Button href="https://www.devanpotterbonar.com/">start</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
)
}

export default Jumbotron