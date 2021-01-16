import React from 'react'
import { Input, Select } from 'app-components'
import { Yup } from 'app-helpers'
import { STATES } from 'app-constants'

const DateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

export const STEPS = [
  {
    component: () => <Input autoFocus label="Nome" name="name" />,
    schema: Yup.object().shape({
      name: Yup.string().max(255).min(4).required(),
    }),
  },
  {
    component: () => (
      <Input
        autoFocus
        label="Data de Nascimento"
        name="bornDate"
        mask="bornDate"
      />
    ),
    schema: Yup.object().shape({
      bornDate: Yup.string().matches(DateRegex).required(),
    }),
  },
  {
    component: () => (
      <Input autoFocus label="Telefone" name="phone" mask="phone" />
    ),
    schema: Yup.object().shape({
      phone: Yup.string()
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/)
        .required(),
    }),
  },
  {
    component: () => (
      <Select label="Estado" name="addressState" options={STATES} />
    ),
    schema: Yup.object().shape({
      addressState: Yup.string().length(2).required(),
    }),
  },
  {
    component: () => <Input autoFocus label="Cidade" name="addressCity" />,
    schema: Yup.object().shape({
      addressCity: Yup.string().max(255).required(),
    }),
  },
  {
    component: () => <Input autoFocus label="PCD" name="pwd" type="checkbox" />,
    schema: Yup.object().shape({
      pwd: Yup.bool(),
    }),
  },
]
