export const options = {
  excludes: { userAgent: true, language: true }
};

export const access_header = {
  algorithm: "HS256",
  expiresIn: "5d"
};

export const refresh_header = {
  algorithm: "HS256",
  expiresIn: "25d"
};
export const _SECRET = "SUPER_SECRET_KEY";
