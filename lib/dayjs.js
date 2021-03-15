const isBetween = require('dayjs/plugin/isBetween')
const isToday = require('dayjs/plugin/isToday')
const dayjs = require('dayjs')

dayjs.extend(isBetween)
dayjs.extend(isToday)

module.exports = dayjs
