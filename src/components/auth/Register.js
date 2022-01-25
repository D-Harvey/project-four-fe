

function Register() {

  return (
    <section id='register'>
      <div className='form-page'>
        <div className='form-left'>
        </div>
        <div className='form-right'>
          <form
            className='form'
          >
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <div>
                <input 
                  className='input'
                  name="username"
                  id="username"
                  placeholder="username"
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
                />
              </div>
              {/* {formErrors.passwordConfirmation && <p className="error-style">Passwords do not match</p>} */}
            </div>
            <div className="FIELD">
              <div className='button-div'
                htmlFor="button">
                <button 
                  id="button"
                  className='button'
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
