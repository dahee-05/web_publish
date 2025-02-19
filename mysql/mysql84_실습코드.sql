/*
	데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다. 
    
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
select * from employee;
select * from department;
select * from unit;
select * from vacation;

/*
	테이블 구조 확인 : DESC(DESCRIBE)
    형식 - DESC [테이블명];
*/
show tables;
desc department;
desc employee;
desc unit;
desc vacation;

/*
	테이블 단순 조회 : select
    형식 - select [컬럼리스트] from [테이블명]; 
		  select [*(전체 컬럼리스트)] from [테이블명];
*/
show tables;
desc employee;
select emp_id, emp_name from employee;
select * from employee;
-- #############################################

show tables;
-- 사원 테이블에서 사원 아이디, 사원명, 성별, 입사일 조회
select * from employee;
select emp_id, emp_name, gender, hire_date from employee;

-- 사원 테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉 조회
select * from employee;
select emp_name, dept_id, hire_date, phone, salary  from employee;

-- 부서 테이블 모든 컬럼 조회
select * from department;

-- [조회한 컬럼명을 ALIAS(별칭)으로 출력]
-- 형식 : select [컬럼명 as '별칭',컬럼명 as '별칭'] from 테이블명
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 조회 컬럼을 출력 
select * from employee;

select emp_id as '아이디', emp_name as '성명', hire_date as '입사일' , dept_id as '부서명' , salary as '연봉' 
from employee;

select emp_id 아이디, emp_name 성명, hire_date 입사일 , dept_id 부서명 , salary 연봉 
from employee;

-- 사원테이블에서 사원명, 부서, 연봉을 조회
select emp_name 사원명, dept_id 부서, salary 연봉 from employee;

-- 기존 컬럼을 이용하여 가상의 컬럼 생성- 연봉 10% 인센티브 컬럼(논리적으로 존재x)
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
desc employee;
select emp_id 아이디, emp_name 성명, hire_date 입사일 , dept_id 부서명 , salary 연봉, salary*0.1 인센티브 
from employee;

-- 현재 날짜를 조회, 컬럼명을 DATE로 변경
select curdate() DATE;

/**************************************
 테이블 조회(단순) : SELECT ~FROM ~WHRER
 - 조건절을 추가하여 다양한 쿼리를 실행 
       SELECT [컬럼리스트, *] FROM [테이블명] WHERE[조건절];
**************************************/
-- 사원테이블에서 SYS 부서에 근무하는 모든 사원을 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'SYS';

-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회
SELECT * FROM EMPLOYEE where EMP_NAME='정주고';

-- 사원테이블에서 사원아이디가 S0011 인 사원의 정보를 모두 조회 
SELECT * FROM EMPLOYEE WHERE EMP_ID = 'S0011'; 
-- 사원테이블에서 연봉이 5800인 사원의 모든 정보 조회 
SELECT * FROM EMPLOYEE WHERE SALARY = 5800;

-- 사원 테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회 
SELECT * FROM EMPLOYEE;
SELECT emp_id, emp_name, hire_date, email FROM EMPLOYEE WHERE GENDER='F';

-- 사원테이블에서 부서명이 sys인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원번호' 별칭 사용
select emp_id as 사원번호 , emp_name, hire_date from employee where dept_id ='sys';

-- WHERE절 조건에 별칭으로 조회가 가능할까요??  
-- 불가능 : 별칭은 DB의 값을 보여주기 직전에 출력되는 값의 별칭을 지정해주는 것, DB에는 저장되어 있는 컬럼값으로 조회해야함
select emp_id as 사원번호 , emp_name, hire_date, DEPT_ID '부서 번호' 
from employee 
where dept_id ='sys';
-- where '부서 번호' ='sys';

-- 사원 테이블에서 마케팅 부서의 모든 사원 정보를 조회
SELECT * FROM EMPLOYEE;
SELECT * FROM EMPLOYEE WHERE DEPT_ID='MKT';

-- 입사일이 2014년 8월 1일인 모든 사원 조회 
SELECT * FROM EMPLOYEE;
SELECT * FROM EMPLOYEE WHERE HIRE_DATE='2014-08-01'; -- date 타입은 표현은 문자처럼, 처리는 숫자

-- 연봉이 5000인 사원 정보 조회 
SELECT * FROM EMPLOYEE WHERE SALARY= 5000;

-- NULL 타입 
-- 숫자 컬럼에서는 LIMIT(정해지지 않은 값)으로 가장 큰 값을 의미함
-- 문자에서는 지정되지 않은 가장 작은 값
-- 사원 테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
-- NULL 은 논리적인 의미를 가지므로 IS 키워드로 비교연산을 수행
SELECT * FROM EMPLOYEE ;
SELECT * FROM EMPLOYEE WHERE ENG_NAME IS NULL;
 
-- 연봉이 정해지지 않은 모든 사원 조회
SELECT * FROM EMPLOYEE WHERE SALARY IS NULL;

-- IFNULL() : NULL값을 다른 값으로 대체하는 함수
-- 형식 : ifnull(null포함 컬럼명, 대체할 값);
-- 컬럼리스트에서 호출 / SELECT IFNULL() FROM EMPLOYEE;
SELECT * FROM EMPLOYEE;
SELECT emp_name, salary, ifnull(salary, 0) AS SALARY2 FROM EMPLOYEE;

-- ENG_NAME이 NULL인 사람들은 'SMITH' 이름으로 변경 후 조회
SELECT EMP_ID, EMP_NAME, IFNULL(ENG_NAME, 'SMITH'), HIRE_DATE FROM EMPLOYEE WHERE ENG_NAME IS NULL;
SELECT IF(ISNULL(ENG_NAME), 'SMITH', ENG_NAME) AS ENG_NAME, EMP_NAME
FROM EMPLOYEE WHERE ENG_NAME IS NULL;

-- 모든 사원의 아이디, 사원명, 입사일, 퇴사일 조회
-- 현재 근무중인 사원인 퇴사일에 현재 날짜를 출력 
SELECT EMP_ID, EMP_NAME, HIRE_DATE, IFNULL(RETIRE_DATE, CURDATE()) AS RETIRE_DATE
FROM EMPLOYEE 
WHERE RETIRE_DATE IS NULL;

-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************

/*************************      12/30
 *  DISTINCT : 데이터의 중복을 배제
 * 형식 - SELECT [DISTINCT 컬럼리스트(중복데이터포함)] FROM ~~
*************************/
-- 사원테이블의 부서 컬럼을 조회
SELECT * FROM EMPLOYEE;
select dept_id from employee;
select distinct emp_id, dept_id  from employee; -- 두개의 컬럼이 중복이 되었을때만 배제 ***

/*************************
 * ORDER BY  : 데이터의 정렬(오름차순, 내림차순)
 * 형식 - SELECT * FROM ~ WHERE ~ ORDER BY 컬럼리스트 [ASC/DESC]
 * ASC는 생략이 가능, DEFAULT 값
*************************/
-- 사원 아이디, 사원명, 입사일, 연봉 조회
-- 사원아이디 기준 오름차순으로 정렬
 SELECT * FROM EMPLOYEE;
SELECT emp_id, emp_name, salary 
FROM EMPLOYEE 
order by EMP_ID ASC; -- 출력전 ORDER BY 가 가장 마지막에 실행, SELECT할 컬럼명에 존재해야함. 
SELECT emp_id, emp_name, salary FROM EMPLOYEE order by EMP_ID DESC;

-- 사원 아이디 기준 오름차순, 입사일 기준 내림차순
SELECT EMP_ID, HIRE_DATE FROM EMPLOYEE
order by EMP_ID, HIRE_DATE DESC;

-- 급여를 기준으로 오름차순 정렬 후 조회
SELECT emp_id, emp_name, salary  FROM EMPLOYEE order by SALARY;

-- ENG_NAME이 정해지지 않은 사원들은 최근 입사한 순서대로 조회
SELECT * FROM EMPLOYEE WHERE ENG_NAME IS NULL ORDER BY HIRE_DATE DESC;

-- 퇴직한 사원들을 급여가 높은 순으로 조회 
SELECT * FROM EMPLOYEE WHERE RETIRE_DATE IS NOT NULL ORDER BY SALARY DESC;

-- 정보 시스템 부서의 사원들 중 급여가 높은 순으로 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID ='SYS' ORDER BY SALARY DESC;

-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID ='SYS' ORDER BY HIRE_DATE DESC, SALARY ASC;


/*************************
 * 특정 범위의 데이터 검색 : WHERE [조건절 + 비교연산자]
 * 형식 - SELECT * FROM ~ WHERE 컬럼명 [비교연산자 조건절]
*************************/
-- 사원중에서 연봉이 5000 이상인 사원들을 조회
SELECT * FROM EMPLOYEE WHERE SALARY >= 5000 ORDER BY SALARY DESC; 

-- 입사일이 '2014년 1월 1일' 이전에 입사한 사원들을 조회
-- DATE 타입은 표현은 문자처럼, 처리방식은 숫자처럼
SELECT * FROM EMPLOYEE WHERE HIRE_DATE <= '2014-01-01' ORDER BY HIRE_DATE DESC; 

-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000이상인 사원들을 조회
-- AND(~이고) :  두개의 조건이 모두 만족한 데이터만 조회
SELECT * FROM EMPLOYEE WHERE HIRE_DATE > '2015-01-01' AND SALARY >= 6000 ORDER BY HIRE_DATE DESC; 

-- 입사일이 2015년 1월 1일 이후거나 또는 급여가 6000 이상인 사원들을 조회
-- OR(~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회
SELECT * FROM EMPLOYEE WHERE HIRE_DATE > '2015-01-01' OR SALARY >= 6000 ORDER BY HIRE_DATE DESC, SALARY desc;

-- 입사일이 2015년 1월 1일 부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회 
-- 
SELECT * FROM EMPLOYEE WHERE HIRE_DATE >= '2015-01-01' AND HIRE_DATE <= '2017-12-31' ORDER BY HIRE_DATE;

-- 연봉 구간이 5000부터 7000미만의 사원들을 모두 조회
SELECT * FROM EMPLOYEE WHERE SALARY >=5000 AND SALARY < 7000  order by SALARY DESC;

/*************************
 * BETWEEN ~ AND : 특정 구간 조건 검색시 사용
 * 형식 - SELECT * FROM ~ WHERE 컬럼명 BETWEEN [시작구간] AND [종료구간];
*************************/
-- 2016년 입사자들을 조회
SELECT * FROM EMPLOYEE WHERE HIRE_DATE BETWEEN '2016-01-01' AND '2016-12-31';

-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회해주세요
SELECT * FROM EMPLOYEE WHERE EMP_ID ='S0001' OR EMP_ID ='S0010' OR EMP_ID ='S0020' ;

-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회 
SELECT * FROM EMPLOYEE WHERE DEPT_ID='MKT' OR DEPT_ID='GEN' OR DEPT_ID='HRD' ;
/*************************
 *IN 연산자 : 한 컬럼에 추가되는 OR 연산식을 대체하는 ㅑ
 * 형식 - SELECT * FROM ~ WHERE 컬럼명  IN (조건1, 조건2, 조건3.... ) ;
*************************/
-- 2016년 입사자들을 조회
SELECT * FROM EMPLOYEE WHERE EMP_ID IN ('S0001', 'S0010', 'S0020');

-- 사원아이디가 S0001, S0010, S0020 인 사원의 모든 정보를 조회해주세요
SELECT * FROM EMPLOYEE WHERE DEPT_ID  IN ('MKT', 'GEN', 'HRD');


/*************************
 * 와일드 카드 문자 : 특정 문자열 검색
 * 종류 : %(전체), _(한 문자)
 * 사용법 - LIKE 연산자와 함께 조건식을 추가하여 사용됨 
 * 형식 : SELECT * FROM [] WHERE 컬럼명 [와이드 카드 문자를 이용한 특정문자열 검색 조건]
 * 특정 문자로 시작하는 데이터 검색 > LIKE '특정문자열%'
 * 특정 문자를 포함하는 데이터 검색 > LIKE '%특정문자열%'
 * 특정 문자로 끝나는 데이터 검색 > LIKE '%특정문자열'

*************************/
-- 영어 이름이 'f'로 시작하는 모든 사원들을 조회
SELECT * FROM EMPLOYEE WHERE ENG_NAME LIKE 'f%'; 

-- '한'씨 성을 가진 모든 사원들을 조회
SELECT * FROM EMPLOYEE WHERE EMP_NAME LIKE '한%';

-- 이메일 주소 2번째 자리에 'A'가 들어가는 모든 사원 검색 
SELECT * FROM EMPLOYEE WHERE EMAIL LIKE '_A%';

-- 이메일 주소에 'A'가 들어가는 모든 사원 검색 
SELECT * FROM EMPLOYEE WHERE EMAIL LIKE '%A%';

-- 이메일 주소가 4자리인 모든 사원들 조회
SELECT * FROM EMPLOYEE WHERE EMAIL LIKE '____@%';
SELECT * FROM EMPLOYEE WHERE LENGTH(EMAIL) = 20;

-- 이름에 '삼'이 들어가는 모든 사원 조회
SELECT * FROM EMPLOYEE WHERE EMP_NAME LIKE '%삼%';


/*************************
 * 내장함수(built-in) : 숫자, 문자, 날짜 함수
 * 함수 테스트를 위한 테이블 DUAL 
 * 형식 - SELECT [함수 실행] FROM DUAL;
*************************/
-- 1. 숫자 함수 : ABS(), FLOOR(), RAND(), TRUNCATE()...
-- (1) ABS 함수 : 절대 값 표현 함수 
SELECT 100, -100, ABS(100), ABS(-100)
FROM DUAL;

-- (2) FLOOR() 함수 : 소수점을 버리는(삭제) 함수  
SELECT 123.456, FLOOR(123.456)
FROM DUAL;

-- (3) TRUNCATE 함수 : 소수점을 삭제하는 함수 -TRUNCATE(데이터, 자릿수)
SELECT  123.456, TRUNCATE(123.456, 0) ,TRUNCATE(123.456, 1), TRUNCATE(123.456, 2)
FROM DUAL;

-- (4) RAND() 함수 : 0~1 임의의 수를 생성
SELECT RAND(), RAND()*1000 FROM DUAL;

-- 정수만 출력하는 쿼리 
SELECT FLOOR(RAND()) AS RAND1, TRUNCATE(RAND()*1000, 0) AS RAND2, TRUNCATE(RAND()*100000,0) AS RAND3, TRUNCATE(RAND()*100000,2) AS RAND4 
FROM DUAL;

-- (5) MOD() 함수 : 모듈러 연산을 실행하는 함수 - MOD(숫자데이터, 연산숫자)
SELECT MOD(100, 2) 짝수, MOD(101, 2) 홀수 FROM DUAL; 

-- 1~3 자리의 정수를 생성하고, 생성한 정수를 2로 나누는 모듈러 함수를 실행 쿼리
SELECT MOD(TRUNCATE(RAND()*1000, 0), 2) FROM DUAL;

-- 사원테이블에서 사원아이디, 사원명, 부서 아이디, 입사일,엽농, 인센티브(연봉20%)조회
-- 인센티브 소수점 생략
-- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함
-- 5000 미만의 사원들 정보만 출력
SELECT EMP_ID, EMP_NAME
	  , DEPT_ID, HIRE_DATE
	  , IFNULL(SALARY, 0) AS SALARY
      , IFNULL(TRUNCATE((SALARY*0.2), 0), 0) AS INCENTIVE  
FROM EMPLOYEE
WHERE SALARY < 5000 OR SALARY IS NULL;

-- -------------------------------------------
-- 2. 문자 함수 : CONCAT(), SUBSTRING()...
-- (1) CONCAT(문자열, 문자열1) : 문자열 결합
 SELECT CONCAT('MY', 'SQL', '-84') AS NA
 FROM DUAL;

-- 사원테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 TEST_NAME으로 조회
-- 예시) 홍길동/HONG
-- 영어이름이 정해지지 않은 사원은 빈문자열로 치환해서 실행
SELECT * FROM EMPLOYEE;
SELECT EMP_NAME, ENG_NAME, CONCAT(EMP_NAME, '/', IFNULL(ENG_NAME, '')) AS TEST_NAME
FROM EMPLOYEE;

