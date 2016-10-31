
import React, { Component } from 'react'
import Circle from '../Circle'
import Table from '../Table'
import style from './style.css'

class MainSection extends Component {
  constructor (props, context) {
    super(props, context)
    this.setValue = this.setValue.bind(this)

    this.state = {
      filter: 'auto'
    }
  }

  setValue (value) {
    this.setState({filter: value})
  }

  render () {
    return (
      <section className={style.main}>
        <div className={style.iconGruop}>
          <Circle active={this.state.filter === 'hipoteca'} onClick={this.setValue} color='orange' last='HIPOTECARIOS' value='0.5' icon='hipoteca' />
          <Circle active={this.state.filter === 'auto'} onClick={this.setValue} color='blue' last='AUTOMOVILÍSTICOS' value='0.05' icon='auto' />
          <Circle active={this.state.filter === 'moto'} onClick={this.setValue} color='green' last='DE MOTO' value='0.2' icon='moto' />
          <Circle active={this.state.filter === 'pension'} onClick={this.setValue} color='orange' last='A PENSIONADOS' value='0.3' icon='pension' />
          <Circle active={this.state.filter === 'nomina'} onClick={this.setValue} color='blue' last='POR NÓMINA' value='0.9' icon='nomina' />
        </div>

        <Table filter={this.state.filter} />
      </section>
    )
  }
}

export default MainSection
