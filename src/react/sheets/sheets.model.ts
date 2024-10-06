interface Col {
  id: string;
  label: string;
  type: string;
}

interface Cell {
  v: string | null;
}

interface Row {
  c: (Cell | null)[];
}

interface Table {
  cols: Col[];
  rows: Row[];
}

interface GoogleSheetData {
  version: string;
  reqId: string;
  status: string;
  sig: string;
  table: Table;
}
