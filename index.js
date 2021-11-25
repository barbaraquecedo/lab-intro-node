class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;



  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b
    })
  }


  get(pos) {

    if (this.items(pos) === null) {
      throw new Error('OutOfBounds');

    } 
    return this.items.indexOf(pos)
    
  }
  


  max() {

    if (this.items[0]) {
      throw new Error('EmptySortedList');
    } 
    return Math.max(this.items[item]);
  }

  min() {

    if (this.items[0]) {
      throw new Error('EmptySortedList');
    } 
    return Math.min(this.items[item]);
  }



  sum() {
    
    if (this.items[0]) {
      this.items === 0;
    } 
    
    this.items.reduce((a, b) => {
      return a + b;
    });
  }


  avg() {

  }
}

module.exports = SortedList;
