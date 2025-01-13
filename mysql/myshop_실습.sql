show databases;
use myshop2019;
select database();
show tables;
/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from customer;
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from employee;
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from product;
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_header;
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_detail;
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
select * from customer;
select customer_id, customer_name, city, gender, email, phone from customer;
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
select * from employee;
select employee_name, employee_id, gender, hire_Date, phone from employee;
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select * from customer;
select customer_name, customer_id, gender, city, phone, point 
from customer 
where customer_name ='홍길동';  
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select count(*) from customer;
select customer_name, customer_id, gender, city, phone, point 
from customer
where gender='F';

-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select * from customer;
select customer_name, customer_id, gender, city, phone, point 
from customer
where city='울산';

-- *********************************************************************************  12 /31
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
show databases;
use myshop2019;
select database();
show tables;

-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select * from customer;
select customer_name
	   , customer_id
       , gender
       , city
       , phone
       , point
from customer
where point >= 500000;

-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name
	   , customer_id
       , gender
       , city
       , phone
       , point
from customer
where customer_name like '% %';

-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name
	   , customer_id
       , gender
       , city
       , phone
       , point
from customer
where phone not like '010%';

-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select  customer_name
	   , customer_id
       , gender
       , city
       , phone
       , point 
from customer
where point >= 500000
and city = '서울';

-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , point 
from customer
where point >= 500000
and city not like '서울%';
-- and city != '서울';

-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , point 
from customer
where point >= 400000 
and city='서울'
and gender='m';

-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , point 
from customer
where city in ('강릉','원주');

-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , point 
from customer
where city in ('서울','부산','제주','인천');

-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , point 
from customer
where point between 400000 and 500000;

-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , birth_date
        , point 
from customer
where birth_date between '1990-01-01' and '1990-12-31';

-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , birth_date
        , point 
from customer
where gender = 'F'
and birth_date between '1990-01-01' and '1990-12-31';

-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , birth_date
        , point 
from customer
where birth_date between '1990-01-01' and '1990-12-31'
and city in ('대구','경주')
and gender = 'm';

-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--  단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
select customer_name
		, customer_id
        , gender
        , city
        , phone
        , birth_date
        , point 
        , concat(customer_name, '(' ,customer_id, ')') as alias
from customer
where birth_date between '1990-01-01' and '1990-12-31'
and gender='m';

-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
select * from employee;
select employee_name
		, employee_id
        , gender
        , phone
        , hire_date
from employee
where retire_date is null;

-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
select employee_name
		, employee_id
        , gender
        , phone
        , hire_date
from employee
where gender = 'm'
and retire_date is null;

-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.
select employee_name
		, employee_id
        , gender
        , phone
        , hire_date
        , retire_date
from employee
where retire_date is not null;

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
show tables;
select order_id
		, customer_id
        , employee_id
        , order_date
        , sub_total
        , delivery_fee
        , total_due
from order_header
where order_date between '2019-01-01' and '2019-01-07';

    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
-- 단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
select order_id
		, customer_id
        , employee_id
        , order_date
        , sub_total
        , delivery_fee
        , total_due
from order_header
where order_date between '2019-01-01' and '2019-01-07'
order by total_due desc;

-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.
select order_id
		, customer_id
        , employee_id
        , order_date
        , sub_total
        , delivery_fee
        , total_due
from order_header
where order_date between '2019-01-01' and '2019-01-07'
order by employee_id asc, order_date desc;


-- *********************************************************************************  01 /02
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************

/**
	그룹함수
**/
show databases;
use myshop2019;
select database();
show tables;
/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.
select * from customer;
select format(sum(point),0) from customer;

-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.
select * from customer;
select format(sum(point),0) as point from customer where city='서울';

-- Q03) '서울' 지역 고객의 수를 조회하세요.
select * from customer;
select count(*) from customer where city='서울';

-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
select * from customer;
select format(sum(point),0) as sum, format(avg(point),0) as avg
from customer
where city ='서울';     

