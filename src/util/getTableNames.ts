import { ProcedureCallPacket, ResultSetHeader } from "mysql2";
import dbConnection from "../database/connection/dbConnection.js";

const getTableNames = () => {
  const sql = "CALL sp_getTableNames()";

  dbConnection.query<ProcedureCallPacket<ResultSetHeader>>(
    sql,
    (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(results);
    }
  );
};

export default getTableNames;
