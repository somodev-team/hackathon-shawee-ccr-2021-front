import React from 'react'
import './confirmation-alert.style.scss'
import Happy from '../../static/img/happy.svg'
import { CardFind } from 'app-components'

export const ConfirmationAlert = ({ onClick }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="confirmation-alert">
        <CardFind
          img={Happy}
          title="WOW!"
          text="A empresa que você solicitou topo ser seu padrinho"
          buttonText="Entre em contato"
          onClick={onClick}
        />
      </div>
    </>
  )
}
