import { writeFile, appendFile } from "node:fs/promises";
export const writeLog = (path, message) => {
    writeFile(path, `${message}\n`, { flag: "w" });
};
export const appendLog = (path, message) => {
    appendFile(path, `${message}\n`, { flag: "a" });
};
