let num = 1;
  f = 1.0;
// 冯诺依曼原理（通过向外输出显示）

// console.log(typeof num,typeof f);
//typeof 类型判断字段

let name="刘泳麟";
console.log(typeof name,name.length);//面向对象的写法
//得到姓与名
//姓一定是确定的，两个字的姓可以枚举出来
let LastName = name[0];
console.log(LastName);
//除了姓之外的都是名
//看文档 https://www.w3school.com.cn/js/jsref_substring.asp
let FirstName = name.substring(1);//从第一个提取到最后一个
console.log(FirstName);
// 优先级
console.log(1 + LastName);// + 拼接字符串
console.log(1 + true);

// let gf = undefined; //未声明
let gf = null; //声明了但是没有值
// JS typeof 是有点错位的， 精神大条 一周设计出来的
console.log(gf,typeof gf);//undefined gf未定义 内存空间中没有变量gf的位置；object 有误
let xiaomei = {
  name:'小美',
  age:18,
  hometown:'吉安'
}

console.log(xiaomei,typeof xiaomei);

let arr = [1,2,3];
console.log(arr,typeof arr);

let a = 1;
console.log(a,typeof a);
a = "abc";
console.log(a,typeof a);

function func(){

}
//除了基本数据类型，只有对象

// let func = () =>{

// }

console.log(typeof func);//the bad parts

const b = 1.01;//const是常量
//基础数据类型是不可变的 当b为常量 不可变，"貌似"对象？
console.log(b.toFixed(1));
// b = 2.1;
// console.log(b);//常量是不可变的

//对象当然是对象  一切皆是对象， JSON object 对象，是对象的一种
//对象是可变的  对象的属性是可变的
const obj = {
  name:'王杰',
  isSingle:true
}

obj.isSingle = false;
console.log(obj);