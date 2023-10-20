async function loadWasm() {
  const importObject = {
    console: {
      log: () => {
        console.log("log called");
      },
      error: () => {
        console.log("error called");
      },
    },
  };

  const response = await fetch("add.wasm");
  const buffer = await response.arrayBuffer();
  debugger;
  const wasm = await WebAssembly.instantiate(buffer, importObject);

  const add = wasm.instance.exports.add;
  const result = add(1, 2);

  console.log(result);
}

loadWasm();
