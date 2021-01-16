import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import PropTypes from 'prop-types'

export const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return <input variant="outlined" ref={inputRef} name={name} defaultValue={defaultValue} {...rest} />
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
}
