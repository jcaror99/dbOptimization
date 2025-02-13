INSERT into users (username,password,email)

with recursive records (n) as (
    select 1
    union all
    select n + 1 from records where n < 1000
)

select concat('username ',n), concat('password_',n),concat('username',n,'@email.com') from records;

select * from users