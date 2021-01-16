import React, { useMemo, useState } from 'react'
import { createRoute } from 'app-route-manager'
import './update-profile.style.scss'
import { Button, Input, Select } from 'app-components'
import { Form } from '@unform/web'
import { usePerson, useRoute } from 'app-hooks'
import { STATES } from 'app-constants'

const STEPS = [
  () => <Input autoFocus label="Nome" name="name" />,
  () => (
    <Input
      autoFocus
      label="Data de Nascimento"
      name="bornDate"
      mask="99/99/9999"
    />
  ),
  () => (
    <Input autoFocus label="Telefone" name="phone" mask="(99) 99999-9999" />
  ),
  () => <Select label="Estado" name="addressState" options={STATES} />,
  () => <Input autoFocus label="Cidade" name="addressCity" />,
  () => <Input autoFocus label="PCD" name="pwd" type="checkbox" />,
]

export const UpdateProfile = () => {
  const { updateProfile } = usePerson()
  const { goToProfile } = useRoute()
  const [step, setStep] = useState(0)
  const [newProfile, setNewProfile] = useState({})

  const isLast = useMemo(() => step === STEPS.length - 1, [step])
  const StepComponent = useMemo(() => STEPS[step], [step])

  const handleNext = async data => {
    if (isLast) {
      await updateProfile({
        ...newProfile,
        ...data,
      })

      return goToProfile()
    }

    setStep(step + 1)
    setNewProfile({
      ...newProfile,
      ...data,
    })
  }

  return (
    <div className="update-profile">
      <h1>Atualizar Perfil</h1>

      <Form onSubmit={handleNext}>
        <StepComponent />

        <Button>{isLast ? 'Finalizar' : 'Próximo'}</Button>
      </Form>
    </div>
  )
}

createRoute({
  path: '/update-profile',
  component: UpdateProfile,
})
