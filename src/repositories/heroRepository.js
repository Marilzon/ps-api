const { readFile, writeFile } = require("fs").promises;

class HeroRepository {
  constructor({ file }) {
    this.file = file;
  }

  async _currentFileContent() {
    const fileContent = await readFile(this.file);
    return JSON.parse(fileContent.toString());
  }

  async find(itemId) {
    const all = await this._currentFileContent();

    if (itemId) {
      return all.find(({ id }) => itemId === id);
    }

    return all;
  }

  async create(data) {
    const currentFile = await this._currentFileContent();
    currentFile.push(data);

    writeFile(this.file, JSON.stringify(currentFile));

    return data.id;
  }
}

module.exports = HeroRepository;
