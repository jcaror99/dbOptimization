import getTableNames from "./util/getTableNames.js";
const tableNames = async () => {
    try {
        const names = (await getTableNames());
        names.forEach((name) => console.log(name.TABLE_NAME));
    }
    catch (error) {
        console.error("Error fetching table names", error);
    }
};
tableNames();
