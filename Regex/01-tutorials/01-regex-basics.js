// exec();
// match();
// replace();
// replaceAll();
// search();
// split();

const re = /test/
const str = 'test1 coding test2 tests.js'

// console.log(re.test(str))
// returns true/false if re is in str


console.log(re.exec(str))
// returns list with the search string, the index, and the string being searched
// [
//   'test',
//   index: 0,
//   input: 'test1 coding test2 tests.js',
//   groups: undefined
// ]



console.log(str.match(re))
// return list with the string used, the index of the searched for string, and the string being searched
// [
//   'test',
//   index: 0,
//   input: 'test1 coding test2 tests.js',
//   groups: undefined
// ]

console.log(str.replace(re, "replaced"))
// replaces first instance of re with replaced


