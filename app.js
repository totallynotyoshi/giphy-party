//make search request to API
async function searchGif() {
	let searchTerm = $(".search-term").val();
	const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
		params : {
			q       : searchTerm,
			api_key : "cNwwyuh1mMWTbwIEpGbzhJIXvEfsmW62"
		}
	});
	//pick a random result from the response
	let results = response.data.data.length;
	let randomGif = Math.floor(Math.random() * results);
	let $newGif = $("<img>", {
		src : response.data.data[randomGif].images.original.url
	});

	//add result to gif area
	$(".gifs__wrapper").append($newGif);
}

//add gif on search button click
$("form").on("submit", async function(event) {
	event.preventDefault();
	searchGif();
	$(".search-term").val("");
});

//remove all gifs
$(".btn-remove").on("click", function() {
	$(".gifs__wrapper").empty();
});
