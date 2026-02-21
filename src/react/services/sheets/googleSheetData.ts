export function googleSheetData(
  jsonData: GoogleSheetData,
  filaInicial: number,
  columnas: string[]
): (string | null)[][] {
  const cols = jsonData.table.cols;
  const rows = jsonData.table.rows;

  // Mapeamos las letras de las columnas solicitadas a los índices
  const indicesColumnas: (number | null)[] = columnas.map((col) => {
    const columnaIndex = cols.findIndex((c) => c.id === col);
    return columnaIndex !== -1 ? columnaIndex : null;
  });

  // Extraemos los datos desde la fila inicial y las columnas solicitadas
  const resultados: (string | null)[][] = rows
    .slice(filaInicial)
    .map((fila) => {
      return indicesColumnas.map((indice) => {
        if (indice !== null && fila.c[indice]) {
          return fila.c[indice]?.v || null;
        }
        return null;
      });
    });

  return resultados;
}

export function getUrlSheets(id: string, gid: number) {
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json&tq&gid=${gid}`;
}

export async function fetchDataByUrl(url: string) {
  return fetch(url)
    .then((res: any) => res.text())
    .then((json: any) =>
      JSON.parse(json.substring(json.indexOf("{"), json.lastIndexOf("}") + 1))
    );
}

export interface DataSheets {
  header: string;
  items: Item[];
}

export interface Item {
  title: Title;
  content: string;
  description: null | string;
  note: null | string;
  response: null | string;
}

export interface Title {
  title: string;
  type: null | string;
}

export function aggregateData(
  dataSheet: (string | null)[][],
  header: { header: string },
  title: string,
  itemFields: string[],
): DataSheets[] {
  if (!Array.isArray(dataSheet)) return [];

  const groupedResult: any[] = [];
  let currentGroup: any | null = null;

  for (const row of dataSheet) {
    // Si la fila no tiene suficientes columnas, ignorarla
    if (!row || row.length === 0) {
      continue;
    }

    // Detectar el cambio de título (cuando la primera columna coincide con el selector 'title')
    if (row[0] === header.header) {
      // Si ya hay un grupo actual, agregarlo al array final
      if (currentGroup) {
        groupedResult.push(currentGroup);
      }

      // Iniciar un nuevo grupo con el título en la segunda columna (si existe)
      currentGroup = {
        header: row[1] || "", // Asegurarse de que no sea undefined
        items: [],
      };
    } else if (currentGroup) {
      // Si no es un título, procesar la fila como un item
      const item: any = {};
      // Rellenar cada campo según el índice correspondiente
      for (let i = 0; i < itemFields.length; i++) {
        if (i === 0) {
          const titleRow = row[i + 1] || null;
          const typeRow = row[i] || null;
          item[title] = { title: titleRow, type: typeRow };
        }

        item[itemFields[i]!] = row[i + 2] || null; // Asegurarse de no acceder fuera del array
      }
      currentGroup.items.push(item);
    }
  }

  // Asegurarse de agregar el último grupo procesado
  if (currentGroup) {
    groupedResult.push(currentGroup);
  }

  return groupedResult;
}
