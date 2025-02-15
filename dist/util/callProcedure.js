import dbConnection from "../database/connection/dbConnection.js";
const callProcedure = (qry, params = []) => {
    const sql = `CALL ${qry}`;
    return new Promise((resolve, reject) => {
        dbConnection.query(sql, params, (err, results) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            const tableNames = results[0];
            resolve(tableNames);
        });
    });
};
export default callProcedure;
