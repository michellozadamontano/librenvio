import { MatPaginatorIntl } from '@angular/material';

const spanishRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 de ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
}


export function getSpanishPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Items por pagina:';
  paginatorIntl.nextPageLabel = 'Pagina siguiente';
  paginatorIntl.previousPageLabel = 'Pagina anterior';
  paginatorIntl.getRangeLabel = spanishRangeLabel;
  paginatorIntl.firstPageLabel = 'Primera pagina'
  paginatorIntl.lastPageLabel = 'Ultima pagina'

  return paginatorIntl;
}