-- 사원테이블의 사원아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성
-- 사원아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼 리스트 조회
-- 현재 근무중인 사원은 현재 날짜를 출력
SELECT emp_id
	  , concat(emp_id,'-', TRUNCATE(rand()*10, 0)) as number
      , emp_name
	  , hire_date
      , salary
	  , ifnull(retire_date, curdate()) as retire_date 
FROM EMPLOYEE;

-- (2)SUBSTRING(문자열, 위치, 자릿수) : 문자열 추출 함수
SELECT SUBSTRING('대한민국 홍길동 만세 1234!!', 1, 4) AS STRING FROM DUAL; -- 대한민국
SELECT SUBSTRING('대한민국 홍길동 만세 1234!!', 6, 3) AS STRING FROM DUAL; -- 홍길동
SELECT SUBSTRING('대한민국 홍길동 만세 1234!!', 10, 2) AS STRING FROM DUAL; -- 만세
SELECT SUBSTRING('대한민국 홍길동 만세 1234!!', 17, 2) AS STRING FROM DUAL; -- !!

-- 사원 테이블에서 사원아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 출력해주세요 
select emp_id, emp_name
	   , substring(hire_date, 1, 4) as 입사년도
       , substring(hire_date, 6, 2) as '입사 월'
       , substring(hire_date, 9, 2) as '입사 일'
	   , salary
from employee;

-- 2015년도 입사한 모든 사원들을 조회 
select * from employee where substring(hire_date, 1, 4) = '2015' ;

-- 2018년도에 정보시스템 부서에 입사한 모든 사원들을 조회 
select * 
from employee 
where dept_id = 'sys' 
and substring(hire_date, 1, 4) = '2018';

-- (3) LEFT(문자열, 추출숫자), RIGHT(문자열, 추출숫자)
SELECT LEFT('대한민국 홍길동 만세 1234!!', 4) AS 대한민국
	   , RIGHT('대한민국 홍길동 만세 1234!!', 2) AS '!!'	
FROM DUAL;

-- 2015년도에 입사한 모든 사원들 조회 (LEFT사용)
SELECT * FROM EMPLOYEE WHERE LEFT(HIRE_DATE, 4) = '2015';

-- 사원들의 폰번호 마지막 4자리를 조회
-- 사원명, 부서아이디, 입사년도, 폰번호(마지막 4자리)
SELECT EMP_NAME
	   , DEPT_ID
       , LEFT(HIRE_DATE, 4) AS 입사년도
       , RIGHT(PHONE, 4) AS PHONE
FROM EMPLOYEE;

-- (4) UPPER(대문자), LOWER(소문자)
SELECT * FROM EMPLOYEE 
WHERE UPPER(DEPT_ID) = UPPER('sys');

-- 사원들의 영어이름과 이메일 주소를 모두 대문자로 출력
SELECT  emp_id 
		, UPPER(eng_name) eng_name
        , UPPER(email) email
        , lower(email) email
FROM EMPLOYEE;


-- (5) TRIM() 함수 : 앞 뒤 공백제거 
SELECT TRIM('    MYSQL 84') AS TRIM1 			-- MYSQL 84
	   , TRIM('MYSQL 84           ') AS TRIM2   -- MYSQL 84
       , TRIM('    MYSQL 84      ') AS TRIM3    -- MYSQL 84
FROM DUAL;

-- (6) FORMAT(문자열 또는 숫자, 소수점자리) : 문자열의 포맷 수정
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 
SELECT FORMAT(123456, 0) AS FORMAT1 	-- 숫자는 자동으로 문자열로 변환후 실행
	   , FORMAT(123456, 2) AS FORMAT2	
FROM DUAL; 

-- 사원테이블의 사원아이디, 사원명, 입사일, 연봉을 조회 
-- 연봉 협상 전인 사원은 0으로 변환 후 조회
-- 연봉은 3자리씩 콤마로 구분하여 출력
SELECT EMP_ID
	   , EMP_NAME
       , HIRE_DATE
       , CONCAT(FORMAT(IFNULL(SALARY, 0), 0), '만원' ) SALARY
FROM EMPLOYEE;       

-- 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 보너스연봉(연봉의 0.05%) 컬럼들을 조회
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력 후 '만원' 추가
-- 보너스 컬럼은 소수점 1자리까지 출력
SELECT emp_id
	   , emp_name
       , dept_id
       , hire_date
       , concat(format(ifnull(salary, 0), 0), '만원') as salary
       , concat(format(ifnull(salary*0.05, 0), 1), '만원') as bonus
FROM EMPLOYEE;


-- *********************************************************************************  12 /31
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************

-- 3. 날짜 함수 : CURDATE(), NOW(), SYSDATE()
-- (1) CURDATE() : 현재 시스템 날짜를 출력, 년월일 출력
SELECT CURDATE() FROM DUAL;
-- (2) NOW(), SYSDATE() : 현재 시스템 날짜를 출력, 년월일 시분초 출력  
SELECT NOW(),SYSDATE() FROM DUAL;

-- 4. 형변환 함수 : CAST(), CONVERT()
-- CAST(변경데이터 as 변경할 데이터타입) 
SELECT 12345 숫자, CAST(12345 AS CHAR) 문자 FROM DUAL;
SELECT '12345' 문자, CAST(12345 AS UNSIGNED INTEGER) 정수 FROM DUAL;

-- 입력 폼에서 '20150101' 데이터 날짜를 가진 사원을 조회
SELECT * FROM EMPLOYEE WHERE HIRE_DATE = CAST('20150101' AS DATE);

-- FLOOR 함수를 적용한 CAST  함수 
SELECT FLOOR('12-34-5') AS 문자 
	   , FLOOR(CAST('12-34-5' AS UNSIGNED INTEGER)) AS 정수 	
FROM DUAL;

-- 5. 문자열 치환 함수 : REPLACE(문자열, OLD, NEW)
SELECT '123,456' 문자
	   , REPLACE('123,456', ',' , '') AS 문자
	   , REPLACE('123,456', ',' , ' ') AS 문자 
	   , CAST(REPLACE('123,456', ',' , '') AS UNSIGNED INTEGER) AS 슷자 
FROM DUAL;

-- 사원 테이블의 입사일 포맷을 변경 '2015-01-01'--> '2015/01/01'
SELECT EMP_ID
	  , EMP_NAME
	  , REPLACE(HIRE_DATE, '-' ,'/' ) AS HIRE_DATE 
FROM EMPLOYEE ;


/*************************
 * 그룹(집계)함수 : SUM(), AVG(), NIM(), MAX(), COUNT().... 
 * : 유니크한 일반 컬럼과 함께 사용하지 못함
 * GROUP BY  : 그룹 함수를 적용하기 위해 일반 컬럼을 그룹핑하는 단위 
 * HAVING    : 그룹함수의 조건절을 적용하는 구문 
*************************/
-- 1. SUM(숫자, 숫자컬럼)
-- 사원 테이블에서 모든 사원의 연봉 총합을 조회
SELECT * FROM EMPLOYEE;
SELECT SUM(SALARY) AS 연봉총합 -- EMP_ID를 넣으면 그룹함수가 아니므로 에러가 남
	   , CONCAT(FORMAT(SUM(SALARY), 0), '만원') AS 연봉총합
FROM EMPLOYEE; 

-- 2. AVG(숫자, 숫자컬럼)
-- 사원들의 총연봉, 평균연봉 조회
-- 3자리 구분, '만원' 단위 추가
-- 소수점 1자리까지 유지
SELECT CONCAT(FORMAT(SUM(SALARY), 0), '만원') AS 총연봉
	   , CONCAT(FORMAT(AVG(SALARY), 1), '만원') AS 평균연봉
FROM EMPLOYEE;

-- 3. MIN(숫자, 숫자컬럼) : 가장 작은 값 출력 
-- 4. MAX(숫자, 숫자컬럼) : 가장 큰 값 출력 
-- 사원들의 총연봉, 평균연봉, 최소연봉, 최대연봉을 출력 
SELECT CONCAT(FORMAT(SUM(SALARY), 0), '만원') AS 총연본
	   , CONCAT(FORMAT(AVG(SALARY), 1), '만원') AS 평균연봉	
       , CONCAT(FORMAT(MIN(SALARY), 0), '만원') AS 최소연봉
       , CONCAT(FORMAT(MAX(SALARY), 0), '만원') AS 최대연봉
FROM EMPLOYEE;

-- 5. COUNT(컬럼명) : 테이블의 ROW COUNT를 출력
--  NULL을 포함한 데이터의 COUNT는 계산하지 않음 
SELECT COUNT(SALARY) '연봉협상완료 사원 수' 
       , COUNT(*) 총사원수
FROM EMPLOYEE; 
SELECT * FROM EMPLOYEE WHERE SALARY IS NULL;

-- 총 사원수, 퇴직사원 수, 현재근무하는 사원 수 조회
-- 단위 '명' 붙이기
SELECT CONCAT(CAST(COUNT(*) AS CHAR),'명') 총사원수
	   , CONCAT(CAST(COUNT(RETIRE_DATE) AS CHAR),'명') '퇴직사원수'
       , CONCAT(COUNT(*) - CAST(COUNT(RETIRE_DATE) AS CHAR),'명') '재직사원수'
FROM EMPLOYEE; 

-- 사원테이블에서 정보시스템 부서의 사원수를 조회
SELECT COUNT(*)
FROM EMPLOYEE
WHERE DEPT_ID ='SYS';

-- 2015년도에 입사한 사원 수, 평균, 최소, 최대 연봉을 조회
SELECT COUNT(*)
	  , SUM(SALARY) 총연봉 
      , AVG(SALARY) 평균연봉
      , MIN(SALARY) 최소연봉
      , MAX(SALARY) 최대연봉
FROM EMPLOYEE
WHERE LEFT(HIRE_DATE,4) = '2015';

-- 가장 최근 입사자와 오래된 입사자의 입사일 조회
SELECT  MIN(HIRE_DATE)	
		, MAX(HIRE_DATE)
FROM EMPLOYEE;

-- HRD 부서 기준 최근 입사자와 오래된 입사자의 입사일 조회 
SELECT MIN(HIRE_DATE)
	   , MAX(HIRE_DATE)
