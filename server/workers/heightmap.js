const WorkerAbstract = require("./abstract");
const FastSimplexNoise = require("fast-simplex-noise").default;
const seedrandom = require("seedrandom");
var fs = require("fs");

class Heightmap extends WorkerAbstract {
  constructor() {
    super();
  }

  process(job) {
    return new Promise(function(resolve, reject) {
      const rng = seedrandom("hello");
      const noiseGen = new FastSimplexNoise({
        frequency: 0.01,
        max: 2550,
        min: 0,
        octaves: 8,
        random: rng
      });
      fs.open("./test.xyz", "w", function(err, file) {
        for (let y = 0; y < 100; y++) {
          for (let x = 0; x < 100; x++) {
            let z = noiseGen.scaled2D(x, y);
            fs.writeSync(file, `${x} ${y} ${z}\n`);
          }
        }

        if (err) throw err;
        console.log("Saved!");
        resolve(job);
        if (job.error) {
          reject("No :(");
        }
      });
    });
  }
}

var heightmap = new Heightmap();
//heightmap.process({ test: "test" });

module.exports = Heightmap;
