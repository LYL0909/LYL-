//原型
var lyl = {
    name : "刘泳麟",
    age : 18,
    grade : {
        python : 80,
        math : 75,
    }
}

if(typeof Object.beget !== 'function'){
    Object.beget = function (o){
        var F = function(){};
        F.prototype = o;
        return new F();
    };
}

var another_lyl = Object.beget(lyl);
console.log(typeof another_lyl);
another_lyl.name = "lyl";
another_lyl.age = 20;
console.log(another_lyl);
console.log(lyl);