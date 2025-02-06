import mysql from 'mysql2';

const pool = mysql.createPool({
  host:"localhost",
  port: 3306,
  user: "root",
  password:'mysql1234',
  database:'hrdb2019'
});

export const db = pool.promise(); 

/*
 * promise()를 사용하는 이유? 
 * 비동기 처리가 가능
 * await/async 사용 가능 -> 비동기 코드를 직관적으로 사용할 수 있음 
*/