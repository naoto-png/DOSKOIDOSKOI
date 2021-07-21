var query = location.search;
var value = query.split('=');
 
console.log(decodeURIComponent(value[1]));