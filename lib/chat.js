let R = require('ramda')

let cutAmp = R.replace(/^@/, '')
let cutParentheses = R.replace(/\(|\)/g, '')

let parseMentions = (input) => {
  let mentions = R.match(/@\w+/gi, input)
    .map(cutAmp)
  return Promise.resolve(
    R.isEmpty(mentions) ? {} : {mentions}
  )
}

let parseEmoticons = (input) => {
  let emoticons = R.match(/\(\w{1,15}\)/gi, input)
    .map(cutParentheses)
  return Promise.resolve(
    R.isEmpty(emoticons) ? {} : {emoticons}
  )
}

let parseLinks = (input) => {
  
}
  
let parse = (input) => {
  return Promise.all([
    parseMentions(input),
    parseEmoticons(input)
  ])
  .then(R.mergeAll)
  .then(JSON.stringify)
}

module.exports = {parse}
