const makeRunOn = function(str) {
  
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "." && str[i + 1] != undefined) {
      result = result + str[i].replace(".", ",");
    } else if (str[i] != ".") {
      result = result + str[i];
    } else if (str[i] === "." && str[i + 1] === undefined) {
      result = result + str[i];
    }
  }
  return result;
}

const totalScore = function(scores, multi, bonus) {
  let result = 0;

  for (const score of scores) {
    result = result + score.score;
  }

  if (multi != undefined) {
    result = result * multi;
  }

  if (bonus != undefined) {
    result = result + bonus;
  }
  return result;
}

const nightOwls = function(people) {
  result = [];
  
  for (const person of people) {
    if (person.localTime <= 400 && person.localTime >= 100 && person.asleep === false) {
      result.push(person);
    }
  }
  return result;
}

const getToBed = function(people) {
  result = [];

  for (const person of people) {
    if (person.asleep === true) {
      result.push(person)
    } else if (person.localTime <= 400 && person.localTime >= 100 && person.asleep === false) {
      result.push(newPerson = person)
      result.push(newPerson.asleep = true)
    }
  }
  return result;
}

const findIndices = function(arr, call) {
  for (const item of arr) {
    if (item === call) {
      return item.indexOf();
    }
  }
}

if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
