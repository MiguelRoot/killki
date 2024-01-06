import type { GoogleSheets } from "../interfaces/googleSheets";

export function converObjectToArray(datos: GoogleSheets | null, columnas: string[]): (string | null)[][] | null {
    // Verificar si el objeto de datos es válido
    if (!datos || !datos.table || !datos.table.cols || !datos.table.rows) {
      return null;
    }
  
    // Obtener índices de las columnas especificadas
    const columnIndexes = columnas.map((columna) => {
      const index = datos.table.cols.findIndex((col) => col.id === columna);
      return index !== -1 ? index : null;
    });
  
    // Verificar si todas las columnas especificadas existen
    if (columnIndexes.some((index) => index === null)) {
      return null;
    }
  
    // Obtener datos de las columnas especificadas
    const datosColumnas = datos.table.rows.map((fila) => {
      const valores = columnIndexes.map((index) => {
        return fila.c[index!]?.v ?? null;
      });
  
      return valores;
    });
  
    return datosColumnas;
  }