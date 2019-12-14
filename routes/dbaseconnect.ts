import { Sequelize, Model } from "sequelize";
class User extends Model {}

export const dbFunc = () => {
  const sequelize = new Sequelize("data for connect");
  sequelize
    .authenticate()
    .then(() => {
      console.log("connected");
    })
    .catch(e => {
      console.log("errror", e);
    });
  sequelize
    .query("SELECT * FROM heroku_6b4a499c8042da2")
    .then(([result, metadata]) => {
      console.log(result, metadata);
    });
};