FROM EMPLOYEE
WHERE DEPT_ID='HRD';

-- 마케팅 부서 기준 가장 낮은 연봉과 높은 연봉 조회
SELECT MIN(SALARY)
	   , MAX(SALARY)	
FROM EMPLOYEE
WHERE DEPT_ID='MKT';

-- 6. GROUP BY ~ 적용 : ~~ 별 그룹함수를 적용해야 하는 경우 
-- 사원테이블에서 부서별 사원수 조회
-- GROUP BY에 사용된 일반 컬럼은 그룹함수와 함께 조회 가능
SELECT DEPT_ID, CONCAT(COUNT(*),'명') AS 사원수 
FROM EMPLOYEE  
GROUP BY DEPT_ID;

-- 입사년도를 총연봉, 평균영봉, 최저연돚, 입사사월수 조회\
SELECT CONCAT(LEFT(HIRE_DATE, 4), '년도') AS 입사년도 
	  , CONCAT(FORMAT(SUM(SALARY),0), '만원') AS '총연봉'
	  , TRUNCATE(AVG(SALARY), 0) AS 평균연봉
      , MIN(SALARY) 최저연봉
      , MAX(SALARY) 최고연봉
      , CONCAT(COUNT(*), '명') AS 입사사원수
FROM EMPLOYEE
GROUP BY CONCAT(LEFT(HIRE_DATE, 4), '년도');

-- 부서별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
SELECT DEPT_ID
		, CONCAT(FORMAT(SUM(IFNULL(SALARY, 0)), 0), '만원') AS 총연봉
		, AVG(SALARY) AS 평균연봉
		, MIN(SALARY) AS 최저연봉
		, MAX(SALARY) AS 최고연봉
		, CONCAT(COUNT(*), '명') AS 입사사원수
FROM EMPLOYEE
GROUP BY DEPT_ID;

-- 7. HAVING 절 : GROUP BY를 통해 그룹핑한 결과에 조건절을 추가하는 구문, 혼자 사용X 
-- HAVING 절에서는 별칭 컬럼명을 조건으로 사용가능
-- 부서별 평균 연봉 조회
-- 부서 평균 연봉이 6000 이상인 부서만 출력
SELECT DEPT_ID AS 부서아이디
		, TRUNCATE(AVG(IFNULL(SALARY,0)), 0) 평균연봉 -- 오라클 NVL(컬럼면, 값)
FROM EMPLOYEE
GROUP BY DEPT_ID
HAVING 평균연봉 >= 6000
ORDER BY 평균연봉 DESC;
-- ***************************************************************************************
-- HAVING 평균연봉 >= 6000; 아래에서 HAVING절이 안먹는 이유 ==> 문자열이기 때문 ==> 직접 비교 OR 서브쿼리로 비교
SELECT DEPT_ID 
		, FORMAT(AVG(IFNULL(SALARY,0)), 0) AS 평균연봉 -- 오라클 NVL(컬럼면, 값)
        , CONCAT(FORMAT(AVG(IFNULL(SALARY,0)), 0),'만원') AS 평균연봉 -- 오라클 NVL(컬럼면, 값)
FROM EMPLOYEE
GROUP BY DEPT_ID
HAVING AVG(IFNULL(SALARY,0)) >= 6000;

SELECT DEPT_ID, CONCAT(FORMAT(T.평균연봉, 0),'만원') AS 평균연봉 
FROM(select DEPT_ID, avg(salary) as 평균연봉
	 from employee
     GROUP BY DEPT_ID) AS T
WHERE 평균연봉 >= 6000;     

-- ***************************************************************************************

SELECT * FROM EMPLOYEE;
-- 입사년도 기준 총연봉, 평균 연봉 조회
-- 총연봉이 5000 이상인 사원들만 출력 
-- NULL 값을 포함한 경우 0으로 초기화 
SELECT LEFT(HIRE_DATE, 4) AS 입사년도
		, TRUNCATE(SUM(IFNULL(SALARY, 0)),0) AS 총연봉 
        , TRUNCATE(AVG(IFNULL(SALARY, 0)),0) AS 평균연봉
FROM EMPLOYEE
GROUP BY LEFT(HIRE_DATE, 4)
HAVING 총연봉 >= 5000;

-- 부서별 남녀사원의 사원수 조회
SELECT DEPT_ID AS 부서ID
	 , GENDER
	 , COUNT(*) AS 사원수 
FROM EMPLOYEE
GROUP BY DEPT_ID, GENDER;

-- 8. ROLLUP 함수 : REPORTING을 위한 함수  
-- 형식 : SELECT [] FROM [] WHERE [] GROUP BY [] WITH ROLLUP;
-- 부서별 총 연봉을 조회, 연봉이 정해지지 않은 부서는 생략 
SELECT IF(GROUPING(DEPT_ID), '부서총합계', IFNULL(DEPT_ID, '-')) AS 부서ID 
	   , CONCAT(FORMAT(SUM(SALARY),0), '만원') AS 총연봉
FROM EMPLOYEE
WHERE SALARY IS NOT NULL
GROUP BY DEPT_ID WITH ROLLUP;

-- 입사년도별 평균연봉을 조회
-- 연봉이 정해지지 않은 부서는 포함하지 않음
-- 평균 연봉이 6000이상되는 입사년도만 출력 
-- 3자리 구분, '만원'단위 추가
-- 리포팅 함수 사용
SELECT IF(GROUPING(T.YEAR), '연도별평균연봉', IFNULL(T.YEAR, '-')) AS 입사년도
	   , CONCAT(FORMAT(AVG(SALARY), 0), '만원')
FROM (SELECT LEFT(HIRE_DATE, 4) YEAR
		    , SALARY
	   FROM EMPLOYEE) T 
WHERE SALARY IS NOT NULL
GROUP BY YEAR WITH ROLLUP;




SHOW TABLES;
-- 사원들의 휴가사용 내역 조회
SELECT * FROM VACATION;

-- 사원아이디별 휴가사용 횟수 조회
-- 총 휴가 사용일 기준으로 내림차순 정렬
SELECT EMP_ID 사원아이디
	 , COUNT(*) AS 휴가상신횟수
     , SUM(DURATION) 총휴가사용일자
FROM VACATION 
GROUP BY EMP_ID
ORDER BY SUM(DURATION) DESC;

-- 2016 ~ 2017년도 사이세 사원아이디별 휴가 사용 횟수 조회 
-- 종강휴강사유일 기준으로 내림차순 종료 
SELECT IF(GROUPING(EMP_ID), '총휴가사용내역', IFNULL(EMP_ID , '-')) 사원ID
		, COUNT(*) 휴가상신횟수
        , SUM(DURATION) 총사용일수
FROM VACATION
WHERE LEFT(BEGIN_DATE, 4) BETWEEN 2016 AND 2017
GROUP BY EMP_ID WITH ROLLUP
ORDER BY 총사용일수;


-- *********************************************************************************  01 /02
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
show tables;
/*************************
 * DDL : 테이블 생성, 수정, 삭제
 * 명령어 : CREATE, ALTER, DROP, TRUNCATE(테이블의 로우를 제거)
*************************/
-- 1. 테이블 생성 : CREATE 
-- 형식 : CREATE TABLE [생성할 테이블명] ( 컬럼명 데이터타입 (크기), [제약사항] ...) -- 제약사항 : 유니크, NULL(X)
-- TEST 테이블 생성 및 제거
CREATE TABLE TEST(ID CHAR(4) NOT NULL);
SHOW TABLES;
DESC TEST;
SELECT * FROM TEST; 
DROP TABLE TEST;

-- DATA TYPE(데이터 타입) : 숫자, 문자, 날짜(시간)
-- (1) 숫자 데이터 타입
-- 1) 정수 : SMALLINT(2)-숫자최대 2자리, INT(4), BIGINT(8) 
-- 2) 실수 : FLOAT(4), DOUBLE(8)
-- 3) 문자 : CHAR(크기넣어진행: 고정형), VARCHAR(크기:가변형) 
-- NAME CHAR(20) 고정형은 메모리에 무조건 20글자를 차지 /  
-- NAME VARCHAR(20) 가변형은 입력한 글씨만큼만 메모리 차지 / 20글자까지 데이터 추가 가능 / 메모리 공간 효율적 
-- 4) 텍스트 : TEXT - 긴 문장을 저장하는 데이터 타입 
-- 5) BLOB 타입 : BLOB - 큰 바이너리 타입의 데이터 저장, 최대 2GB
-- 6) 날짜 : DATE - 년, 월, 일, DATETIME(- 년,월,일,시분초까지 저장)
--     데이터타입에 맞는 날짜 함수 호출필요!!!
DESC EMPLOYEE;
SELECT * FROM EMPLOYEE;

-- 1. EMP TABLE 생성 
-- 컬럼 리스트 : EMP_ID 고정형(4), EMP_NAME 가변형(10), HIRE_DATE 날짜/시간, SALARY 정수(5)
CREATE TABLE EMP(EMP_ID CHAR(4), EMP_NAME VARCHAR(10), HIRE_DATE DATETIME, SALARY INT(5)); 
SHOW TABLES;
SELECT * FROM EMP;
DESC EMP;

DESC DEPARTMENT;
-- DEPT테이블 생성 : DEPT_ID 고정형(3), DEPT_NAME 가변형(10), LOC 가변형(20)
CREATE TABLE DEPT(DEPT_ID CHAR(3), DEPT_NAME VARCHAR(10), LOC VARCHAR(20));
DESC DEPT;
SHOW TABLES;

-- EMP, DEPT 테이블의 모든 데이터 조회
SELECT * FROM EP; 
SELECT * FROM DEPT; 

-- 2.테이블 생성(복제) CREATE TABLE ~ AS ~ SELECT (CAS)  
-- 물리적으로 메모리에 생성
-- 기본키, 참조키 등의 제약사항은 복제가 불가능, 복제 후 ALTER 명령으로 추가 
-- 형식 : CREATE TABLE [생성(복제)할 테이블명] AS  SELECT [컬럼리스트] FROM [테이블명] WHERE [조건절] 
-- 정보시스템 부서의 사원들만 별도로 테이블 복제 
-- EPLOYEE_SYS
CREATE TABLE EMPLOYEE_SYS AS SELECT * FROM EMPLOYEE WHERE DEPT_ID='SYS';
SHOW TABLES;
SELECT * FROM EMPLOYEE_SYS;
DESC EMPLOYEE_SYS; -- 제약사항은 복제가 안됨/ ALTER로 추가해줘야함
-- emp_id	char(5)	NO 
-- emp_name	varchar(4)	NO
-- eng_name	varchar(20)	YES
DESC EMPLOYEE;
-- emp_id	char(5)	NO	PRI
-- emp_name	varchar(4)	NO	
-- eng_name	varchar(20)	YES	

-- 퇴직한 사원들을 복제하여 EMPLOYEE_RETIRE 테이블로 관리 
CREATE TABLE EMPLOYEE_RETIRE AS SELECT * FROM EMPLOYEE WHERE RETIRE_DATE IS NOT NULL;

-- 2015년, 2017년 입사자들을 복제하여 별도로 관리 
-- 테이블명 : EMPLOYEE_2015_2017
CREATE TABLE EMPLOYEE_2015_2017 AS SELECT * FROM EMPLOYEE WHERE LEFT(HIRE_DATE, 4) IN('2015','2017');
SHOW TABLES;
SELECT * FROM EMPLOYEE_RETIRE;
SELECT * FROM EMPLOYEE_2015_2017;

/*************************
 * 테이블 제거 : DROP TABLE
 * 형식: DROP TABLE [제거할 테이블명] *** DROP/TRUNCATE는 즉시 메모리에서 삭제(TANSACTION에서 COMMIT되어 바로 적용됨)
 * 명령 즉시 메모리에서 바로 테이블 삭제하므로 주의 **복구 불가능**
*************************/
DROP TABLE DEPT,EMP;
-- EMPLOYEE_2015_2017 테이블 제거
SHOW TABLES; 
DROP TABLE EMPLOYEE_2015_2017;

-- EMPLOYEE_RETIRE 테이블 제거
DROP TABLE EMPLOYEE_RETIRE;
SHOW TABLES;

-- 재직중인 사원테이블 생성(복제)
-- EMMPLOYEE_WORKING
CREATE TABLE EMPLOYEE_WORKIN AS SELECT * FROM EMPLOYEE WHERE RETIRE_DATE IS NULL;
RENAME TABLE EMPLOYEE_WORKIN TO EMPLOYEE_WORKING;
SHOW TABLES;


/*************************
 * 테이블 데이터 제거 : TRUNCATE TABLE
 * 형식: TRUNCATE TABLE [제거할 데이터를 가진 테이블명]
 * 명령 즉시 메모리에서 바로 테이블의 데이터 모두  제거되므로 주의 **복구 불가능**
*************************/
SHOW TABLES;
SELECT * FROM EMPLOYEE_WORKING;
-- EMPLOYEE_WORJING 테이블의 모든 데이터(ROW)를 제거
TRUNCATE TABLE EMPLOYEE_WORKING;

