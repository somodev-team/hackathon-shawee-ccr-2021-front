import React from 'react'
import './confirmation-alert.style.scss'
import Happy from '../../static/img/happy.svg'
import { CardFind } from 'app-components'

export const ConfirmationAlert = ({ onClick, companyName }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="confirmation-alert">
        <CardFind
          img={Happy}
          title="WOW!"
          text={`A ${companyName} topou ser seu dindo! 😁`}
          buttonText="Iniciar conversa"
          onClick={onClick}
        />
      </div>
    </>
  )
}
