//Array
let info = [45, 11, 7, 32, 28, 19];

//sort
info.sort(function(a,b){
    return a - b;
});
console.log(info.toString());

//filter
const filterResult = info.filter(data => data > 10);
console.log(filterResult);

//map
const result = info.map(data => data*2);
console.log(result);

//slice(startindex, [deletecount, appenddate])
const months = ['Jan', 'March', 'April', 'June'];
months.slice(1, 0, 'Feb');
//inserts at index1
console.log(months);
//expected output : Array ["Jan", "Feb", "March","April", "June"]

months.splice(4,1,"May");
//replaces 1 element at index 4
console.log(months);
//expected output : Array ["Jan", "Feb", "March", "April", "May"]
months.splice(4, 1);
console.log(months);