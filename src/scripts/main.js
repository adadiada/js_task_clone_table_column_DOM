'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const cells = row.cells;

  if (cells.lenght < 2) {
    continue;
  }

  const rowSecons = cells[1].cloneNode(true);

  if (cells.length <= 5) {
    row.insertBefore(rowSecons, cells[4]);
  } else {
    row.appendChild(rowSecons);
  }
}
