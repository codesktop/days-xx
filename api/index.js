const dayjs = require('../lib/dayjs')
const data = require('../days.json')

module.exports = async (request, response) => {
  const today = dayjs().startOf('day')
  const result = Object.keys(data).filter(date => {
    return dayjs(date).isBetween(today, today.add(1, 'year'))
  }).sort().map(date => {
    const name = data[date]
    const count = dayjs(date).diff(today) / 86400000

    return {
      name,
      date,
      count,
      description: `距离${name}还有${count}天`
    }
  })

  return response.json(result)
}
