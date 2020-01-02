import jwt from "jsonwebtoken";
import { userData } from "../common/types";
import { _SECRET, access_header, refresh_header } from "../common/constants";
import { db } from "../db/data";

export const createJwtPare = (userData: userData) => {
  const { email, password } = userData;
  const date = Date.now();

  let accessToken = jwt.sign(userData, _SECRET, access_header);
  console.log(accessToken);

  let refreshToken = jwt.sign(userData, _SECRET, refresh_header);
  console.log(refreshToken, "refresh");
  db.addUser({ email: email, pass: password, expiresIn: date, refreshToken });

  console.log(jwt.decode(accessToken), jwt.decode(refreshToken));

  return { accessToken };
};
