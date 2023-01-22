const REIWA_START_YEAR = 2019
const REIWA_START_MONTH = 5

function reiwa (date: Date): number | null {
  if (date == null) return null

  const year = date.getFullYear()
  if (year < REIWA_START_YEAR) return null
  if (
    year === REIWA_START_YEAR &&
    date.getMonth() < (REIWA_START_MONTH - 1)
  ) {
    return null
  }
  return year - REIWA_START_YEAR + 1
}

export = reiwa
