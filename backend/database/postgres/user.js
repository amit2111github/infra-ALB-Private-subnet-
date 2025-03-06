import { getPool } from "./client.js";

export const createUser = ({ name, email }) =>
  getPool().query(`insert into users (name , email) values ($1,$2)`, [
    name,
    email,
  ]);

export const modifyUser = ({ userId, ...rest }) => {
  const updateFields = Object.entries(rest).reduce((acc, [key, value]) => {
    return acc + ` ${key} = '${value}',`;
  }, "");
  return getPool().query(
    `update users set ${updateFields.slice(
      0,
      updateFields.length - 1
    )} where id = $1`,
    [userId]
  );
};

export const getUserWithId = ({ userId }) =>
  pool.query(`select * from users where id = $1`, [userId]);

export const listUsers = () => getPool().query(`select * from users`);

export const deleteUserWithId = ({ userId }) =>
  getPool().query(`delete from users where id = $1`, [userId]);
