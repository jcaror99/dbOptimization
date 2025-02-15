import callProcedure from "./util/callProcedure.js";
import getSentence from "./data/getSentence.js";
const app = async () => {
    try {
        const names = (await callProcedure(getSentence("tableNames")));
        for (const name of names) {
            const analyze = await callProcedure(getSentence("analyze"), [
                name.TABLE_NAME,
            ]);
            console.log(`Analyzed table: ${name.TABLE_NAME}`, analyze);
            const optimize = await callProcedure(getSentence("optimize"), [
                name.TABLE_NAME,
            ]);
            console.log(`Optimized table: ${name.TABLE_NAME}`, optimize);
        }
    }
    catch (error) {
        console.error("Error fetching table names", error);
    }
};
app();
