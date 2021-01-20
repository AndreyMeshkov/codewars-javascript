// Statistics for an Athletic Association

// https://www.codewars.com/kata/55b3425df71c1201a800009c

// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form:

// "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:

// if a result in seconds is ab.xy... it will be given truncated as ab.

// if the given string is "" you will return ""

function stat(strg) {
  let arr = strg.split(", ").map((val) => val.split("|"));
  for (let i = 0; i < arr.length; i++) {
    arr[i][0] = arr[i][0] * 3600;
    arr[i][1] = arr[i][1] * 60;
    arr[i][2] = +arr[i][2];
    for (let j = 0; j < 3; j++) {
      if (isNaN(arr[i][j])) return "";
    }
  }
  arr = arr
    .map((val) => val.reduce((acc, cur) => acc + cur, 0))
    .sort((a, b) => a - b);
  const range = arr[arr.length - 1] - arr[0];
  const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  const median =
    arr.length % 2
      ? arr[Math.floor(arr.length / 2)]
      : (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  return `Range: ${convertation(range)} Average: ${convertation(
    average
  )} Median: ${convertation(median)}`;
}

function convertation(num) {
  let hours = Math.floor(num / 3600);
  let minuts = Math.floor((num - Math.floor(num / 3600) * 3600) / 60);
  let secunds = Math.floor(num - Math.floor(num / 60) * 60);
  if (hours < 10) hours = "0" + hours;
  if (minuts < 10) minuts = "0" + minuts;
  if (secunds < 10) secunds = "0" + secunds;
  return hours + "|" + minuts + "|" + secunds;
}

// Best practice:

// function stat(strg) {
//     if (strg === '') {
//       return strg;
//     }
//     const teamStats = new teamStatistics(strg);
//     return 'Range: ' +  teamStats.getRange() + ' Average: ' + teamStats.getAverage() + ' Median: ' + teamStats.getMedian();
// }

// class teamStatistics {
//   constructor(teamScores) {
//     this.teamScoresInArray = teamScores.split(', ');
//     this.teamTimesInSeconds = [];

//     for(let singlePerson of this.teamScoresInArray) {
//       const hoursToSeconds = Number(singlePerson.split('|')[0] * 60 * 60);
//       const minutesToSeconds = Number(singlePerson.split('|')[1] * 60);
//       const seconds = Number(singlePerson.split('|')[2]);
//       this.teamTimesInSeconds.push(hoursToSeconds + minutesToSeconds + seconds);
//     }
//   }

//   getFormatedTime(timeInSeconds) {
//     const date = new Date(null);
//     date.setSeconds(timeInSeconds);

//     return date.toISOString().substr(11, 8).replace(/:\s*/g, '|');
//   }

//   getAverage() {
//     let arraySum = 0;
//     let average = 0;
//     const arrayLength = this.teamTimesInSeconds.length;

//     for (let number of this.teamTimesInSeconds) {
//       arraySum += number;
//     }

//     return this.getFormatedTime(arraySum / arrayLength);
//   }

//   getMedian() {
//     this.teamTimesInSeconds.sort( function(a,b) {return a - b;} );

//     var half = Math.floor(this.teamTimesInSeconds.length/2);

//     if(this.teamTimesInSeconds.length % 2) {
//       return this.getFormatedTime(this.teamTimesInSeconds[half]);
//     } else {
//       return this.getFormatedTime((this.teamTimesInSeconds[half-1] + this.teamTimesInSeconds[half]) / 2.0);
//     }
//   }

//   getRange() {
//     const biggest = Math.max.apply(Math, this.teamTimesInSeconds);
//     const smallest = Math.min.apply(Math, this.teamTimesInSeconds);
//     return this.getFormatedTime(biggest-smallest);
//   }
// }

// Clever solution:

// function stat(strg) {
//     const addZero=s=>('0'+s).slice(-2);
//     const getStr=n=>addZero(Math.floor(n/3600))+'|'+addZero(Math.floor(n%3600/60))+'|'+addZero(n%60);
//     if(!strg)return '';
//     var arr=strg.split(', ')
//                 .map(a=>a.replace(/(\d+)\|(\d+)\|(\d+)/,function(a,b,c,d){return b*3600+c*60+d*1})).sort((a,b)=>a*1-b*1);
//     var len=arr.length;
//     var range=arr[len-1]-arr[0];
//     var average=Math.floor(arr.reduce((s,v)=>s+v*1,0)/len);
//     var median=len%2===1?arr[(len-1)/2]:Math.floor((arr[len/2]*1+arr[len/2-1]*1)/2);
//     return 'Range: '+getStr(range)+' Average: '+getStr(average)+' Median: '+getStr(median);
// }
