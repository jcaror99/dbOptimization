const getSentence = (code) => {
    const sentences = {
        tableNames: "sp_getTableNames()",
        analyze: "sp_analyze(?)",
        optimize: "sp_optimize(?)",
    };
    return sentences[code];
};
export default getSentence;
