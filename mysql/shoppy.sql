/*
 * Shoppy 테이블 정의
*/
use hrdb2019;
select database();
show tables;
-- shoppy로 시작하는 모든 테이블 겸색
select * from information_schema.tables
where table_name like 'shoppy%'; 

-- 1.SHOPPY_MEMBER 테이블 생성 
create table shoppy_member(
	ID 			VARCHAR(30) primary KEY,
    PWD 		VARCHAR(50) NOT NULL,
    NAME 		VARCHAR(10) NOT NULL,
    PHONE 		CHAR(13) 	NOT NULL,
    EMAILNAME 	VARCHAR(20) NOT NULL,
    EMAILDOMAIN VARCHAR(20) NOT NULL,
    ZIPCODE 	CHAR(5),
    ADDRESS		VARCHAR(80),
    MDATE 		DATETIME
);

DESC SHOPPY_MEMBER;
SELECT * FROM SHOPPY_MEMBER;

-- 'test' 중복체크 : 결과를 count 함수로 반환 
select count(id) as result 
from shoppy_member 
where id='test1' 
and pwd ='1111';

select count(*) as result_rows
    from shoppy_member
    where id ='test'
    and pwd ='1';

-- SHOPPY PRODUCT 
select * from information_schema.tables
where table_name like 'shoppy%'; 

CREATE TABLE shoppy_product(
	PID    INT          PRIMARY KEY   AUTO_INCREMENT,
    PNAME  VARCHAR(50)  NOT NULL,
    PRICE  INT,
    DESCRIPTION  	VARCHAR(200),
    UPLOAD_FILE		VARCHAR(100),
    SOURCE_FILE 	VARCHAR(100),
    PDATE			DATETIME
);
DESC SHOPPY_PRODUCT;
SELECT * FROM SHOPPY_PRODUCT;

select * from shoppy_product;

drop table shoppy_product;


select pid,
           pname as name,
           price,
           description as info,
           concat('http://localhost:9000/', upload_file) as image,
           source_file,
           pdate
    from shoppy_product;
    
update shoppy_product 
set upload_file = 'http://localhost:9000/upload_files/1738909427837-71511367-4.webp'
where pid='6';

select * from shoppy_product;
















































