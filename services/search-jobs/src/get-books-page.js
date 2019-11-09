const request = require('request-promise-native');

async function getBooksPage({ query, page, perpage, headers }) {
	const { listings } = await request({
		method: 'GET',
		url: `${process.env.API_URL}?api_key=${process.env.API_KEY}&format=json`,
		json: true,
		qs: {
			keywords: query,
			page: page,
			perpage: perpage,
			method: 'aj.jobs.search'
		},
		headers: headers
	});
	
	const mapEssentialInfo = ( listing ) => ({
		title: listing.title,
		apply_url: listing.apply_url,
		date: new Date(listing.post_date).toISOString().slice(0,10)
	});
	
	return listings.listing.map(mapEssentialInfo);
}

module.exports = { getBooksPage }