-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.
select * from customer;
select format(sum(point),0) as 합
		, format(avg(point),0) as 평균
		, format(max(point),0) as 최대값
		, format(min(point),0) as 최솟값
from customer
where city ='서울';

-- Q06) 남녀별 고객의 수를 조회하세요. *************
select gender, count(*) 
from customer 
group by gender;

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city , concat(count(*),'명') as 고객수  
from customer
group by city
order by city; 
 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city, count(*)
from customer
group by city
having count(*) >=10
order by city;   
   
-- Q09) 남녀별 포인트 합을 조회하세요.
select gender, format(sum(point),0) as point
from customer 
group by gender; 
 
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city
		, sum(point) as point
from customer
group by city
having point is not null
order by city;
    
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
select city
		, format(sum(point),0) as point
from customer
group by city
having sum(point) >=1000000
order by sum(point) desc;

-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
select city
		, format(sum(point),0) as point
from customer
group by city
order by sum(point) desc;   

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select * from customer;
select city as 지역
	  , count(customer_id) as 고객수
      , format(ifnull(sum(point),0),0) as 포인트합계
from customer 
group by city
order by city;

-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city 
		, sum(point) as 포인트합계
        , avg(point) as 포인트평균
from customer
where point is not null
group by city
order by city;


-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
select * 
from customer
where city in ('서울','부산','대구')
group by city, gender;


/** order_header 테이블 사용 **/
 USE MYSHOP2019;
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.
select * from order_header;
select customer_id, format(sum(total_due),0) as total_due
from order_header
WHERE LEFT(ORDER_DATE,7) ='2019-01'
GROUP BY customer_id;

select if(grouping(customer_id), '총합계', ifnull(customer_id, '-')) cid
		,  sum(total_due)
        , avg(total_due)
from order_header
group by customer_id with rollup;

-- Q17) 주문연도별 전체금액 합계, 평균을 조회하세요.
select * from order_header;
select left(order_date,4) as 주문년도 
		, count(*)
        , sum(total_due)
        , avg(total_due)
from order_header
group by left(order_date,4);

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.
select substring(order_date, 1,4) as year
		, substring(order_date, 6,2) as month 
        , sum(total_due) sum
        , avg(total_due) avg
from order_header
where left(order_date,7) between '2019-01' and '2019-06'
group by year, month;

-- Q19) 2018.01 ~ 2018.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.
select substring(order_date, 1,4) as year
		, substring(order_date, 6,2) as month 
        , sum(total_due) sum
        , avg(total_due) avg 
from order_header
where left(order_date,7) between '2018-01' and '2018-06'
group by year, month;

-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.
select  if(grouping(year), '년도별총합계', ifnull(year,'-')) as year 
		, if(grouping(month), '월별총합계', ifnull(month, '-')) as month 
        , count(*) as count
        , sum(total_due) as sum
        , avg(total_due) as avg
from (select substring(order_date, 1, 4) as year 
				, substring(order_date,6,2) as month 
				, total_due
		from order_header) T1
group by year , month with rollup;

-- *********************************************************************************  01 /06
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************

/**
	테이블 조인
*/
SHOW databases;
USE MYSHOP2019;
SELECT DATABASE();
SHOW TABLES;

-- *********************************************************************************
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
SELECT * FROM customer; 
SELECT * FROM EMPLOYEE; 
SELECT * FROM order_header;
-- (1) 오라클 방법 
SELECT B.ORDER_ID, A.CUSTOMER_ID, C.EMPLOYEE_ID, B.ORDER_DATE, B.TOTAL_DUE 
FROM CUSTOMER A, order_header B , EMPLOYEE C
WHERE A.CUSTOMER_ID = B.CUSTOMER_ID
AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000;
-- (2)ANSI 방법
SELECT B.ORDER_ID, A.CUSTOMER_ID, C.EMPLOYEE_ID, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A INNER JOIN ORDER_HEADER B INNER JOIN EMPLOYEE C
ON A.CUSTOMER_ID = B.CUSTOMER_ID AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000; 

