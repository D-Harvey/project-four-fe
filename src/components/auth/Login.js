import React from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../lib/api'
import { setToken } from '../lib/auth'

function Login() {

  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const [isError, setIsError] = React.useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login(formData)
      setToken(res.data.token)
      navigate('/client-choice')
    } catch (err) {
      setIsError(true)
      console.log(isError)
    }
  }

  console.log('FROM', formData)
  return (
    <section>
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
            </div>
            <div>
              <div className='button-div'
                htmlFor="button">
                <button 
                  id="button"
                  className='button-login'
                  type="submit"
                >Log Me In!</button>
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </section>
  )
  

}

export default Login
