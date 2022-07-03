"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.findFixturesByName = exports.findFixturesByBrand = exports.brandList = exports.fixtureList = exports.Fixtures = void 0;
var fs = require("fs");
var path = require("path");
__exportStar(require("./types"), exports);
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
                    console.warn("Failed to parse JSON file at ".concat(ff));
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