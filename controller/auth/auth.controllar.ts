import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../../model/users/user.model";
import bcrypt from "bcrypt";

const authUser = {
  // login user
  loginUser: async (req, res) => {
    const header = await req.header("Authorization");
    const { email, password } = await req.body;
    if (header) {
      try {
        const decoded = jwt.verify(header, process.env.SECRET_KEY_Admin);
        res.send("user Logged In");
      } catch {
        res.send("something went role");
      }
    } else if (email && password) {
      try {
        const userInDb = await User.findOne({
          email: userData.email,
        });
        if (userInDb) {
          const token = jwt.sign({ userInDb }, process.env.SECRET_KEY_Admin, {
            expiresIn: "2hr",
          });
        }
      } catch {
        res.send("something went wrong");
      }
    } else {
      res.send("something went wrong");
    }
  },

  // resgister user
  registerUser: async (req, res, next) => {
    const userData = req.body;
    if (
      userData.name &&
      userData.userName &&
      userData.email &&
      userData.userType &&
      userData.password
    ) {
      try {
        const userInDb = await User.findOne({
          email: userData.email,
        });
        if (userInDb) {
          res.send("User Already Exists");
        } else {
          const hashedPassword = await bcrypt.hash(userData.password, 10);
          userData.password = hashedPassword;
          if (userData?.userType === "admin" && process.env.SECRET_KEY_Admin) {
            const user = new User(userData);
            const token = jwt.sign({ userData }, process.env.SECRET_KEY_Admin, {
              expiresIn: "2h",
            });
            await user.save();
            res.send({ token: token });
          }
        }
      } catch (err) {
        console.log(err);
        res.send("Something is not right");
      }
    } else {
      res.send("something is missing");
    }
  },
};

export { authUser };
