function getPreviousDay(year, month, day) {
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    date.setDate(date.getDate()-1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
getPreviousDay(2016, 3, 1)