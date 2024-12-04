  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  const returnFirstTwoDrivers = function(drivers){
       return drivers.slice(0,2)
  }

console.log(returnFirstTwoDrivers(drivers));


const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(drivers));


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers[0](drivers))
console.log(selectingDrivers[1](drivers))



function createFareMultiplier(factor){
    return function (number){
        return number * factor

    }
}
const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);
const fareDoubler  = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers (drivers, selectingDrivers){ 
        return selectingDrivers(drivers)
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers));