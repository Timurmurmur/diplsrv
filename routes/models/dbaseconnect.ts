import { Sequelize, Model } from "sequelize";
import { User } from "./userModel";

export const dbFunc = () => {
  const sequelize = new Sequelize(
    "mysql://b054d67a1d9d31:1e4a5b65@eu-cdbr-west-02.cleardb.net/heroku_6b4a499c8042da2?reconnect=true"
  );
  sequelize
    .authenticate()
    .then(() => {
      console.log("connected");
    })
    .catch((e) => {
      console.log("errror", e);
    });

  return sequelize;
};
