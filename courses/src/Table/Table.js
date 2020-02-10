import React, { Component } from 'react';
import Item from './Item'
import ActiveItem from './ActiveItem'

class Table extends Component {

  render() {
    const items = this.props.course_modules.map( (data) => {
      let videoChangeActive = this.props.videoChangeActive.bind(this, data)
      return(
        data.active ?
          <ActiveItem videoChangeActive = {videoChangeActive} key={data.id} title={data.title} description={data.description} url={data.url} />
        :
          <Item videoChangeActive = {videoChangeActive} key={data.id} title={data.title} description={data.description} url={data.url} />
      )
    })
    return (
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">Course Content</h2>
          </div>

          {items}

        </div>
      </div>
    );
  }
}

export default Table