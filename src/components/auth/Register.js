import React from 'react'
import { useNavigate } from 'react-router-dom'
import { register, login } from '../lib/api'

const intialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {

  const [formData, setFormData] = React.useState(intialState)
  const [formErrors, setFormErrors] = React.useState(intialState)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors,  [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await register(formData)
      const loginres = await login(formData)
      console.log(res, loginres)
      navigate('/client-choice')
    } catch (err) {
      // setIsError(true)
      console.log(err)
    }
  }

  console.log('formErrors', formErrors)
  return (
    <section id='register'>
      <div className='form-page'>
        <div className='form-left'>
        </div>
        <div className='form-right'>
          <form
            className='form'
            onClick={handleSubmit}
          >
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <div>
                <input 
                  className='input'
                  name="username"
                  id="username"
                  placeholder="username"
                  onChange={handleInputChange}
                />
              </div>
              {/* {formErrors.username && <p className="error-style">Username is a required field</p>} */}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <div>
                <input 
                  className='input'
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={handleInputChange}
                />
              </div>
              {/* {formErrors.email && <p className="error-style">Email is a required field</p>} */}
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <div>
                <input 
                  className='input'
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={handleInputChange}
                />
              </div>
              {/* {formErrors.password && <p className="error-style">Password is a required field</p>} */}
            </div>
            <div className="form-field">
              <label htmlFor="passwordConfirmation">Password Confirmation</label>
              <div>
                <input  
                  className='input'
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="password confirmation"
                  onChange={handleInputChange}
                />
              </div>
              {/* {formErrors.passwordConfirmation && <p className="error-style">Passwords do not match</p>} */}
            </div>
            <div className="FIELD">
              <div className='button-div'
                htmlFor="button">
                <button 
                  id="button"
                  className='button-register'
                  type="submit"
                >Register Me!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Register
