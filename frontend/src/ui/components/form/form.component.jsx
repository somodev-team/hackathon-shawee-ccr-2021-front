import React, { useRef } from 'react'
import { Form as FormComponent } from '@unform/web'
import { ValidationError } from 'yup'

import './form.style.scss'

export const Form = ({ onSubmit, children, schema }) => {
  const formRef = useRef(null)

  const handleSubmit = async data => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({})

      if (schema) {
        await schema.validate(data, {
          abortEarly: false,
        })
      }

      // Validation passed
      onSubmit(data)
    } catch (err) {
      const validationErrors = {}

      if (err instanceof ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message
        })

        formRef.current.setErrors(validationErrors)
      }
    }
  }

  return (
    <FormComponent ref={formRef} noValidate onSubmit={handleSubmit}>
      {children}
    </FormComponent>
  )
}
