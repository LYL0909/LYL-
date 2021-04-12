//引用
var lyl = {
    name : "刘泳麟",
    age : 18,
    grade : {
        python : 80,
        math : 75,
    }
}

var x = lyl;

var new_lyl = {
    name : "刘泳麟",
    age : 18,
    grade : {
        python : 80,
        math : 75,
    }
}

x.name = "lyl";//通过引用修改属性值，对象本体也会改变
console.log(lyl);
console.log(x==lyl);//True  x和lyl指向同一个地址，并不是两个不同的地址 x、lyl是指向同一个对象的引用
console.log(new_lyl==lyl);//False new_lyl和lyl引用的是不同的对象 名值对相同 但两个对象地址不同


