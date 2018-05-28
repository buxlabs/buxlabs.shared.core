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
    ['Dev', '12']
  ])

  if (Object.prototype.toString.call(date) !== '[object Date]') date = new Date(date)
  if (!Number(date)) return date.toDateString()

  const values = date.toDateString().substr(4).split(' ')
  date = [
    { period: 'YYYY', value: values[2] },
    { period: 'MM', value: months.get(values[0]) },
    { period: 'DD', value: values[1] }
  ]

  if (!format) return date[2].value + '-' + date[1].value + '-' + date[0].value
  const separator = separators.find(separator => format.includes(separator))

  if (!separator) {
   const part = date.find(date => date.period === format)
   return part ? part.value : 'Invalid Format'
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

module.exports = {
  isostring,
  format,
  day,
  weekday,
  month,
  year
}
