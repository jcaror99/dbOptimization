import { ProcedureCallPacket, RowDataPacket } from "mysql2";
import dbConnection from "../database/connection/dbConnection.js";

const callProcedure = (qry: string, params: string[] = []) => {
  const sql = `CALL ${qry}`;

  return new Promise((resolve, reject) => {
    dbConnection.query<ProcedureCallPacket<RowDataPacket[]>>(
      sql,
      params,
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

export default callProcedure;
