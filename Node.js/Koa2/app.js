const Koa = require("koa");
const Router = require("koa-router");
const jwt = require("koa-jwt");
const jsonwebtoken = require("jsonwebtoken");

const app = new Koa();
const router = new Router();
const secret = "jwt-secret";

router.use(
  jwt({
    secret,
    cookie: "token",
    debug: true,
  }).unless({ path: [/^\/public/] })
);

router.get("/", async (ctx) => {
  ctx.type = "html";
  ctx.body = "<h1>Hello world!</h1>";
});

router.get("/auth", async (ctx) => {
  ctx.body = ctx.state.user;
});

router.get("/public/token", async (ctx) => {
  const token = jsonwebtoken.sign({ name: "jwt-test" }, secret, {
    expiresIn: "1h",
  });
  ctx.cookies.set("token", token, {
    domain: "localhost",
    path: "/",
    maxAge: 1 * 60 * 60 * 1000,
    httpOnly: true,
    overwrite: true,
  });
  ctx.body = token;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
