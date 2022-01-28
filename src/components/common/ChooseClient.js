import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ChooseClient() {

  const [clientData, setClientData] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/api/clients/')
        setClientData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('client data', clientData)

  

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <section className='client-choice'>
      <div className='search-bar-wrapper'>
        <div className='search-bar'>
          <input
            placeholder='Search by client name...'
            typeof='text'
            onChange={handleInput}
          />
        </div>
      </div>
      <div className='client-index'>
        {clientData.map(client => (
          <div 
            className='client-card'
            key={client.id}
          >
            <Link to={`/clients/${client.id}/roas`}>
              <div>
                <h3>{client.clientName}</h3>
                <img className='client-logo' src={client.clientLogo}/>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>

  )
}

export default ChooseClient