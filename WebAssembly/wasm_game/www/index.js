import init, { hello } from "wasm_game";

init().then(() => {
  hello("Hello from JS");
  console.log("log");
});
