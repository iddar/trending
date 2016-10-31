import React, { Component } from 'react'

import style from './style.css'
import data from './dataset'

class Circle extends Component {
  render () {
    return (
      <div className={style.normal}>
        <div className={style.tableHead}>
          Ultimos Movimientos
        </div>
        <div className={style.tableTitles}>
          <div>Concepto</div>
          <div>Lugar</div>
          <div>Monto</div>
          <div>Fecha</div>
          {/* <div>Tipo</div> */}
        </div>
        <div className={style.list}>
        {
          data.filter(item => item.tipo === this.props.filter).map((item, key) => {
            return (
              <div key={key} className={style.row}>
                <div>{item.concepto}</div>
                <div>{item.lugar}</div>
                <div>{item.monto}</div>
                <div>{item.fecha}</div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default Circle
