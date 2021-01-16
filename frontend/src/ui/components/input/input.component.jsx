import React, { useEffect, useMemo, useRef } from 'react'
import { useField } from '@unform/core'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'

import './input.style.scss'

const userMask = Array(20).fill('*').join('')

const TYPES = {
  phone: {
    mask: '(99) 99999-9999',
    maskChar: '_',
  },
  bornDate: {
    mask: '99/99/9999',
    maskChar: '_',
  },
  username: {
    mask: userMask,
    maskChar: '',
  },
}

const withouMask = {
  mask: undefined,
  maskChar: undefined,
}

export const Input = ({ name, type, label, mask: _mask, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  const { mask, maskChar } = useMemo(
    () => (_mask ? TYPES[_mask] || _mask : withouMask),
    [_mask]
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })

    inputRef.current.value = type === 'checkbox' ? false : ''
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
    <label className="input">
      {label}
      <InputMask
        onChange={handleChange}
        name={name}
        type={type}
        defaultValue={defaultValue}
        ref={inputRef}
        mask={mask}
        maskChar={maskChar}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
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
