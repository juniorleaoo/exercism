//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  rows = [];
  columns = [];

  constructor(input) {
    this.rows = this.extractRows(input);
    this.columns = this.extractColumns(this.rows);
  }
  
  extractRows(input){
    return input.split('\n').map(row => row.split(' ').map(column => Number(column)));
  }
  
  extractColumns(){
    const [firstRow] = this.rows;
    return firstRow.map((_, column) => this.rows.map(row => row[column]));
  }
}
