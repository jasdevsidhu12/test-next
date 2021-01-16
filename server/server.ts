const express = require('express');
const { parse } = require('url');
const { default: next } = require('next');
import * as functions from "firebase-functions";

const app = express();

const server = next({
  dev: false,
  conf: { distDir: './server/dist/_next' },
});

const nextjsHandle = server.getRequestHandler();

app.get('/test', (req: any, res: any) => {
  const parsedUrl = parse(req.url, true)
  server.prepare().then(() => nextjsHandle(req, res, parsedUrl));
})

export const helloWorld = functions.https.onRequest(app);