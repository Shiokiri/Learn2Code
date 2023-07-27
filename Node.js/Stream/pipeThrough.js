async function* ints() {
  for (let i = 0; i < 5; i++) {
    yield await new Promise((resolve) => setTimeout(resolve, 1000, i));
  }
}

const integerStream = new ReadableStream({
  async start(controller) {
    for await (let chunk of ints()) {
      controller.enqueue(chunk);
    }
    controller.close();
  },
});

const doubleingStream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk * 2);
  },
});

const pipedStream = integerStream.pipeThrough(doubleingStream);

const pipedStreaDefaultReader = pipedStream.getReader();

(async function () {
  while (true) {
    const { done, value } = await pipedStreaDefaultReader.read();
    if (done) {
      break;
    } else {
      console.log(value);
    }
  }
})();
