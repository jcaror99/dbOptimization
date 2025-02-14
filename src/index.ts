import getTableNames from "./util/getTableNames.js";
import { TableName } from "./types/definitions.js";

const tableNames = async () => {
  try {
    const names = (await getTableNames()) as TableName[];
    names.forEach((name) => console.log(name.TABLE_NAME));
  } catch (error) {
    console.error("Error fetching table names", error);
  }
};
tableNames();
