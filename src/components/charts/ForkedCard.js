import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useGithub } from './../../context/GithubContext'
import { CHART_COLORS } from './../../utils'
import ChartCard from './ChartCard'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

export default function ForkedCard({ className }) {
  const { repos } = useGithub()

  const data = repos
    .map(repo => ({
      forks: repo.forks,
      labels: repo.name,
    }))
    .sort((a, b) => b.forks - a.forks)
    .slice(0, 5)

  const dataChart = {
    labels: data.map(item => [item.labels]),

    datasets: [
      {
        data: data.map(item => item.forks),
        backgroundColor: CHART_COLORS,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 5,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        title: {
          display: true,
          text: 'Forks',
          align: 'end',
          color: '#000',
          font: {
            family: "'Inter', sans-serif",
            size: 16,
            weight: 'bold',
          },
        },
      },
    },
  }

  return (
    <ChartCard title={'Most forked'} className={className}>
      <Bar data={dataChart} options={options} />
    </ChartCard>
  )
}
