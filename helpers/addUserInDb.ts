import bcrypt from "bcrypt";
import Admin from "../model/admin/admin.model";
import jwt from "jsonwebtoken";
import "dotenv/config";

type UserDataParams = {
  email: string;
  password: string;
  userType: string;
};

const addUserInDb = async (userData: UserDataParams) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  userData.password = hashedPassword;
  const admin = new Admin(userData);
  if (process.env.SECRET_KEY_Admin) {
    await admin.save();
    return jwt.sign({ userData }, process.env.SECRET_KEY_Admin, {
      expiresIn: "2h",
    });
  } else {
    return "something went wrong";
  }
};

export { addUserInDb };
