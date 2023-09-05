const OpenFixtureLibrary = require("../out/"); // only used so this is a working example
// const OpenFixtureLibrary = require("openfixturelibrary"); // use this in your project

console.log(OpenFixtureLibrary.findFixturesByBrand("Generic"))
console.log(OpenFixtureLibrary.findFixturesByBrand("Equinox"))
console.log(OpenFixtureLibrary.findFixturesByBrand("NotARealBrand"))

console.log(OpenFixtureLibrary.findFixturesByName("Dimmer"))
