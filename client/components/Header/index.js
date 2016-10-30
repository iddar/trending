
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import style from './style.css'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className={style.header}>
        <h1>Trending</h1>
      </header>
    )
  }
}

export default Header
