const { Transform } = require('stream')

class TransfromStream extends Transform {
  constructor(options) {
    super(options);
  }
  _transform(chunk, encoding, done) {
    const upperChunk = chunk.toString().toUpperCase()
    this.push(upperChunk)
    done()
  }
  _flush(cb) {
    this.push('this is flush data\n')
    cb(null, 'appending more data\n')
  }
}

const transformStream = new TransfromStream()

transformStream.pipe(process.stdout)
transformStream.write('hello transform stream\n')
transformStream.write('another line\n')
transformStream.end()