-- *********************************************************************************
-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
-- (1) 오라클 방법 
SELECT B.ORDER_ID, A.CUSTOMER_ID, A.CUSTOMER_NAME, C.EMPLOYEE_ID, B.ORDER_DATE, B.TOTAL_DUE 
FROM CUSTOMER A, order_header B , EMPLOYEE C
WHERE A.CUSTOMER_ID = B.CUSTOMER_ID
AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000;
-- (2)ANSI 방법
SELECT B.ORDER_ID, A.CUSTOMER_ID, A.CUSTOMER_NAME, C.EMPLOYEE_ID, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A INNER JOIN ORDER_HEADER B INNER JOIN EMPLOYEE C
ON A.CUSTOMER_ID = B.CUSTOMER_ID AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000; 

-- *********************************************************************************
-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
-- (1) ANSI 
SELECT B.ORDER_ID, A.CUSTOMER_ID, C.EMPLOYEE_ID, C.EMPLOYEE_NAME, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A INNER JOIN ORDER_HEADER B INNER JOIN EMPLOYEE C
ON A.CUSTOMER_ID = B.CUSTOMER_ID AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000; 

-- (2)inner join
select distinct oh.order_id
		, oh.customer_id
        , e.employee_name
		, oh.order_date
		, oh.total_due
        , od.order_qty
from order_header oh, employee e,  order_detail od 
where oh.employee_id = e.employee_id
and oh.order_id = od.order_id
and oh.total_due >= 8500000;
-- *********************************************************************************
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
-- (1) 오라클 방법
SELECT B.ORDER_ID, A.CUSTOMER_ID, A.CUSTOMER_NAME, C.EMPLOYEE_ID, C.EMPLOYEE_NAME, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A , ORDER_HEADER B, EMPLOYEE C 
WHERE A.CUSTOMER_ID = B.CUSTOMER_ID
AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000;
-- (2) ANSI
SELECT B.ORDER_ID, A.CUSTOMER_ID, A.CUSTOMER_NAME, C.EMPLOYEE_ID, C.EMPLOYEE_NAME, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A INNER JOIN ORDER_HEADER B INNER JOIN EMPLOYEE C 
WHERE A.CUSTOMER_ID = B.CUSTOMER_ID
AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000;
-- (3)inner join
select distinct oh.order_id
		, oh.customer_id
        , e.employee_name
		, oh.order_date
		, oh.total_due
        , od.order_qty
        , c.customer_name
from order_header oh, employee e,  order_detail od , customer c
where oh.employee_id = e.employee_id
and oh.order_id = od.order_id
and oh.customer_id = c.customer_id
and oh.total_due >= 8500000;
-- *********************************************************************************
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
SELECT * FROM customer; 
SELECT * FROM EMPLOYEE; 
SELECT * FROM order_header;
-- (1) 오라클 방법
SELECT B.ORDER_ID, A.CUSTOMER_ID, A.CUSTOMER_NAME, C.EMPLOYEE_ID, C.EMPLOYEE_NAME, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A , ORDER_HEADER B, EMPLOYEE C 
WHERE A.CUSTOMER_ID = B.CUSTOMER_ID
AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000
AND A.CITY='서울';

-- (2) ANSI
SELECT B.ORDER_ID, A.CUSTOMER_ID, A.CUSTOMER_NAME, C.EMPLOYEE_ID, C.EMPLOYEE_NAME, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A INNER JOIN ORDER_HEADER B INNER JOIN EMPLOYEE C 
ON A.CUSTOMER_ID = B.CUSTOMER_ID
AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000
AND A.CITY='서울';

-- (3)inner join
select distinct oh.order_id
		, oh.customer_id
        , e.employee_name
		, oh.order_date
		, oh.total_due
        , od.order_qty
        , c.customer_name
