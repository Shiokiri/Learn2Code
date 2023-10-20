async function loadWasm() {
  const response = await fetch("test.wasm");
  const buffer = await response.arrayBuffer();
  const wasm = await WebAssembly.instantiate(buffer);

  const addTwo = wasm.instance.exports.addTwo;
  const result = addTwo(1, 2);

  console.log(result);
}

loadWasm();