/*************************
 * 테이블 구조 변경 : ALTER TABLE
 * 형식: ALTER TABLE [변경할 테이블명]
 * 1) 컬럼 추가 : ADD COLUMN [NEW 컬럼명 데이터타입(크기), 제약사항] 
 * 2) 컬럼명 변경 : MODIFY COLUMN [변경할 컬럼명 데이터타입(크기) 제약사항]
 * 3) 컬럼 삭제 : DROP COLUMN [삭제할 컬럼명]
 ** 모든 데이터베이스에서 크기를 늘리는 것은 가능하나 줄이는 것을 불가능(데이터 유실) ***
*************************/
SHOW TABLES; 
SELECT * FROM employee_working; 
DESC employee_working; 

-- BONUS 컬럼 추가, 데이터타입 정수형 4자리, NULL값 허용
ALTER TABLE EMPLOYEE_WORKING ADD COLUMN BONUS INT(4);

-- EMPLOYEE_WORKING테이블에 DNAME(부서명) 추가, 데이터타입 가변형(10), NULL값 허용
ALTER TABLE EMPLOYEE_WORKING ADD COLUMN DNAME VARCHAR(10);

-- EMPLOYEE_WORKING 이메일 주소 컬럼 크기를 30으로 수정 / 데이터 존재시 크기변경 불가능
ALTER TABLE EMPLOYEE_WORKING MODIFY COLUMN email varchar(30);
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING salary 컬럼 실수타입(DOUBLE)으로 수정 
ALTER TABLE EMPLOYEE_WORKING MODIFY COLUMN salary double;
DESC EMPLOYEE_WORKING;

-- employee_sys 테이블의 이메일주소 컬럼 크기를 가변형 10 크기로 수정 -- 수정 안됨/ 1개의 데이터가 유실될 가능성이 있으므로 에러발생!
select * from employee_sys;
DESC employee_sys;
ALTER TABLE EMPLOYEE_SYS MODIFY COLUMN email VARCHAR(10); 
SELECT COUNT(*) FROM EMPLOYEE_SYS;

-- EMPLOYEE_WORKING 테이블의 BONUS컬럼을 삭제 
ALTER TABLE EMPLOYEE_WORKING DROP COLUMN BONUS;
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING 테이블의 EMAIL, DNAME 컬럼을 삭제 
ALTER TABLE EMPLOYEE_WORKING DROP EMAIL;
ALTER TABLE EMPLOYEE_WORKING DROP DNAME;
DESC EMPLOYEE_WORKING;

-- EMPLOYEE_WORKING 테이블 제거 
DROP TABLE EMPLOYEE_WORKING;
SHOW TABLES;

-- EMPLOYEE 테이블에서 HRD 부서에 속한 사원들의 사원아이디, 사워녕, 입사일, 연봉, 보너스(연봉10%)
-- 정보를 별칭을 사용하여 조회한 후 
-- EMPLOYEE_HRD 이름으로 복제 
CREATE TABLE EMPLOYEE_HRD AS 
SELECT EMP_ID AS 사원아이디
		, EMP_NAME AS 사원명
        , HIRE_DATE AS 입사일
        , SALARY AS 연봉
        , CONCAT(FORMAT(SALARY* 0.1, 0), '만원') AS 보너스
FROM EMPLOYEE;

DESC EMPLOYEE_HRD;
SHOW TABLES;
SELECT * FROM EMPLOYEE_HRD;

/*************************
 * DML : INSERT(C), SELECT(R), UPDATE(U), DELETE(D)
*************************/
-- 1. INSERT : 데이터 추가 
-- 형식 : INSERT INTO [테이블명] (컬럼리스트) VALUES(데이터리스트)
SHOW TABLES;
DESC EMP;
SELECT * FROM EMP;
-- S001, 홍길동, 현재날짜, 1000 데이터 추가
INSERT INTO EMP (EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S001','홍길동', CURDATE(), 1000);

-- S002, 홍길순, 현재날짜(NOW, SYSDATE), 1000 데이터 추가
INSERT INTO EMP (EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S002','홍길순',SYSDATE(), 1000);

-- S003, 김철수, 현재날짜(NOW, SYSDATE), 3000 데이터 추가
-- 컬럼리스트 생략시에는 컬럼 순서대로 INSERT 실행됨
INSERT INTO EMP 
VALUES('S003','김철수',NOW(), 3000);
SELECT * FROM EMP;

-- S004, 이영희, 현재날짜(NOW, SYSDATE), 연봉협상전 데이터 추가 / NULL 명확하게 넣어주기
DESC EMP;
INSERT INTO EMP (EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S004','이영희', NOW(), NULL);

SELECT * FROM EMP;

-- EMPLOYEE 테이블의 정보시스템 부서의 사원들 정보 중 
-- 사원아이디, 사원명, 입사일, 부서아이디, 연봉
-- 복제하여 EMPLOYEE_SYS 테이블 생성
-- 2016년 이전에 입사한 사원들
DESC EMPLOYEE;

CREATE TABLE EMPLOYEE_SYS  AS
SELECT  EMP_ID 
		, EMP_NAME 
        , HIRE_DATE  
        , DEPT_ID
        ,SALARY
FROM EMPLOYEE
WHERE DEPT_ID= 'SYS' 
AND LEFT(HIRE_DATE,4) <= '2016';

SHOW TABLES;
SELECT * FROM EMPLOYEE_SYS;

-- EMPLOYEE_SYS 테이블에 2016년도 이후에 입사한 정보시스템 부서 사원 추가 
-- 서브쿼리를 이용한 데이터 추가
INSERT INTO EMPLOYEE_SYS (EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY)
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID, SALARY 
FROM EMPLOYEE 
WHERE DEPT_ID='SYS' 
AND LEFT(HIRE_DATE,4) > '2016';

-- DEPT 테이블 구조 확인 및 데이터 추가 
-- SYS, 정보시스템, 서울 
-- MKT, 마케팅, 뉴욕
-- HRD, 인사, 부산
-- ACC, 회계, 정해지지않음
SELECT * FROM DEPT;    
DESC DEPT;
INSERT INTO DEPT (DEPT_ID, DEPT_NAME, LOC)
VALUES('SYS', '정보시스템','서울')
		, ('MKT','마케팅','뉴욕')
		, ('HRD','인사','부산')
        , ('ACC', '회계','NULL');
    
INSERT INTO DEPT VALUES('영업', NULL, 'SALES');

INSERT INTO DEPT(DEPT_NAME, LOC, DEPT_ID) VALUES('영업', NULL, 'SALES');
UPDATE DEPT SET DEPT_ID='SALES', DEPT_NAME='영업', LOC=NULL
WHERE DEPT_ID ='SAL';

ALTER TABLE DEPT MODIFY COLUMN DEPT_ID CHAR(5); 

/*############################################################################
	CONSTRAINT(제약사항) : 데이터 무결성의 원칙을 적용하기 위한 규칙 
	- UNIQUE   : 유니크(중복방지) 제약
    - NOT NULL : NULL값을 허용하지 않음
    - PRIMARY KEY(기본키) : UNIQUE + NOT NULL 
    - FOREING KEY(참조키) : 타 테이블을 참조하기 위한 키 
    - DEFAULT : 디폴트로 저장되는 데이터 정의하는 제약
    
    사용형식 : CREATE TABLE + 제약사항 
           : ALTER TABLE + 제약사항
############################################################################*/
-- DB의 스키마 구조를 통해 각 테이블의 제약사항 확인
-- INFORMATION_SCHEMA.TABLE_CONSTRAINTS
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'EMPLOYEE';
DESC EMPLOYEE;

DESC EMPLOYEE; 
SHOW TABLES;
DESC EMP;

-- EMP_CONST 테이블 생성
-- 기본티 제약 : EMP_ID
-- 유니크 제약 : ENAMP
-- NOT NULLL 제약 : SALARY
CREATE TABLE EMP_CONST (
EMP_ID CHAR(4) PRIMARY KEY,
EMP_NAME VARCHAR(10) UNIQUE,
HIRE_DATE DATETIME,
SALARY INT NOT  NULL);

SHOW TABLES; 
DESC EMP_CONST;
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'EMP_CONST';

-- S001, 홍길동, 현재날짜, 1000 데이터 추가
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S001','홍길동',SYSDATE(), 1000);

SELECT * FROM EMP_CONST;
-- S001, 김철수, 현재날짜, 1000 데이터 추가
-- Error Code: 1062. Duplicate entry 'S001' for key 'emp_const.PRIMARY'
-- PRIMARY 키로 설정되어 있는 컬럼은 입력폼에서 아이디 중복체크 기능을 통해 확인함
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S001','김철수',SYSDATE(), 1000);

-- SOLUTION : 중복된 'S001' ---> 'S002'로 변경 후 실행
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S002','김철수',SYSDATE(), 1000);


    
-- Error Code: 1048. Column 'EMP_ID' cannot be null	0.000 sec
-- SOLUTION : NULL 또는 중복된 값을 배제하여 진행
-- Error Code: 1062. Duplicate entry '김철수' for key 'emp_const.EMP_NAME'	
-- SOLUTION : 이미 저장된 '김철수' 대신 유니크한 이름으로 진행
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES(NULL,'김철수',SYSDATE(), 1000);

INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)	
VALUES('S003', '이영희', NOW(), 1000);  

-- EMP_NAME 컬럼에 널값 추가 
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S004', NULL ,SYSDATE(), 1000);

-- EMP_NAME 컬럼에 NULL값은 중복으로 저장 가능
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S005', NULL ,SYSDATE(), 1000);


-- Error Code: 1406. Data too long for column 'EMP_ID' at row 1	
INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S0056', '스미스' ,SYSDATE(), NULL);

INSERT INTO EMP_CONST(EMP_ID, EMP_NAME, HIRE_DATE, SALARY)
VALUES('S006', '스미스' ,SYSDATE(), 3000);

SELECT * FROM EMP_CONST;
DESC EMP_CONST;

SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'EMP_CONST';

-- EMP_CONST2 테이블 생성 
-- EMP_ID : PRIMARY KEY 
-- EMP_NAME : UNIQUE 
CREATE TABLE EMP_CONST2(
	EMP_ID CHAR(4), 
    EMP_NAME VARCHAR(10),
    CONSTRAINT PK_EMP_ID PRIMARY KEY(EMP_ID),
    CONSTRAINT UK_EMP_NAME UNIQUE(EMP_NAME)
    );
DESC EMP_CONST2;

SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTAINTS 
WHERE TABLE_NAME='EMP_CONST2';


-- *********************************************************************************  01 /03
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************

-- 제약사항 테스트를 위한 테이블 생성: CONST_TEST
-- UID CHAR(4) 기본키 제약 
-- NAME VARCHAR(10) NULL 허용X
-- AGE INT NULL허용
-- ADDR VARCHAR(30) NULL 허용
CREATE TABLE CONST_TEST (UID CHAR(4) PRIMARY KEY
						, NAME VARCHAR(10) NOT NULL
                        , AGE INT
                        , ADDR VARCHAR(30));
SHOW TABLES;
DESC CONST_TEST;
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE TABLE_NAME = 'CONST_TEST';

-- DEPT_ID 컬럼 추가 : CHAR(3) 디폴트 제약 'HRD', NULL 허용X
ALTER TABLE CONST_TEST ADD COLUMN (DEPT_ID CHAR(3) DEFAULT('HRD')); -- 값을 안넣어줬을때 기본 값으로 HRD가 들어감
ALTER TABLE CONST_TEST DROP COLUMN DEPT_ID;

-- S001, 홍길동, 20, 서울시, SYS 
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR, DEPT_ID)
VALUES('S001','홍길동', 20, '서울시','SYS');

SELECT * FROM CONST_TEST;

-- S002, 김철수, 20, 서울시, HRD --> DEFAULT 값을 'HRD'로 정해놔서 미입력시 자동으로 HRD로 입력됨
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR)
VALUES('S002','김철수',20,'서울시');

-- SALARY 컬럼 : INT, 3000이상인 숫자만 등록할 수 있도록 CHECK 제약 
ALTER TABLE CONST_TEST ADD COLUMN (SALARY INT CHECK(SALARY >= 3000));
DESC CONST_TEST;
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE TABLE_NAME = 'CONST_TEST';
SELECT * FROM CONST_TEST;

-- S003, 이영희, 30, 부산시, HRD, 3000
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR,DEPT_ID, SALARY)
VALUES('S003','이영희',30,'부산시','HRD',3000);

-- S004, 이영희, 30, 부산시, HRD, 2000 -> SALARY가 체크조건에 맞지 않으므로 에러 발생!
INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR,DEPT_ID, SALARY)
VALUES('S004','이영희',30,'부산시','HRD',2000);

INSERT INTO CONST_TEST(UID, NAME, AGE, ADDR,DEPT_ID, SALARY)
VALUES('S004','이영희',30,'부산시','HRD',4000);
SELECT * FROM CONST_TEST;

-- 상품 테이블 생성 : PRODUCT_TEST
-- 컬럼 : PID INT PROMARY KEY, PNAME VARCHAR(30) NULL허용X, PRICE INT NULL허용 
-- COMPANY VARCHAR(20) NULL 허용
-- ** AUTO_INCREMENT : 자동번호 생성기 ==> 기본키에 사용 **
-- 오라클 : SEQUENC
CREATE TABLE PRODUCT_TEST(PID INT PRIMARY KEY AUTO_INCREMENT
						, PNAME VARCHAR(30) NOT NULL
                        , PRICE INT 
                        , COMPANY VARCHAR(20));
