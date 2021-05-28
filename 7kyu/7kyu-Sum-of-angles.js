// Sum of angles

// https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/javascript

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
  return (n - 2) * 180;
}

// Best practice and clever solution:

// function angle(n) {
//   if (n == 3) return 180;
//   if (n == 4) return 360;
//   if (n == 5) return 540;
//   if (n == 6) return 720;
//   if (n == 7) return 900;
//   if (n == 8) return 1080;
//   if (n == 9) return 1260;
//   if (n == 10) return 1440;
//   if (n == 11) return 1620;
//   if (n == 12) return 1800;
//   if (n == 13) return 1980;
//   if (n == 14) return 2160;
//   if (n == 15) return 2340;
//   if (n == 16) return 2520;
//   if (n == 17) return 2700;
//   if (n == 18) return 2880;
//   if (n == 19) return 3060;
//   if (n == 20) return 3240;
//   if (n == 21) return 3420;
//   if (n == 22) return 3600;
//   if (n == 23) return 3780;
//   if (n == 24) return 3960;
//   if (n == 25) return 4140;
//   if (n == 26) return 4320;
//   if (n == 27) return 4500;
//   if (n == 28) return 4680;
//   if (n == 29) return 4860;
//   if (n == 30) return 5040;
//   if (n == 31) return 5220;
//   if (n == 32) return 5400;
//   if (n == 33) return 5580;
//   if (n == 34) return 5760;
//   if (n == 35) return 5940;
//   if (n == 36) return 6120;
//   if (n == 37) return 6300;
//   if (n == 38) return 6480;
//   if (n == 39) return 6660;
//   if (n == 40) return 6840;
//   if (n == 41) return 7020;
//   if (n == 42) return 7200;
//   if (n == 43) return 7380;
//   if (n == 44) return 7560;
//   if (n == 45) return 7740;
//   if (n == 46) return 7920;
//   if (n == 47) return 8100;
//   if (n == 48) return 8280;
//   if (n == 49) return 8460;
//   if (n == 50) return 8640;
//   if (n == 51) return 8820;
//   if (n == 52) return 9000;
//   if (n == 53) return 9180;
//   if (n == 54) return 9360;
//   if (n == 55) return 9540;
//   if (n == 56) return 9720;
//   if (n == 57) return 9900;
//   if (n == 58) return 10080;
//   if (n == 59) return 10260;
//   if (n == 60) return 10440;
//   if (n == 61) return 10620;
//   if (n == 62) return 10800;
//   if (n == 63) return 10980;
//   if (n == 64) return 11160;
//   if (n == 65) return 11340;
//   if (n == 66) return 11520;
//   if (n == 67) return 11700;
//   if (n == 68) return 11880;
//   if (n == 69) return 12060;
//   if (n == 70) return 12240;
//   if (n == 71) return 12420;
//   if (n == 72) return 12600;
//   if (n == 73) return 12780;
//   if (n == 74) return 12960;
//   if (n == 75) return 13140;
//   if (n == 76) return 13320;
//   if (n == 77) return 13500;
//   if (n == 78) return 13680;
//   if (n == 79) return 13860;
//   if (n == 80) return 14040;
//   if (n == 81) return 14220;
//   if (n == 82) return 14400;
//   if (n == 83) return 14580;
//   if (n == 84) return 14760;
//   if (n == 85) return 14940;
//   if (n == 86) return 15120;
//   if (n == 87) return 15300;
//   if (n == 88) return 15480;
//   if (n == 89) return 15660;
//   if (n == 90) return 15840;
//   if (n == 91) return 16020;
//   if (n == 92) return 16200;
//   if (n == 93) return 16380;
//   if (n == 94) return 16560;
//   if (n == 95) return 16740;
//   if (n == 96) return 16920;
//   if (n == 97) return 17100;
//   if (n == 98) return 17280;
//   if (n == 99) return 17460;
//   if (n == 100) return 17640;
// }
