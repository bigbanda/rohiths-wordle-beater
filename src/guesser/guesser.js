//Gathering data into array
import alldata from "./alldata.json";
import tokendata from "./tokendata.json";

// alldatalen = 299178;
// tokendatalen = 239208;

//  Method to check if all conditions are met given a word
const allcondmet = (data, cond) => {
  for (let i = 0; i < cond?.length; i++) {
    if (cond[i][1] == "b") {
      if (data.includes(cond[i][0])) {
        return false;
      }
    }
    if (cond[i][1] == "g") {
      if (!(data.charAt(cond[i][2]) == cond[i][0])) {
        return false;
      }
    }
    if (cond[i][1] == "y") {
      if (
        !(!(cond[i][0] == data.charAt(cond[i][2])) & data.includes(cond[i][0]))
      ) {
        return false;
      }
    }
  }
  return true;
};

// Method to return first word occurence where all conditions are met (looping method above)
const firstocc = (cond, p) => {
  let allrec = "";
  let tokenrec = "";
  for (let i = 0; i < 299178; i++) {
    if (alldata[i.toString()]?.length == 5) {
      if (allcondmet(alldata[i.toString()], cond)) {
        if (p.includes(alldata[i.toString()])) {
          continue;
        }
        allrec = alldata[i.toString()];
        break;
      }
    }
  }
  for (let i = 0; i < 239208; i++) {
    if (tokendata[i.toString()]?.length == 5) {
      if (allcondmet(tokendata[i.toString()], cond)) {
        if (p.includes(tokendata[i.toString()])) {
          continue;
        }
        tokenrec = tokendata[i.toString()];
        break;
      }
    }
  }
  return [allrec, tokenrec];
};

// Accounts for duplicated in conditions array for each word. Removes occurences with duplicate letters, keeps only ones
// with color results
const accdup = (t) => {
  for (let i = 0; i < t?.length - 1; i++) {
    for (let j = i + 1; j < t?.length; j++) {
      if (t[i][0] == t[j][0]) {
        if (t[i][1] == "b") {
          t.splice(i, 1);
          continue;
        }
        if (t[j][1] == "b") {
          t.splice(j, 1);
        }
      }
    }
  }
  return t;
};
var conditions = [];
var pastwords = [];
export const getNextBestGuess = (word, results) => {
  var temp = [];
  for (let i = 0; i < 5; i++) {
    temp.push([word.charAt(i), results.charAt(i), i]);
  }
  temp = accdup(temp);
  temp.forEach((element) => {
    conditions.push(element);
  });
  pastwords.push(word);
  return firstocc(conditions, pastwords);
};
