import express from 'express';
import ExpressError from './expressError';

const app = express();

app.get('/', (req, res, next) => {
  res.send("Hello, world!");
});

app.use((req, res, next) => {
  const notFoundError = new ExpressError("Page not found", 404);
  next(notFoundError);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});