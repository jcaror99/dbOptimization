CREATE PROCEDURE IF NOT EXISTS sp_getTableNames()
BEGIN
    SELECT 
        TABLE_NAME
    FROM
        information_schema.tables
    WHERE
        table_schema = 'rentalApp';
END;