import React from 'react'

const Video = (props) => {
  return(
    <div className="pt-4 pb-4">
      <iframe height="100%" src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Video