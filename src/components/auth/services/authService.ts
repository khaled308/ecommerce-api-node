import User from "../../user/models/User";
import bcrypt from "bcrypt";
import crypto from "crypto";

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

  async createResetPasswordTokenService({ email = "" }) {
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error("User not found");
      }
      const resetPasswordToken = crypto.randomBytes(32).toString("hex");
      const resetPasswordExpire = Date.now() + 3600000;

      await User.update(
        {
          resetPasswordToken,
          resetPasswordExpire,
        },
        { where: { email } }
      );

      return { resetPasswordToken, resetPasswordExpire };
    } catch (err) {
      throw err;
    }
  }

  async resetPasswordService({ token = "", password = "" }) {
    try {
      const user = await User.findOne({
        where: {
          resetPasswordToken: token,
          // resetPasswordExpire: { $gt: Date.now() }, //there is error
        },
      });
      if (!user || user?.dataValues.resetPasswordExpire < Date.now()) {
        throw new Error("Invalid token");
      }
      password = await bcrypt.hash(password, 10);
      await User.update(
        {
          password,
          resetPasswordToken: null,
          resetPasswordExpire: null,
        },
        { where: { email: user.dataValues.email } }
      );

      return user;
    } catch (err) {
      throw err;
    }
  }
}

export default new AuthService();
