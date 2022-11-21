function draw (array) {
  let randomCharacter = ''
  randomCharacter = array[Math.floor(Math.random() * array.length)]
  return randomCharacter
}

function generateURL () {
  const option = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let url = ''
  const count = 5
  let collection = []
  collection = collection.concat(option.split(''))
  for (let i = 1; i <= count; i++) {
    url += draw(collection)
  }
  return url
}
module.exports = generateURL
