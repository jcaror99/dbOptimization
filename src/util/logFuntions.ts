import { writeFile, appendFile } from "node:fs/promises";

export const writeLog = (path: string, message: string): void => {
  writeFile(path, `${message}\n`, { flag: "w" });
};

export const appendLog = (path: string, message: string): void => {
  appendFile(path, `${message}\n`, { flag: "a" });
};
