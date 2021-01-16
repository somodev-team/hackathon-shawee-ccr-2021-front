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
        <input
          type="checkbox"
          onChange={handleChange}
          key={key}
          name={name}
          label={area}
          value={area}
        />
      )
    })
  }

  return (
    <>
      {renderOptions()}
      <Input
        name={name}
        value={values}
        onRef={input => (inputRef.current = input)}
      />
    </>
  )
}
