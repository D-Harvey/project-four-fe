import React from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'


function RevAndRoas() {


  // ! GETTING DATA
  const { clientId } = useParams()
  const [clientDetail, setClientDetail] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/api/clients/${clientId}`)
        setClientDetail(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [clientId])

  let specificAdset = null
  if (clientDetail) {
    const oneAdset = clientDetail.adsetName.filter(adset => {
      return adset.adsetName === 'ABC_WutheringHeights_ABCAHLookalike'
    })
    specificAdset = oneAdset
  }

  console.log('spec', specificAdset)
  console.log('clientDetail', clientDetail)

  let xAxis = []
  if (specificAdset) {
    specificAdset.map(item => {
      const adset = item.dailyClicks.map(thing => {
        return thing.createdAt
      })
      xAxis = adset
    })
  }

  let yAxis = []
  let revenue = []
  let costs = []
  if (specificAdset) {
    yAxis = specificAdset.map(dataPoint => {
      revenue = dataPoint.dailyRevenue.map(thing => {
        return (parseFloat(thing.dailyRevenue))
      })
      costs = dataPoint.mediaCost.map(thing => {
        return parseFloat(thing.mediaCost)
      })
      console.log('costs', costs)
      console.log('rev', revenue)
    })
  }

  for (let i = 0; i < costs.length; i++) {
    yAxis.push(revenue[i] / costs[i])
  }

  // ! SETTING UP THE CHART
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
  }
  
  const labels = xAxis
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Revenue by day',
        data: revenue,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  }


  return (
    <>
      <section>
        <h1>Revenue day</h1>
      </section>
      <section className='chart-wrapper'>
        <div  className='fullpage-chart'>
          <Line data={data} options={options} />
        </div>
      </section>
      <section className='nav-arrows'>
        <Link to={`/clients/${clientId}/imps`}>
          <div className='left-arrow'></div>
        </Link>
        <Link to={'/client-choice'}>
          <div className='home'></div>
        </Link>
        <Link to={`/clients/${clientId}/roas`}>
          <div className='right-arrow'></div>
        </Link>
      </section>
    </>
  )
}

export default RevAndRoas