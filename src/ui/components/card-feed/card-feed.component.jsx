import React from 'react'
import './card-feed.style.scss'
import { Button } from 'app-components'
import Liked from '../../static/img/liked.svg'

export const CardFeed = ({ img, people, company }) => {
  return (
    <div className="card-feed">
      <div className="card-feed__info">
        <div className="card-feed__avatar">
          <img src={img} alt="Coca" />
        </div>
        <div className="card-feed__content">
          <div>
            <strong>@{company}</strong> agora é dindo de{' '}
            <strong>@{people} </strong>
          </div>
        </div>
      </div>
      <div className="card-feed__actions">
        <small>16•01 12:34</small>
        <Button className="btn">
          <img src={Liked} alt="Curtir" />
        </Button>
      </div>
    </div>
  )
}
