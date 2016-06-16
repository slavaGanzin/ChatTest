let R = require('ramda')

let parse = (input) => {
  let cutAmp = (x) => x.replace(/^@/, '')
  let rejectEmpty = R.reject(console.log)
  // R.reject((x) => x.length == 1 && x[0] === null)
  
  return rejectEmpty({
    mentions: input.match(/@\w+/gi).map(cutAmp),
    emoticons: input.match(/\(\w{,15}\)/)
  })
}


module.exports = {parse}