from order_header oh, employee e,  order_detail od , customer c
where oh.employee_id = e.employee_id
and oh.order_id = od.order_id
and oh.customer_id = c.customer_id
and oh.total_due >= 8500000
and c.city= '서울';
-- *********************************************************************************
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
-- (1) 오라클 방법
SELECT B.ORDER_ID, A.CUSTOMER_ID, A.CUSTOMER_NAME, C.EMPLOYEE_ID, C.EMPLOYEE_NAME, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A , ORDER_HEADER B, EMPLOYEE C 
WHERE A.CUSTOMER_ID = B.CUSTOMER_ID
AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000
AND A.CITY='서울' 
AND A.GENDER='M';
-- (2) ANSI
SELECT B.ORDER_ID, A.CUSTOMER_ID, A.CUSTOMER_NAME, C.EMPLOYEE_ID, C.EMPLOYEE_NAME, B.ORDER_DATE, B.TOTAL_DUE
FROM CUSTOMER A INNER JOIN ORDER_HEADER B INNER JOIN EMPLOYEE C 
WHERE A.CUSTOMER_ID = B.CUSTOMER_ID
AND B.EMPLOYEE_ID = C.EMPLOYEE_ID
AND B.TOTAL_DUE >= 8500000
AND A.CITY='서울' 
AND A.GENDER='M';
-- (3)inner join
select distinct oh.order_id
		, oh.customer_id
        , e.employee_name
		, oh.order_date
		, oh.total_due
        , od.order_qty
        , c.customer_name
        , c.gender
from order_header oh, employee e,  order_detail od , customer c
where oh.employee_id = e.employee_id
and oh.order_id = od.order_id
and oh.customer_id = c.customer_id
and oh.total_due >= 8500000
and c.city= '서울'
and c.gender ='m';
-- *********************************************************************************
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
-- (1) 오라클 버전
SELECT * FROM PRODUCT; 
SELECT * FROM order_header;
SELECT * FROM ORDER_DETAIL;
SELECT A.ORDER_ID, B.PRODUCT_ID, B.ORDER_QTY, B.UNIT_PRICE, B.LINE_TOTAL
FROM ORDER_HEADER A ,ORDER_DETAIL B
WHERE B.ORDER_ID = A.ORDER_ID
AND B.ORDER_QTY >=30;
-- (2) ANSI
SELECT A.ORDER_ID, B.PRODUCT_ID, B.ORDER_QTY, B.UNIT_PRICE, B.LINE_TOTAL
FROM ORDER_HEADER A INNER JOIN ORDER_DETAIL B
ON B.ORDER_ID = A.ORDER_ID
AND B.ORDER_QTY >=30;
-- (3)inner join

-- *********************************************************************************
-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
-- (1) 오라클 버전
SELECT * FROM PRODUCT; 
SELECT * FROM order_header;
SELECT * FROM ORDER_DETAIL;
SELECT A.ORDER_ID, B.PRODUCT_ID, C.PRODUCT_NAME, B.ORDER_QTY, B.UNIT_PRICE, B.LINE_TOTAL
FROM ORDER_HEADER A ,ORDER_DETAIL B, PRODUCT C
WHERE B.ORDER_ID = A.ORDER_ID
AND B.PRODUCT_ID = C.PRODUCT_ID
AND B.ORDER_QTY >=30;

-- (2) ANSI
SELECT A.ORDER_ID, B.PRODUCT_ID, C.PRODUCT_NAME, B.ORDER_QTY, B.UNIT_PRICE, B.LINE_TOTAL
FROM ORDER_HEADER A INNER JOIN ORDER_DETAIL B INNER JOIN PRODUCT C
ON B.ORDER_ID = A.ORDER_ID
AND B.PRODUCT_ID = C.PRODUCT_ID
AND B.ORDER_QTY >=30;

