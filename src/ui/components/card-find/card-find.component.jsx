import React from 'react'
import './card-find.style.scss'
import { Button } from 'app-components'
import OhNo from '../../static/img/ohno.svg'
import { useRoute } from 'app-hooks'

export const CardFind = () => {
  const { goToCompanies } = useRoute()

  return (
    <div className="card-find-wrapper">
      <div className="card-find">
        <img src={OhNo} alt="oh no" />
        <div className="card-find__content">
          <strong>Oh no!</strong>
          <p className="card-find__text">Você ainda não tem um padrinho</p>
        </div>
      </div>
      <Button
        onClick={() => goToCompanies()}
        className="btn btn-secondary w-100"
      >
        Encontre seu dindo
      </Button>
    </div>
  )
}
