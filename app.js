var createError = require("http-errors");
var express = require("express");

import {
  indexFunc
} from "./routes/index";
import {
  homeFunc
} from './routes/home';
export const app = express();

// view engine setup
app.get('/', (req, res, next) => {
  indexFunc(req, res);
})

app.get('/home', (req, res, next) => {
  homeFunc(req, res);
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


app.listen(3000);