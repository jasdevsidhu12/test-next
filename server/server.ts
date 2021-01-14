const express = require('express');
const { parse } = require('url');
const { default: next } = require('next');

const app = express();
const port = 3000;

app.use(express.static('public'));

const server = next({
  dev: false,
  conf: { distDir: './public/_next' },
});

const nextjsHandle = server.getRequestHandler();

app.get('/test', (req: any, res: any) => {
  const parsedUrl = parse(req.url, true)
  server.prepare().then(() => nextjsHandle(req, res, parsedUrl));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})