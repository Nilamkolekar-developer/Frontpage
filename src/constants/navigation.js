import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilSpeedometer,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'
const navigation = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/admin/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
]
export default navigation