-- (3)inner join
-- *********************************************************************************
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
SHOW TABLES;
SELECT * FROM PRODUCT; 
SELECT * FROM CATEGORY; 
SELECT * FROM SUB_CATEGORY; 
-- (1) 오라클 버전
SELECT A.PRODUCT_ID A, A.PRODUCT_NAME, B.SUB_CATEGORY_ID 
FROM PRODUCT A, SUB_CATEGORY B 
WHERE A.SUB_CATEGORY_ID = B.SUB_CATEGORY_ID;
-- (2) ANSI
SELECT A.PRODUCT_ID A, A.PRODUCT_NAME, B.SUB_CATEGORY_ID 
FROM PRODUCT A INNER JOIN SUB_CATEGORY B 
ON A.SUB_CATEGORY_ID = B.SUB_CATEGORY_ID;

-- (3)inner join
-- *********************************************************************************
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
-- (1) 오라클 버전
SELECT A.PRODUCT_ID A, A.PRODUCT_NAME, C.CATEGORY_ID, B.SUB_CATEGORY_NAME
FROM PRODUCT A, SUB_CATEGORY B , CATEGORY C 
WHERE A.SUB_CATEGORY_ID = B.SUB_CATEGORY_ID
AND B.CATEGORY_ID = C.CATEGORY_ID;

-- (2) ANSI
SELECT A.PRODUCT_ID A, A.PRODUCT_NAME, C.CATEGORY_ID, B.SUB_CATEGORY_NAME
FROM PRODUCT A INNER JOIN SUB_CATEGORY B INNER JOIN CATEGORY C 
ON A.SUB_CATEGORY_ID = B.SUB_CATEGORY_ID
AND B.CATEGORY_ID = C.CATEGORY_ID;

-- (3)inner join

-- *********************************************************************************
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
-- (1) 오라클
SHOW TABLES;
SELECT * FROM EMPLOYEE;  
SELECT * FROM order_header; -- ORDER_ID
SELECT * FROM order_DETAIL; 
SELECT * FROM PRODUCT; 

SELECT D.PRODUCT_NAME 
FROM EMPLOYEE A, ORDER_HEADER B , ORDER_DETAIL C, PRODUCT D 
WHERE A.EMPLOYEE_ID = B.EMPLOYEE_ID
AND B.ORDER_ID = C.ORDER_ID 
AND C.PRODUCT_ID = D.PRODUCT_ID
AND LEFT(ORDER_DATE,4) ='2019'
AND A.employee_NAME ='다정한';

-- (2) ANSI
SELECT D.PRODUCT_NAME 
FROM EMPLOYEE A INNER JOIN ORDER_HEADER B INNER JOIN ORDER_DETAIL C INNER JOIN PRODUCT D 
ON A.EMPLOYEE_ID = B.EMPLOYEE_ID
AND B.ORDER_ID = C.ORDER_ID 
AND C.PRODUCT_ID = D.PRODUCT_ID
AND LEFT(ORDER_DATE,4) ='2019'
AND A.employee_NAME ='다정한';

-- (3)inner join

-- *********************************************************************************
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
SHOW TABLES;
SELECT * FROM EMPLOYEE; 
SELECT * FROM CUSTOMER; 
SELECT * FROM order_header; -- ORDER_ID
SELECT * FROM order_DETAIL; 
SELECT * FROM PRODUCT; 
-- (1)오라클
SELECT D.CUSTOMER_ID, E.EMPLOYEE_ID, B.ORDER_ID, C.ORDER_DATE
FROM PRODUCT A, ORDER_DETAIL B, ORDER_HEADER C, CUSTOMER D, EMPLOYEE E
WHERE A.PRODUCT_ID = B.PRODUCT_ID
AND B.ORDER_ID =  C.ORDER_ID 
AND C.CUSTOMER_ID = D.CUSTOMER_ID
AND C.EMPLOYEE_ID = E.EMPLOYEE_ID 
AND A.PRODUCT_NAME LIKE '%청소기%'; 

