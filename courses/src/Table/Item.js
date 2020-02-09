import React from 'react'
import Thumbnail from './Thumbnail'
import ItemButton from '../style.js'
const Item = (props) => {
  return(
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div className="card px-5">
          <div className="row">
            <div className="col-md-4">
            <Thumbnail />
            </div>
            <div className="col-md-8 text-center">
              <div className="pt-4 pb-4">
                <h4>{ props.title }</h4>
                <p>{ props.description }</p>
                <div className="cta">
                  <ItemButton onClick={props.videoChangeActive} href="https://www.devanpotterbonar.com/">Watch</ItemButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item