import React from 'react'
import './back-button.style.scss'
import { useHistory } from 'react-router-dom'

export const BackButton = ({ onClick }) => {
  let history = useHistory()

  function handleClick() {
    history.goBack()
  }

  return (
    <button
      className="back-button btn"
      onClick={onClick ? onClick : handleClick}
    >
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 17"
        width="20px"
      >
        <path
          d="M19.167 7.65H2.542l6.366-6.184A.862.862 0 008.937.264a.822.822 0 00-1.179-.03L.488 7.298A1.708 1.708 0 000 8.5c0 .454.174.881.503 1.216l7.256 7.05a.821.821 0 001.178-.03.862.862 0 00-.029-1.201L2.516 9.35h16.65c.46 0 .834-.38.834-.85s-.373-.85-.833-.85z"
          fill="#3B3B3D"
        />
      </svg>
    </button>
  )
}
