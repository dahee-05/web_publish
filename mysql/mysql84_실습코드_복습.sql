/*
	SQL(Structured Query Language) : 데이터 베이스에서 사용하는 구조화된 언어
	--> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어
	
    (1) DDL(Data Definition Language) : 데이터 정의어
		: 데이터를 저장하기 위한 공간(테이블)을 생성하고 관리(생성, 수정, 삭제)하는 논리적인 언어
        : CREATE, ALTER, TRUNCATE, DROP 
        : CREATE(데이터를 저장하기 위한 공간)
    (2) DML(Data Manipulation Language) : 데이터 조작어
		: 데이터를 CRUD 작업을 통해 수행하는 언어  
        : INSERT, SELECT, UPDATE, DELETE
        : DML에 의한 데이터 조작은 영구적이 아니기 때문에 rollback으로 되돌릴 수 있다.
        : Target 테이블을 메모리 버퍼 위에 올려두고 수행하기 때문에 실시간으로 테이블에 반영 x 
        -> COMMIT 명령어를 통해 Transaction을 종료해야 해당 변경사항이 테이블에 적용됨
    (3) DCL(Data Control Language) : 데이터 제어어
		: 데이터에 접근하는 권한을 제어하는 언어
        : GRANT(부여), DEVOKE(해제)
    (4) TCL(Transaction Control Language) : 데이터 트랜젝션 제어어 
		: 데이터 베이스의 작업 처리 단위인 트랜잭션을 관리하는 언어
        : commit(완료), rollbakc(되돌리기), savapoint(작업구간별 저장)... 
*/
/*
	show databases; 데이터베이스 선택 및 조회 
    use [선택한 데이터베이스명] -- 사용할 데이터 베이스 선택
    select database() -- 데티터베이스 선택
    show tables; -- 데이터베이스에 저장된 데이터 전체 조회    
*/
show databases; -- mysql에서 사용가능한 모든 데이터 베이스 목록을 표시
use hrdb2019;  -- 현재 세션에서 사용할 데이터베이스를 선택
select database(); -- 현재 연결된 세션에서 사용 중인 데이터 베이스의 이름을 반환
show tables;

-- *******************************************
show databases;
use hrdb2019;
select database();
show tables;
-- *******************************************
select * from employee;
select * from department;
select * from unit;
select * from vacation;

/*
	테이블 구조 확인 : DESC(DESCRIBE)
    형식 - DESC [테이블명];
*/
show tables;
desc employee;
desc department;
desc unit;
desc vacation;

/*
	테이블 단순 조회 : select
    형식 - select [컬럼리스트] from [테이블명]; 
		  select [*(전체 컬럼리스트)] from [테이블명];
*/

-- #############################################

show tables;
-- 사원 테이블에서 사원 아이디, 사원명, 성별, 입사일 조회
select * from employee;
select emp_id, emp_name, gender, hire_date from employee;
-- 사원 테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉 조회
select emp_name, dept_id, hire_date, phone, salary from employee;

-- 부서 테이블 모든 컬럼 조회
select * from department;

-- [조회한 컬럼명을 ALIAS(별칭)으로 출력]
-- 형식 : select [컬럼명 as '별칭',컬럼명 as '별칭'] from 테이블명
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉으로 조회 컬럼을 출력 
select emp_id as 아이디, emp_name as 성명, hire_date as 입사일, dept_id as 부서명, salary as 연봉 
from employee;

-- 사원테이블에서 사원명, 부서, 연봉을 조회
select emp_name as 사원명, dept_id as 부서 , salary as 연봉 from employee;

-- 기존 컬럼을 이용하여 가상의 컬럼 생성- 연봉 10% 인센티브 컬럼(논리적으로 존재x)
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
select emp_name as 사원명, dept_id as 부서 , salary as 연봉, salary*0.1 as 인센티브 from employee;

-- 현재 날짜를 조회, 컬럼명을 DATE로 변경
select curdate();
select curdate() as date; 
/**************************************
 테이블 조회(단순) : SELECT ~FROM ~WHRER
 - 조건절을 추가하여 다양한 쿼리를 실행 
       SELECT [컬럼리스트, *] FROM [테이블명] WHERE[조건절];
**************************************/
-- 사원테이블에서 SYS 부서에 근무하는 모든 사원을 조회
select * from employee where dept_id='sys';

-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회
select * from employee where emp_name='정주고';

-- 사원테이블에서 사원아이디가 S0011 인 사원의 정보를 모두 조회 
select * from employee where emp_id='s0011';

-- 사원테이블에서 연봉이 5800인 사원의 모든 정보 조회 
select * from employee where salary=5800;

-- 사원 테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회 
select emp_id, emp_name, hire_date, email from employee where gender='F';

-- 사원테이블에서 부서명이 sys인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원번호' 별칭 사용
select emp_id 아이디, emp_name, hire_date from employee where dept_id='sys';

-- WHERE절 조건에 별칭으로 조회가 가능할까요??  
-- 불가능 : 별칭은 DB의 값을 보여주기 직전에 출력되는 값의 별칭을 지정해주는 것, DB에는 저장되어 있는 컬럼값으로 조회해야함
-- ok

-- 사원 테이블에서 마케팅 부서의 모든 사원 정보를 조회
select * from employee where dept_id='mkt';

-- 입사일이 2014년 8월 1일인 모든 사원 조회 
-- date 타입은 표현은 문자처럼, 처리는 숫자
select * from employee where hire_date='2014-08-01';

-- 연봉이 5000인 사원 정보 조회 
select * from employee where salary=5000;

-- NULL 타입 
-- 숫자 컬럼에서는 LIMIT(정해지지 않은 값)으로 가장 큰 값을 의미함
-- 문자에서는 지정되지 않은 가장 작은 값
-- 사원 테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
-- NULL 은 논리적인 의미를 가지므로 IS 키워드로 비교연산을 수행
select * from employee;
select * from employee where eng_name is null;
 
-- 연봉이 정해지지 않은 모든 사원 조회
select * from employee where salary is null;

-- IFNULL() : NULL값을 다른 값으로 대체하는 함수
-- 형식 : ifnull(null포함 컬럼명, 대체할 값);
-- 컬럼리스트에서 호출 / SELECT IFNULL() FROM EMPLOYEE;


-- ENG_NAME이 NULL인 사람들은 'SMITH' 이름으로 변경 후 조회
select  EMP_ID, EMP_NAME, ifnull(eng_name, 'SMITH') AS ENG_NAME from employee where eng_name is null;


-- 모든 사원의 아이디, 사원명, 입사일, 퇴사일 조회
-- 현재 근무중인 사원인 퇴사일에 현재 날짜를 출력 
SELECT emp_id, emp_name, hire_date, ifnull(retire_date, curdate()) as retire_date 
from employee
where retire_date is null;




























