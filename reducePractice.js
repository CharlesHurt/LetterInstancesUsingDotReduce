'use strict'

var aString = "Mississippi"

function letterInstances() {
  var anArr = arguments[0].split('')
  var result = anArr.reduce(function(acc, cur, index, arr) {
    if ((typeof acc[cur])!=='undefined') {
      acc[cur]++
      return acc
    } else {
      acc[cur + ''] = 1
      return acc
    }
  },{})
  return result
}

console.log(letterInstances(aString))
