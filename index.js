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

const titleCased = () => {
  return tutorials.map(string => string.split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" "))
}


// 1. split my strings up by space
// 2. go into the first index and capitalize it
// 3. make sure to attach the rest of my string to newly capitalized letter
// 4. then join each string together
// const titleCased = () => {
//   return tutorials.map(string => {
//     let stringSplit = string.split(" ");
//     let strUpper = stringSplit.map(word =>
//       word.charAt(0).toUpperCase() + word.substring(1)
//     )
//   return strUpper.join(" ")
//   })
// }
