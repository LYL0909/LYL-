// var empty_object = {}
//对象字面量可嵌套
var lyl = {
    name : "刘泳麟",
    age : 18,
    grade : {
        python : 80,
        math : 75,
    }
}

//检索
//优先级 .表示法 > []表示法
console.log(lyl["name"]);//刘泳麟
console.log(lyl.name);//刘泳麟
console.log(lyl.height);//undefined

//检索undefined值 出现异常
// console.log(lyl.height.model);//报错

//使用&&运算符避免报错
console.log(lyl.height && lyl.height.model);

//更新
//优先级 .表示法>[ ]表示法
lyl["height"] = 171; //[ ]表示法
// lyl.height = 171;// .表示法


lyl.hometown = {
    province: "江西",
    city : "吉安",
}
console.log(lyl);

//删除
delete lyl.name;//name属性被删除
console.log(typeof lyl.name,lyl.name);//从string -> undefined
