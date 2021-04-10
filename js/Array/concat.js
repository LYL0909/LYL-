// concat()方法
//两个数组连接
var a = [1,2,3];//定义一个数组a
var b = [4,5,6];//定义一个数组b
console.log(a.concat(b));//将数组a、b链接起来

//向单个数组中添加元素
var c = [1,2,3];
console.log(c.concat(4,5));//直接向方法里写入需要连接的数组元素

//三个数组连接
//定义三个数组
var list = ["s","n","k"];
var list1 = ["4","5",6];
var list2 = ["l","y","l"];
console.log(list.concat(list1,list2));//向方法里输入需要连接的数组
