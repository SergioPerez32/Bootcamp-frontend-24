console.log(1);//First to be executed
setTimeout(function(){console.log(2);},1000);//enters queue first=>Fourth to be executed due to timer
setTimeout(function(){console.log(3);},0);//enters queue second=>Third to be executed due to timer
console.log(4)//Second to be executed