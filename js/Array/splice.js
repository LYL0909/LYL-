// splice() 方法
var arr = [1,2,3,4,5,6]
// console.log(arr.splice(2,2))//删除第三个、第四个元素
// console.log(arr.splice(2,2,1));//删除第三个、第四个元素并在第二个元素后加一个数字
// console.log(arr.splice(2,2,"wlianm"));//删除第三个、第四个元素并在第二个元素后加一个字符串
// console.log(arr.splice(-4,2,"wlianm"));//删除倒数第四个、倒数第五个元素并在倒数第三个元素后加一个字符串
console.log(arr.splice(-4,0,"wlianm"));//不删除元素并在倒数第四个元素前加一个元素
console.log(arr);