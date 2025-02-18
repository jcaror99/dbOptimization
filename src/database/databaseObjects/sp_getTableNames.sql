DROP PROCEDURE IF EXISTS sp_getTableNames;

CREATE PROCEDURE IF NOT EXISTS sp_getTableNames()
BEGIN
    SELECT 
        table_name
    FROM
        information_schema.tables
    WHERE
        table_schema = 'cimatest';
END;