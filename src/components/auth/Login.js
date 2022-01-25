
function Login() {

  return (
    <section>
      <div className='form-page'>
        <div className='form-left'>
        </div>
        <div className='form-right'>
          <form
            className='form'
          >
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
            </div>
            <div>
              <div className='button-div'
                htmlFor="button">
                <button 
                  id="button"
                  className='button'
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
