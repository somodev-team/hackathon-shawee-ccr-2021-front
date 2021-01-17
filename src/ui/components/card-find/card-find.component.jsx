import React from 'react'
import './card-find.style.scss'
import { Button } from 'app-components'

export const CardFind = ({ title, img, text, buttonText, onClick }) => {
  return (
    <div className="card-find-wrapper">
      <div className="card-find">
        <img src={img} alt="react" />
        <div className="card-find__content">
          <strong>{title}</strong>
          <p className="card-find__text">{text}</p>
        </div>
      </div>
      <Button className="btn btn-secondary w-100" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  )
}
