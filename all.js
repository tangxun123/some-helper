// 1. 数组示例
// 初始化一个数组
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 在数组首位插入一个元素
numbers.unshift(-1)

// 实际上, 在首位插入元素是这么实现的: 先将插入位置以后的元素一一后移
for (let i = numbers.length; i > 0; i--) {
  numbers[i] = numbers[i - 1]
}
numbers[0] = -1
// console.log(numbers) // -1,0,1,2,3,4,5,6,7,8,9,10,11,12,13

// 首位插入元素
console.time();
numbers.unshift(-1)
console.timeEnd();

// 末位插入元素
console.time();
numbers.push(99)
console.timeEnd();

// 2. 列表


// 3. 栈类实现
// 栈类
function Stack() {
  // 栈中的属性
  var items = []

  // 栈相关的方法

  // 压栈操作
  Stack.prototype.push = function (element) {
    items.push(element)
  }

  // 出栈操作
  Stack.prototype.pop = function (element) {
    return items.pop()
  }

  // peek操作
  Stack.prototype.peek = function () {
    return items[items.length - 1]
  }

  // 获取栈中元素的个数
  Stack.prototype.size = function () {
    return items.length
  }
}

// 应用: 十进制转二进制
// 封装十进制转二进制的函数
function dec2bin(decNumer) {
  // 定义变量
  var stack = new Stack()
  var remainder;

  // 循环除法
  while (decNumer > 0) {
    remainder = decNumer % 2
    decNumer = Math.floor(decNumer / 2)
    stack.push(remainder)
  }

  // 将数据取出
  var binayriStrng = ""
  while (!stack.isEmpty()) {
    binayriStrng += stack.pop()
  }
  return binayri
}

// 4. 队列
// 自定义队列
function Queue() {
  var items = []

  // 队列操作的方法
  // enter queue方法
  Queue.prototype.enqueue = function (element) {
    items.push(element)
  }

  // delete queue方法
  Queue.prototype.dequeue = function () {
    return items.shift()
  }

  // 查看前端的元素
  Queue.prototype.front = function () {
    return items[0]
  }

  // 查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return items.length == 0
  }

  // 查看队列中元素的个数
  Queue.prototype.size = function () {
    return items.length
  }
}

// 5. 链表
// 封装链表的构造函数
function LinkedList() {
  // 封装一个Node类, 用于保存每个节点信息
  function Node(element) {
    this.element = element
    this.next = null
  }

  // 链表中的属性
  this.length = 0
  this.head = null

  // 链表尾部追加元素方法
  LinkedList.prototype.append = function (element) {
    // 1.根据新元素创建节点
    var newNode = new Node(element)

    // 2.判断原来链表是否为空
    if (this.head === null) { // 链表尾空
      this.head = newNode
    } else { // 链表不为空
      // 2.1.定义变量, 保存当前找到的节点
      var current = this.head
      while (current.next) {
        current = current.next
      }

      // 2.2.找到最后一项, 将其next赋值为node
      current.next = newNode
    }

    // 3.链表长度增加1
    this.length++
  }

  // 链表的toString方法
  LinkedList.prototype.toString = function () {
    // 1.定义两个变量
    var current = this.head
    var listString = ""

    // 2.循环获取链表中所有的元素
    while (current) {
      listString += "," + current.element
      current = current.next
    }

    // 3.返回最终结果
    return listString.slice(1)
  }

  // 根据下标插入元素
  LinkedList.prototype.insert = function (position, element) {
    // 1.检测越界问题: 越界插入失败
    if (position < 0 || position > this.length) return false

    // 2.定义变量, 保存信息
    var newNode = new Node(element)
    var current = this.head
    var previous = null
    index = 0

    // 3.判断是否列表是否在第一个位置插入
    if (position == 0) {
      newNode.next = current
      this.head = newNode
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }

      newNode.next = current
      previous.next = newNode
    }

    // 4.length+1
    this.length++

    return true
  }

  // 根据位置移除节点
  LinkedList.prototype.removeAt = function (position) {
    // 1.检测越界问题: 越界移除失败, 返回null
    if (position < 0 || position >= this.length) return null

    // 2.定义变量, 保存信息
    var current = this.head
    var previous = null
    var index = 0

    // 3.判断是否是移除第一项
    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }

      previous.next = current.next
    }

    // 4.length-1
    this.length--

    // 5.返回移除的数据
    return current.element
  }

  // 根据元素获取链表中的位置
  LinkedList.prototype.indexOf = function (element) {
    // 1.定义变量, 保存信息
    var current = this.head
    index = 0

    // 2.找到元素所在的位置
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }

    // 3.来到这个位置, 说明没有找到, 则返回-1
    return -1
  }

  // 根据元素删除信息
  LinkedList.prototype.remove = function (element) {
    var index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 判断链表是否为空
  LinkedList.prototype.isEmpty = function () {
    return this.length == 0
  }

  // 获取链表的长度
  LinkedList.prototype.size = function () {
    return this.length
  }

  // 获取第一个节点
  LinkedList.prototype.getFirst = function () {
    return this.head.element
  }
}
function insert(arr, index, data) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = data;
}
// 6. 字典类
// 创建字典的构造函数
function Dictionay() {
  // 字典属性
  this.items = {}

  // 字典操作方法
  // 在字典中添加键值对
  Dictionay.prototype.set = function (key, value) {
    this.items[key] = value
  }

  // 判断字典中是否有某个key
  Dictionay.prototype.has = function (key) {
    return this.items.hasOwnProperty(key)
  }

  // 从字典中移除元素
  Dictionay.prototype.remove = function (key) {
    // 1.判断字典中是否有这个key
    if (!this.has(key)) return false

    // 2.从字典中删除key
    delete this.items[key]
    return true
  }

  // 根据key去获取value
  Dictionay.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined
  }

  // 获取所有的keys
  Dictionay.prototype.keys = function () {
    return Object.keys(this.items)
  }

  // 获取所有的value
  Dictionay.prototype.values = function () {
    return Object.values(this.items)
  }

  // size方法
  Dictionay.prototype.size = function () {
    return this.keys().length
  }

  // clear方法
  Dictionay.prototype.clear = function () {
    this.items = {}
  }
}

