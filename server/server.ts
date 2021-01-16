const express = require('express');
const { parse } = require('url');
const { default: next } = require('next');
import * as functions from "firebase-functions";

const app = express();
// const port = 3000;

// app.use(express.static('./server/dist'));

const server = next({
  dev: false,
  conf: { distDir: './server/dist/_next' },
});

const nextjsHandle = server.getRequestHandler();

app.get('/test', (req: any, res: any) => {
  const parsedUrl = parse(req.url, true)
  server.prepare().then(() => nextjsHandle(req, res, parsedUrl));
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });
export const helloWorld = functions.https.onRequest(app);