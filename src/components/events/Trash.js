import React, {Component} from 'react'
import './trash.css'
import {DropTarget} from 'react-dnd'
import {connect} from 'react-redux'
import {deleteEvent, stateSelector} from '../../ducks/events'
import {Motion, spring, presets} from 'react-motion'


class Trash extends Component {

  getColor(canDrop, isOver) {
    if (isOver) return 'green'
    if (canDrop) return 'red'
    return 'black'
  }

  render() {
    const {canDrop, isOver, connectDropTarget} = this.props
    const style= {
      border: `1px solid ${this.getColor(canDrop, isOver)}`
    }
    return <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(1, { stiffness: 5, damping: 14 })}}>
      {interpolatedStyle => connectDropTarget(<div style={{...style, ...interpolatedStyle}} className='trash'/>)}
    </Motion>
  }
}

const spec = {
    drop(props, monitor) {
      const item = monitor.getItem()
      console.log('Dropped', item)
      props.deleteEvent(item.uid)
    }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver()
  }
}


export default connect(state => {
  return {
    loading: stateSelector(state).loading
  }
}, {deleteEvent})(DropTarget(['event'], spec, collect)(Trash))
