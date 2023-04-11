const HeroRepository = require("../repositories/heroRepository");
const HeroService = require("../services/heroService");

const { join } = require("node:path");
const filename = join(__dirname, "../../database", "data.json");

const generateInstance = function () {
  const heroRepository = new HeroRepository({
    file: filename,
  });

  const heroService = new HeroService({
    heroRepository,
  });

  return heroService;
};

module.exports = { generateInstance };

generateInstance().find().then(console.log);