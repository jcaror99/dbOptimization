import { Object } from "../types/definitions";

const getSentence = (code: string) => {
  const sentences: Object = {
    tableNames: "sp_getTableNames()",
    analyze: "sp_analyze(?)",
    optimize: "sp_optimize(?)",
  };
  return sentences[code];
};

export default getSentence;
