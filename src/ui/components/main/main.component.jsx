import React from 'react'
import { AppProvider } from 'app-providers'
import { AppRoutes } from 'app-router'

import 'app-styles/main.scss'
import { Loader } from '../loader/loader.component'

export const Main = () => (
  <AppProvider>
    <Loader />
    <AppRoutes />
  </AppProvider>
)
