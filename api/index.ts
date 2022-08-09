import type { VercelRequest, VercelResponse } from '@vercel/node'
import dayjs from '../lib/dayjs'
import days from '../days.json'

export default async (request: VercelRequest, response: VercelResponse) => {
  const today = dayjs().startOf('day')
  const data = Object.keys(days)
    .filter((date) => dayjs(date).isBetween(today, today.add(1, 'year')))
    .sort()
    .map((date) => {
      const name = days[date] as string
      const count = dayjs(date).diff(today) / 86_400_000

      return {
        name,
        date,
        count,
        description: `距离${name}还有${count}天`
      }
    })

  return response.json(data)
}
