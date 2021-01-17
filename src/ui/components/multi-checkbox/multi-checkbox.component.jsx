import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../input/input.component'
import './multi-checkbox.style.scss'

export const MultiCheckbox = ({ name, options }) => {
  const inputRef = useRef(null)
  const [values, setValues] = useState([])

  const handleChange = event => {
    if (event.target.checked) {
      setValues([...values, event.target.value])
    } else {
      setValues([...values.filter(value => value !== event.target.value)])
    }
  }

  useEffect(() => {
    inputRef.current.value = values
  }, [values])

  const renderOptions = () => {
    return options.map((area, key) => {
      return (
        <label className="interests__column" key={key}>
          <input
            type="checkbox"
            onChange={handleChange}
            name={name}
            label={area.name}
            value={area.name}
          />
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
    <>
      <strong>Selecione pelo mens um área que você tem interesse</strong>
      <div className="interests">{renderOptions()}</div>
      <Input
        type="hidden"
        name={name}
        value={values}
        onRef={input => (inputRef.current = input)}
      />
    </>
  )
}
