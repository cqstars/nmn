function nmnList() {
    this.length = 0;
    this.head = null;
}

//链表节点定义
nmnList.prototype.Node = function (element) {
    this.element = element;
    this.next = null;
}
// 向链表尾部追加元素
nmnList.prototype.append = function (element) {
    let node = new this.Node(element);
    let current;
    if (this.head === null) { // 列表中第一个节点
        this.head = node
    } else {
        current = this.head;
        while (current.next) {
            current = current.next; // 找到最后一项，是null
        }
        current.next = node; // 给最后一项赋值
    }
    this.length++ // 更新列表的长度
}
// 从链表中移除指定位置元素
nmnList.prototype.removeAt = function (position) {
    if (position > -1 && position < this.length) { // 值没有越界
        let current = this.head;
        let previous, index = 0;
        if (position === 0) { //  移除第一项
            this.head = current.next;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;// 将previous与current的下一项连接起来，跳过current，从而移除
        }
        this.length-- // 更新列表的长度
        return current.element;
    } else {
        return null
    }
}
// 在链表任意位置插入一个元素
nmnList.prototype.insert = function (position, element) {
    if (position >= 0 && position <= this.length) { // 检查越界值
        let node = new this.Node(element),
            current = this.head,
            previous,
            index = 0;
        if (position === 0) { // 在第一个位置添加
            node.next = current;
            this.head = node;
        } else {
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            node.next = current;// 在previous与current的下一项之间插入node
            previous.next = node;
        }
        this.length++;
        return true;
    } else {
        return false;
    }
}
// 把链表内的值转换成一个字符串
nmnList.prototype.toString = function () {
    let current = this.head,
        string = '';
    while (current) {
        string += current.element + ' ';
        current = current.next;
    }
    return string
}
// 在链表中根据索引值查找元素
nmnList.prototype.getelement=function(index){
    if (index >= 0 && index <= this.length){
        let current = this.head;
        for(var i=0;i<index;i++){
            current=current.next;
        }
        return current.element;
    }
    else {
        return false;
    }

}
// 在链表中查找元素并返回索引值
nmnList.prototype.indexOf = function (element) {
    let current = this.head,
        index = 0;
    while (current) {
        if (element === current.element) {
            return index;
        }
        index++;
        current = current.next;
    }
    return -1;
}

// 改变链表中索引值的element
nmnList.prototype.changeelementbyindex=function(element,index){
     if (index >= 0 && index <= this.length){
        let current = this.head;
        for(var i=0;i<index;i++){
            current=current.next;
        }
        current.element=element;
        return true;
    }
    else {
        return false;
    }
}
// 从链表中移除指定元素
nmnList.prototype.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
}

nmnList.prototype.isEmpty = function () {
    return this.length === 0;
}

nmnList.prototype.size = function () {
    return this.length;
}

nmnList.prototype.getHead = function () {
    return this.head;
}