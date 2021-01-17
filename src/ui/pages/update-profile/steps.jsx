import React from 'react'
import { Input, Select, MultiCheckbox } from 'app-components'
import { Yup } from 'app-helpers'
import { INTEREST_AREAS, STATES } from 'app-constants'

const DateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

export const STEPS = [
  {
    component: () => (
      <Input autoFocus label="Qual é o seu nome completo?" name="name" />
    ),
    schema: Yup.object().shape({
      name: Yup.string().max(255).min(4).required(),
    }),
  },
  {
    component: () => (
      <Input
        autoFocus
        pattern="[0-9]*"
        label="Qual sua data de nascimento?"
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
      <Input
        autoFocus
        label="Qual o seu telefone?"
        name="phone"
        mask="phone"
        pattern="[0-9]*"
      />
    ),
    schema: Yup.object().shape({
      phone: Yup.string()
        .matches(/^\(\d{2}\) \d{5}-\d{4}$/)
        .required(),
    }),
  },
  {
    component: () => (
      <Select
        label="Selecione seu estado"
        name="addressState"
        options={STATES}
      />
    ),
    schema: Yup.object().shape({
      addressState: Yup.string().length(2).required(),
    }),
  },
  {
    component: () => (
      <Input autoFocus label="E agora sua cidade" name="addressCity" />
    ),
    schema: Yup.object().shape({
      addressCity: Yup.string().max(255).required(),
    }),
  },
  {
    component: () => (
      <div className="pcd">
        <label>Marque esta opção se você é portador de deficiência</label>
        <input name="pwd" type="radio" value={true} id="sim" />
        <input name="pwd" type="radio" value={false} id="nao" />
        <div
          class="btn-group mb-4 text-left"
          role="group"
          aria-label="Basic example"
        >
          <label class="btn btn-primary" for="sim">
            Sim
          </label>
          <label class="btn btn-primary" for="nao">
            Não
          </label>
        </div>
      </div>
    ),
    schema: Yup.object().shape({
      pwd: Yup.bool(),
    }),
  },
  {
    component: () => (
      <MultiCheckbox options={INTEREST_AREAS} name="areasOfInterest" />
    ),
    schema: Yup.object().shape({
      areasOfInterest: Yup.array(Yup.string()),
    }),
  },
]
