function getNumberOfDays(month, year){
    let daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth)
}
getNumberOfDays(2, 2015);