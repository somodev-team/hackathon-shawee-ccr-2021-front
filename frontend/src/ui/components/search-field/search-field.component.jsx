import React from 'react'
import './search-field.style.scss'
import InputMask from 'react-input-mask'
import { Button } from 'app-components'

import Magnifier from '../../static/img/magnifier.svg'

export const SearchField = () => {
  return (
    <div className="search-field">
      <InputMask
        name="asdasd"
        type="text"
        autoComplete="off"
        placeholder="Buscar Empresas"
      />
      <Button className="btn">
        <img src={Magnifier} alt="Busca" />
      </Button>
    </div>
  )
}
