
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
        <h1>Dashboard</h1>
        <img src='assets/logo.svg' className={style.img} />
      </header>
    )
  }
}

export default Header
