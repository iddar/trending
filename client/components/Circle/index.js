import React, { Component } from 'react'
import Chart from 'd3-circle'

import style from './style.css'
import icons from './icons'

class Circle extends Component {
  componentDidMount () {
    this.graph = new Chart({
      target: this.refs.graph,
      thickness: 5,
      format: () => '',
      ease: 'elastic',
      duration: 600
    })

    this.graph.render({ value: this.props.value || 0 })
  }


  render () {
    let classes = `graph ${this.props.color}`

    let classesIcon = `${style.icon}`

    if (this.props.active) {
      classesIcon = `${classesIcon} ${style.active}`
    }

    return (
      <div className={style.circle} onClick={() => this.props.onClick(this.props.icon)}>
        <svg viewBox='0 0 792 612' className={classesIcon}>
          {icons(this.props.icon)}
        </svg>
        <svg ref='graph' className={classes}></svg>
        <div className={style.title}>
          <p>CRÉDITOS</p>
          <p>{this.props.last}</p>
        </div>
      </div>
    )
  }
}

export default Circle
