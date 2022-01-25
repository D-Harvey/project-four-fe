import React from 'react'
import Login from '../auth/Login'
import Register from '../auth/Register'



function Home () {

  return (
    <section className='homepage'>
      <div className='login'>
        <Login />
      </div>
      <div className='register'>
        <Register />
      </div>
    </section>
  )

}
export default Home 