# JS Array 数组

## Array 对象
    Array对象用于在单个变量中储存多个值

## 创建数组
  - new Array();  创建一个数组
  - new Array(size);  创建一个数组并赋予它长度
  - new Array(element0,element1,element2);  创建一个数组并初始化

## Array 对象方法
  - concat( ) 方法：

    1. 用于连接两个或多个数组
    2. 语法：arrayObject.concat(array1,array2,...,arrayn)
    3. 参数可以是具体的值也可以是数组对象
  
  - join( ) 方法:

    1. 用于把数组中所有元素放入一个字符串，元素通过指定分隔符分割
    2. arrayObject.join(separator)
    3. 若未指定separator分隔符默认为逗号

  - pop( )方法：

    1. 用于删除并返回数组的最后一个元素
    2. arrayObject.pop()
    3. 使用后数组长度-1
    4. 该方法是直接修改该数组而不是创建一个新的数组

  - push( )方法：

    1. 向数组的末尾添加一个或多个元素，并返回新的长度
    2. arrayObject.push(newelement1,newelement2,....,newelementX)
    3. 使用后数组的长度+n(n为加入元素个数)
    4. 该方法是直接修改该数组而不是创建一个新的数组

  - reverse( )方法：

    1. 用于颠倒数组中元素的顺序
    2. arrayObject.reverse()
    3. 该方法只是改变原来的数组而不会创建新的数组

  - shift( )方法：

    1. 用于删除并返回数组第一个元素
    2. arrayObject.shift()
    3. 使用后数组长度-1
    4. 该方法是直接修改该数组而不是创建一个新的数组

  - slice( )方法：

    1. 从已有的数组中返回选定的元素
    2. arrayObject.slice(start,end)
    3. 若要返回包含第n个元素之后的所有元素  arrayObject.slice(n)
    4. 参数若为复数，只能为start，end不赋值，且返回元素为倒数第n个之后的所有元素

  - sort( )方法：

    1. 用于对数组的元素进行排序
    2. arrayObject.sort(sortby)
    3. sortby可以是一个其他的比较函数，默认升序排列
    4. 数组元素为数字则按数字大小进行排序
    5. 数组元素为字符串则按首字母顺序排序，若首字母一样则按第二个字母的顺序进行排序，以此类推

  - splice( )方法:

    1. 向/从数组中添加/删除项目，然后返回被删除的项目
    2. 该方法会改变原始数组
    3. arrayObject.splice(index,howmany,item1,.....,itemX)
    4. index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
    5. howmany	必需。要删除的项目数量。 如果设置为 0，则不会删除项目。
    6. item1, ..., itemX	可选。 向数组添加的新项目。

  - toSource()方法：

    1. 表示对象的源代码
    2. object.toSource()
    3. 只有 Gecko 核心的浏览器（比如 Firefox）支持该方法，也就是说 IE、Safari、Chrome、Opera 等浏览器均不支持该方法。

  - toString()方法：

    1. 把数组转换为字符串，并返回结果
    2. arrayObject.toString()
    3. 数组中的元素用逗号分割

  - unshift( ) 方法:

    1. 可向数组的开头添加一个或更多元素，并返回新的长度
    2. arrayObject.unshift(newelement1,newelement2,....,newelementX)
    3. 该方法会改变数组的长度
    
  