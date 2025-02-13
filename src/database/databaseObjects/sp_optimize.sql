create procedure if not exists sp_optimize(in tableName varchar(100))
begin
    set @analyze = concat('ANALYZE TABLE ',tableName);
    prepare stmt from @analyze;
    execute stmt;
    deallocate prepare stmt;

    -- set @sql = concat('OPTIMIZE TABLE ',tableName);
    -- prepare stmt from @sql;
    -- execute stmt;
    -- deallocate prepare stmt;
end