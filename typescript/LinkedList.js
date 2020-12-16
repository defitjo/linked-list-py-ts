var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(newData, newNext) {
        this.data = newData;
        this.next = newNext;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(newHead) {
        this.head = newHead;
    }
    LinkedList.prototype.size = function () {
        var current = this.head;
        var size = 0;
        while (current != null) {
            size += 1;
            current = current.next;
        }
        return size;
    };
    LinkedList.prototype.insert = function (data) {
        if (data === null) {
            return null;
        }
        var node = new LinkedListNode(data, this.head);
        this.head = node;
        return node;
    };
    LinkedList.prototype.append = function (data) {
        if (data === null) {
            return null;
        }
        var node = new LinkedListNode(data, null);
        if (this.head === null) {
            this.head = node;
            return node;
        }
        var current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = node;
        return node;
    };
    LinkedList.prototype.find = function (data) {
        if (data === null) {
            return null;
        }
        var current = this.head;
        while (current != null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    };
    LinkedList.prototype["delete"] = function (data) {
        if (data === null) {
            return null;
        }
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var previous = this.head;
        var current = this.head.next;
        while (current != null) {
            if (current.data === data) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }
        return 'Node not found';
    };
    LinkedList.prototype.getAllData = function () {
        var current = this.head;
        var data = [];
        while (current != null) {
            data.push(current.data);
            current = current.next;
        }
        return data.join(' => ');
    };
    LinkedList.prototype.printList = function () {
        var current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
var ll = new LinkedList(null);
ll.insert('C');
ll.insert('B');
ll.insert('A');
ll.append('D');
ll.append(10);
ll.append(true);
ll.append([1, 2, 3]);
ll.append({ 'a': 1, 'b': 2 });
ll.printList();
console.log(ll.find('B'));
console.log(ll.find('Y'));
console.log(ll.size());
console.log(ll.getAllData());
ll["delete"]('D');
console.log(ll.getAllData());
