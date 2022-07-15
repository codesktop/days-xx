import { outputJsonSync } from 'fs-extra'
import range from 'lodash/range'
import dayjs from 'dayjs'

const data = {}
const days = {
  春节: [
    '2-12',
    '2-1',
    '1-22',
    '2-10',
    '1-29',
    '2-17',
    '2-6',
    '1-26',
    '2-13',
    '2-3'
  ],
  中秋: [
    '9-21',
    '9-10',
    '9-29',
    '9-17',
    '10-6',
    '9-25',
    '9-15',
    '10-3',
    '9-22',
    '9-12'
  ],
  冬至: [
    '12-21',
    '12-22',
    '12-22',
    '12-21',
    '12-21',
    '12-22',
    '12-22',
    '12-21',
    '12-21',
    '12-22'
  ]
}

function normalize() {
  const years = range(21, 31).map((year) => `20${year}`)

  days['新年'] = years.map((year) => `${year}-1-1`)
  days['国庆'] = years.map((year) => `${year}-10-1`)
  days['圣诞'] = years.map((year) => `${year}-12-25`)

  for (const name of ['春节', '中秋', '冬至']) {
    days[name] = years.map((year, index) => `${year}-${days[name][index]}`)
  }

  for (const name of Object.keys(days)) {
    days[name] = days[name].map((date: string) =>
      dayjs(date).format('YYYY-MM-DD')
    )

    for (const date of days[name]) {
      data[date] = name
    }
  }
}

function generate() {
  outputJsonSync(`${__dirname}/days.json`, data)
}

normalize()
generate()
