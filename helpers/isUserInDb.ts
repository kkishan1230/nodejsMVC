import Admin from "../model/admin/admin.model";

const isUserInDb = async (userType: string, email: string) => {
  if (userType == "admin") {
    try {
      const adminAccountExists = await Admin.findOne({
        email: email,
      });
      return adminAccountExists;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
};

export { isUserInDb };
