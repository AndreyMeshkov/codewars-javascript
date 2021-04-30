// Total pressure calculation

// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a

solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return (
    ((((givenMass1 * 0.001) / molarMass1 + (givenMass2 * 0.001) / molarMass2) *
      0.082 *
      (temp + 273.15)) /
      volume) *
    1000
  );
};

// Best practice:

// solution=(m1,m2,M1,M2,v,t)=>(M1/m1+M2/m2)*0.082*(t+273.15)/v

// Clever solution:

// solution=(s,t,u,p,i,d)=>(u/s+p/t)*0.082*(d+273.15)/i
