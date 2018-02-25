class Sorter {
  constructor() {
    this.property = [];
    this.comparator = function (a, b) {
          if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          if (a == b) {
            return 0;
          }
        };
  }

  add(element) {
    this.property.push(element);
  }

  at(index) {
    return this.property[index];
  }

  get length() {
    return this.property.length;
  }

  toArray() {
    return this.property;
  }



  sort(indices) {
    var items = [];
    for (let i = 0; i <= indices.length; i++) {
      items.push(this.property[indices[i]]);
    }
    items.sort(this.comparator)
    indices.sort()
    for (let i = 0; i < indices.length; i++) {
      this.property[indices[i]] = items[i];
    }
  }

  setComparator(compareFunction) {
       this.comparator = compareFunction;
  }
}

module.exports = Sorter;
