import React, { useEffect, useState } from 'react'
import { createRoute } from 'app-route-manager'
import './company.style.scss'
import { BackButton } from 'app-components'
import Coca from '../../static/img/coca.png'
import Blessed from '../../static/img/blessed.svg'
import { INTEREST_AREAS } from 'app-constants'
import { useCompany } from 'app-hooks'
import { useParams } from 'react-router-dom'

export const Company = () => {
  const { id } = useParams()
  const { getCompany } = useCompany()
  const [company, setCompany] = useState()

  useEffect(() => {
    const fetch = async () => {
      setCompany(await getCompany(id))
    }

    fetch()
  }, [])

  const renderAreas = () => {
    return company.areas_of_actuation.map((area, key) => {
      const areaObject = INTEREST_AREAS.find(a => a.name === area)

      if (!areaObject) {
        return null
      }

      return (
        <label className="interests__column">
          <div className="card">
            {areaObject.name}
            <img
              src={require(`../../static/img/${areaObject.icon}.svg`)}
              alt={areaObject.name}
            />
          </div>
        </label>
      )
    })
  }

  if (!company) {
    return null
  }

  return (
    <div className="page company">
      <div className="scroll container">
        <BackButton />
        <div className="card mt-5">
          <div className="companies__item">
            <div className="companies__avatar">
              <img
                src={require(`../../static/img/logos/${company.name}.png`)}
                alt={company.name}
              />
            </div>
            <div className="companies__content justify-content-between w-100">
              <h1 className="companies__title">{company.name}</h1>
              <span className="company-location">
                {company.address_city} - {company.address_state}
              </span>

              <div className="graybox">
                <img src={Blessed} alt="Afilhados" />
                <strong>{company.godChildrens} Afilhados</strong>
              </div>
            </div>
          </div>
          <hr />
          <strong>Sobre</strong>
          <small className="company__about">{company.bio}</small>
        </div>
        <strong className="company__areas-title">Áreas de atuação</strong>
        <div className="company__areas">
          <div className="company__carousel">{renderAreas()}</div>
        </div>
      </div>
    </div>
  )
}

createRoute({
  path: '/company/:id',
  component: Company,
  isPrivate: true,
})
