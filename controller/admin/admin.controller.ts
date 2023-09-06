import { Request, Response } from "express";
import { isUserInDb } from "../../helpers/isUserInDb";
import { addUserInDb } from "../../helpers/addUserInDb";

const registerAdmin = async (req: Request, res: Response) => {
  let data = await req.body;
  data.userType = data.userType.toLowerCase();
  const { email, userType, password } = data;
  if (email && userType === "admin" && password) {
    const adminInDb = await isUserInDb(userType, email);
    if (adminInDb) {
      res.send("user Already exists");
    } else {
      const token = await addUserInDb(data);
      res.send({ token: token });
    }
  } else {
    res.send("something went wrong");
  }
};

export { registerAdmin };
