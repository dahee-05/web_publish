/* 연결할 DB의 정보를 담아 놓은 곳 */
import mysql from 'mysql2';

const pool = mysql.createPool({
  host:'localhost',
  port: 3306,
  user: 'root',
  password: 'mysql1234',
  database : 'hrdb2019'
});

export const db = pool.promise();