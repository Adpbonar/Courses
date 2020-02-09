import React from 'react'
import Video from './Video'
const ActiveItem = (props) => {
  return(
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md-1">
        <div className="card px-5">
          <div className="row">
            <div className="col-md-10 offset-1 text-center">
              <Video />
              <div className="text-left">
                <h4>{ props.title }</h4>
                <p>{ props.description }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveItem