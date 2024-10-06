export const getSheetData = async (getUrl: string) => {
  const response = await fetch(getUrl)
    .then((res: any) => res.text())
    .then((json: any) =>
      JSON.parse(json.substring(json.indexOf("{"), json.lastIndexOf("}") + 1))
    );
  return response;
};

export const getUrlSheets = (id: string, gid: number) => {
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json&tq&gid=${gid}`;
};
