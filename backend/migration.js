import { getPool } from "./database/postgres/client.js";
export const migration = async () => {
  await getPool().query(
    `create table if not exists users (id serial primary key,name text , email text unique)`
  );
};
