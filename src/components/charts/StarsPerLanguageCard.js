import { Doughnut } from 'react-chartjs-2'
import { useGithub } from '../../context/GithubContext'
import { CHART_COLORS } from '../../utils'
import ChartCard from './ChartCard'

export default function StarsPerLanguageCard() {
  const { repos } = useGithub()

  const languages = repos.reduce((total, repo) => {
    const { language, stargazers_count } = repo
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})

  const dataChart = {
    labels: Object.values(languages).map(language => language.label),

    datasets: [
      {
        data: Object.values(languages).map(language => language.stars),
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
    <ChartCard title={'Stars per language'}>
      <Doughnut data={dataChart} options={options}></Doughnut>
    </ChartCard>
  )
}
