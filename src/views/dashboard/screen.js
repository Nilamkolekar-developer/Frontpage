import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
export default function Dashboard() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="card_header">
            <div className="header-label">
              <h5>Hello</h5>
            </div>
          </CCardHeader>
          <CCardBody></CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