SHOW TABLES;                        
DESC PRODUCT_TEST;
SELECT * FROM IMFORMATION_SCHEMA.TABLE_CONSTRAINTS;

-- 키보드, 100, 삼성
INSERT INTO PRODUCT_TEST(PNAME, PRICE, COMPANY)
VALUES('모니터',1200,'엘지');

SELECT * FROM PRODUCT_TEST;

/****************************************
- 2. UPDATE : 데이터 수정 
- 형식 : UPDATE [테이블명] SET [컬럼명='업데이트 데이터'] WHERE [조건절];
****************************************/
SELECT * FROM CONST_TEST;

-- 홍길동 연봉 업데이트 : 3500
UPDATE CONST_TEST SET SALARY= 3500 WHERE UID='S001';

-- 김철수 연봉 업데이트 : 5000
UPDATE CONST_TEST SET SALARY= 5000 WHERE UID='S002';

SHOW TABLES;

-- EMPLOYEE 테이블을 복제하여 CP_EMPLOYEE 테이블을 생성
-- EMP_ID 컬럼에 기본키 제약을 추가 
-- PHONE, EMIAL 컬럼에 UNIQUE 제약 추가
CREATE TABLE CP_EMPLOYEE AS 
SELECT * FROM EMPLOYEE;

ALTER TABLE CP_EMPLOYEE ADD CONSTRAINT PK_EMP_ID PRIMARY KEY(EMP_ID);
ALTER TABLE CP_EMPLOYEE ADD CONSTRAINT UK_PHONE UNIQUE(PHONE);
ALTER TABLE CP_EMPLOYEE ADD CONSTRAINT UK_EMAIL UNIQUE(EMAIL);
DESC CP_EMPLOYEE;
SELECT * FROM CP_EMPLOYEE;
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE TABLE_NAME='CP_EMPLOYEE';

-- CP_EMPLOYEE 테이블의 POHONE에 추가된 제약 사항 삭제
DESC CP_EMPLOYEE;
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE TABLE_NAME='CP_EMPLOYEE';
ALTER TABLE CP_EMPLOYEE DROP CONSTRAINT UK_PHONE;

-- SYS인 부서아이디를 --> '정보'부서로 수정
-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. 
SET SQL_SAFE_UPDATES = 0; -- 해제 :0 / 설정: 1
SELECT * FROM CP_EMPLOYEE;
UPDATE CP_EMPLOYEE SET DEPT_ID='정보' WHERE DEPT_ID ='SYS';

-- CP_EMPLOYEE 테이블에서 2016년도 입사한 사원들의 입사일 --> 현재날짜로 수정
SELECT COUNT(*) FROM CP_EMPLOYEE WHERE LEFT(HIRE_DATE,4) = '2016';
UPDATE CP_EMPLOYEE SET HIRE_dATE=CURDATE() WHERE LEFT(HIRE_DATE,4) = '2016';
SELECT COUNT(*) FROM CP_EMPLOYEE WHERE LEFT(HIRE_DATE,4) = '2025';

-- 강우동 사원의 영어이름 'KING', 퇴사일을 현재날짜로, 부서는 SYS로 수정 
SELECT * FROM CP_EMPLOYEE;
UPDATE CP_EMPLOYEE SET ENG_NAME='KING', RETIRE_DATE=CURDATE(), DEPT_ID='SYS' 
WHERE EMP_NAME='강우동';

-- 트랜잭션 처리방식이 AUTO COMMIT이 아닌 경우 
-- 작업 완료 : COMMIT, 작업취소 : ROLLBACK

/****************************************
- 3. DELETE : 데이터 삭제 
- 트랜잭션 관리법에 따라 삭제된 데이터를 복원할 수 있음 / AUTO COMMIT 상태에서는 불가능 
- 형식 : DELETE FROM [테이블명] WHERE[조건절];
****************************************/
/** 프로그램 개발을 통해 실시간 접속시에는 auto commit으로 실행됨 **/
COMMIT;  -- 현재까지 진행한 모든 작업을 DB에 반영 / 여기서부터 트랜잭션 시작

SELECT * FROM CP_EMPLOYEE;
-- 김삼순 사원 삭제 
DELETE FROM CP_EMPLOYEE WHERE EMP_ID='S0004';
ROLLBACK;

-- 연봉이 7000 이산인 모든 사원 삭제
set sql_safe_updates =0;
select * from cp_employee where salary >= 7000;
select count(*) from cp_employee where salary >= 7000;
delete from cp_employee where salary >= 7000;

-- cp_employee 테이블에서 정보시스템 부서 직원들 모두 삭제 
select * from cp_employee where dept_id='정보';
select count(*) from cp_employee where dept_id='정보';
delete from cp_employee where dept_id='정보';

-- cp_employee 테이블에서 2017년 이후 입사자들을 모두 삭제(터미널) 
select * from cp_employee where left(hire_date,4 ) >= '2017';
select count(*) from cp_employee where left(hire_date,4 ) >= '2017';
delete from cp_employee where left(hire_date, 4) >= '2017';

SHOW TABLES;
DROP TABLE CONST_TEST;
DROP TABLE CP_EMPLOYEE;
DROP TABLE DEPT;
DROP TABLE EMP;
DROP TABLE TEST;
DROP TABLE EMPLOYEE_HRD;
DROP TABLE EMPLOYEE_SYS;
DROP TABLE PRODUCT_TEST;


-- *********************************************************************************  01 /06
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************

/********************************************  정형데이터 관련 내용
   하나 이상의 테이블 생성 및 연결, 조회
   - 생성 : CREATE TABLE
   - 연결 : FOREIGN KEY(참조키) 제약 추가   -- 두 개의 테이블을 만들고 연결한다
   - 조회 : JOIN, SUBQUERY
    ** 데이터 베이스의 테이블 설계 과정 : 데이터베이스 모델링
      -> 데이터 정규화 
        -> ERD(Entity Relationship Diagram)
****************************************************/

-- ERD 확인툴 : 워크벤치 -> Database -> Reverse Enginerr (showdatabase를 거꾸로 돌리는 개념.. 만들어진 데이터를 가지고 erd 그림을 그림 )
-- 정규화 : 데이터 베이스 저장 효율성을 높이기 위한 방식 - 데이터 중복 배제, 테이블 분리... 
-- 반정규화 : 분리된 테이블을 하나로 합치는 방식

-- [KK전자의 인사관리시스템 : 사원 테이블 생성 - 정규화 X ] 
-- 사원 테이블의 데이터 : 사원아이디(KID, 기본키), 사원명, 주소, 입사일, 연봉 ,부서번호, 부서명, 부서위치
-- 사원테이블에선 참조키(DEPT_ID), 부서테이블에선 기본키로 연결
-- 기본키를 참조하기 때문에 kk_DEPARTMENT 테이블 먼저 만든다 
-- 기본키와 참조키는 데이터 타입을 같게 만들어준다
SHOW TABLES;
SELECT * FROM EMPLOYEE;
CREATE TABLE kk_DEPARTMENT (DEPT_ID CHAR(3) PRIMARY KEY, DEPT_NAME VARCHAR(10), LOC VARCHAR(10));
CREATE TABLE KK_EMPLOYEE (KID INT PRIMARY KEY auto_increment ,KNAME VARCHAR(10) NOT NULL
			, ADDRESS VARCHAR(20),HIRE_DATE DATE, SALARY INT
			, DEPT_ID CHAR(3)
            , CONSTRAINT FK_KK_EMPLOYEE FOREIGN KEY(DEPT_ID) REFERENCES KK_DEPARTMENT(DEPT_ID));
DESC KK_DEPARTMENT;
DESC KK_EMPLOYEE;
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE TABLE_NAME LIKE'KK%';
ALTER TABLE KK_DEPARTMENT MODIFY COLUMN DEPT_NAME VARCHAR(10) NOT NULL; 

INSERT INTO kk_DEPARTMENT(DEPT_ID, DEPT_NAME, LOC)
VALUES('SYS','정보시스템 ','서울시 서초구'),
('HRD','인사관리','서울시 종로구'),
('ACC','회계관리','서울시 강남구');
INSERT INTO KK_EMPLOYEE(KNAME, ADDRESS, HIRE_DATE, SALARY, DEPT_ID)
VALUES('폴스미스','서울시 서초구 ','2025-01-06',4500,'ACC'),
('알래스캉투','터키','2024-12-25',6000,'SYS');

SELECT * FROM KK_DEPARTMENT;
SELECT * FROM KK_EMPLOYEE;

/* 
 * [학생관리 시스템 설계] 
 * 1. 과목 (SUBJECT) 
 * 컬럼명 : SID(과목아이디), SNAME(과목명), SDATE(등록일: 년월일 시분초)
 * SID는 키본키 자동생성
 * 2. 학생(STUDENT) 테이블은 반드시 하나 이상의 과목을 수갈해야 한다
 * 컬럼: STID(학생명) 기본키 자동생성 널허용 X, GENDER(성별) 문자1 널허용X, SID(과목아이디), STDATE(등록일: 년월일 시분초)
 * 3. 교수(PROFESSOR) : 테이블은 반드시 하나 이상의 과목을 강의해야 한다.
 * 컬럼 - PID(교수아이디, 키본키, 자동생성), NAME(교수명) NULL 허용X, SID(과목아이디), SDATE(등록일자) 년월일 시분초
*/
DROP TABLE SUBJECT;
DROP TABLE STUDENT;
DROP TABLE PROFESSOR;
SHOW TABLES;
CREATE TABLE SUBJECT (SID INT PRIMARY KEY auto_increment, SNAME VARCHAR(10) NOT NULL, SDATE DATETIME);
CREATE TABLE STUDENT (STID INT PRIMARY KEY auto_increment
			, SNAME VARCHAR(10) NOT NULL
			, GENDER CHAR(1) NOT NULL
            , SID INT 
            , SDATE DATETIME
            , CONSTRAINT FK_STUDENT_SID FOREIGN KEY(SID) REFERENCES SUBJECT(SID)); 
CREATE TABLE PROFESSOR (PID INT PRIMARY KEY auto_increment
			 , NAME VARCHAR(10) NOT NULL
             , SID INT
             , SDATE DATETIME
             , CONSTRAINT FK_PROFESSOR_SID FOREIGN KEY(SID) REFERENCES SUBJECT(SID)); 

DESC SUBJECT;
DESC STUDENT;
DESC PROFESSOR;

-- SUBJECT 데이터 추가 
INSERT INTO SUBJECT(SNAME, SDATE)
VALUES('HTML',NOW()),('JAVASCRIPT',NOW()),('MYSQL',NOW());

SELECT * FROM SUBJECT ;
INSERT INTO STUDENT(SNAME, GENDER, SID, SDATE)
VALUES('홍길동','M','1',NOW())
	  ,('테스트','F','2',NOW())
	  ,('김철수','M','3',NOW())
      ,('이영희','F','2',NOW());

INSERT INTO PROFESSOR(NAME, SID, SDATE)
VALUES('스미스','1', SYSDATE())
	  , ('이순신','2', SYSDATE())
      , ('강감찬','3', SYSDATE());

SELECT * FROM SUBJECT;
SELECT * FROM STUDENT;
SELECT * FROM PROFESSOR;

/*********************************
 조인(JOIN) : 두 개 이상의 테이블 연동
  - 두 개 이상의 테이블을 조합하여 집합
  - CROSS(CATESIAN) JOIN(합집합)
    : 두 개 이상의 독립적으로 생성된 경우 연결고리가 없을 때 합집합을 하기 위해 
    : PROFESSOR & STUDENT -> PROFESSOR * STUDENT
  - SELECT [컬럼리스트] FROM [테이블명[alias], 테이블명[alias]]
    WHERE  [조건절]
  - INNER JOUN(교집합) : 두 개 테이블의 JOIN 연결고리를 연동
  - OUTER JOIN : INNER JOIN(교집합) + 선택한 테이블중 교집합에서 제외된 데이터 
  - SELF JOIN : 한 테이블을 조인하는 형식 --> SUB QUERY
*********************************/

-- HTML 과목의 정보를 조회 
SELECT * FROM SUBJECT WHERE SNAME='HTML';
-- PID별로 전체 조인
SELECT * FROM PROFESSOR A, STUDENT B ORDER BY PID;

-- 선택한 컬럼리스트 전체 조인 SELECT PID, NAME(교수명), SID(강의과목), SNAME(학생), GENDER(학생), SDATE
SELECT A.PID, A.NAME, A.SID, B.SNAME, B.GENDER, B.SDATE
FROM PROFESSOR A, STUDENT B;

-- 연결고리가 없는 독립적인 테이블 합집합
-- PROFESSOR, STUDENT, DEPARTMENT 조인하여 모든 데이터 조회
SELECT COUNT(*) FROM PROFESSOR; -- 3 
SELECT COUNT(*) FROM STUDENT;   -- 4
SELECT COUNT(*) FROM DEPARTMENT; -- 7
SELECT COUNT(*) FROM PROFESSOR, STUDENT, DEPARTMENT; -- 84
SELECT * FROM PROFESSOR, STUDENT, DEPARTMENT; 

