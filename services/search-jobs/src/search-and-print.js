const { getBooksPaged } = require("./get-books-paged");

async function searchAndPrintBooks(line = 'developer') {
	const pages = getBooksPaged({query: line});
	const results = []
	
	for await(const page of pages) {
		results.push(page)
	}

	return results;
}

module.exports = { searchAndPrintBooks }