// 7. 实现哈希表
// 创建HashTable构造函数
function HashTable() {
  // 定义属性
  this.storage = []
  this.count = 0
  this.limit = 8

  // 定义相关方法
  // 判断是否是质数
  HashTable.prototype.isPrime = function (num) {
    var temp = parseInt(Math.sqrt(num))
    // 2.循环判断
    for (var i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }

  // 获取质数
  HashTable.prototype.getPrime = function (num) {
    while (!isPrime(num)) {
      num++
    }
    return num
  }

  // 哈希函数
  HashTable.prototype.hashFunc = function (str, max) {
    // 1.初始化hashCode的值
    var hashCode = 0

    // 2.霍纳算法, 来计算hashCode的数值
    for (var i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }

    // 3.取模运算
    hashCode = hashCode % max
    return hashCode
  }

  // 插入数据方法
  HashTable.prototype.put = function (key, value) {
    // 1.获取key对应的index
    var index = this.hashFunc(key, this.limit)

    // 2.取出数组(也可以使用链表)
    // 数组中放置数据的方式: [[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]
    var bucket = this.storage[index]

    // 3.判断这个数组是否存在
    if (bucket === undefined) {
      // 3.1创建桶
      bucket = []
      this.storage[index] = bucket
    }

    // 4.判断是新增还是修改原来的值.
    var override = false
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        override = true
      }
    }

    // 5.如果是新增, 前一步没有覆盖
    if (!override) {
      bucket.push([key, value])
      this.count++

      if (this.count > this.limit * 0.75) {
        var primeNum = this.getPrime(this.limit * 2)
        this.resize(primeNum)
      }
    }
  }

  // 获取存放的数据
  HashTable.prototype.get = function (key) {
    // 1.获取key对应的index
    var index = this.hashFunc(key, this.limit)

    // 2.获取对应的bucket
    var bucket = this.storage[index]

    // 3.如果bucket为null, 那么说明这个位置没有数据
    if (bucket == null) {
      return null
    }

    // 4.有bucket, 判断是否有对应的key
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }

    // 5.没有找到, return null
    return null
  }

  // 删除数据
  HashTable.prototype.remove = function (key) {
    // 1.获取key对应的index
    var index = this.hashFunc(key, this.limit)

    // 2.获取对应的bucket
    var bucket = this.storage[index]

    // 3.判断同是否为null, 为null则说明没有对应的数据
    if (bucket == null) {
      return null
    }

    // 4.遍历bucket, 寻找对应的数据
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--

        // 缩小数组的容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          var primeNum = this.getPrime(Math.floor(this.limit / 2))
          this.resize(primeNum)
        }
      }
      return tuple[1]
    }

    // 5.来到该位置, 说明没有对应的数据, 那么返回null
    return null
  }

  // isEmpty方法
  HashTable.prototype.isEmpty = function () {
    return this.count == 0
  }

  // size方法
  HashTable.prototype.size = function () {
    return this.count
  }

  // 哈希表扩容
  HashTable.prototype.resize = function (newLimit) {
    // 1.保存旧的数组内容
    var oldStorage = this.storage

    // 2.重置属性
    this.limit = newLimit
    this.count = 0
    this.storage = []

    // 3.遍历旧数组中的所有数据项, 并且重新插入到哈希表中
    oldStorage.forEach(function (bucket) {
      // 1.bucket为null, 说明这里面没有数据
      if (bucket == null) {
        return
      }

      // 2.bucket中有数据, 那么将里面的数据重新哈希化插入
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    }).bind(this)
  }
}