-- ANSI SQL (SEQUL :: MS-SQL)
SELECT * FROM PROFESSOR CROSS JOIN STUDENT CROSS JOIN DEPARTMENT; -- 112

-- **************************************************
-- INNNER JOIN(교집합) 형식 
-- SELECT [*] FROM [테이블명1 A], [테이블명2 B]
-- WHERE [A.조인컬럼 = B.조인컬럼]
-- AND [조건절~] ;
SELECT * 
FROM SUBJECT A , PROFESSOR B 
WHERE A.SID= B.SID ;

INSERT INTO PROFESSOR(NAME, SID, SDATE) VALUES('안중근',1, NOW());
INSERT INTO SUBJECT(SNAME, SDATE) VALUES('REACT',NOW());

-- HTML 과목을 수강하는 모든 학생을 조회
-- (1) 오라클 방식
SELECT * FROM SUBJECT A, STUDENT B 
WHERE A.SID = B.SID AND A.SNAME='HTML';
-- (2) ANSI SQL [INNER JOIN]
SELECT * FROM SUBJECT A INNER JOIN STUDENT B 
ON A.SID = B.SID 
WHERE A.SNAME='HTML';
-- (3) ANSI SQL [LEFT JOIN]
SELECT * FROM SUBJECT A
LEFT JOIN STUDENT B
ON A.SID = B.SID
WHERE A.SID='1';

-- HTML 과목을 강의하는 모든 교수를 조회
-- (1) 오라클 방식
SELECT * FROM SUBJECT S, PROFESSOR P 
WHERE S.SID = P.SID 
AND SNAME='HTML';
-- (2) ANSI SQL [INNER JOIN]
SELECT * 
FROM SUBJECT A INNER JOIN PROFESSOR B
ON A.SID = B.SID
WHERE SNAME='HTML';

-- 이순신 교수가 강의하는 과목의 과목아이디, 과목명, 교수아이디, 교수명, 교수등록일 조회
-- (1) 오라클 방식
SELECT A.SID, A.SNAME, B.PID, B.NAME, B.SDATE 
FROM SUBJECT A, PROFESSOR B 
WHERE A.SID= B.SID AND B.NAME='이순신';

-- (2) ANSI SQL [INNER JOIN]
SELECT A.SID, A.SNAME, B.PID, B.NAME, B.SDATE 
FROM SUBJECT A INNER JOIN PROFESSOR B 
ON A.SID= B.SID 
WHERE B.NAME='이순신';

-- HTML 과목을 수강하는 모든 학생과 강의하는 교수를 모두 조회 
-- (1) 오라클 방식
SELECT * 
FROM SUBJECT A, STUDENT B, PROFESSOR C
WHERE A.SID = B.SID AND B.SID = C.SID 
AND A.SID ='1';
	-- 테이블 갯수 원리
	SELECT COUNT(*)  -- 16개 = 조인결과행 4개 * STUDENT 4개행 
	FROM SUBJECT A, STUDENT B, PROFESSOR C
	WHERE A.SID= C.SID ;

-- (2) ANSI SQL [INNER JOIN]
SELECT * 
FROM SUBJECT A INNER JOIN STUDENT B INNER JOIN PROFESSOR C
ON A.SID = B.SID AND B.SID = C.SID 
AND A.SID ='1';

-- EMPLOYEE, DEPARTMENT, VACATION, UNIT 데이블들의 ERD 참조
-- 모든 사원들의 사원번호, 사원명, 성별, 부서명, 입사일 조회
-- 사원번호 기준 오름차순 
SELECT * FROM EMPLOYEE; 
SELECT * FROM DEPARTMENT;

SELECT A.EMP_ID, A.EMP_NAME, A.GENDER, B.DEPT_NAME, A.HIRE_DATE
FROM EMPLOYEE A INNER JOIN DEPARTMENT B
ON A.DEPT_ID = B.DEPT_ID
ORDER BY A.EMP_ID;

-- 마케팅부서에 속해있는 사원들의 사원번호, 사원명, 입사일, 급여 조회 
SELECT A.EMP_ID, A.EMP_NAME, A.HIRE_DATE, A.SALARY, B.DEPT_ID, B.DEPT_NAME 
FROM EMPLOYEE A, DEPARTMENT B
WHERE A.DEPT_ID = B.DEPT_ID AND B.DEPT_NAME='영업'; 
 
-- 인사과에 속한 사원들 중에 휴가를 사용한 사원들의 리스트를 모두 조회 
SELECT * 
FROM EMPLOYEE A INNER JOIN  VACATION B 
ON A.EMP_ID = B.EMP_ID 
WHERE A.DEPT_ID= 'HRD';


-- *********************************************************************************  01/07
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
 /********************************************

********************************************/
-- 영업부서인 사원의 사원명, 폰번호, 부서명, 휴가사용 이유 조회
-- 휴가 사용 이유가 '두통'인 사원, 소속본부 조회
select * from employee;
select * from vacation;
select * from UNIT;
-- (1) 오라클 방법
select A.emp_name, A.phone, A.dept_id, B.reason, C.DEPT_NAME ,D.UNIT_NAME
from employee A, vacation B ,department C, UNIT D 
WHERE A.EMP_ID = B.EMP_ID 
AND  A.DEPT_ID = C.DEPT_ID 
AND C.UNIT_ID = D.UNIT_ID
AND A.DEPT_ID='MKT' 
and reason ='두통';

-- (2) ANSI 방법
select A.emp_name, A.phone, B.reason, C.DEPT_NAME ,D.UNIT_NAME
from employee A inner join vacation B inner join department C inner join UNIT D 
ON A.EMP_ID = B.EMP_ID AND  A.DEPT_ID = C.DEPT_ID AND C.UNIT_ID = D.UNIT_ID
WHERE A.DEPT_ID='MKT' 
and reason ='두통';

-- 2014년도 부터 2015년까지 입사한 사원들 중에서 퇴사하지 않은 사원들의 
-- 사원아이디, 사원명, 부서명, 입사일, 소속본부 조회 
-- 소속본부 기준으로 오름차순 정렬
select * from UNIT;
select * from DEPARTMENT;
-- (1) 오라클
SELECT A.EMP_ID, EMP_NAME, A.HIRE_DATE, B.DEPT_NAME , C.UNIT_NAME
FROM EMPLOYEE A, DEPARTMENT B, UNIT C 
WHERE A.DEPT_ID = B.DEPT_ID 
AND B.UNIT_ID = C.UNIT_ID
AND LEFT(A.HIRE_DATE,4) BETWEEN '2014' AND '2015'
AND A.RETIRE_dATE IS NULL
ORDER BY C.UNIT_NAME;

-- (2) ANSI

-- OUTER JOIN 
SELECT * FROM SUBJECT;
SELECT * FROM PROFESSOR;

-- 오라클 형식의 OUTER JOIN은 지원되지 않음!!
-- SELECT *  
-- FROM SUBJECT S, PROFESSOR P 
-- WHERE P.SID = P.SID(+);

-- ANSI SQL : LEFT OUTER JOIN, RIGHT OUTER JOIN  ***********
-- 왼쪽 테이블의 모든 값 + 왼쪽X 오른쪽 값-> NULL
SELECT * 
FROM SUBJECT S LEFT OUTER JOIN PROFESSOR P 
ON S.SID = P.PID;
-- 오른쪽 테이블의 모든 값 + 왼쪽X 오른쪽 값-> NULL
SELECT * 
FROM SUBJECT S RIGHT OUTER JOIN PROFESSOR P 
ON S.SID = P.PID;

-- DEPARTMENT, UNIT 테이블
-- 모든 부서의 본부아이디, 본부이름을 조회
SELECT * FROM DEPARTMENT;
SELECT * FROM UNIT;

SELECT D.DEPT_ID, U.UNIT_ID,  U.UNIT_NAME
FROM DEPARTMENT D LEFT OUTER JOIN UNIT U 
ON D.UNIT_ID = U.UNIT_ID
ORDER BY D.UNIT_ID DESC; 

-- 2017년부터 2018년도까지 입사한 사원들의 사원명, 입사일, 연봉, 부서명을 조회
-- 단 퇴사한 사원들도 모두 조회
-- 소속 본부를 모두 조회
SELECT * FROM UNIT;
SELECT * FROM DEPARTMENT;

SELECT E.EMP_NAME, E.HIRE_DATE, E.SALARY, D.DEPT_NAME, U.UNIT_NAME, E.RETIRE_DATE
FROM EMPLOYEE E INNER JOIN DEPARTMENT D ON E.DEPT_ID = D.DEPT_ID 
				LEFT OUTER JOIN UNIT U ON D.UNIT_ID = U.UNIT_ID 
WHERE LEFT(E.HIRE_DATE, 4) BETWEEN '2017' AND '2018';

-- SUBJECT, STUDENT 테이블 사용 
-- 학생들이 선택하지 않은 과목을 조회 
SELECT * FROM SUBJECT;
SELECT * FROM STUDENT;
SELECT * 
FROM SUBJECT SUB LEFT OUTER JOIN STUDENT STU
ON SUB.SID = STU.SID
WHERE STU.SID IS NULL;

-- SELF JOIN을 위한 테이블 복제 
CREATE TABLE EMP AS SELECT * FROM EMPLOYEE;
DESC EMPLOYEE;
DESC EMP;
-- EMP 테이블의 EMP_ID 컬럼에 기본키 제약 추가
ALTER TABLE EMP ADD CONSTRAINT PK_EMP_ID PRIMARY KEY(EMP_ID);

-- EMP 테이블의 DEPT_ID 컬럼에 FK 제약 추가
-- ALTER TABLE EMP ADD CONSTRAINT FK_DEPT_ID FOREIGN KEY(DEPT_ID) REFERENCES EMP() ;

-- EMP 테이블에 MGR 컬럼 추가 
ALTER TABLE EMP ADD COLUMN MGR CHAR(5);
SELECT * FROM EMP;
SET SQL_SAFE_UPDATES =0;

-- SYS 부서의 사원들의 매니저를 홍길동(S0001) 
UPDATE EMP SET MGR='S0001' WHERE DEPT_ID='SYS';
-- MKT 부서의 사원들의 매니저를 오감자(S0011) 사원으로 업데이트  
UPDATE EMP SET MGR='S0011' WHERE DEPT_ID='MKT';
-- HRD 부서의 사원들의 매니저를 정주고(S0019) 사원으로 업데이트  
UPDATE EMP SET MGR='S0019' WHERE DEPT_ID='HRD';

-- SELF JOIN : EMP테이블의 EMP_ID(기본키), MGR(참조키)
-- 홍길동 사원이 관리하는 모든 사원들의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명 조회
SELECT MANAGER.EMP_ID, MANAGER.EMP_NAME, MANAGER.HIRE_DATE, MANAGER.SALARY, MANAGER.DEPT_ID, D.DEPT_NAME
FROM EMP EMPLOYEE, EMP MANAGER, DEPARTMENT D 
WHERE EMPLOYEE.EMP_ID = MANAGER.MGR
AND  MANAGER.DEPT_ID = D.DEPT_ID
AND MANAGER.MGR='S0001';

-- HRD 부서를 관리하는 모든 매니저의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명 조회
SELECT DISTINCT E.EMP_ID, E.EMP_NAME, E.HIRE_DATE, E.SALARY, E.DEPT_ID, D.DEPT_NAME 
FROM EMP E, EMP M, DEPARTMENT D
WHERE E.EMP_ID = M.MGR
AND M.DEPT_ID= D.DEPT_ID
AND D.DEPT_ID ='HRD'; 

-- *********************************************************************
-- 매니저가 없는 사원의 사원번호, 사원명, 입사일, 급여, 부서아이디 출력 
-- INNER JOIN 진행시 매니저가 없는 사원은 제외됨 
SELECT E.EMP_ID, E.EMP_NAME, E.HIRE_dATE, E.SALARY, E.DEPT_ID, E.MGR
FROM EMP E, EMP M 
WHERE E.EMP_ID = M.EMP_ID
AND M.MGR IS NULL;

-- *********************************************************************
SELECT COUNT(*) FROM EMP WHERE MGR IS NULL;
-- 제외되는 데이터까지 조회하기 위해서는 OUTER JOIN 필요 ********
SELECT DISTINCT M.EMP_ID, M.EMP_NAME, M.HIRE_dATE, M.SALARY, M.DEPT_ID, M.MGR
FROM EMP M LEFT OUTER JOIN EMP E 
ON M.MGR = E.EMP_ID
WHERE M.MGR IS NOT NULL;

SELECT DISTINCT COUNT(*)
FROM EMP M LEFT OUTER JOIN EMP E 
ON M.MGR = E.EMP_ID
WHERE M.MGR IS NOT NULL;

