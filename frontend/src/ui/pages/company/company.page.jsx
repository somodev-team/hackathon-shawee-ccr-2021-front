import React from 'react'
import { createRoute } from 'app-route-manager'
import './company.style.scss'
import { BackButton, Navbar } from 'app-components'
import Coca from '../../static/img/coca.png'
import Blessed from '../../static/img/blessed.svg'
import { INTEREST_AREAS } from 'app-constants'

export const Company = () => {
  const renderAreas = options => {
    return options.map((area, key) => {
      return (
        <label class="interests__column">
          <div className="card">
            {area.name}
            <img
              src={require(`../../static/img/${area.icon}.svg`)}
              alt={area.name}
            />
          </div>
        </label>
      )
    })
  }
  return (
    <div className="page company">
      <div className="scroll container">
        <BackButton />
        <div className="card mt-5">
          <div className="companies__item">
            <div className="companies__avatar">
              <img src={Coca} alt="Coca" />
            </div>
            <div className="companies__content justify-content-between w-100">
              <h1 className="companies__title">Dell Inc</h1>
              <span className="company-location">São Paulo - SP</span>

              <div className="graybox">
                <img src={Blessed} alt="Afilhados" />
                <strong>13</strong>
                <span>Afilhados</span>
              </div>
            </div>
          </div>
          <hr />
          <strong>Sobre</strong>
          <small className="company__about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo omnis,
            temporibus fugit nemo doloribus accusantium vero, inventore soluta
            aliquam optio molestias debitis sunt tempore recusandae itaque
            repudiandae molestiae voluptates a!
          </small>
        </div>
        <strong className="company__areas-title">Áreas de atuação</strong>
        <div className="company__areas">
          <div className="company__carousel">{renderAreas(INTEREST_AREAS)}</div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

createRoute({
  path: '/company',
  component: Company,
})
