import './index.css'

import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '~react-pages'

export const RouterApp = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}
