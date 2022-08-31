import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useGithub } from './../../context/GithubContext'
import { CHART_COLORS } from './../../utils'
import ChartCard from './ChartCard'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function LanguagesCard() {
  const { repos } = useGithub()
  const singleLanguages = []
  const data = []

  // Total de lenguajes
  const totalLanguages = repos.map(repo => repo.language)

  // Numero de lenguajes
  totalLanguages.forEach(language => {
    if (singleLanguages.indexOf(language) === -1 && language !== null)
      singleLanguages.push(language)
  })

  // Numero de repos por lenguaje
  singleLanguages.forEach(language => {
    data.push(totalLanguages.filter(v => v === language).length)
  })

  const dataChart = {
    labels: singleLanguages,

    datasets: [
      {
        data: data,
        backgroundColor: CHART_COLORS,
        borderWidth: 3,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 16,
          boxHeight: 16,
          usePointStyle: true,
        },
      },
    },
  }

  return (
    <ChartCard title={'Languages'}>
      <Doughnut data={dataChart} options={options} />
    </ChartCard>
  )
}
