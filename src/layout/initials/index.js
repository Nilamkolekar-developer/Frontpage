import React from 'react'
import { AppInitialContent, AppSidebar, AppFooter, AppHeader } from '../../components/index'

const InitialLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100">
        <div className="body flex-grow-1">
          <AppInitialContent />
        </div>
      </div>
    </div>
  )
}

export default InitialLayout
