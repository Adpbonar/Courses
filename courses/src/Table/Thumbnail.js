import React from 'react'

const Thumbnail = (props) => {
  return (
    <div className="pt-4 pb-4">
       <iframe width="100%" src={props.url} frameborder="0" ></iframe>
    </div>
  )
}

export default Thumbnail