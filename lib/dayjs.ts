import isBetween from 'dayjs/plugin/isBetween'
import isToday from 'dayjs/plugin/isToday'
import dayjs from 'dayjs'

dayjs.extend(isBetween)
dayjs.extend(isToday)

export default dayjs
