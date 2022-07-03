"use strict";
exports.__esModule = true;
exports.findFixturesByName = exports.findFixturesByBrand = exports.brandList = exports.fixtureList = exports.Fixtures = void 0;
var fs = require("fs");
var path = require("path");
var fixturesObj = {};
var fixtures = [];
var brands = [];
var brandDir = fs.readdirSync(path.join(__dirname, "..", "data"));
brandDir.forEach(function (dir) {
    fixturesObj[dir] = {};
    if (dir.endsWith(".brand.json")) {
        var brandFile = require(path.join(__dirname, "..", "data", dir));
        brands.push(brandFile);
    }
    else {
        var fixtureFile = fs.readdirSync(path.join(__dirname, "..", "data", dir));
        fixtureFile.forEach(function (ff) {
            if (ff.endsWith(".fixture.json")) {
                try {
                    var fixture = require(path.join(__dirname, "..", "data", dir, ff));
                    fixturesObj[dir][fixture.name] = fixture;
                    fixtures.push(fixture);
                }
                catch (e) {
                    console.warn("Failed to parse JSON file at " + ff);
                }
            }
        });
    }
});
exports.Fixtures = fixturesObj;
exports.fixtureList = fixtures;
exports.brandList = brands;
var findFixturesByBrand = function (brandName) {
    return fixtures.filter(function (elt) { return elt.brand == brandName; });
};
exports.findFixturesByBrand = findFixturesByBrand;
var findFixturesByName = function (fixtureName) {
    return fixtures.filter(function (elt) { return elt.name == fixtureName; });
};
exports.findFixturesByName = findFixturesByName;
//# sourceMappingURL=index.js.map