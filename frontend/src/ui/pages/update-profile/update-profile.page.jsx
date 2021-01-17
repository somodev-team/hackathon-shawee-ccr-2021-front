import React, { useMemo, useState } from 'react'
import { createRoute } from 'app-route-manager'
import './update-profile.style.scss'
import { Button, Form, BackButton } from 'app-components'
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

  const handleClick = () => {
    setStep(step - 1)
  }

  return (
    <div className="main d-flex flex-column update-profile">
      <BackButton onClick={handleClick} />
      <h1 className="update-profile__title mt-4">Complete seu perfil</h1>
      <div className="flex-grow-1 text-center p-3 d-flex flex-column justify-content-center align-items-center">
        <Form schema={schema} onSubmit={handleNext}>
          <div className="flex-grow-1 d-flex w-100">
            <div className="steps flex-grow-1 d-flex align-items-center flex-column justify-content-center w-100">
              <StepComponent />
            </div>
          </div>
          <Button className="btn btn-primary w-100">
            {isLast ? 'Finalizar' : 'Próximo'}
          </Button>
        </Form>
      </div>
    </div>
  )
}

createRoute({
  path: '/update-profile',
  component: UpdateProfile,
  isPrivate: true,
  hideNavbar: true,
})
