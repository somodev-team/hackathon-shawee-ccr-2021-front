import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import PropTypes from 'prop-types'

export const Select = ({ name, type, options, label, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  const renderOptions = () =>
    options.map((opt, key) => (
      <option key={key} value={opt}>
        {opt}
      </option>
    ))

  return (
    <label>
      {label}
      <select name={name} defaultValue={defaultValue} ref={inputRef} {...rest}>
        {renderOptions()}
      </select>
    </label>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
  label: PropTypes.string,
}
