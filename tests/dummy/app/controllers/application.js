import Controller from '@ember/controller';
import { action } from '@ember/object';

function generateData(rows, cols) {
  const data = [];

  for (let row = 0; row < rows; row++) {
    data[row] = {};
    for (let col = 0; col < cols; col++) {
      data[row][`col-${col}`] = `${row}.${col}`;
    }
  }

  return data;
}

export default class ApplicationController extends Controller {
  columns = [
    { title: 'COL0', field: 'col-0', formatter: this.formatDate, frozen: true },
    { title: 'COL1', field: 'col-1' },
    { title: 'COL2', field: 'col-2' },
    { title: 'COL3', field: 'col-3' },
    { title: 'COL4', field: 'col-4' },
    { title: 'COL5', field: 'col-5' },
    { title: 'COL6', field: 'col-6' },
    { title: 'COL7', field: 'col-7' },
    { title: 'COL8', field: 'col-8' },
    { title: 'COL9', field: 'col-9' },
    { title: 'COL10', field: 'col-10' },
    { title: 'COL11', field: 'col-11' },
    { title: 'COL12', field: 'col-12' },
    { title: 'COL13', field: 'col-13' },
    { title: 'COL14', field: 'col-14' },
    { title: 'COL15', field: 'col-15' },
    { title: 'COL16', field: 'col-16' },
    { title: 'COL17', field: 'col-17' },
    { title: 'COL18', field: 'col-18' },
    { title: 'COL19', field: 'col-19' },
    { title: 'COL20', field: 'col-20' },
    { title: 'COL21', field: 'col-21' },
    { title: 'COL22', field: 'col-22' },
    { title: 'COL23', field: 'col-23' },
    { title: 'COL24', field: 'col-24' },
    { title: 'COL25', field: 'col-25' },
    { title: 'COL26', field: 'col-26' },
    { title: 'COL27', field: 'col-27' },
    { title: 'COL28', field: 'col-28' },
    { title: 'COL29', field: 'col-29' },
  ];

  data = generateData(1000, 32);

  @action
  onCellClick(e, cell) {
    alert(cell.getValue());
  }

  @action
  formatDate(cell) {
    return `<em>Formatted ${cell.getValue()}</em>`;
  }
}
