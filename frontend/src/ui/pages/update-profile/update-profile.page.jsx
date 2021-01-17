import React, { useMemo, useState } from 'react'
import { createRoute } from 'app-route-manager'
import './update-profile.style.scss'
import { Button, Form } from 'app-components'
import { usePerson, useRoute } from 'app-hooks'
import { STEPS } from './steps'

export const UpdateProfile = () => {
  const { updateProfile } = usePerson()
  const { goToProfile } = useRoute()
  const [step, setStep] = useState(0)
  const [newProfile, setNewProfile] = useState({})

  const isLast = useMemo(() => step === STEPS.length - 1, [step])
  const StepComponent = useMemo(() => STEPS[step].component, [step])
  const schema = useMemo(() => STEPS[step].schema, [step])

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

      <Form schema={schema} onSubmit={handleNext}>
        <StepComponent />

        <Button>{isLast ? 'Finalizar' : 'Próximo'}</Button>
      </Form>
    </div>
  )
}

createRoute({
  path: '/update-profile',
  component: UpdateProfile,
  private: true,
})
