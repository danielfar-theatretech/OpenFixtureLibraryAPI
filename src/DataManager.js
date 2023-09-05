const path = require("path");
const fs = require("fs/promises");

let isLoading = true;
module.exports.isLoading = isLoading;

const brands = [];
module.exports.brands = brands;
const fixtures = [];
module.exports.fixtures = fixtures;

module.exports.init = async () => {
	const baseDir = path.join(__dirname, "..", "data");
	const brandDirs = [];

    const fixtureContainerDirs = [];
	const fixtureDirs = [];

	(await fs.readdir(baseDir)).forEach((dir) =>
		dir.endsWith(".brand.json") ? brandDirs.push(path.join(baseDir, dir)) : fixtureContainerDirs.push(path.join(baseDir, dir))
	);

	await Promise.all(
		brandDirs.map(async (dir) => {
			const data = await fs.readFile(dir);
			brands.push(JSON.parse(data.toString()));
		})
	);

	await Promise.all(
		fixtureContainerDirs.map(async (fdir) =>
			(
				await fs.readdir(fdir)
			).forEach((dir) =>
				dir.endsWith(".fixture.json") ? fixtureDirs.push(path.join(fdir, dir)) : console.log(`Unknown Dir ${dir}`)
			)
		)
	);

	await Promise.all(
		fixtureDirs.map(async (dir) => {
			const data = await fs.readFile(dir);
			fixtures.push(JSON.parse(data.toString()));
		})
	);

    fixtures.sort((a, b) => (a.name > b.name) ? 1 : -1)
    brands.sort((a, b) => (a.name > b.name) ? 1 : -1)

    isLoading = false;
};
