let dateObj = new Date(2022, 9, 30, 10, 30);
let dateInfo = {
    year : dateObj.getFullYear(),
    month : dateObj.getMonth() + 1,
    date : dateObj.getDate(),
    hours : dateObj.getHours(),
    minutes : dateObj.getMinutes(),
    nowDate : dateObj.toUTCString(),
    localeDate : dateObj.toLocaleDateString(),
    isoDate : dateObj.toISOString(),
}
for(let i in dateInfo){
    console.log(i+' : '+dateInfo[i]);
}