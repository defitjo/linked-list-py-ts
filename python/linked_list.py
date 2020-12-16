class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def __len__(self):
        current = self.head
        size = 0

        while current is not None:
            size += 1
            current = current.next

        return size

    def insert(self, data):
        if data is None:
            return None

        node = Node(data, self.head)
        self.head = node
        return node

    def append(self, data):
        if data is None:
            return None

        node = Node(data)

        if self.head is None:
            self.head = node
            return node

        current = self.head

        while current.next is not None:
            current = current.next

        current.next = node
        return node

    def find(self, data):
        if data is None:
            return None

        current = self.head

        while current is not None:
            if current.data == data:
                return True
            current = current.next

        return False

    def delete(self, data):
        if data is None:
            return None

        if self.head is None:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        previous = self.head
        current = self.head.next

        while current is not None:
            if current.data == data:
                previous.next = current.next
                return
            previous = current
            current = current.next

    def get_all_data(self):
        current = self.head
        data = []

        while current is not None:
            data.append(str(current.data))
            current = current.next

        return ' => '.join(data)

    def print_list(self):
        current = self.head

        while current is not None:
            print(current.data)
            current = current.next


ll = LinkedList()
ll.insert('C')
ll.insert('B')
ll.insert('A')
ll.append('D')
ll.append(True)
ll.append(10)
ll.append([1, 2, 3])
ll.append({'a': 1, 'b': 2})
ll.print_list()
print(ll.find('B'))
print(ll.find('Y'))
print(ll.__len__())
print(ll.get_all_data())
ll.delete('D')
print(ll.get_all_data())
