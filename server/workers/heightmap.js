const WorkerAbstract = require("./abstract");

class Heightmap extends WorkerAbstract {
  constructor() {
    super();
  }

  process(job) {
    return new Promise(function(resolve, reject) {
      resolve(job);
      if (job.error) {
        reject("No :(");
      }
    });
  }
}

module.exports = Heightmap;
