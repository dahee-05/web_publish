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
select count(id) as result from shoppy_member where id='test';



























































