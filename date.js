function isostring (value) {
  return new Date(parseInt(value, 10)).toISOString()
}

function format (date, format) {
  const separators = [',', '.', '-', '/', ' ', '|', '_']
  const months = new Map([
    ['Jan', '01'],
    ['Feb', '02'],
    ['Mar', '03'],
    ['Apr', '04'],
    ['May', '05'],
    ['Jun', '06'],
    ['Jul', '07'],
    ['Aug', '08'],
    ['Sep', '09'],
    ['Oct', '10'],
    ['Nov', '11'],
    ['Dec', '12']
  ])

  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!Number(date)) return 'Invalid Date'

  date = [
    { period: 'YYYY', value: date.getFullYear() },
    { period: 'MM', value: months.get(date.toDateString().substr(4, 3)) },
    { period: 'DD', value: date.getDate() }
  ]

  if (!format) return date[2].value + '-' + date[1].value + '-' + date[0].value
  const separator = separators.find(separator => format.includes(separator))

  if (!separator) {
   const part = date.find(date => date.period === format)
   return part ? part.value.toString() : 'Invalid Format'
  }

  format = format.split(separator)
  for (let i = 0; i < date.length; i++) {
    for (let j = 0; j < format.length; j++) {
      const index = format.indexOf(date[i].period)
      if (index === -1) {
        date.splice(i, 1)
        i--
      } else  if (index !== i) {
        const copyDate = date[i]
        date[i] = date[index]
        date[index] = copyDate
      }
    }
  }

  let stringDate = ''
  date.forEach((element, index) => {
    if (index === date.length - 1) {
      stringDate += element.value
    } else {
      stringDate += element.value + separator
    }
  })
  return stringDate
}

function day (date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!Number(date)) return date.toDateString()
  return date.getDate()
}

function weekday (date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!Number(date)) return date.toDateString()
  return date.getDay()
}

function month (date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!Number(date)) return date.toDateString()
  return date.getMonth()
}

function year (date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!Number(date)) return date.toDateString()
  return date.getFullYear()
}

function prettydate (date) {
  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!Number(date)) return date.toDateString()
  date = date.toDateString().split(' ')

  const days = new Map([
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday']
   ])
  const months = new Map([
    ['Jan', 'January'],
    ['Feb', 'February'],
    ['Mar', 'March'],
    ['Apr', 'April'],
    ['May', 'May'],
    ['Jun', 'June'],
    ['Jul', 'July'],
    ['Aug', 'August'],
    ['Sep', 'September'],
    ['Oct', 'October'],
    ['Nov', 'November'],
    ['Dec', 'December']
  ])
  date[0] = days.get(date[0])
  date[1] = months.get(date[1])
  date[2] = Number(date[2])

  if (date[2] === 1 || date[2] === 21) {
    date[2] += 'st'
  } else if (date[2] === 2 || date[2] === 22) {
    date[2] += nd
  } else if (date[2] === 3 || date[2] === 23) {
    date[2] += 'rd'
  } else {
    date[2] += 'th'
  }

  return `${date[0]}, ${date[2]} of ${date[1]} ${date[3]}`
}

module.exports = {
  isostring,
  format,
  day,
  weekday,
  month,
  year,
  prettydate
}
