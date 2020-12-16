class LinkedListNode {
    data: any;
    next: any;

    constructor(newData: any, newNext: any) {
        this.data = newData;
        this.next = newNext;
    }
}

class LinkedList {
    head: any;

    constructor(newHead: any) {
        this.head = newHead;
    }

    size() {
        let current = this.head;
        let size: number = 0;

        while (current != null) {
            size += 1;
            current = current.next;
        }
        return size;
    }

    insert(data: any) {
        if (data === null) {
            return null;
        }

        let node = new LinkedListNode(data, this.head);
        this.head = node;
        return node;
    }

    append(data: any) {
        if (data === null) {
            return null;
        }

        let node = new LinkedListNode(data, null);

        if (this.head === null) {
            this.head = node;
            return node;
        }

        let current = this.head;

        while (current.next != null) {
            current = current.next;
        }

        current.next = node;
        return node;
    }

    find(data: any) {
        if (data === null) {
            return null;
        }

        let current = this.head;

        while (current != null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    delete(data: any) {
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

        let previous = this.head;
        let current = this.head.next;

        while (current != null) {
            if (current.data === data) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }
        return 'Node not found';
    }

    getAllData() {
        let current = this.head;
        let data: any[] = [];

        while (current != null) {
            data.push(current.data);
            current = current.next;
        }
        return data.join(' => ');
    }

    printList() {
        let current = this.head;

        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new LinkedList(null);
ll.insert('C')
ll.insert('B')
ll.insert('A')
ll.append('D')
ll.append(10)
ll.append(true)
ll.append([1, 2, 3])
ll.append({'a': 1, 'b': 2})
ll.printList()
console.log(ll.find('B'))
console.log(ll.find('Y'))
console.log(ll.size())
console.log(ll.getAllData())
ll.delete('D');
console.log(ll.getAllData());