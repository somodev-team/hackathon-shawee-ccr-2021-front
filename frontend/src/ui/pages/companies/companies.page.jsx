import React, { useEffect, useState } from 'react'
import { createRoute } from 'app-route-manager'
import './companies.style.scss'
import { useCompany, useRoute } from 'app-hooks'
import { BackButton, SearchField } from 'app-components'
import Coca from '../../static/img/coca.png'
import Dell from '../../static/img/dell.png'

export const Companies = () => {
  const { goToCompany } = useRoute()
  const { getCompanies } = useCompany()
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const companies = await getCompanies()
      setCompanies(companies)
    }

    fetch()
  }, [])

  const renderCompaniesList = companies => {
    return companies.map(c => {
      return (
        <div className="companies__item" onClick={() => goToCompany(c.userId)}>
          <div className="companies__avatar">
            {/* <img src={require(`../../static/img/${c.logo}.png`)} alt={c.nome} /> */}
          </div>
          <div className="companies__content">
            <h1 className="companies__title">{c.name}</h1>
            <span>{c.afilhados}</span>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="page companies">
      <div className="scroll container">
        <BackButton />
        <SearchField />
        {renderCompaniesList(companies)}

        <div className="companies__item">
          <div className="companies__avatar">
            <img src={Coca} alt="Coca" />
          </div>
          <div className="companies__content">
            <h1 className="companies__title">The Coca Cola Company</h1>
            <span>12 Afilhados</span>
          </div>
        </div>

        <div className="companies__item">
          <div className="companies__avatar">
            <img src={Dell} alt="Coca" />
          </div>
          <div className="companies__content">
            <h1 className="companies__title">Dell Inc</h1>
            <span>122 Afilhados</span>
          </div>
        </div>
      </div>
    </div>
  )
}

createRoute({
  path: '/companies',
  component: Companies,
  isPrivate: true,
})