SELECT *
FROM EMP M LEFT OUTER JOIN EMP E 
ON E.EMP_ID = M.MGR
WHERE M.MGR IS NULL;
-- *********************************************************************
-- 홍길동 사원이 관리하는 사원들의 매니저 사원아이디, 매니저사원명, 연봉, 매니저가 관리하는 사번, 매니저가 관리하는 사원이름
SELECT E.EMP_ID, E.EMP_NAME, E.SALARY, M.MGR, M.EMP_NAME
FROM EMP E, EMP M 		-- E:매니저 사원정보, M:매니저가 관리하는 사원테이블 
WHERE E.EMP_ID = M.MGR
AND M.MGR = 'S0001';
-- 홍길동 사원이 관리하는 사원들의  사원아이디, 사원명, 연봉, 매니저사번, 매니저이름
SELECT E.EMP_ID, E.EMP_NAME, E.SALARY, M.MGR, M.EMP_NAME
FROM EMP E, EMP M 		-- E:매니저가 관리하는 사원테이블, M:매니저 사원정보
WHERE E.MGR = M.EMP_ID
AND E.MGR = 'S0001';

SELECT EMP_ID, EMP_NAME, MGR FROM EMP;

/*********************************************************************
 SUB QUERY(서브쿼리) -  
 SELECT [컬럼명,...스칼라 서브쿼리] -> 권장X 
 FROM [(인라인 뷰(서브쿼리))]
 WHERE [(서브쿼리)]
 - 단일행 서브쿼리 : ROW,  
 - 다중행 서브쿼리 : 
 
*********************************************************************/
-- (단일행)홍길동 사원이 속한 부서의 이름과 본부아이디 조회 
SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;
SELECT * FROM EMPLOYEE WHERE EMP_NAME='홍길동';

SELECT DEPT_NAME, UNIT_ID 
FROM DEPARTMENT 
WHERE DEPT_ID = (SELECT DEPT_ID FROM EMPLOYEE WHERE EMP_NAME='홍길동');
-- *******************************************************************
-- 홍길동 사원이 사용한 휴가 내역 조회
-- 2017 ~2018 년도 휴가 내역
SELECT * FROM EMPLOYEE;
SELECT * FROM VACATION;
-- (1) 서브쿼리 방법
SELECT VACATION_ID, EMP_ID, BEGIN_DATE, REASON
FROM VACATION
WHERE EMP_ID= (SELECT EMP_ID FROM EMPLOYEE WHERE EMP_NAME='홍길동')
AND LEFT(BEGIN_DATE,4) BETWEEN '2017' AND '2018';

-- (2) INNER JOIN 형식 
SELECT V.VACATION_ID, V.EMP_ID, V.BEGIN_DATE, V.REASON
FROM VACATION V INNER JOIN EMPLOYEE E
ON V.EMP_ID = E.EMP_ID
WHERE E.EMP_NAME='홍길동'
AND LEFT(V.BEGIN_DATE,4) BETWEEN '2017' AND '2018';
-- *******************************************************************
SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;
SELECT * FROM UNIT;

-- 제 3본부에 속한 부서들을 모두 출력 
SELECT DEPT_ID 
FROM DEPARTMENT D
WHERE UNIT_ID = (SELECT UNIT_ID FROM UNIT WHERE UNIT_NAME='제3본부');

-- 제 3본부에 속한 사원들을 모두 출력 
SELECT * FROM EMPLOYEE 
WHERE DEPT_ID IN (SELECT DEPT_ID 
				 FROM DEPARTMENT D
				 WHERE UNIT_ID = (SELECT UNIT_ID FROM UNIT WHERE UNIT_NAME='제3본부'));

-- 가장 먼저 입사한 사원의 정보를 조회 
-- 서브쿼리로 GROUP함수 안에 넣어 자세한 조건을 출력할 수 있다 
SELECT * 
FROM EMPLOYEE
WHERE HIRE_DATE=(SELECT MIN(HIRE_DATE) FROM EMPLOYEE ) ;

-- 가장 급여가 높은 사원의 정보를 조회
SELECT * 
FROM EMPLOYEE
WHERE SALARY = (SELECT MAX(SALARY) FROM EMPLOYEE);

-- 가장 급여가 낮은 사원의 정보를 조회
SELECT * 
FROM EMPLOYEE
WHERE SALARY = (SELECT MIN(SALARY) FROM EMPLOYEE);

-- 정보시스템 부서의 사원 중에 휴가를 사용한 사원들을 조회 
SELECT * FROM DEPARTMENT;
SELECT * FROM VACATION;

SELECT * FROM  EMPLOYEE
WHERE DEPT_ID = (SELECT DEPT_ID 
				  FROM DEPARTMENT
				  WHERE DEPT_NAME = '정보시스템')
AND EMP_ID IN (SELECT EMP_ID FROM VACATION);

-- 정보시스템 부서의 사원 중에 휴가를 사용하지 않은 사원들을 조회 
SELECT * FROM  EMPLOYEE
WHERE DEPT_ID = (SELECT DEPT_ID 
				  FROM DEPARTMENT
				  WHERE DEPT_NAME = '정보시스템')
AND EMP_ID NOT IN (SELECT EMP_ID FROM VACATION);

/**************************************
  출력 번호 생성 : ROW_NUMBER() OVER(ORDER BY 정렬할 컬럼)
  ** SELECT의 컬럼리스트 자리에 사용되며, * 문자와 동시에 사용 불가 
**************************************/
-- 정보시스템 부서 사원들 사원아이디, 사원명, 입사일 조회 
SELECT ROW_NUMBER() OVER(ORDER BY EMP_ID DESC) AS NO
		, EMP_ID
        , EMP_NAME
        , HIRE_DATE
FROM EMPLOYEE 
WHERE DEPT_ID = (SELECT DEPT_ID FROM DEPARTMENT WHERE DEPT_NAME='정보시스템');

/* [
	{'NO':6, 'ID': 'S0001',....}
	] */

-- 모든 사원의 사원아이디, 사원명, 급여, 부서아이디 조회
-- 출력행 포함 - 급여가 놏은 순
SELECT  ROW_NUMBER() OVER(ORDER BY SALARY DESC) AS NO
		, EMP_ID
        , EMP_NAME
        , SALARY
        , DEPT_ID
FROM EMPLOYEE;

-- 인라인 뷰의 별칭은 반드시 정의 !!
-- 사원별 휴가사용 일수를 사원별로 그룹핑하여, 사원아이디, 사원명, 입사일, 연봉, 휴가사용일수를 조회
-- 휴가사용 일수를 구하는 인라인 뷰와 사원테이블을 조인
SELECT * FROM VACATION;
SELECT * FROM EMPLOYEE;

SELECT ROW_NUMBER() OVER(ORDER BY VCOUNT DESC) AS NO
	   , E.EMP_ID
	   , E.EMP_NAME
       , E.HIRE_DATE
       , CONCAT(FORMAT(E.SALARY, 0),'만원') AS SALARY
       , V.VCOUNT
FROM EMPLOYEE E, (SELECT EMP_ID, SUM(DURATION) AS VCOUNT FROM VACATION GROUP BY EMP_ID ) V
WHERE E.EMP_ID = V.EMP_ID;   

-- HRD 부서 사원들의 휴가 사용 일수와 사원아이디, 사원명, 부서아이디, 부서명 조회
-- 1. HRD 부서의 사원중 휴가를 사용한 사원아이디, 휴가 사용일수 
SELECT EMP_ID, SUM(DURATION) 
FROM VACATION
WHERE EMP_ID IN (SELECT EMP_ID
				   FROM EMPLOYEE 
				  WHERE DEPT_ID = 'HRD')
GROUP BY EMP_ID;

-- 2. 1번 결과와 EMPLOYEE 테이블을 조인하여 사원 상세 정보 출력
SELECT ROW_NUMBER() OVER(ORDER BY E.EMP_ID) AS NO
		, E.EMP_ID
        , E.EMP_NAME
        , E.DEPT_ID
        , (SELECT DEPT_NAME FROM DEPARTMENT WHERE DEPT_ID ='HRD') AS DNAME
        , V.VCOUNT
FROM EMPLOYEE E, (SELECT EMP_ID, SUM(DURATION) AS VCOUNT 
					FROM VACATION
					WHERE EMP_ID IN (SELECT EMP_ID FROM EMPLOYEE WHERE DEPT_ID = 'HRD')
					GROUP BY EMP_ID) V 
WHERE E.EMP_ID = V.EMP_ID;



-- *********************************************************************************  01/08
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************
-- *********************************************************************************

-- [휴가를 사용한 사원정보만!!]
-- 사원별 휴가사용 일수를 그룹핑하여, 사원아이디, 사원명, 입사일, 연봉, 휴가 사용일수를 조회
-- 1. 사원별 휴가사용 일수를 그룹핑 작업을 수행하는 인라인뷰 
show tables;
select * from employee;
select * from vacation;

select emp_id, sum(duration) as vcount  
from vacation 
group by emp_id;

-- 2. 1번의 인라인 뷰와 employee테이블과 조인
select  row_number() over(order by v.vcount desc)  as no
		, e.emp_id, e.emp_name, e.hire_date, e.salary, v.vcount 
from employee e, (select emp_id, sum(duration) as vcount  
					from vacation 
				 group by emp_id) v
where e.emp_id = v.emp_id;


-- [전체 사원의 휴가일수 조회 : 휴가를 사용한 사원정보 + 사용하지 않은 사원]
-- 사원별 휴가결제횟수, 휴가전체사용일수를 그룹핑하여,
-- 사원아이디, 사원명, 입사잉ㄹ, 연봉, 휴가결제횟수, 휴가전체 사용일수 조회
-- 단, 휴가를 사용하지 않은 사원의 휴가결제횟수, 휴가전체 사용일수는 0값으로 할당
select * from employee;
select * from vacation;
-- 1. 사원별 휴가결제횟수, 휴가전체사용일수를 그룹핑 작업 인라인뷰
select emp_id, count(emp_id) as count , sum(duration)  as vcount
from vacation 
group by emp_id;

-- 2. 1번의 인라인뷰 결과 테이블과 employee 테이블 left/right outer join 
-- *** mysql에서 outer join은 ANSI SQL 만 사용가능 *******
select ROW_NUMBER() OVER(ORDER BY COUNT DESC) AS NO
		, e.emp_id
		, e.emp_name
        , e.hire_date
        , CONCAT(FORMAT(e.salary,0), '만원') AS SALARY
        , ifnull(v.count, 0) as count
        , ifnull(v.vcount,0) as vcount
from employee e 
left outer join (select emp_id, count(emp_id) as count , sum(duration)  as vcount
				from vacation 
				group by emp_id) v
on e.emp_id = v.emp_id;
                    
-- 스칼라 서브 쿼리 : 권장X, ORACLE, DB2는 데이트베이스는 사용불가  
-- HRD 부서의 사원들의 사원아이디, 사원명, 부서아이디, 부서명 조회 
SELECT EMP_ID
		, EMP_NAME 
        , DEPT_ID
        , (SELECT DEPT_NAME FROM DEPARTMENT WHERE DEPT_ID='HRD') AS DEPT_NAME
        , (SELECT UNIT_NAME FROM UNIT 
		  WHERE UNIT_ID = (SELECT UNIT_ID FROM DEPARTMENT WHERE DEPT_ID='HRD')) AS UNIT_NAME
FROM EMPLOYEE
WHERE DEPT_ID='HRD';

-- 번호, 사원아이디, 사원명, 입사일, 부서아이디 출력
-- 급여 순으로 사원들을 정렬. 상위 5명의 사원만 출력 
SELECT 	NO
		, EMP_ID
        , EMP_NAME
        , SALARY
FROM (SELECT ROW_NUMBER() OVER(ORDER BY SALARY DESC) AS NO
			, EMP_ID
			, EMP_NAME
			, HIRE_DATE
			, DEPT_ID
			, SALARY 
		FROM EMPLOYEE) T1
WHERE T1.NO <= 5;

-- 입사일이 가장 빠른 사원 10명의 사원아이디, 사원명, 부서아이디를 조회
SELECT *
FROM (SELECT  ROW_NUMBER() OVER(ORDER BY HIRE_DATE) AS NO  -- ROW_NUMBER은 서브쿼리로 빼야 정상작동한다 ******
				, EMP_ID
				, EMP_NAME
				, DEPT_ID
		FROM EMPLOYEE) T1
WHERE T1.NO <= 10;

-- 사원들의 급여 합계(그룹함수)가 가장 작은 부서의 사원들을 조회
SELECT EMP_ID, EMP_NAME 
FROM EMPLOYEE
WHERE DEPT_ID = (SELECT DEPT_ID
					FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY))AS NO
								, DEPT_ID 
								, SUM(SALARY) AS SALARY
						 FROM EMPLOYEE 
						 WHERE SALARY IS NOT NULL
						 GROUP BY DEPT_ID) T1
					WHERE T1.NO = 1);
/**********************************************
	SELF JOIN 서브쿼리로 변경 
***********************************************/
-- SELF JOIN : EMP 테이블의 EMP_ID(기본키), MGR(참조키)
-- 홍길동 사원이 관리하는 모든 사운들의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명 조회 
-- 서브 쿼리를 이용하여 실행 

-- (방법1) 
SELECT ROW_NUMBER() OVER(ORDER BY EMP_ID) AS NO
		, EMP_ID, EMP_NAME, HIRE_DATE, SALARY , D.DEPT_ID, D.DEPT_NAME
FROM DEPARTMENT D, (SELECT EMP_ID
						, EMP_NAME
						, HIRE_DATE
						, SALARY
						, DEPT_ID
						, MGR
					FROM EMP E 
					WHERE MGR = (SELECT EMP_ID FROM EMP WHERE EMP_NAME='홍길동')) E
