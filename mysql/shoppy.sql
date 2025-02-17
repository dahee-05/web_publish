/*
 * Shoppy 테이블 정의
*/
show databases;
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
    UPLOAD_FILE		json,
    SOURCE_FILE 	json,
    PDATE			DATETIME
);
DESC SHOPPY_PRODUCT;
SELECT * FROM SHOPPY_PRODUCT;
-- #############################################
drop table shoppy_product;
set sql_safe_updates = 0;
delete from shoppy_product;
commit;
select * from shoppy_product;
-- #############################################
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
-- #############################################
select * from shoppy_product;

select pid,
           pname as name,
           price,
           description as info,
           concat('http://localhost:9000/', upload_file->>'$[0]') as image,
           source_file,
           pdate
    from shoppy_product;

-- 배열객체
-- http://localhost:9000/["upload_files\\1739163151529-555526519-1.webp", "upload_files\\1739163151529-386236795-2.webp", "upload_files\\1739163151530-387138553-3.webp", "upload_files\\1739163151531-449222022-4.webp", "upload_files\\1739163151532-935363650-5.webp", "upload_files\\1739163151533-484533534-6.webp", "upload_files\\1739163151534-745671890-7.webp"]
-- http://localhost:9000\upload_files\\1739163151529-555526519-1.webp

select * from shoppy_product;
select pid, 
	   pname,
       price, 
       description,
       upload_file as uploadFile,
       source_file as sourceFile, 
       pdate,
       concat('http://localhost:9000/', upload_file->>'$[0]') as image,
       json_array(
			concat('http://localhost:9000/', upload_file->>'$[0]'),
            concat('http://localhost:9000/', upload_file->>'$[1]'),
            concat('http://localhost:9000/', upload_file->>'$[2]')
       ) as imgList, 
       json_arrayagg(
			concat('http://localhost:9000/', jt.filename)
       ) as detailImgList
from shoppy_product
	 , json_table( shoppy_product.upload_file, '$[*]' columns(filename varchar(100) path '$')) as jt
where pid=1
group by pid;
-- json_array() : 인덱스 번지의 이미지를 가져와서 배열 객체로 생성하는 함수
-- json_arrayagg :  jt(json table) --> for문과 같은 것 
-- > json_table(테이블.컬럼명(배열),매핑데이터 columns(컬럼 생성 후 리턴) ) 
-- > '$[*]': 전체의 데이터를 돌림
-- >  path '$' : upload_file의 값을 path '$'에 넣어줌
-- ["http://localhost:9000/upload_files\\1739239092967-685133621-1.jpg",   
--  "http://localhost:9000/upload_files\\1739239092968-426875595-2.jpg", 
--  "http://localhost:9000/upload_files\\1739239092970-369461848-3.jpg", ...]

update shoppy_product set pid=6 where pid=7;

select pid,
	   pname,
	   price,
       description,
       upload_file, 
       concat('http://localhost:9000/', upload_file->>'$[0]') as image, 
       json_arrayagg(
			concat('http://localhost:9000/', jt.filename)
       ) as imageList
from shoppy_product
	 , json_table(shoppy_product.upload_file, '$[*]' columns(filename varchar(100) path '$')) as jt
where pid in(1,3) 
group by pid;


select pid,
	   pname,
	   price,
       description,
       upload_file, 
       concat('http://localhost:9000/', upload_file->>'$[0]') as image
from shoppy_product
where pid in(?);

/*******************************
02.13 - 장바구니 테이블 생성
*******************************/
select * from shoppy_member;
select * from shoppy_product;
desc shoppy_member;
desc shoppy_product;
-- 어떤 회원이(pk:id) 어떤 상품을(pk:pid) 장바구니에 넣었는지 명확, 간단!
drop table SHOPPY_CART;
-- shoppy_cart 
-- 컬럼 리스트 : cid(pk), id(fk: 참조키), pid(fk: 참조키), qty, size, cdate 
CREATE TABLE SHOPPY_CART(
	CID 	INT 		PRIMARY KEY  	AUTO_INCREMENT ,
    SIZE 	VARCHAR(10) NOT NULL,
    QTY 	INT 		NOT NULL,
    CDATE 	DATETIME,  
    ID  	VARCHAR(30) NOT NULL ,
    PID 	INT 		NOT NULL,
    CONSTRAINT FK_ID_SHOPPY_MEMBER_ID FOREIGN KEY(ID)
				REFERENCES SHOPPY_MEMBER(ID),
	CONSTRAINT FK_PID_SHOPPY_PRODUCT_PID FOREIGN KEY(PID)
				REFERENCES SHOPPY_PRODUCT(PID)
);
SHOW TABLES;
DESC SHOPPY_CART;
SELECT * FROM SHOPPY_CART;
SELECT * FROM SHOPPY_member;
/*******************************
02.14 - 장바구니 2
*******************************/
truncate table shoppy_cart; -- 기존 데이터 모두 삭제 / 복구 불가능
SELECT * FROM SHOPPY_CART;
SELECT * FROM SHOPPY_member;
insert into shoppy_cart(size, qty,cdate, id, pid)
values('XS', 2, now(), 'test2',3);

-- shoppy_cart, shoppy_member, shoppy_product 조회
  select sc.cid,
		sc.size,
		sc.qty, 
        sm.id,
		sm.zipcode,
		sm.address,
		sp.pid,
		sp.pname,
		sp.price, 
		sp.description as info,
		concat('http://localhost:9000/', sp.upload_file->>'$[0]') as image
from shoppy_cart sc, shoppy_member sm,  shoppy_product sp
where sc.id = sm.id 
and sc.pid = sp.pid
and sm.id = 'test2';
/*******************************
02.17 - 장바구니
*******************************/
truncate table shoppy_cart; -- 기존 데이터 모두 삭제 / 복구 불가능
SELECT * FROM SHOPPY_CART;

select * from shoppy_cart
where id='test2';


















































