const WorkerAbstract = require("./abstract");
const FastSimplexNoise = require("fast-simplex-noise").default;
const seedrandom = require("seedrandom");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
var fs = require("fs");

class Heightmap extends WorkerAbstract {
  constructor() {
    super();
  }

  async process(job) {
    const config = job.input != "" ? JSON.parse(job.input) : {};
    const rng = seedrandom("hello");
    const xyzFilePath = `/tmp/heightmap-${job.id}.xyz`;
    const noiseGen = new FastSimplexNoise({
      frequency: 0.01,
      max: 2550,
      min: 0,
      octaves: 8,
      random: rng
    });
    let file = await new Promise(function(resolve, reject) {
      fs.open(xyzFilePath, "w", function(err, file) {
        if (err) {
          reject(err);
        }
        resolve(file);
      });
    });

    for (let y = 0; y < 100; y++) {
      for (let x = 0; x < 100; x++) {
        let z = noiseGen.scaled2D(x, y);
        fs.writeSync(file, `${x} ${y} ${z}\n`);
      }
    }

    //CREATE EXTENSION IF NOT EXISTS postgis;
    await exec(
      `raster2pgsql ${xyzFilePath} public.terrain -t 128x128 -l 4 -a -M -F -s 4236 > /tmp/import.sql`
    );
    await exec(`psql -U procgen procgen < /tmp/import.sql`);
    console.log("Saved!");
    return job;
  }
}

var heightmap = new Heightmap();
//heightmap.process({ test: "test" });

module.exports = Heightmap;
