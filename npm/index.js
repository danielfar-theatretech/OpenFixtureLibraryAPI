const fs = require("fs");
const path = require("path");

const fixturesObj = {};

const fixtures = []
const brands = [];

const brandDir = fs.readdirSync(path.join(__dirname, "..", "data"));
brandDir.forEach((dir) => {
	fixturesObj[dir] = {};
	if (dir.endsWith(".brand.json")) {
        const brandFile = require(path.join(__dirname, "..", "data", dir));
        brands.push(brandFile);
	} else {
		const fixtureFile = fs.readdirSync(path.join(__dirname, "..", "data", dir));
		fixtureFile.forEach((ff) => {
			if (ff.endsWith(".fixture.json")) {
				try {
					const fixture = require(path.join(__dirname, "..", "data", dir, ff));
                    fixturesObj[dir][fixture.name] = fixture;
                    fixtures.push(fixture);
				} catch (e) {
					console.warn(`Failed to parse JSON file at ${ff}`);
				}
			}
		});
	}
});

module.exports.Fixtures = fixturesObj;
module.exports.fixtureList = fixtures;
module.exports.brandList = brands;

module.exports.findFixturesByBrand = (brandName) => {
	return fixtures.filter((elt) => elt.brand == brandName);
};

module.exports.findFixturesByName = (fixtureName) => {
    return fixtures.filter((elt) => elt.name == fixtureName);
};