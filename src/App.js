import { useState } from "react"
import "./App.css"
import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart"
import PieChart from "./components/PieChart"
import { UserData, BarData, BarData2 } from "./Data"

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        // backgroundColor: [
        // 	'rgba(75,192,192,1)',
        // 	'#ecf0f1',
        // 	'#50AF95',
        // 	'#f3ba2f',
        // 	'#2a71d0',
        // ],
        // borderColor: 'black',
        // borderWidth: 2,
        fill: "start",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, "#24B337")
          gradient.addColorStop(1, "#60EE73")
          return gradient
        },
      },
    ],
  })

  const [barData, setBarData] = useState({
    labels: BarData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: BarData.map((data) => data.userGain),
        fill: "start",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 200)
          gradient.addColorStop(0, "#24B337")
          gradient.addColorStop(1, "#60EE73")
          return gradient
        },
      },
    ],
  })

  const [barData2, setBarData2] = useState({
    labels: BarData2.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: BarData2.map((data) => data.userGain),
        fill: "start",
        borderWidth: 1,
        hoverBackgroundColor: "#090979",
        hoverBorderColor: "#090979",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 100)
          gradient.addColorStop(0, "#090979")
          gradient.addColorStop(1, "#00cbf9")
          return gradient
        },
      },
    ],
    options: {
      tooltips: {
        displayColors: true,
        position: "top",
        labels: {
          fontColor: "#000080",
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: { position: "bottom" },
    },
  })

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={barData} />
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={barData2} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  )
}

export default App
