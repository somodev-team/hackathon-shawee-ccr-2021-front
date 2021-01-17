import * as Yup from 'yup'

/* eslint-disable */
const translation = {
  mixed: {
    default: 'Campo inválido',
    required: 'Campo obrigatório',
  },
  string: {
    min: 'O campo deve ter pelo menos ${min} caracteres',
    max: 'O campo deve ter no máximo ${max} caracteres',
    email: 'Formato de e-mail inválido',
    matches: 'Formato inválido',
  },
  number: {
    min: 'Campo deve ser no mínimo ${min}',
    max: 'Campo deve ser no máximo ${max}',
  },
  array: {
    min: 'Deve ter no mínimo ${min} itens',
  },
}

Yup.setLocale(translation)

export { Yup }
