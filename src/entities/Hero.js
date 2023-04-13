import crypto from "node:crypto";

export class Hero {
  constructor({ name, age, power }) {
    this.id = crypto.randomInt(0, 10);
    this.name = name;
    this.age = age;
    this.power = power;
  }

  validate() {
    const propertyNames = Object.getOwnPropertyNames(this);
    const invalidProperties = propertyNames
      .map((item) => (!!this[item] ? null : `${item} is missing!`))
      .filter((item) => !!item);

    return {
      valid: invalidProperties.length === 0,
      error: invalidProperties,
    };
  }
}
