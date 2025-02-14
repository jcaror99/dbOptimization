import dbConnection from "../database/connection/dbConnection.js";
const getTableNames = () => {
    const sql = "CALL sp_getTableNames()";
    return new Promise((resolve, reject) => {
        dbConnection.query(sql, (err, results) => {
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
export default getTableNames;