-- (2) ANSI
SELECT D.CUSTOMER_ID, E.EMPLOYEE_ID, B.ORDER_ID, C.ORDER_DATE
FROM  PRODUCT A INNER JOIN ORDER_DETAIL B INNER JOIN ORDER_HEADER C  INNER JOIN CUSTOMER D INNER JOIN  EMPLOYEE E
ON A.PRODUCT_ID = B.PRODUCT_ID 
AND B.ORDER_ID =  C.ORDER_ID 
AND C.CUSTOMER_ID = D.CUSTOMER_ID
AND C.EMPLOYEE_ID = E.EMPLOYEE_ID
AND  A.PRODUCT_NAME LIKE '%청소기%'; 

-- (3)inner join


-- *********************************************************************************  01 /06
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
/**
	서브쿼리
*/
-- Q13) 'mtkim', 'odoh', 'soyoukim', 'winterkim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요. 
show tables; 
select * from customer;
select * from order_header;
-- 일반 쿼리 
select order_id, customer_id, order_date, total_due
from order_header 
where customer_id in ('mtkim','odoh','soyoukim','winterkim');
-- 서브쿼리  
select order_id, customer_id, order_date, total_due
from order_header 
where customer_id in (select customer_id from customer where customer_id in ('mtkim','odoh','soyoukim','winterkim')); 
 
-- Q14) '전주' 지역 고객의 아이디를 조회하세요.    
select customer_id from customer where city = '전주';
-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
select order_id, customer_id, order_date, total_due
from order_header 
where customer_id in (select customer_id
					   from customer 
                       where customer_id in ('mtkim','odoh','soyoukim','winterkim')
                       and city ='전주');

-- Q16) 고객의 포인트 최댓값을 조회하세요.
select max(point) from customer;
select customer_id from customer group by max(point);
-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
select customer_name
		,customer_id
        , register_date
        , point
from customer
where point = (select max(point) from customer);

-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
select customer_name, customer_id, register_date, point
from customer
where point > (select point from customer where customer_name='홍길동');

-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
select row_number() over(order by customer_name) as no
		, customer_name
        , customer_id 
        , city
        , register_date
        , point
from customer 
where city = (select city from customer where customer_name='홍길동');

-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.
select row_number() over(order by customer_name) as NO
		, customer_name
		, customer_id
        , register_date
        , point 
from customer 
where point > (select point from customer where customer_name='홍길동');
    

-- *********************************************************************
-- *********************************************************************
-- *********************************************************************

-- 2016 ~ 2019년도 까지 주문한 고객의 아이디, 고객명, 주문번호, 주문총금액을 조회
SHOW TABLES;
SELECT COUNT(*) FROM ORDER_HEADER; -- 903
SELECT COUNT(*) FROM ORDER_HEADER2016; -- 596
SELECT COUNT(*) FROM ORDER_HEADER2017; -- 561

-- UNION ALL
SELECT T1.CUSTOMER_ID, C.CUSTOMER_NAME, T1.ORDER_ID, T1.TOTAL_DUE
FROM 	CUSTOMER C,
		(	SELECT * FROM ORDER_HEADER
			UNION ALL
			SELECT * FROM ORDER_HEADER2016
			UNION ALL
			SELECT * FROM ORDER_HEADER2017) T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID  ;

-- 년도별 주문건수, 총판매합계, 년도 기준 오름차순 정렬
-- 년도 : YEAR, 건수: COUNT, 합계: SUM
-- '년도', '건', 3자리구분 '원'
SELECT 	CONCAT(LEFT(ORDER_DATE,4), '년도') AS YEAR, 
		CONCAT(COUNT(ORDER_ID), '건') AS COUNT, 
        CONCAT(FORMAT(SUM(TOTAL_DUE), 0) , '원') AS SUM
FROM 	CUSTOMER C,
		(	SELECT * FROM ORDER_HEADER
			UNION ALL
			SELECT * FROM ORDER_HEADER2016
			UNION ALL
			SELECT * FROM ORDER_HEADER2017) T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID  
