const { Router } = require("express");
const router = Router();

const { brands, fixtures } = require("./DataManager");

router.get("/", (req, res) => res.sendStatus(200));

// -------- \\
// Fixtures \\
// -------- \\

router.get("/fixtures/", (req, res) => {
	res.json({
		count: fixtures.length
	});
});

router.get("/fixtures/all", (req, res) => {
	const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 1;
	const page = req.query.page ? parseInt(req.query.page) : 0;

	const data = fixtures.slice(pageSize * page, pageSize * (page + 1));

	res.json({data, meta:{}});
});

// ------ \\
// Brands \\
// ------ \\

router.get("/brands/", (req, res) => {
	res.json({
		count: brands.length
	});
});

router.get("/brands/all", (req, res) => {
	const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 1;
	const page = req.query.page ? parseInt(req.query.page) : 0;

	const data = brands.slice(pageSize * page, pageSize * (page + 1));

	res.json({data, meta:{}});
});

module.exports = router;
