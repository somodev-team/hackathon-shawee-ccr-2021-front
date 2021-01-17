import React, { useEffect, useState } from 'react'
import { createRoute } from 'app-route-manager'
import './companies.style.scss'
import { useCompany } from 'app-hooks'

export const Companies = () => {
  const { getCompanies } = useCompany()
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    ;(async () => {
      const companies = await getCompanies()
      setCompanies(companies)
    })()
  }, [])

  return (
    <div className="companies">
      <h1>Empresas</h1>
      {companies.map(c => c.name)}
    </div>
  )
}

createRoute({
  path: '/companies',
  component: Companies,
  private: true,
})
