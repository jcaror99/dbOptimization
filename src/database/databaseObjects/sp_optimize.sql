CREATE PROCEDURE sp_optimize(IN tableName VARCHAR(100))
BEGIN
    SET @optimize = CONCAT('OPTIMIZE TABLE ', tableName);
    PREPARE stmt FROM @optimize;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END;