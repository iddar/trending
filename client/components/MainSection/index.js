
import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import Footer from '../Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import style from './style.css'

class MainSection extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render() {
    return (
      <section className={style.main}>
      graf
      </section>
    )
  }
}

export default MainSection
