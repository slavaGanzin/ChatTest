let R = require('ramda')
let needle = require('needle')
let urlRegexp = require('url-regexp')
let cheerio = require('cheerio')

let cutAmp = R.replace(/^@/, '')
let cutParentheses = R.replace(/\(|\)/g, '')

let fetchTitle = (url) =>
  new Promise((resolve, reject) =>
    needle.get(url, (err, response) => {
      if(err !== null) return reject(err)
      $ = cheerio.load(response.body)
      resolve({url: url, title: $('title').text()})
    })
  )


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
  let links = urlRegexp.match(input)
  return Promise.all(R.map(fetchTitle, links))
  .then(links => R.isEmpty(links) ? {} : {links})
}
  
let parse = (input) => {
  return Promise.all([
    parseMentions(input),
    parseEmoticons(input),
    parseLinks(input)
  ])
  .then(R.mergeAll)
  .then(JSON.stringify)
}

module.exports = {parse}
