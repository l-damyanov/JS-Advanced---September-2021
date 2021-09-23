function createSortedList() {
    return {
        list: [],
        size: 0,
        add (element) {
            this.list.push(element);
            this.list = this.list.sort((a, b) => a - b);
            this.size += 1;
        },
        remove (index) {
            if (0 <= index && index < this.list.length) {
                this.list.splice(index, 1);
                this.size -= 1;
            }
        },
        get (index) {
            if (0 <= index && index < this.list.length) {
                return this.list[index];
            }
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
