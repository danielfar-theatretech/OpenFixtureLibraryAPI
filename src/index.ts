import * as fs from "fs";
import * as path from "path";

import {Profile, Brand} from "./types";

const fixturesObj: { [key: string]: { [key: string]: Profile; }; } = {};

const fixtures: Profile[] = []
const brands: Brand[] = [];

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

export const Fixtures = fixturesObj;
export const fixtureList = fixtures;
export const brandList = brands;

export const findFixturesByBrand = (brandName: string): Profile[] => {
	return fixtures.filter((elt) => elt.brand == brandName);
};

export const findFixturesByName = (fixtureName: string): Profile[] => {
    return fixtures.filter((elt) => elt.name == fixtureName);
};