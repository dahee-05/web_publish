/*
 * mysql2를 통해 접근
 */
import mysql from 'mysql2';

const pool = mysql.createPool({
  host :'localhost',
  port : 3306,
  user : 'root',
  password : 'mysql1234',
  database : 'hrdb2019'
});

export const db = pool.promise();




