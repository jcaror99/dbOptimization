import callProcedure from "./util/callProcedure.js";
import getSentence from "./data/getSentence.js";
import { writeLog, appendLog } from "./util/logFuntions.js";
import objectToString from "./util/objectToString.js";
import dotenv from "dotenv";
dotenv.config();
const logPath = String(process.env.LOG_PATH);
const app = async () => {
    try {
        const currentDateTime = new Date().toISOString();
        const names = (await callProcedure(getSentence("tableNames")));
        writeLog(logPath, `Starting process at: ${currentDateTime}\n`);
        for (const name of names) {
            const analyze = (await callProcedure(getSentence("analyze"), [
                name.TABLE_NAME,
            ]));
            appendLog(logPath, `---- Table: ${name.TABLE_NAME} ----\n`);
            appendLog(logPath, `Analyze process: ${name.TABLE_NAME}\n ${objectToString(analyze)}`);
            const optimize = (await callProcedure(getSentence("optimize"), [
                name.TABLE_NAME,
            ]));
            appendLog(logPath, `Optimized process: ${name.TABLE_NAME}\n ${objectToString(optimize)}`);
        }
    }
    catch (error) {
        console.error("Error fetching table names", error);
    }
};
app();
