import { ProcedureCallPacket, RowDataPacket } from "mysql2";
import dbConnection from "../database/connection/dbConnection.js";

const getTableNames = () => {
  const sql = "CALL sp_getTableNames()";

  return new Promise((resolve, reject) => {
    dbConnection.query<ProcedureCallPacket<RowDataPacket[]>>(
      sql,
      (err, results) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }

        const tableNames = results[0] as RowDataPacket[];
        resolve(tableNames);
      }
    );
  });
};

export default getTableNames;
