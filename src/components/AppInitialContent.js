import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import initialRoutes from '../routes/initialRoutes'

const AppInitialContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {initialRoutes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppInitialContent)
