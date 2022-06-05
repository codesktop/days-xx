import type { VercelRequest, VercelResponse } from '@vercel/node'
import dayjs from '../lib/dayjs'
import data from '../days.json'

export default async (request: VercelRequest, response: VercelResponse) => {
  const today = dayjs().startOf('day')
  const result = Object.keys(data)
    .filter((date) => dayjs(date).isBetween(today, today.add(1, 'year')))
    .sort()
    .map((date) => {
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
