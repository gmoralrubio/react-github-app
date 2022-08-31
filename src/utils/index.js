import * as twColors from 'tailwindcss/colors'

// Devuelve los colores de tailwind en hex
export const color = value => {
  return {
    red: twColors.red[value],
    orange: twColors.orange[value],
    sky: twColors.sky[value],
    rose: twColors.rose[value],
    emerald: twColors.emerald[value],
    violet: twColors.violet[value],
    yellow: twColors.yellow[value],
  }
}

export const CHART_COLORS = [
  color(400).rose,
  color(400).violet,
  color(400).sky,
  color(400).orange,
  color(400).emerald,
  color(400).yellow,
  color(400).red,
]
