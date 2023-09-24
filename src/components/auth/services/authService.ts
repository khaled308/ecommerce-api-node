import User from "../../user/models/User";
import bcrypt from "bcrypt";

class AuthService {
  async registerService({ email = "", password = "", name = "" }) {
    try {
      password = await bcrypt.hash(password, 10);
      const user = await User.create({
        email,
        password,
        name,
      });
      return user;
    } catch (err) {
      throw err;
    }
  }

  async loginService({ email = "", password = "" }) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error("User not found");
      }
      const valid = await bcrypt.compare(password, user.dataValues.password);

      if (!valid) {
        throw new Error("Incorrect password");
      }
      return user;
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthService();
