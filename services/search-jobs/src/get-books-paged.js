const { getBooksPage } = require("./get-books-page");

async function* getBooksPaged({query}) {
	const pageSize = 10;
	const lastPageIndex = 5;
	let currentIndex = 1;
	let isDone = false;
	
	while (currentIndex < lastPageIndex && !isDone) {
		
		const pageResults = await getBooksPage({
			query: query,
			page: currentIndex,
			perpage: pageSize
		});
		
		yield pageResults;
		
		if (pageResults.length < pageSize) {
			isDone = true
		} else {
			currentIndex++
		}
		
	}
}

module.exports = { getBooksPaged }