console.log(1);//First to be executed
setTimeout(function(){console.log(2);},1000);//enters queue first=>Fourth to be executed
setTimeout(function(){console.log(3);},0);//enters queue second but its brouhgt to the front due to smaller timer=>Third to be executed
console.log(4)//Second to be executed