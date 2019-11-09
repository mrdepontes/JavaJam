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
			perpage: pageSize,
			headers : { 
				'Authorization-Key': process.env.API_URL,
				'User-Agent': process.env.API_URL,
				'Host': process.env.HOST
			}
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