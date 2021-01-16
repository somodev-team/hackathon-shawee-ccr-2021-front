import React, { useMemo, useState } from 'react'
import { createRoute } from 'app-route-manager'
import './update-profile.style.scss'
import { Button, Input } from 'app-components'
import { Form } from '@unform/web'
import { useRoute } from 'app-hooks'

const STEPS = [() => <Input name="birthday" />, () => <Input name="phone" />]

export const UpdateProfile = () => {
  const { goToProfile } = useRoute()
  const [step, setStep] = useState(0)
  const isLast = useMemo(() => step === STEPS.length - 1, [step])
  const StepComponent = useMemo(() => STEPS[step], [step])

  const handleNext = data => {
    // TODO: Persistir os dados na API
    console.log(data)

    if (isLast) {
      goToProfile()
      return
    }

    setStep(step + 1)
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
