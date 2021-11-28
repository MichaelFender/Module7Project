function data(str){
    var show = str.split(" ");
     show.sort(function (a,b){
         return b.length - a.length; 
     })
     return show[0];
}
console.log(data(str = "The journey of a thousand miles begins with one step"));