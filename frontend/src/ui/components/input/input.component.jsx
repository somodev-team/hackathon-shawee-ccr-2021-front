import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'

export const Input = ({ name, type, label, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  const handleChange = ({ target }) => {
    if (!inputRef.current) {
      return
    }

    if (type === 'checkbox') {
      inputRef.current.value = target.checked
    } else {
      inputRef.current.value = target.value
    }
  }

  return (
    <label>
      {label}
      <InputMask
        onChange={handleChange}
        name={name}
        type={type}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </label>
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
}
