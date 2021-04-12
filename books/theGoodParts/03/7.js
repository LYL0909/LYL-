//枚举
var lyl = {
    name : "刘泳麟",
    age : 18,
    grade : {
        python : 80,
        math : 75,
    }
}
//for in语句
// var name;
// for(name in lyl){
//     if(typeof lyl[name] !=='function'){
//         console.log(name + ":"+lyl[name]);
//     }
// }


//定义数组存放规定的属性顺序再用for  避免出现原型链中的属性
var nameList = [
    'age',
    'name',
    'grade'
];

for(i=0;i<nameList.length;i++){
    console.log(nameList[i]+":"+lyl[nameList[i]]);
}
