import React, {Component} from 'react';
import {defaultTableRowRenderer} from 'react-virtualized'
import {DragSource} from 'react-dnd'
import {getEmptyImage} from 'react-dnd-html5-backend'

class TableRow extends Component {
  componentDidMount() {
    this.props.connectPreview(getEmptyImage())
  }

  render() {
    const {connectDragSource, ...rest} = this.props
    return connectDragSource(defaultTableRowRenderer(rest))
  }
}


const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectPreview: connect.dragPreview()
  }
}

const spec = {
  beginDrag(props){
    return {
      uid: props.rowData.uid
    }
  }
}

export default DragSource('event', spec, collect)(TableRow)

