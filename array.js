function flatten (array) {
  return array.reduce((previous, current) => {
    return previous.concat(Array.isArray(current) ? flatten(current) : current)
  }, [])
}

function identifier (array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let index = 0
  while (array.indexOf(alphabet[index]) !== -1) {
    index += 1
    if (index === alphabet.length) {
      index = 0
      alphabet = alphabet.map(character => '_' + character)
    }
  }
  return alphabet[index]
}

function first (array) {
  return array[0]
}

function second (array) {
  return array[1]
}

function third (array) {
  return array[2]
}

function fourth (array) {
  return array[3]
}

function fifth (array) {
  return array[4]
}

function sixth (array) {
  return array[5]
}

function seventh (array) {
  return array[6]
}

function eigth (array) {
  return array[7]
}

function ninth (array) {
  return array[8]
}

function tenth (array) {
  return array[9]
}

function last (array) {
  return array[array.length - 1]
}

function sum (array) {
  return array.reduce((previousValue, currentValue) => previousValue + currentValue)
}

function average (array) {
  return array.reduce((previousValue, currentValue) => previousValue + currentValue) / array.length
}

function median (array) {
  array = array.sort((a, b) => a - b)
  const index = Math.floor(array.length / 2)

  if (array.length % 2 === 0) {
    return (array[index] + array[index - 1]) / 2
  }

  return array[index]
}

function compact (array) {
  return array.filter(Boolean)
}

function unique (array) {
  return Array.from(new Set(array))
}

function nth (array, position) {
  return position > 0 ? array[position - 1] : array[array.length - Math.abs(position)]
}

function sample (array) {
  const index = Math.floor(Math.random() * (array.length - 1))
  return array[index]
}

function rotate (array, digit) {
  if (!digit) return array
  if (Math.abs(digit) === array.length) return array
  if (digit < 0) {
    digit = Math.abs(digit)
    for (let i = 0; i < digit; i++) {
      const item = array.pop()
      array.unshift(item)
    }
    return array
  }
  if (digit > array.length) digit = digit - array.length
  for (let i = 0; i < digit; i++) {
    const item = array.shift()
    array.push(item)
  }
 return array
}

module.exports = {
  identifier,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eigth,
  ninth,
  tenth,
  last,
  sum,
  average,
  median,
  flatten,
  compact,
  unique,
  nth,
  sample,
  rotate
}
