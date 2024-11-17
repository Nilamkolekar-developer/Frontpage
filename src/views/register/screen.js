import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './registerscreen.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa' // Import eye icons from react-icons

const Register = () => {
  const navigate = useNavigate()

  // Formik initialization with validation schema using Yup
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Data Submitted:', values)
      // handle your form submission here
    },
  })
  // Handle navigation to the login page
  const handleLoginRedirect = () => {
    navigate('/Login')
  }

  return (
    <div>
      <div className="register-page">
        <div className="left-side">
          <img
            src="src/assets/images/register/registerleft.png"
            alt="Educational Graphic"
            className="graphic"
          />
        </div>
        <div className="right-side">
          <div className="register-container">
            {/* Uncomment the logo section if needed */}
            <div className="logo-section">
              <img src="src/assets/images/register/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="form-section">
              <h2>Create Your Account</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group1">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="given-name"
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="error">{formik.errors.firstName}</div>
                  )}
                </div>

                <div className="form-group1">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="family-name"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="error">{formik.errors.lastName}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error">{formik.errors.email}</div>
                  )}
                </div>

                <div className="form-group password-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-wrapper">
                    <input
                      type={formik.values.showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="new-password"
                    />
                    <span
                      onClick={() =>
                        formik.setFieldValue('showPassword', !formik.values.showPassword)
                      }
                      className="password-toggle-icon"
                    >
                      {formik.values.showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <div className="error">{formik.errors.password}</div>
                  )}
                </div>

                <div className="form-group confirmpassword-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="confirmpassword-wrapper">
                    <input
                      type={formik.values.showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="new-confirmPassword"
                    />
                    <span
                      onClick={() =>
                        formik.setFieldValue(
                          'showConfirmPassword',
                          !formik.values.showConfirmPassword,
                        )
                      }
                      className="confirmpassword-toggle-icon"
                    >
                      {formik.values.showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div className="error">{formik.errors.confirmPassword}</div>
                  )}
                </div>

                <button type="submit">Sign Up</button>
              </form>
              <div className="login-text">
                Already have an Account?{' '}
                <span onClick={handleLoginRedirect} style={{ color: '#007bff', cursor: 'pointer' }}>
                  Log In
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