GROUP BY YEAR
ORDER BY YEAR ASC;

-- VIEW를 이용하여 ORDER_HEADER_TOTAL (2016 ~ 2019)
SELECT * 
FROM INFORMATION_SCHEMA.VIEWS
WHERE TABLE_SCHEMA = 'MYSHOP2019';	

-- 
CREATE VIEW ORDER_HEADER_TOTAL
AS
SELECT * FROM ORDER_HEADER
UNION ALL
SELECT * FROM ORDER_HEADER2016
UNION ALL
SELECT * FROM ORDER_HEADER2017 ;

--
SELECT 	CONCAT(LEFT(ORDER_DATE,4), '년도') AS YEAR, 
		CONCAT(COUNT(ORDER_ID), '건') AS COUNT, 
        CONCAT(FORMAT(SUM(TOTAL_DUE), 0) , '원') AS SUM
FROM 	CUSTOMER C,
		ORDER_HEADER_TOTAL T1
WHERE C.CUSTOMER_ID = T1.CUSTOMER_ID  
GROUP BY YEAR
ORDER BY YEAR ASC;

--
-- 2016 ~ 2019 : ORDER_HEADER_TOTAL (VIEW)
-- 2016 ~ 2019 DETAIL : ORDER_DETAIL_TOTAL (VIEW)
SELECT COUNT(*) FROM ORDER_DETAIL;  -- 2425
SELECT COUNT(*) FROM ORDER_DETAIL2016;  -- 1582
SELECT COUNT(*) FROM ORDER_DETAIL2017;  -- 1479

SELECT COUNT(*)  -- 5486
FROM (
	SELECT * FROM ORDER_DETAIL
    UNION ALL
    SELECT * FROM ORDER_DETAIL2016
    UNION ALL
    SELECT * FROM ORDER_DETAIL2017
) T;

CREATE VIEW ORDER_DETAIL_TOTAL
AS
	SELECT * FROM ORDER_DETAIL
	UNION ALL
	SELECT * FROM ORDER_DETAIL2016
	UNION ALL
	SELECT * FROM ORDER_DETAIL2017 ;

SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA = 'MYSHOP2019';   
SELECT COUNT(*) FROM ORDER_DETAIL_TOTAL; 

--
SELECT 	LEFT(ORDER_DATE, 4) AS YEAR, 
		SUBSTRING(ORDER_DATE,6,2) AS MONTH,
        COUNT(ORDER_ID)
FROM (SELECT  E.EMPLOYEE_NAME,
			OH.ORDER_DATE,
			P.PRODUCT_NAME, 
			OH.ORDER_ID,
			OD.ORDER_DETAIL_ID
		FROM EMPLOYEE E, ORDER_HEADER_TOTAL OH, ORDER_DETAIL_TOTAL OD, PRODUCT P
		WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
			AND OH.ORDER_ID = OD.ORDER_ID
			AND OD.PRODUCT_ID = P.PRODUCT_ID
			) T1
GROUP BY LEFT(ORDER_DATE, 4), SUBSTRING(ORDER_DATE,6,2)
ORDER BY YEAR ASC ;   

-- 카테고리 활용 : 서브쿼리
SELECT * FROM CATEGORY;

-- 대분류로 '가전제품' 선택 후 소분류 값 가져오기
SELECT SUB_CATEGORY_NAME
	FROM SUB_CATEGORY
    WHERE CATEGORY_ID IN (SELECT CATEGORY_ID FROM CATEGORY 
								WHERE CATEGORY_NAME = '가전제품');

-- 소분류에서 '대형'을 선택 한 후 상품명 가져오기
SELECT PRODUCT_NAME
	FROM PRODUCT
    WHERE SUB_CATEGORY_ID IN (SELECT SUB_CATEGORY_ID 
								FROM SUB_CATEGORY WHERE SUB_CATEGORY_NAME = '소형');

    
 






