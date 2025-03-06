import {
  createUser,
  deleteUserWithId,
  getUserWithId,
  listUsers,
  modifyUser,
} from "../database/postgres/user.js";

export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(name, email);
    if (!name || !email) {
      return res
        .status(501)
        .json({ error: "Missing User Details : Name or Email" });
    }

    await createUser({ name, email });
    return res.json({ status: "ok" });
  } catch (err) {
    return res.status(501).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userId, ...rest } = req.body;
    if (!userId) return res.status(501).json({ error: "Missing UserId" });
    await modifyUser({ userId, ...rest });
    return res.json({ status: "ok" });
  } catch (err) {
    return res.status(501).json({ error: err.message });
  }
};

export const getAllUser = async (_, res) => {
  try {
    const { rows } = await listUsers();
    return res.json({ status: "ok", users: rows });
  } catch (err) {
    return res.status(501).json({ error: err.message });
  }
};

export const getUserFromId = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(501).json({ error: "userid is mandatory" });
    return getUserWithId({ userId });
  } catch (err) {
    return res.status(501).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) return res.status(501).json({ error: "userid is mandatory" });
    await deleteUserWithId({ userId });
    return res.json({status : "ok"})
  } catch (err) {
    return res.status(501).json({ error: err.message });
  }
};
