create procedure if not exists sp_analyze(in tableName varchar(100))
begin
    set @analyze = concat('ANALYZE TABLE ',tableName);
    prepare stmt from @analyze;
    execute stmt;
    deallocate prepare stmt;
end