WHERE D.DEPT_ID = E.DEPT_ID;        

-- (방법2) 효율성이 떨어짐 --> 서브쿼리의 집합의 크기를 작게 만들어야 속도 향상
SELECT ROW_NUMBER() OVER(ORDER BY EMP_ID) AS NO
		, EMP_ID, EMP_NAME, HIRE_DATE, SALARY , D.DEPT_ID, D.DEPT_NAME
FROM EMP E, DEPARTMENT D
WHERE E.DEPT_ID = D.DEPT_ID 
AND MGR = (SELECT EMP_ID FROM EMP WHERE EMP_NAME='홍길동');

-- *******************************************************
-- HRD 부서를 관리하는 매니저의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명을 조회
-- (방법1) 서브쿼리의 집합의 크기를 작게 만들어야 속도 향상 & 효율성 높아짐  >>   
SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY , D.DEPT_ID, D.DEPT_NAME
FROM DEPARTMENT D,(SELECT EMP_ID, EMP_NAME,HIRE_DATE, SALARY, DEPT_ID
					FROM EMP E
					WHERE EMP_ID = (SELECT DISTINCT MGR FROM EMP WHERE DEPT_ID ='HRD')) E
WHERE D.DEPT_ID = E.DEPT_ID;

-- (방법2) 효율성 떨어짐 
SELECT E.EMP_ID, E.EMP_NAME, E.HIRE_DATE, E.SALARY, D.DEPT_ID, D.DEPT_NAME
FROM EMP E, DEPARTMENT D
WHERE E.DEPT_ID = D.DEPT_ID
AND EMP_ID = (SELECT DISTINCT MGR FROM EMP WHERE DEPT_ID ='HRD');

-- *******************************************************
-- 매니저가 없는 사원의 사원번호, 사원명, 입사일, 급여, 부서아이디, 부서명, 소속본부를 조회 
SELECT E.EMP_ID, E.EMP_NAME, E.HIRE_DATE, E.SALARY, D.DEPT_ID, D.DEPT_NAME, U.UNIT_NAME
FROM DEPARTMENT D
	, UNIT U
    , (SELECT EMP_ID, EMP_NAME, HIRE_DATE, SALARY, DEPT_ID 
		FROM EMP 
		WHERE MGR IS NULL)E
WHERE D.DEPT_ID = E.DEPT_ID 
AND D.UNIT_ID = U.UNIT_ID;                            
        
--         
SELECT E.EMP_ID, E.EMP_NAME, E.HIRE_DATE, E.SALARY, D.DEPT_ID, D.DEPT_NAME, U.UNIT_NAME
FROM DEPARTMENT D
	, UNIT U
    , EMP E
WHERE D.DEPT_ID = E.DEPT_ID 
AND D.UNIT_ID = U.UNIT_ID
AND E.MGR IS NULL;  

/** 조인이나 서브쿼리 작업시 효율성을 높이기 위해 집합을 작게 만들고 진행하는 것이 좋음 **/
/***************************************************
  쿼리 결과 합치기: UNION, UNION ALL
  형식 : 쿼리1 UNION/UNION ALL 쿼리2
  ** 쿼리1, 쿼리2의 실행 결과 컬럼리스트가 동일 **
***************************************************/
-- HRD 부서의 사원아이디, 사원명, 부서명, 연봉
-- SYS 부서의 사원아이디, 사원명, 부서명, 연봉 실행 결과 합치기 
SELECT EMP_ID, EMP_NAME, DEPT_ID, SALARY 
FROM EMPLOYEE 
WHERE DEPT_ID= 'HRD'
UNION ALL
SELECT EMP_ID, EMP_NAME, DEPT_ID, SALARY 
FROM EMPLOYEE 
WHERE DEPT_ID= 'SYS';

-- 영업, 정보시스템 부서로 조회
SELECT EMP_ID, EMP_NAME, DEPT_ID, SALARY 
FROM EMPLOYEE 
WHERE DEPT_ID= (SELECT DEPT_ID FROM DEPARTMENT WHERE DEPT_NAME='영업')
UNION ALL
SELECT EMP_ID, EMP_NAME, DEPT_ID, SALARY 
FROM EMPLOYEE 
WHERE DEPT_ID= (SELECT DEPT_ID FROM DEPARTMENT WHERE DEPT_NAME='정보시스템');

-- 2013 ~ 2016년도 사이에 입사한 사원과 
-- SYS 부서의 사원들의 아이디, 사원명, 부서아이디, 폰번호, 연봉
-- UNION ALL (중복허용, 전체 데이터 모두 출력) :22
-- UNION (중복허용X, 전체 데이터 모두 출력) :17
SELECT COUNT(*) 
FROM (SELECT EMP_ID, EMP_NAME, DEPT_ID, PHONE, SALARY 
		FROM EMPLOYEE 
		WHERE LEFT(HIRE_DATE, 4) BETWEEN '2013' AND '2016'
		UNION 
	 SELECT EMP_ID, EMP_NAME, DEPT_ID, PHONE, SALARY 
	    FROM EMPLOYEE 
		WHERE DEPT_ID ='SYS') T1;

-- 2013 ~ 2015 년도별, 부서들의 연봉 합계가 가장 높은 부서들만 조회
SELECT ROW_NUMBER() OVER(ORDER BY YEAR) AS NO
		, YEAR, DEPT_ID, SALARY
FROM ( SELECT *
		FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
					   , LEFT(HIRE_DATE,4) AS YEAR
					   , DEPT_ID
					   , SUM(SALARY) AS SALARY
				FROM EMPLOYEE
				WHERE LEFT(HIRE_DATE,4) = '2013'
				GROUP BY YEAR, DEPT_ID) T1
		WHERE T1.NO =1
		UNION
		SELECT *
		FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
					   , LEFT(HIRE_DATE,4) AS YEAR
					   , DEPT_ID
					   , SUM(SALARY) AS SALARY
				FROM EMPLOYEE
				WHERE LEFT(HIRE_DATE,4) = '2014'
				GROUP BY YEAR, DEPT_ID) T1
				WHERE T1.NO =1
				UNION
				SELECT *
				FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
							   , LEFT(HIRE_DATE,4) AS YEAR
							   , DEPT_ID
							   , SUM(SALARY) AS SALARY
						FROM EMPLOYEE
						WHERE LEFT(HIRE_DATE,4) = '2015'
						GROUP BY YEAR, DEPT_ID) T1
				WHERE T1.NO =1) E;       
                
-- ****************************************************************			
-- VIEW 생성 : VIEW_SUM_SALARY 
CREATE VIEW VIEW_SUM_SALARY AS
SELECT ROW_NUMBER() OVER(ORDER BY YEAR) AS NO
		, YEAR, DEPT_ID, SALARY
FROM ( SELECT *
		FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
					   , LEFT(HIRE_DATE,4) AS YEAR
					   , DEPT_ID
					   , SUM(SALARY) AS SALARY
				FROM EMPLOYEE
				WHERE LEFT(HIRE_DATE,4) = '2013'
				GROUP BY YEAR, DEPT_ID) T1
		WHERE T1.NO =1
		UNION
		SELECT *
		FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
					   , LEFT(HIRE_DATE,4) AS YEAR
					   , DEPT_ID
					   , SUM(SALARY) AS SALARY
				FROM EMPLOYEE
				WHERE LEFT(HIRE_DATE,4) = '2014'
				GROUP BY YEAR, DEPT_ID) T1
				WHERE T1.NO =1
				UNION
				SELECT *
				FROM (SELECT ROW_NUMBER() OVER(ORDER BY SUM(SALARY) DESC ) AS NO
							   , LEFT(HIRE_DATE,4) AS YEAR
							   , DEPT_ID
							   , SUM(SALARY) AS SALARY
						FROM EMPLOYEE
						WHERE LEFT(HIRE_DATE,4) = '2015'
						GROUP BY YEAR, DEPT_ID) T1
				WHERE T1.NO =1) E;   
                
SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA = 'HRDB2019';   
SELECT NO
		, CONCAT(YEAR, '년도') AS YEAR
        , DEPT_ID
        , CONCAT(FORMAT(SALARY, 0),'만원') AS SALARY 
FROM VIEW_SUM_SALARY;

/********************************************
	VIEW(뷰) : 논리적인 가상의 테이블
	- SQL을 실행하여 생성되는 테이블
    - 형식 : CREATE VIEW [생성하는 VIEW이름] AS 서브쿼리  
    - 삭제 : DROP VIEW [VIEW 이름]
********************************************/
-- SHOW VIEWS; 물리적인 테이블이 아니라 볼 수 없음 
-- VIEW는 SQL을 통해 생성되므로 INFORMATION_SCHEMA라는 사전에 등록됨 
-- 전체 뷰 리스트 조회시 INFORMATION_SCHEMA.VIEWS
SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_NAME='VIEW_EMP_DEPT_UNIT';
SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA='HRDB2019';
-- EMPLOYEE, DEPARTMENT, UNIT 테이블을 조인한 뷰 생성
-- 뷰 이름 : VIEW_EMP_DEPT_UNIT
CREATE VIEW VIEW_EMP_DEPT_UNIT 
AS
SELECT E.EMP_ID
	 , E.EMP_NAME
     , E.HIRE_DATE
     , D.DEPT_ID
     , D.DEPT_NAME
     , U.UNIT_NAME
FROM EMPLOYEE E, DEPARTMENT D, UNIT U
WHERE E.DEPT_ID = D.DEPT_ID
AND D.UNIT_ID = U.UNIT_ID
ORDER BY E.EMP_ID; 

SELECT * FROM VIEW_EMP_DEPT_UNIT;
SELECT * FROM VIEW_EMP_DEPT_UNIT WHERE DEPT_ID='SYS';

-- VIEW 삭제 
SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA='HRDB2019';
DROP VIEW VIEW_EMP_DEPT_UNIT;


-- 매니저(홍길동, 오감자, 정주고)에 따라 관리하는 모든 사원들의
-- 사원번호, 사원병, 입사일, 급여, 부서아이디, 부서명을 조회하는 서브쿼리를 생성 후 뷰로 저장 
-- VIEW 이름 : VIEW_EMP_MGR
CREATE VIEW VIEW_EMP_MGR AS
SELECT E.EMP_ID AS MGR_ID
				, E.EMP_NAME AS MGR_NAME
				, M.EMP_ID
				, M.EMP_NAME
				, D.DEPT_ID
				, D.DEPT_NAME
		FROM EMP E, EMP M, DEPARTMENT D
		WHERE E.EMP_ID = M.MGR 
		AND M.DEPT_ID = D.DEPT_ID
		ORDER BY E.EMP_ID;

SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA ='HRDB2019';
SELECT * FROM VIEW_EMP_MGR;
DROP VIEW VIEW_EMP_MGR;

-- 홍길동 매니저가 관리하는 사원들 조회
SELECT ROW_NUMBER() OVER(ORDER BY MGR_ID) AS NO
		, EMP_ID, EMP_NAME, DEPT_NAME
FROM VIEW_EMP_MGR WHERE MGR_NAME ='홍길동';
-- 정주고 매니저가 관리하는 사원들 조회
SELECT EMP_ID, EMP_NAME, DEPT_NAME
FROM VIEW_EMP_MGR WHERE MGR_NAME ='정주고';
-- 오감자 매니저가 관리하는 사원들 조회
SELECT EMP_ID, EMP_NAME, DEPT_NAME
FROM VIEW_EMP_MGR WHERE MGR_NAME ='오감자';

-- [전체 사원의 휴가일수 조회 : 휴가를 사용한 사원정보 + 사용하지 않은 사원]
-- 사원별, 휴가 결제횟수, 휴가전체사용일수를 그룹핑하여
-- 사원아이디, 사원명, 입사일, 연봉, 휴가결제횟수, 휴가전체사용일수는 0값으로 할당, 부서아이디, 부서명, 소속본부 조회
-- 단. 휴가를 사용하지 않은 사원의 결제회수, 휴가전체 사용일수는 0값으로 할당
-- VIEW이름 : VIEW_EMP_VACATION;
CREATE VIEW VIEW_EMP_VACATION AS 
SELECT ROW_NUMBER() OVER(ORDER BY EMP_ID) AS NO
	   , E.EMP_ID
	   , E.EMP_NAME
       , E.HIRE_DATE
       , E.SALARY
       , IFNULL(V.COUNT,0) AS COUNT
       , IFNULL(V.VCOUNT,0) AS VCOUNT
       , D.DEPT_ID
       , D.DEPT_NAME
       , U.UNIT_NAME
FROM EMPLOYEE E LEFT OUTER JOIN (SELECT EMP_ID
									, COUNT(EMP_ID) AS COUNT
									, SUM(DURATION) AS VCOUNT
								FROM VACATION
								GROUP BY EMP_ID)V
ON E.EMP_ID = V.EMP_ID
INNER JOIN DEPARTMENT D ON E.DEPT_ID = D.DEPT_ID 
LEFT OUTER JOIN UNIT U ON D.UNIT_ID= U.UNIT_ID;

SELECT * FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_SCHEMA ='HRDB2019';
-- 홍길동 휴가 사용일수 및 정보 조회
SELECT * FROM VIEW_EMP_VACATION WHERE EMP_NAME='홍길동';
































