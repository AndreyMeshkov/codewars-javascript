// It is written in the stars

// https://www.codewars.com/kata/it-is-written-in-the-stars

// Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
// Task:
// Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
// Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

// Aquarius ------ 21 January - 19 February
// Pisces --------- 20 February - 20 March
// Aries ---------- 21 March - 20 April
// Taurus -------- 21 April - 21 May
// Gemini -------- 22 May - 21 June
// Cancer -------- 22 June - 22 July
// Leo ------------- 23 July - 23 August
// Virgo ----------- 24 August - 23 September
// Libra ----------- 24 September - 23 October
// Scorpio -------- 24 October - 22 November
// Sagittarius ---- 23 November - 21 December
// Capricorn ----- 22 December - 20 January

// Test info: 100 random tests (dates range from January 1st 1940 until now)

function starSign(date) {
  const month = date.getMonth();
  const day = date.getDate();
  if ((month === 0 && day > 20) || (month === 1 && day < 20)) {
    return "Aquarius";
  } else if ((month === 1 && day > 19) || (month === 2 && day < 21)) {
    return "Pisces";
  } else if ((month === 2 && day > 20) || (month === 3 && day < 21)) {
    return "Aries";
  } else if ((month === 3 && day > 20) || (month === 4 && day < 22)) {
    return "Taurus";
  } else if ((month === 4 && day > 21) || (month === 5 && day < 22)) {
    return "Gemini";
  } else if ((month === 5 && day > 21) || (month === 6 && day < 23)) {
    return "Cancer";
  } else if ((month === 6 && day > 22) || (month === 7 && day < 24)) {
    return "Leo";
  } else if ((month === 7 && day > 23) || (month === 8 && day < 24)) {
    return "Virgo";
  } else if ((month === 8 && day > 23) || (month === 9 && day < 24)) {
    return "Libra";
  } else if ((month === 9 && day > 23) || (month === 10 && day < 23)) {
    return "Scorpio";
  } else if ((month === 10 && day > 22) || (month === 11 && day < 22)) {
    return "Sagittarius";
  } else {
    return "Capricorn";
  }
}

// Best practice and clever solution:

// function starSign(date) {
//     var day = date.getDate();

//     switch(date.getMonth()){
//       case 0:  return day < 21 ? "Capricorn" : "Aquarius";
//       case 1:  return day < 20 ? "Aquarius" : "Pisces";
//       case 2:  return day < 21 ? "Pisces" : "Aries";
//       case 3:  return day < 21 ? "Aries" : "Taurus";
//       case 4:  return day < 22 ? "Taurus" : "Gemini";
//       case 5:  return day < 22 ? "Gemini" : "Cancer";
//       case 6:  return day < 23 ? "Cancer" : "Leo";
//       case 7:  return day < 24 ? "Leo" : "Virgo";
//       case 8:  return day < 24 ? "Virgo" : "Libra";
//       case 9:  return day < 24 ? "Libra" : "Scorpio";
//       case 10: return day < 23 ? "Scorpio" : "Sagittarius";
//       case 11: return day < 22 ? "Sagittarius" : "Capricorn";
//     }
//   }
