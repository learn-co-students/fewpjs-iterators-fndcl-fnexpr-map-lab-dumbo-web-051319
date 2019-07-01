const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map(function(tut) {
//     let arr = tut.split(' ')
//     let str = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     return str.join(' ')
//   })
// }

const titleCased = () => {
  return tutorials.map(tut => (tut.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')))
}


// function titleCased(array) {
// array.map(string => string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)))
// }

// // console.log(titleCased)

// const titleCased = (array) => {
//   array.map(string => string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
  
// }
  

// const titleCased = tutorials.map(tutorial => titleCase(tutorial)

// const str = tutorials.map(tutorial => titleCased(tutorial))

// function titleCased(str) {
//   str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
// }
// const str = tutorials.map(tutorial => titleCased(tutorial))