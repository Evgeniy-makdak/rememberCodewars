// ************************************************************** 1
// Задав строку, выделите буквы, занимающие четные и нечетные индексы, отдельно и верните, как показано ниже. Индекс 0 будет считаться четным.
// Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. 
// На вход будет подана строка в нижнем регистре без пробелов. 
// #7kyu

function capitalize(s) {
  const sortArrayFirst = [];
  const sortArraySecond = [];
  for (let i = 0; i <= s.length; i++) {
    if (i % 2 === 0) {
        sortArrayFirst.push(s[i].toUpperCase())
    } else {
        sortArrayFirst.push(s[i]);
    };
  }
  return sortArrayFirst.join('');
};

console.log(capitalize('asdfg'));
