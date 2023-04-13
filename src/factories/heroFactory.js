import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { HeroRepository } from "../repositories/HeroRepository.js";
import { HeroService } from "../services/HeroService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = join(__dirname, "../../database", "data.json");

export const generateInstance = function () {
  const heroRepository = new HeroRepository({
    file: filename,
  });

  const heroService = new HeroService({
    heroRepository,
  });

  return heroService;
};

